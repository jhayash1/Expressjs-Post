import { UseFetch } from './UseFetch';

export const Read = () => {
    const{ isPending, error, data, isFetching} = UseFetch()


    if (isPending)  return <p>Loading tasks...</p>;

    if (error) {
        return <p>{error}</p>;
    }

    if (data.length === 0) {
        return <p>No tasks found!</p>;
    }

    return (
        <div>
            <h2>My Tasks</h2>
            {data.map((item) => (
                <div key={item._id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>
                        Status: {item.completed ? "Completed" : "Pending"}
                    </p>
                </div>
            ))}
        </div>
    );
};