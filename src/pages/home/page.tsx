import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

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

export default function HomePage() {
  return (
    <div className="py-4 pt-32 px-20 space-y-4">
      <h1 className="text-4xl font-bold">inspection home page</h1>
      <SelectStatus />
      <InspectionTable />
    </div>
  );
}

function SelectStatus() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectSeparator />
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

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
