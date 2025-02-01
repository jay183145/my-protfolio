import React from "react"
import { RxCross2 } from "react-icons/rx"
import BaseModal from "."
import { MdErrorOutline } from "react-icons/md"
import { BiPlusMedical } from "react-icons/bi"
import Button from "../button"

type SuccessModalProps = {
    success: string
    isShow: boolean
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>
    onClick: () => void
}
function SuccessModal({ success, isShow, setIsShow, onClick }: SuccessModalProps) {
    return (
        isShow && (
            <BaseModal onClick={() => setIsShow(false)}>
                <div className="absolute left-1/2 top-1/2 flex w-full max-w-xs -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-2xl bg-neutral-200">
                    <div className="flex w-full items-center justify-between rounded-t-2xl bg-green-400 px-4 py-3">
                        <BiPlusMedical className="invisible text-xl" />
                        <span className="text-center text-xl font-bold">Success!</span>
                        <RxCross2 className="cursor-pointer text-xl" onClick={() => setIsShow(false)} />
                    </div>
                    <div className="flex flex-col items-center justify-center px-5 pb-8">
                        <div className="pb-3 pt-5">
                            <MdErrorOutline className="text-4xl text-green-500" />
                        </div>
                        <div className="text-md pb-5 text-center font-semibold text-black">{success}</div>
                        <Button variant="primary" size="xs" className="w-full" onClick={onClick}>
                            Next
                        </Button>
                    </div>
                </div>
            </BaseModal>
        )
    )
}

export default SuccessModal
