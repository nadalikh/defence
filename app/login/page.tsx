'use client';

import {useState} from "react";
import {FiLogIn} from 'react-icons/fi';
import {PasswordInput} from "@/components/passwordInput/passwordInput";
import {Input} from "@/components/input/input";
import {Button} from "@/components/button/button";

const wrapperStyle = " mt-4"
const mobileValidationError = "فرمت موبایل اشتباه است."
export default function Login() {
    const [mobile, setMobile] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [hasMobileError, setHasMobileError] = useState<boolean>(false);
    const changePassword = (value: string) => {
        const hasError = !value.match(/^0[0-9]{10}$/)
        if (hasMobileError && !hasError)
            setHasMobileError(false)
        else if (!hasMobileError && hasError)
            setHasMobileError(true)
        setMobile(value)
    }

    return (
        <div className="bg-[#80a6c89c] border border-blue-900 shadow-2xl shadow-black rounded-lg w-3/4 p-5 absolute top-1/2 left-1/2 transform -translate-1/2">
            <Input label={'موبایل'} value={mobile} error={hasMobileError ? mobileValidationError : undefined} onChange={changePassword} placeholder="09*********"/>
            <div className={wrapperStyle}>
                <PasswordInput label={'پسورد'} value={password} onChange={setPassword} placeholder={'******'}/>
            </div>
            <div className={"flex justify-center w-full" + wrapperStyle}>
                <Button leftIcon={<FiLogIn/>}>ورود</Button>
            </div>
        </div>
    )
}
