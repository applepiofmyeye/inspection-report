import { useMutation } from "@tanstack/react-query";
import { setInspectionStatus } from "../actions/setInspectionStatus";

interface SetInspectionStatusParams {
    inspectionId: string;
    status: "approved" | "rejected" | "pending";
}

export const useSetInspectionStatus = () => useMutation<void, unknown, SetInspectionStatusParams>({
    mutationFn: async ({ inspectionId, status }: SetInspectionStatusParams) => {
        return await setInspectionStatus(inspectionId, status);
    },
    onSuccess: () => { console.log("Successfully set inspection status") },
    onError: (error) => { console.error("Error setting inspection status:", error) },
});