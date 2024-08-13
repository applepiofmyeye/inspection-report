export const createCar =  async () => {
    try {
      const response = await fetch("http://joey-api.vucar.vn/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          brand: "Toyota",
          model: "Corolla",
          year: 2022,
          mileage: 5000,
        }),
      });
  
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to create car");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error creating car:", error.message);
      }
    }}