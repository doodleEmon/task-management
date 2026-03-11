import { api } from "@/lib/axios";
import { Task } from "../types";

export const fetchTasks = async (): Promise<Task[]> => {
    const res = await api.get("/posts");
    return res.data;
};

export const createTask = async (task: Partial<Task>) => {
    const res = await api.post("/posts", task);
    return res.data;
};

export const updateTask = async ({ id, data }: { id: number; data: Partial<Task> }) => {
    const res = await api.put(`/posts/${id}`, data);
    return res.data;
};

export const deleteTask = async (id: number) => {
    await api.delete(`/posts/${id}`);
    return id;
};