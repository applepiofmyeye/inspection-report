interface Criteria {
    name: string;
}

export const createCriteriaBatch = async (criteriaArray : Criteria[]) => {
  const response = await fetch("http://joey-api.vucar.vn/criteria/batch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ criteriaArray }),
  });
  
  if (!response.ok) {
    throw new Error("Failed to create criteria batch");
  }
  
  return response.json();
}