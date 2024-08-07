import { useMutation } from "@tanstack/react-query";
import { inspectionSeed } from "../constants/inspectionSeed";
import { createInspectionBatch } from "../actions/createInspectionBatch";
import dayjs from "dayjs";

export const useSeedInspection = () =>
  useMutation({
    mutationFn: async () => {
      console.log("Seeding inspection...");
      let inspectionData = [];
      for (const inspection of inspectionSeed) {
        inspectionData.push({
          status: inspection.status,
          car: inspection.car,
          date: dayjs(inspection.date).format("DD-MM-YYYY"),
          location: inspection.location,
        });
      }
      return await createInspectionBatch(inspectionData);
    },
    onSuccess: () => {
      console.log("Successfully seeded criteria");
    },
    onError: (error) => {
      console.error("Error seeding criteria:", error);
    },
  });
