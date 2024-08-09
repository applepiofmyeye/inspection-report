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
import * as z from "zod";

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { TableRowSheet } from "./tableRowSheet";
import { useGetInspections } from "../../hooks/useGetInspections";
import { InspectionFromDb } from "../../types/inspection";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group";
import { Label } from "../../components/ui/label";
import { useCreateInspection } from "../../hooks/useCreateInspection";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState, useTransition } from "react";
import { Trash } from "lucide-react";

export default function HomePage() {
  return (
    <div className="py-4 pt-32 px-20 space-y-4">
      <h1 className="text-4xl font-bold">inspection home page</h1>
      <div className="w-full flex justify-between">
        <SelectStatus />
        <AddInspectionDialog />
      </div>

      <InspectionTable />
    </div>
  );
}

function SelectStatus() {
  // const navigator = useNavigate();
  // const onChange = (value: string) => {
  //   navigator(process.env.PUBLIC_URL + "/?status=" + value);
  // };
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState<string | undefined>(
    searchParams.get("status") ?? undefined
  );
  const onChange = (status: string) => {
    setStatus(status);
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("status", status);
      return newParams;
    });
  };

  const onClear = () => {
    setStatus(undefined);
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.delete("status");
      return newParams;
    });
  };
  return (
    <div className="flex gap-2">
      <Select onValueChange={onChange} value={status}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Status</SelectLabel>
            <SelectSeparator />
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button variant={"ghost"} onClick={() => onClear()}>
        <Trash className="w-4 h-4" />
      </Button>
    </div>
  );
}

export function InspectionTable() {
  const [searchParams, setSearchParams] = useSearchParams();

  const status = searchParams.get("status");

  const { data: inspections, refetch } = useGetInspections(
    status?.toLowerCase() ?? undefined
  );

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <Table>
      <TableCaption>A list of your recent inspections.</TableCaption>
      <TableHeader>
        <TableRow className="bg-blue-100 hover:bg-blue-200">
          <TableHead className="w-[180px] text-blue-950">Date</TableHead>
          <TableHead className="text-blue-950">Car</TableHead>
          <TableHead className="text-right text-blue-950">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {inspections &&
          inspections.map((inspection: InspectionFromDb) => (
            <TableRowSheet key={inspection.id} inspection={inspection} />
          ))}
      </TableBody>
    </Table>
  );
}

function AddInspectionDialog() {
  const { mutate: createInspection } = useCreateInspection();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const formSchema = z.object({
    date: z.string().min(1),
    car: z.string().min(1),
    status: z.enum(["approved", "pending", "rejected"]),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: "",
      car: "",
      status: "approved",
    },
  });
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    startTransition(() => {
      createInspection(data);
      setOpen(false);
    });
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Inspection</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Inspection</DialogTitle>
          <DialogDescription>
            <p className="text-sm">
              Enter the details of the inspection you want to add.
            </p>
          </DialogDescription>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col space-y-5"
            >
              <FormField
                control={form.control}
                name="car"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Car Brand and Model</FormLabel>
                    <FormControl>
                      <Input placeholder="BMW T5" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your car brand and model.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input placeholder="DD-MM-YYYY" {...field} />
                    </FormControl>
                    <FormDescription>
                      Please enter the date in the format DD-MM-YYYY.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <ToggleGroup
                        type="single"
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <ToggleGroupItem
                          value="approved"
                          className="rounded-full"
                        >
                          <Label>Approve</Label>
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="pending"
                          className="rounded-full"
                        >
                          <Label>Pending</Label>
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="rejected"
                          className="rounded-full"
                        >
                          <Label>Reject</Label>
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Add Inspection</Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
