"use client"

import { UserDashboard } from "@/components/Dashboard"
import Nav from "@/components/Nav"

export default function Dashboard () {

    return (

        <section className="bg-green-300">
            <Nav />
            <UserDashboard />
        </section>
    )
}