

export const setCriteriaByInspection = async (criteriaId : string, inspectionId : string, score : number) => {
  const response = await fetch("http://joey-api.vucar.vn/criteria_by_inspection/inspection/" + inspectionId , {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        criteriaId,         
        score,  
    }),
  });
  
  if (!response.ok) {
    throw new Error("Failed to create criteria batch");
  }
  
  
  return response.json();
}