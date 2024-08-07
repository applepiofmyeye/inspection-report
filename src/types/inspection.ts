export interface InspectionRow {
    id: string;
    car: string; // brand, model, year
    status: "pending" | "approved" | "rejected";
    date: string;
    location: string;
  }