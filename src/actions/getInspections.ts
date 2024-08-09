export const getInspections = async (status?: string) => {
    try {
      const response = await fetch(`http://localhost:3000/inspections/${status ?? ""}`, { 
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
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