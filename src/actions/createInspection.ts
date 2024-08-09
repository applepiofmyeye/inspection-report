export const createInspection = async (date: string, car: string, status: string) => {
    try {
      const response = await fetch("http://localhost:8084/inspections", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date, car, status }),
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