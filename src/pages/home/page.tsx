import SelectStatus from "./selectStatus";
import { InspectionTable } from "./inspectionTable";
import { Button } from "../../components/ui/button";
import { useSeedInspection } from "../../hooks/useSeedInspection";
import { useSeedCriteria } from "../../hooks/useSeedCriteria";

export default function HomePage() {
  return (
    <div className="py-4 pt-32 px-20 space-y-4">
      <h1 className="text-4xl font-bold">inspection home page</h1>
      <SelectStatus />
      <InspectionTable />
    </div>
  );
}
