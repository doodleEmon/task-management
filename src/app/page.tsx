import TaskTable from "@/features/tasks/components/TaskTable";

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tasks data",
  description: "View and manage all task.",
};

export default function Home() {
  return (
    <div>
      <TaskTable />
    </div>
  );
}
