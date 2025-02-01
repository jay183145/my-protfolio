import RegisterForm from "@/app/register/components/register-form"
import React from "react"

const RegisterPage: React.FC = () => {
    return (
        <div className="flex h-full max-h-screen min-h-screen w-full flex-col items-center justify-center">
            <RegisterForm />
        </div>
    )
}

export default RegisterPage
