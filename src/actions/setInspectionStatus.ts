

export const setInspectionStatus = async (inspectionId : string, status: string) => {
  const response = await fetch("http://localhost:3000/inspections/" + inspectionId , {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({       
        status,  
        inspectionId
    }),
  });
  
  if (!response.ok) {
    throw new Error("Failed to create criteria batch");
  }
  
  
  return response.json();
}