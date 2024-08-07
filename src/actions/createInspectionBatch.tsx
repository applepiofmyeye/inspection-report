interface Inspection {
  car: string;
  status: "pending" | "approved" | "rejected";
  date: string;
  location: string;
}

export const createInspectionBatch = async (inspectionArray: Inspection[]) => {
  const response = await fetch("http://localhost:3000/inspections/batch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inspectionArray }),
  });

  if (!response.ok) {
    throw new Error("Failed to create inspection batch");
  }

  return response.json();
};
