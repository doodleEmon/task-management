import { Skeleton } from "@/components/ui/skeleton";


export default function Loading() {
    return (
        <div className="space-y-3">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
        </div>
    );
}