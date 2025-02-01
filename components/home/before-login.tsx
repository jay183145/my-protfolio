"use client"

import React from "react"
import NoCharacter from "./no-character"
import HasCharacter from "./has-character"

function BeforeLogin() {
    return (
        <div className="flex w-[300px] flex-col">
            {/* 有角色 */}
            <HasCharacter />
            {/* 分隔線 */}
            <div className="flex items-center justify-center py-5">
                <div className="mr-3 w-full border-b border-neutral-50"></div>
                <div className="">or</div>
                <div className="ml-3 w-full border-b border-neutral-50"></div>
            </div>
            {/* 沒角色 */}
            <NoCharacter />
        </div>
    )
}

export default BeforeLogin
