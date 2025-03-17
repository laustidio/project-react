import React from "react";
import * as Yup from 'yup';
import Input from "../../../ui/input/Input";
import Button from "../../../ui/button/Button";
import Checkbox from "../../../ui/checkbox/Checkbox";
import { FormSignupStyles } from "./FormSignupStyles";
import { FormProvider, SubmitHandler } from 'react-hook-form';
import { useFormValidation } from "../../../../hooks/useFormValidation";

const schema = Yup.object().shape({
    username: Yup.string().min(3).required("Username is required."),
    password: Yup.string().min(6, "Minimum 6 characters.").required("Password is required."),
    confirmPwd: Yup.string()
        .oneOf([Yup.ref("password")], "The passwords do not match.")
        .required("Password confirmation is mandatory."),
    email: Yup.string().email("Email is not valid.").required("Email is required."),
    isAcceptTherms: Yup.boolean().oneOf([true], "You must accept the therms.")
})

const FormSignup: React.FC = () => {
    const methods = useFormValidation<typeof schema>(schema);
    const {reset} = methods;

    const onSubmit: SubmitHandler<Yup.InferType<typeof schema>> = data => {
        console.log("Data", data);
        reset();
    }

    return (
        <FormProvider {...methods}>
            <form
                className={`
                flex flex-col 
                items-center 
                justify-center 
                w-[400px] 
                h-[400px] 
                p-5 
                gap-4 
                border 
                border-white/20 
                bg-white/10 
                backdrop-blur-lg 
                shadow-xl 
                rounded-xl
                relative 
                z-10
            `}
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                <h2 className='text-white text-2xl font-semibold font-serif text-center mb-2'>
                    Black Forge
                </h2>
                <Input
                    type='text'
                    placeholder='Username'
                    {...methods.register("username")}
                />
                {methods.formState.errors.username && <p className={FormSignupStyles.yupText}>{methods.formState.errors.username.message}</p>}

                <Input
                    type='password'
                    placeholder='Password'
                    {...methods.register("password")}
                />
                {methods.formState.errors.password && <p className={FormSignupStyles.yupText}>{methods.formState.errors.password.message}</p>}

                <Input
                    type='password'
                    placeholder='Confirm password'
                    {...methods.register("confirmPwd")}
                />
                {methods.formState.errors.confirmPwd && <p className={FormSignupStyles.yupText}>{methods.formState.errors.confirmPwd.message}</p>}

                <Input
                    type='email'
                    placeholder='Email'
                    {...methods.register("email")}
                />
                {methods.formState.errors.email && <p className={FormSignupStyles.yupText}>{methods.formState.errors.email.message}</p>}

                <Checkbox label="Accept the therms of the use." {...methods.register("isAcceptTherms")} />
                {methods.formState.errors.isAcceptTherms && <p className={FormSignupStyles.yupText}>{methods.formState.errors.isAcceptTherms.message}</p>}
                
                <Button type='submit' variant='primary'>
                    Signup
                </Button>
            </form>
        </FormProvider>
    )
}
export default FormSignup;