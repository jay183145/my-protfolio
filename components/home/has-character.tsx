import { loginUser } from "@/lib/api/users"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import ErrorModal from "../ui/modal/error-modal"
import { UserLoginResponse } from "@/lib/api/users/type"
import SuccessModal from "../ui/modal/success-modal"
import Button from "../ui/button"

function HasCharacter() {
    const router = useRouter()
    const [error, setError] = useState<string | null>(null)
    const [isShowErrorModal, setIsShowErrorModal] = useState(false)
    const [loginInfo, setLoginInfo] = useState<UserLoginResponse | null>(null)
    const [isShowSuccessModal, setIsShowSuccessModal] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
    })

    const onSubmit = async (LoginData: { username: string; password: string }) => {
        const { data, error } = await loginUser(LoginData)
        if (error) {
            setError(error.error)
            setIsShowErrorModal(true)
        }
        if (data) {
            setLoginInfo(data)
            setIsShowSuccessModal(true)
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Having a character?</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div>
                    <input
                        {...register("username", {
                            required: "Username is required",
                            maxLength: { value: 12, message: "Username must be at most 12 characters" },
                        })}
                        type="text"
                        placeholder="Username"
                        className="w-full rounded-md border border-gray-300 bg-neutral-100 px-3 py-1 text-neutral-900"
                    />
                    {errors.username && <p className="mt-1 text-sm text-red-500">{errors.username.message}</p>}
                </div>
                <div>
                    <input
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be at least 6 characters" },
                        })}
                        type="password"
                        placeholder="Password"
                        className="w-full rounded-md border border-gray-300 bg-neutral-100 px-3 py-1 text-neutral-900"
                    />
                    {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
                </div>
                <Button variant="primary" size="sm" className="w-full" onClick={() => handleSubmit(onSubmit)}>
                    Let&apos;s play now!
                </Button>
            </form>
            {error && <ErrorModal error={error} isShow={isShowErrorModal} setIsShow={setIsShowErrorModal} />}
            {loginInfo && (
                <SuccessModal
                    success={`Welcome back, ${loginInfo.user.username}!`}
                    isShow={isShowSuccessModal}
                    setIsShow={setIsShowSuccessModal}
                    onClick={() => router.push("/user")}
                />
            )}
        </div>
    )
}

export default HasCharacter
