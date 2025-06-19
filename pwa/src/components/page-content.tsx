import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage
} from "@/components/ui/breadcrumb"
import {
    SidebarInset,
    SidebarTrigger
} from "@/components/ui/sidebar"
import { Separator } from "@radix-ui/react-separator"



export default function PageContent({ children, title }: { children: React.ReactNode, title?: string }) {
    return (
        <SidebarInset>
            <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background z-10">
                <div className="flex flex-1 items-center gap-2 px-3">
                    <SidebarTrigger />
                    <Separator orientation="vertical" className="mr-2 h-4 w-[1px] bg-foreground" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage className="line-clamp-1">
                                    {title}
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4">
                {children}
            </div>
        </SidebarInset>
    )
}

