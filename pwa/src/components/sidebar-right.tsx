import * as React from "react"

import { Calendars } from "@/components/calendars"
import { DatePicker } from "@/components/date-picker"
import {
  Sidebar,
  SidebarContent,
  SidebarSeparator
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  calendars: [
    {
      name: "Patients",
      items: ["ROUX Denise", "VINCENT Pierre", "BERTRAND Jean", "DUPONT Marie", "DURAND Paul", "VINCENTE Julie"],
    },
  ],
}

export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      className="sticky top-0 hidden h-svh border-l lg:flex"
      {...props}
    >
      <SidebarContent>
        <DatePicker />
        <SidebarSeparator className="mx-0" />
        <Calendars calendars={data.calendars} />
      </SidebarContent>
    </Sidebar>
  )
}
