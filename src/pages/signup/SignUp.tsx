import React from "react"
import ParticlesBackground from "../../components/features/particles-background/ParticlesBackground"
import FormSignup from "../../components/features/forms/form-signup/FormSignup"

const SignUp: React.FC = () => {
    return (
        <div
            className={`w-screen h-screen flex items-center justify-center relative`}
        >
            <ParticlesBackground moveSpeed={0.7} />
            <FormSignup />
        </div>
    )
}

export default SignUp