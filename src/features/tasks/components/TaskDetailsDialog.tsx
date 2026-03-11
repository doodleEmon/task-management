'use client'

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Task } from "../types"

interface Props {
    task: Task
    children: React.ReactNode
}

export default function TaskDetailsDialog({ task, children }: Props) {
    return (
        <Dialog>
            <DialogTrigger>
                {children}
            </DialogTrigger>

            <DialogContent className="w-2xl">
                <DialogHeader>
                    <DialogTitle className={"text-gray-200"}>Task #{task.id}</DialogTitle>
                </DialogHeader>

                <div className="space-y-4 mt-4">
                    <div>
                        <p className="font-semibold text-gray-400">Title</p>
                        <p className="font-semibold normal-case text-gray-200">{task.title}</p>
                    </div>

                    <div>
                        <p className="text-gray-400">Description</p>
                        <p className="text-gray-200 normal-case">{task.body}</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}