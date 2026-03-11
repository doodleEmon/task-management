import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTask } from "../api/taskApi";
import { toast } from "sonner";

export const useUpdateTask = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateTask,

        onMutate: async ({ id, data }) => {
            await queryClient.cancelQueries({ queryKey: ["tasks"] });

            const previousTasks = queryClient.getQueryData(["tasks"]);

            queryClient.setQueryData(["tasks"], (old: any) =>
                old.map((t: any) =>
                    t.id === id ? { ...t, ...data } : t
                )
            );

            return { previousTasks };
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] });

            toast.success("Task updated successfully");
        },

        onError: (_err, _variables, context) => {
            queryClient.setQueryData(["tasks"], context?.previousTasks);
            toast.error("Failed to update task");
        },

        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
    });
};