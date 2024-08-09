import { useMutation } from "@tanstack/react-query";

import { createInspection } from "../actions/createInspection";

interface Inspection {
    date: string;
    car: string;
    status: string;
}

export const useCreateInspection = () => useMutation<void, unknown, Inspection>({
    mutationFn: async ({ date, car, status }: Inspection) => {
        return await createInspection(date, car, status);
    },
    onSuccess: () => { console.log("Successfully seeded criteria") },
    onError: (error) => { console.error("Error seeding criteria:", error) },
});