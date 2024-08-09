import { useMutation } from "@tanstack/react-query";
import { inspectionSeed } from "../constants/inspectionSeed";
import { createInspectionBatch } from "../actions/createInspectionBatch";

export const useSeedInspections = () => useMutation({
    mutationFn: async () => {
        return await createInspectionBatch(inspectionSeed);
    },
    onSuccess: () => { console.log("Successfully seeded criteria") },
    onError: (error) => { console.error("Error seeding criteria:", error) },
});