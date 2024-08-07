"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import { TableCell, TableRow } from "../../components/ui/table";
import { InspectionRow } from "../../types/inspection";

export function TableRowSheet({ inspection }: { inspection: InspectionRow }) {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <TableRow key={inspection.id} onClick={onClick}>
          <TableCell className="font-medium">{inspection.id}</TableCell>
          <TableCell>{inspection.status}</TableCell>
          <TableCell>{inspection.car}</TableCell>
          <TableCell className="text-right">{inspection.date}</TableCell>
        </TableRow>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{inspection.car}</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        {/* 
        title: get from inspection (car details)
        inspection date, time location: get from inspection


        criterias: fetch from api <suspense>
        */}
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="../..peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
