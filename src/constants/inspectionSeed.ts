import { InspectionFromDb } from "../types/inspection";

export const inspectionSeed: InspectionFromDb[] = [
    {
      id: "INV001",
      status: "approved",
      car: "BMW X5",
      date: "01-12-2023",
      location: "New York, NY",
    },
    {
      id: "INV002",
      status: "pending",
      car: "Toyota Camry",
      date: "02-09-2023",
      location: "New York, NY",
    },
    {
      id: "INV003",
      status: "rejected",
      car: "Tesla Model 3",
      date: "03-01-2024",
      location: "San Francisco, CA",
    },
    {
      id: "INV004",
      status: "approved",
      car: "BMW T5",
      date: "24-04-2024",
      location: "New York, NY",
    },
    {
      id: "INV005",
      status: "approved",
      car: "Mercedes-Benz C-Class",
      date: "12-05-2023",
      location: "New York, NY",
    },
    {
      id: "INV006",
      status: "pending",
      car: "Toyota Corolla",
      date: "13-06-2023",
      location: "San Francisco, CA",
    },
    {
      id: "INV007",
      status: "rejected",
      car: "Chevrolet Camaro",
      date: "14-07-2024",
      location: "Los Angeles, CA",
    },
  ];