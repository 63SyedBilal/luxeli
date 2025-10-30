"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function HousekeepingPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to requests page by default
    router.push("/partner/pages/housekeeping/requests")
  }, [router])

    return null
}