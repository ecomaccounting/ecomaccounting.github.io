"use client"

import { Suspense } from "react"
import ServiceSearch from "./SearchPage"


export default function SearchWrapper() {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <ServiceSearch />
    </Suspense>
  )
}