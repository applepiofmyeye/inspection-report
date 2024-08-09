import { useQuery } from "@tanstack/react-query";
import { getInspections } from "../actions/getInspections";

export const useGetInspections = (status?: string) => useQuery({
    queryKey: ["inspections"],
    queryFn: async () => {
        return await getInspections(status);
    },
});