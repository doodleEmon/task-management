import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "../api/taskApi";

export const useTasks = () => {
    return useQuery({
        queryKey: ["tasks"],
        queryFn: fetchTasks,
    });
};