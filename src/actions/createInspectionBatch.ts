import { InspectionFromDb } from "../types/inspection";


export const createInspectionBatch = async (inspections: InspectionFromDb[]) => {
    try {
      const response = await fetch("http://localhost:8084/inspections/batch", {
    method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inspectionArray: inspections,
        })
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