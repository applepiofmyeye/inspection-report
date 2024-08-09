import { useMutation } from "@tanstack/react-query";
import { createCriteriaBatch } from "../actions/createCriteriaBatch";
import { CHECK_LIST } from "../constants/checklist";

export const useSeedCriteria = () => useMutation({
    mutationFn: async () => {
        let criteriaData = [];
        for (const criteria of CHECK_LIST) {
            criteriaData.push({
                name: criteria.title,
            })
        }
        return await createCriteriaBatch(criteriaData);
    },
    onSuccess: () => { console.log("Successfully seeded criteria") },
    onError: (error) => { console.error("Error seeding criteria:", error) },
});