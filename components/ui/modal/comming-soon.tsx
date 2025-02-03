"use client"

import React from "react"
import BaseModal from "./index"
import { BiPlusMedical } from "react-icons/bi"
import { RxCross2 } from "react-icons/rx"
import { GiSwordSpade } from "react-icons/gi"
import Button from "../button"
import { useRouter } from "next/navigation"

type CommingSoonProps = {
    isShow: boolean
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>
}

function CommingSoon({ isShow, setIsShow }: CommingSoonProps) {
    const router = useRouter()
    const handleClick = () => {
        setIsShow(false)
        router.push("/")
    }
    return (
        isShow && (
            <BaseModal onClick={() => setIsShow(false)}>
                <div className="absolute left-1/2 top-1/2 flex w-full max-w-xs -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-2xl bg-neutral-200">
                    <div className="flex w-full items-center justify-between rounded-t-2xl bg-yellow-500 px-4 py-3">
                        <BiPlusMedical className="invisible text-xl" />
                        <span className="text-center text-xl font-bold">Coming Soon!</span>
                        <RxCross2 className="cursor-pointer text-xl" onClick={() => setIsShow(false)} />
                    </div>
                    <div className="flex w-full flex-col items-center justify-center px-5 pb-8">
                        <div className="pb-3 pt-5">
                            <GiSwordSpade className="text-4xl text-neutral-500" />
                        </div>
                        <div className="text-md pb-5 text-center font-semibold text-black">
                            The Game is Coming Soon!
                        </div>
                        <Button variant="primary" size="xs" className="w-full" onClick={handleClick}>
                            Back to Home
                        </Button>
                    </div>
                </div>
            </BaseModal>
        )
    )
}

export default CommingSoon
