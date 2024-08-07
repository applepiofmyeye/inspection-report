import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { TableRowSheet } from "./tableRowSheet";
import { inspectionSeed } from "../../constants/inspectionSeed";
export function InspectionTable() {
  return (
    <Table>
      <TableCaption>A list of your recent inspections.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Inspection ID</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Car</TableHead>
          <TableHead className="text-right">Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {inspectionSeed.map((inspection) => (
          <TableRowSheet key={inspection.id} inspection={inspection} />
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
