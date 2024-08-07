import { useMutation } from "@tanstack/react-query";
import { CHECK_LIST } from "../constants/checklist";
import { getAndCreateInspectionCriteriaBatch } from "../actions/createInspectionCriteriaBatch";

export const useSeedCriteriaByInspection = (inspectionId: string) => useMutation({
    mutationFn: async () => {
        console.log("Seeding criteria...");
        let criteriaData = [];
        for (const criteria of CHECK_LIST) {
            criteriaData.push({
                criteriaId: criteria.id,
                inspectionId: inspectionId,
                score: 0,
                notes: "",
            })
        }
        return await getAndCreateInspectionCriteriaBatch(criteriaData, inspectionId);
    },
    onSuccess: () => { console.log("Successfully seeded criteria") },
    onError: (error) => { console.error("Error seeding criteria:", error) },
});