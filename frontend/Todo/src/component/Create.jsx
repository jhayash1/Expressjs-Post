import React from 'react'
import { UseCreate } from './UseFetch';

export const Create = () => {
  const createMutation = UseCreate();
  const handleSubmit = () => {
    createMutation.mutate({
      title: "Learn React Query",
      description: "Practice POST API",
    });
  }
  return (
    <div>  <button onClick={handleSubmit} disabled={createMutation.isPending}>
        {createMutation.isPending ? "Creating..." : "Create Task"}
      </button>

      {createMutation.isError && <p>{createMutation.error.message}</p>}

      {createMutation.isSuccess && <p>Task created successfully!</p>}</div>
  )
}
