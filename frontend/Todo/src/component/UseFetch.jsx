
import {
    useMutation,
    useQuery,
    useQueryClient
} from "@tanstack/react-query";

// GET API
const getApi = async () => {
    const response = await fetch("http://localhost:3000/tasks");

    if (!response.ok) {
        throw new Error("Failed to fetch tasks");
    }

    const result = await response.json();
    return result.tasks || [];
};

// POST API
const postApi = async (task) => {
    const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    });

    if (!response.ok) {
        throw new Error("Failed to create task");
    }

    return response.json();
};

// PUT API
const putApi = async ({ id, ...updateData }) => {
    const response = await fetch(
        `http://localhost:3000/tasks/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateData)
        }
    );

    if (!response.ok) {
        throw new Error("Failed to update task");
    }

    return response.json();
};

// DELETE API
const deleteApi = async (id) => {
    const response = await fetch(
        `http://localhost:3000/tasks/${id}`,
        {
            method: "DELETE"
        }
    );

    if (!response.ok) {
        throw new Error("Failed to delete task");
    }

    return response.json();
};

// GET Hook
export const UseFetch = () => {
    const {
        data,
        isPending,
        isError,
        error,
        isFetching
    } = useQuery({
        queryKey: ["tasks"],
        queryFn: getApi
    });

    return {
        data,
        isPending,
        isError,
        error,
        isFetching
    };
};

// POST Hook
export const UseCreate = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: postApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["tasks"]
            });
        }
    });
};

// PUT Hook
export const UseUpdate = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: putApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["tasks"]
            });
        }
    });
};

// DELETE Hook
export const UseDelete = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["tasks"]
            });
        }
    });
};

