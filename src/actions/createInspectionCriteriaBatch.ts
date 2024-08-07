import { CriteriaByInspection } from "../types/criteria";

export const getAndCreateInspectionCriteriaBatch = async (criteriaByInspectionArray: CriteriaByInspection[], inspectionId: string) => {
  // First, check if criteria for this inspection already exist
  const checkResponse = await fetch(`http://localhost:3000/criteria_by_inspection/inspection/${inspectionId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (checkResponse.ok) {
    const existingCriteria = await checkResponse.json();
    if (existingCriteria && existingCriteria.length > 0) {
      // Criteria already exist for this inspection
      return existingCriteria;
    }
  }

  // If no criteria exist or the check failed, proceed with creating new criteria
  const createResponse = await fetch(`http://localhost:3000/criteria_by_inspection/inspection/${inspectionId}/batch`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ criteriaByInspectionArray }),
  });

  if (!createResponse.ok) {
    throw new Error("Failed to create criteria by inspection batch");
  }

  return createResponse.json();
};