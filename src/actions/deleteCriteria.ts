import { serverEndpoint } from "../backendEndpoint";

export const deleteCriteria = async ({id}: { id: string }) => {
    try {
      const response = await fetch(`${serverEndpoint}/criteria/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to create criteria");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error creating criteria:", error.message);
      }
    }}