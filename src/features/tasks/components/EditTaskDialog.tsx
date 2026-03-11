'use client'

import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useUpdateTask } from "../hooks/useUpdateTask"

export default function EditTaskDialog({ task, children }: any) {
    const { mutate, isPending } = useUpdateTask();

    const [open, setOpen] = useState<boolean>(false);
    const [title, setTitle] = useState(task.title);
    const [body, setBody] = useState(task.body);

    const handleUpdate = () => {
        mutate(
            {
                id: task.id,
                data: { title, body }
            },
            {
                onSuccess: () => {
                    setOpen(false)
                }
            }
        )
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                {children}
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Task</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <Input
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>

                <DialogFooter>
                    <Button onClick={handleUpdate} disabled={isPending}>
                        Update
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}