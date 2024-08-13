import { useMutation } from "@tanstack/react-query"

export const useDeleteCriteria = () =>useMutation({
    mutationFn: async ({ id }: { id: string }) => {
        
        return await fetch("http://joey-api.vucar.vn/criteria/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    },
    onSuccess: () => { console.log("Successfully deleted criteria") },
    onError: (error) => { console.error("Error deleting criteria:", error) },
});