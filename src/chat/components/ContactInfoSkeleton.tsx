


const ContactInfoSkeleton = () => {
    return (
        <div className="p-4">
            <div className="flex flex-col items-center pb-6 border-b animate-pulse">
                <div className="h-20 w-20 rounded-full bg-muted mb-3 animate-pulse" />
                <div className="h-5 w-32 bg-muted rounded mb-2 animate-pulse" />
                <div className="h-4 w-24 bg-muted rounded mb-2 animate-pulse" />
                <div className="flex items-center mt-1 animate-pulse">
                    <div className="h-2 w-2 rounded-full bg-muted mr-1 animate-pulse" />
                    <div className="h-3 w-10 bg-muted rounded animate-pulse" />
                </div>
            </div>

            <div className="py-4 space-y-4">
                <div className="animate-pulse">
                    <div className="h-4 w-32 bg-muted rounded mb-2 animate-pulse" />
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm animate-pulse">
                            <div className="h-3 w-16 bg-muted rounded animate-pulse" />
                            <div className="h-3 w-24 bg-muted rounded animate-pulse" />
                        </div>
                        <div className="flex justify-between text-sm animate-pulse">
                            <div className="h-3 w-16 bg-muted rounded animate-pulse" />
                            <div className="h-3 w-20 bg-muted rounded animate-pulse" />
                        </div>
                        <div className="flex justify-between text-sm animate-pulse">
                            <div className="h-3 w-20 bg-muted rounded animate-pulse" />
                            <div className="h-3 w-16 bg-muted rounded animate-pulse" />
                        </div>
                    </div>
                </div>

                <div className="animate-pulse">
                    <div className="h-4 w-32 bg-muted rounded mb-2 animate-pulse" />
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm animate-pulse">
                            <div className="h-3 w-16 bg-muted rounded animate-pulse" />
                            <div className="h-3 w-16 bg-muted rounded animate-pulse" />
                        </div>
                        <div className="flex justify-between text-sm animate-pulse">
                            <div className="h-3 w-24 bg-muted rounded animate-pulse" />
                            <div className="h-3 w-20 bg-muted rounded animate-pulse" />
                        </div>
                        <div className="flex justify-between text-sm animate-pulse">
                            <div className="h-3 w-20 bg-muted rounded animate-pulse" />
                            <div className="h-3 w-16 bg-muted rounded animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-4 border-t animate-pulse">
                <div className="h-8 w-full bg-muted rounded animate-pulse" />
            </div>
        </div>
    )
}

export default ContactInfoSkeleton