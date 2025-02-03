import React from "react"
import Link from "next/link"
import { IoChevronBackOutline } from "react-icons/io5"

function header() {
    return (
        <div className="relative flex w-[300px] flex-col items-center justify-center gap-4">
            <Link href="/" className="absolute left-0 top-2">
                <IoChevronBackOutline />
            </Link>
            <h1 className="text-2xl font-bold">Character List</h1>
        </div>
    )
}

export default header
