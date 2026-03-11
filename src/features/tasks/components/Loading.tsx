import { Skeleton } from "@/components/ui/skeleton";


export default function Loading() {
    return (
        <div className="flex w-full flex-col gap-2 p-4">
            <Skeleton className="h-4 w-[10%] ml-3 my-5" />
            {Array.from({ length: 12 }).map((_, index) => (
                <div className="flex gap-4 m-3" key={index}>
                    <Skeleton className="h-4 w-[10%]" />
                    <Skeleton className="h-4 w-[20%]" />
                    <Skeleton className="h-4 w-[50%]" />
                    <Skeleton className="h-4 w-[20%]" />
                </div>
            ))}
        </div>
    );
}