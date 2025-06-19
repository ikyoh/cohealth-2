"use client"

import {
  BookOpen,
  BriefcaseMedical,
  CalendarDays,
  ClipboardPlus,
  HeartPulse,
  ShieldPlus,
  Stethoscope,
  Users
} from "lucide-react"
import * as React from "react"

import { NavProjects } from "@/components/nav-main"
import { NavMain } from "@/components/nav-secondary"

import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"

import logo from "../../public/logo.svg"

const data = {
  user: {
    name: "Christophe",
    email: "hello@ikyoh.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Annuaires",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Patients",
          url: "#",
          icon: HeartPulse
        },
        {
          title: "Collaborateurs",
          url: "#",
          icon: Users
        },
        {
          title: "Médecins",
          url: "#",
          icon: Stethoscope
        },
        {
          title: "Assurances",
          url: "#",
          icon: ShieldPlus
        },
      ],
    }
  ],

  projects: [
    {
      name: "Planning",
      url: "/authorized/planning",
      icon: CalendarDays,
    },
    {
      name: "Missions",
      url: "/authorized/mission",
      icon: BriefcaseMedical
    },
    {
      name: "Collaborations",
      url: "#",
      icon: Users,
    },
    {
      name: "Mandats",
      url: "#",
      icon: ClipboardPlus,
    },
    {
      name: "Patients",
      url: "#",
      icon: HeartPulse,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <Image src={logo} alt="logo Cohealth" width={140} />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
