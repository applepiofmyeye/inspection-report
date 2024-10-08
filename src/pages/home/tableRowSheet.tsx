"use client";

import { useState, useTransition } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import { TableCell, TableRow } from "../../components/ui/table";

import { useEffect } from "react";
import { Skeleton } from "../../components/ui/skeleton";
import { CriteriaByInspection } from "../../types/criteria";
import { InspectionFromDb } from "../../types/inspection";

import { setCriteriaByInspection } from "../../actions/setCriteriaByInspection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Badge } from "../../components/ui/badge";
import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { ScrollArea } from "../../components/ui/scroll-area";
import { useSeedCriteriaByInspection } from "../../hooks/useSeedCriteriaByInspection";
import { camelCaseToTitleCase } from "../../lib/camelCaseToTitleCase";

import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group";
import { useSetInspectionStatus } from "../../hooks/useSetInspectionStatus";

export function ToggleStatusGroup({
  inspection,
}: {
  inspection: InspectionFromDb;
}) {
  const [value, setValue] = useState<"approved" | "rejected" | "pending">(
    inspection.status
  );
  const { mutate: setInspectionStatus } = useSetInspectionStatus();
  return (
    <ToggleGroup
      type="single"
      size={"sm"}
      variant={"outline"}
      value={value}
      onValueChange={(value: "approved" | "rejected" | "pending") => {
        setInspectionStatus({ inspectionId: inspection.id, status: value }); // todo: take in value and insperction id
        setValue(value);
      }}
    >
      <ToggleGroupItem value="approved" className="rounded-full">
        <Label>Approve</Label>
      </ToggleGroupItem>
      <ToggleGroupItem value="pending" className="rounded-full">
        <Label>Pending</Label>
      </ToggleGroupItem>
      <ToggleGroupItem value="rejected" className="rounded-full">
        <Label>Reject</Label>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export function TableRowSheet({
  inspection,
}: {
  inspection: InspectionFromDb;
}) {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <TableRow key={inspection.id} onClick={onClick}>
          <TableCell className="font-light text-xs">
            {inspection.date}
          </TableCell>
          <TableCell className="font-semibold">{inspection.car}</TableCell>
          <TableCell className="text-right">
            <Badge
              className={`${
                inspection.status === "approved"
                  ? "bg-green-200"
                  : inspection.status === "rejected"
                  ? "bg-red-200"
                  : "bg-orange-200"
              }`}
              variant={"secondary"}
            >
              {camelCaseToTitleCase(inspection.status)}
            </Badge>
          </TableCell>
        </TableRow>
      </SheetTrigger>
      <SheetContent className="md:w-20vw">
        <SheetHeader>
          <SheetTitle>{inspection.car}</SheetTitle>
          <SheetDescription className="pb-4">
            <p className="text-xs">{inspection.date}</p>
            <p className="text-xs">{inspection.location}</p>
          </SheetDescription>
          <ToggleStatusGroup inspection={inspection} />
        </SheetHeader>
        {/* 
        title: get from inspection (car details)
        inspection date, time location: get from inspection


        criterias: fetch from api <suspense>
        */}
        <InspectionSheetContent inspection={inspection} />
      </SheetContent>
    </Sheet>
  );
}

export default function InspectionSheetContent({
  inspection,
}: {
  inspection: InspectionFromDb;
}) {
  const {
    mutate: seedInspection,
    data: inspectionCriteria,
    isPending,
  } = useSeedCriteriaByInspection(inspection.id);

  useEffect(() => {
    if (inspectionCriteria === undefined) {
      seedInspection();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inspectionCriteria]);
  return (
    <ScrollArea className="h-full">
      {isPending && <Skeleton className="h-20 w-full" />}
      {inspectionCriteria && !isPending && (
        <div className="flex-grow flex flex-col">
          <div className="pr-4">
            {inspectionCriteria.map(
              (inspectionCriteria: CriteriaByInspection) => (
                <AccordionCriteriaItem
                  inspectionCriteria={inspectionCriteria}
                />
              )
            )}
          </div>
        </div>
      )}
    </ScrollArea>
  );
}

function AccordionCriteriaItem({
  inspectionCriteria,
}: {
  inspectionCriteria: CriteriaByInspection;
}) {
  const [score, setScore] = useState(inspectionCriteria.score.toString());
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();
  const updateScore = (score: number) => {
    startTransition(() => {
      setScore(score.toString());
      setCriteriaByInspection(
        inspectionCriteria.criteriaId,
        inspectionCriteria.inspectionId,
        score
      )
        .then(() => {})
        .catch((error) => {
          // Handle any errors here
          console.error("Error updating score:", error);
        });
    });
  };
  return (
    <Accordion type="single" collapsible className={"w-full"}>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          {Number(score) < 2 ? (
            <Badge className="bg-red-200 size-2 rounded-full p-0" />
          ) : (
            <Badge className="bg-green-200 size-2 rounded-full p-0" />
          )}
          {camelCaseToTitleCase(inspectionCriteria.criteriaId)}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col ">
          <RadioGroup
            defaultValue={inspectionCriteria.score.toString()}
            value={score}
            onValueChange={(value) => {
              setScore(value);
              updateScore(Number(value));
            }}
            className="flex space-x-4 align-center justify-center w-full"
          >
            <div className="flex items-center space-x-2 text-sm">
              <RadioGroupItem value="0" />
              <Label>0</Label>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <RadioGroupItem value="1" />
              <Label>1</Label>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <RadioGroupItem value="2" />
              <Label>2</Label>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <RadioGroupItem value="3" />
              <Label>3</Label>
            </div>
          </RadioGroup>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
