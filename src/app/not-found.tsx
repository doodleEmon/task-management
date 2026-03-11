import {
    Empty,
    EmptyDescription,
    EmptyHeader,
    EmptyTitle,
} from "@/components/ui/empty";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <Empty>
                    <EmptyHeader>
                        <EmptyTitle className="text-4xl">404 - Not Found</EmptyTitle>
                        <EmptyDescription className="text-xl">
                            The page you&apos;re looking for doesn&apos;t exist. Try searching for
                            what you need below.
                        </EmptyDescription>
                    </EmptyHeader>
                </Empty>
            </div>
        </div>
    )
}
