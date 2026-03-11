'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "../../../components/ui/button";
import { useTasks } from "../hooks/useTasks";
import Loading from "./Loading";
import { Edit, Trash } from "lucide-react";
import TaskDetailsDialog from "./TaskDetailsDialog";

export default function TaskTable() {
  const { data, isLoading, error } = useTasks();

  if (isLoading) return <Loading />;
  if (error) return <p>Error loading tasks</p>;

  return (
    <div className="p-4">
      <Button variant="outline" size="lg" className="cursor-pointer">+ Add task</Button>
      <Table className="mt-10 table-fixed w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[10%] pl-4 pr-2">Task Id</TableHead>
            <TableHead className="w-[20%] px-2">Task title</TableHead>
            <TableHead className="w-[50%] pl-10 pr-2">Task body</TableHead>
            <TableHead className="w-[20%] pl-12">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.slice(0, 12).map((task) => (
            <TableRow key={task.id}>
              <TableCell className="w-[10%] pl-4 pr-2 truncate">{task.id}</TableCell>
              <TableCell className="w-[20%] px-2 truncate">
                <TaskDetailsDialog task={task}>
                  <span>{task.title}</span>
                </TaskDetailsDialog>
              </TableCell>
              <TableCell className="w-[50%] pl-10 pr-2 truncate">{task.body}</TableCell>
              <TableCell className="w-[20%] pl-12">
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}