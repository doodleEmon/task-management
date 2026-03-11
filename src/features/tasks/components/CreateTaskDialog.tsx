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
import { useCreateTask } from "../hooks/useCreateTask"

export default function CreateTaskDialog() {
    const { mutate, isPending } = useCreateTask()
    const [open, setOpen] = useState<boolean>(false)

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const handleSubmit = () => {
        mutate(
            { title, body, userId: 1 },
            {
                onSuccess: () => {
                    setTitle("")
                    setBody("")
                    setOpen(false)
                }
            }
        )
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <span className="border p-2 rounded ">+ Add Task</span>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Task</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <Input
                        placeholder="Task title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <Input
                        placeholder="Task message"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>

                <DialogFooter>
                    <Button onClick={handleSubmit} disabled={isPending}>
                        Create
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}