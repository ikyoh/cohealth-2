import PageContent from "@/components/page-content"
import { SidebarLeft } from "@/components/sidebar-left"
import { SidebarRight } from "@/components/sidebar-right"
import ViewWeek from "./view-week"

export default function Page() {
  return (
    <>
      <SidebarLeft />
      <PageContent title="Planning">
        <ViewWeek />
      </PageContent>
      <SidebarRight />
    </>
  )
}
