"use client"

import { registerUser } from "@/lib/api/users"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Button from "../../../components/ui/button"
import ErrorModal from "../../../components/ui/modal/error-modal"
import { UserRegisterResponse } from "@/lib/api/users/type"
import SuccessModal from "../../../components/ui/modal/success-modal"
import { useRouter } from "next/navigation"

function RegisterForm() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [isShowErrorModal, setIsShowErrorModal] = useState(false)
    const [userData, setUserData] = useState<UserRegisterResponse | undefined>(undefined)
    const [isShowSuccessModal, setIsShowSuccessModal] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
            email: "",
        },
    })

    const onSubmit = async (loginData: { username: string; password: string; email: string }) => {
        setIsLoading(true)
        const { data, error } = await registerUser(loginData)
        if (error) {
            setError(error.error)
            setIsShowErrorModal(true)
        }
        setUserData(data)
        setIsShowSuccessModal(true)
        setIsLoading(false)
    }

    return (
        <div className="flex w-[300px] flex-col gap-4">
            <h1 className="text-2xl font-bold">Create an account!</h1>
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
                <div>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" },
                        })}
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-md border border-gray-300 bg-neutral-100 px-3 py-1 text-neutral-900"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </div>
                <div className="mt-4">
                    <Button variant="primary" size="xs" className="w-full" type="submit" disabled={isLoading}>
                        {isLoading ? "Creating..." : "Create"}
                    </Button>
                </div>
            </form>
            {/* 分隔線 */}
            <div className="flex items-center justify-center py-5">
                <div className="mr-3 w-full border-b border-neutral-50"></div>
                <div className="">or</div>
                <div className="ml-3 w-full border-b border-neutral-50"></div>
            </div>
            {/* 登入 */}
            <div className="flex items-center justify-end">
                <div className="pr-2">Already have an account?</div>
                <button
                    onClick={() => router.push("/")}
                    className="font-bold underline hover:cursor-pointer hover:text-neutral-500"
                >
                    Login now!
                </button>
            </div>
            {error && <ErrorModal error={error} isShow={isShowErrorModal} setIsShow={setIsShowErrorModal} />}
            {userData && (
                <SuccessModal
                    success={"register success!"}
                    isShow={isShowSuccessModal}
                    setIsShow={setIsShowSuccessModal}
                    onClick={() => {
                        router.push("/")
                    }}
                />
            )}
        </div>
    )
}

export default RegisterForm
