'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useTasks } from "../hooks/useTasks";
import Loading from "./Loading";
import { Edit, Trash } from "lucide-react";
import TaskDetailsDialog from "./TaskDetailsDialog";
import CreateTaskDialog from "./CreateTaskDialog"
import EditTaskDialog from "./EditTaskDialog"
import DeleteTaskDialog from "./DeleteTaskDialog"

export default function TaskTable() {
  const { data, isLoading, error } = useTasks();

  if (isLoading) return <Loading />;
  if (error) return <p>Error loading tasks</p>;

  return (
    <div className="p-4 lg:p-6">
      <CreateTaskDialog />
      <Table className="mt-10 table-fixed w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[10%] px-2 text-gray-400">Id</TableHead>
            <TableHead className="w-[20%] px-2 text-gray-400">Task title</TableHead>
            <TableHead className="w-[50%] pl-10 pr-2 text-gray-400">Task body</TableHead>
            <TableHead className="w-[20%] pl-12 text-gray-400">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((task) => (
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
                  <EditTaskDialog task={task}>
                      <Edit className="h-4 w-4" />
                  </EditTaskDialog>
                  <DeleteTaskDialog id={task.id}>
                      <Trash className="h-4 w-4 text-red-500" />
                  </DeleteTaskDialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}