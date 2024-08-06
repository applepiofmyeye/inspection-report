import { useMutation } from "@tanstack/react-query"

export const useDeleteCriteria = useMutation({
    mutationFn: async ({ id }: { id: string }) => {
        console.log("Deleting criteria...");
        
        return await fetch("http://localhost:3000/criteria/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    },
    onSuccess: () => { console.log("Successfully deleted criteria") },
    onError: (error) => { console.error("Error deleting criteria:", error) },
});