import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "../api/taskApi";
import { toast } from "sonner";

export const useDeleteTask = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteTask,

        onMutate: async (id: number) => {
            await queryClient.cancelQueries({ queryKey: ["tasks"] });

            const previous = queryClient.getQueryData(["tasks"]);

            queryClient.setQueryData(["tasks"], (old: any) =>
                old.filter((task: any) => task.id !== id)
            );

            return { previous };
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] });

            toast.success("Task deleted successfully");
        },

        onError: (_, __, context) => {
            queryClient.setQueryData(["tasks"], context?.previous);

            toast.error("Failed to delete task");
        },

        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
    });
};