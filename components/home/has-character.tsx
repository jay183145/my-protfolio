import { loginUser } from "@/lib/api/users"
import React from "react"
import { useForm } from "react-hook-form"

function HasCharacter() {
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

    const onSubmit = async (data: { username: string; password: string }) => {
        try {
            const response = await loginUser(data)
            console.log(response)
        } catch (e) {
            console.log(e)
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
                <div className="flex items-center justify-end">
                    <button className="font-bold underline hover:cursor-pointer hover:text-neutral-500">
                        Let&apos;s play now!
                    </button>
                </div>
            </form>
        </div>
    )
}

export default HasCharacter
