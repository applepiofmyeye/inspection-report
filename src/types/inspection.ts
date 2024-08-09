export interface InspectionFromDb {
    id: string;
    car: string; // brand, model, year
    status: "pending" | "approved" | "rejected";
    date: string;
    location: string;
  }
export interface InspectionFromForm {
    car: string; // brand, model, year
    status: "pending" | "approved" | "rejected";
    date: string;
  }