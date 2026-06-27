'use client';

import {useState} from "react";
import {FiLoader, FiLogIn} from 'react-icons/fi';
import {PasswordInput} from "@/components/passwordInput/passwordInput";
import {Input} from "@/components/input/input";
import {Button} from "@/components/button/button";
import {fetchJson} from "@/app/utils/restUtils";
import {notif} from "@/components/utils";
import {useRouter} from 'next/navigation';

const wrapperStyle = " mt-4"
const mobileValidationError = "فرمت موبایل اشتباه است."

export default function Login() {
    const [mobile, setMobile] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [sendingRequest, setSendingRequest] = useState<boolean>(false);
    const [hasMobileError, setHasMobileError] = useState<boolean>(false)

    const changePassword = (value: string) => {
        const hasError = !value.match(/^0[0-9]{10}$/)
        if (hasMobileError && !hasError)
            setHasMobileError(false)
        else if (!hasMobileError && hasError)
            setHasMobileError(true)
        setMobile(value)
    }
    const router = useRouter();
    const sendLoginRequest = function () {
        setSendingRequest(true);
        fetchJson<{ access: string, user_id: number }>('/auth/login/', {
            method: "POST",
            body: JSON.stringify({mobile, password}),
            cacheDuration: 0,
        }).then(res => {
            const {access, user_id} = res
            if (access && user_id) {
                localStorage.setItem('token', access)
                localStorage.setItem('user_id', user_id.toString())
                router.push('/')
            } else {
                notif("اطلاعات هویتی ارسال نشد", true)
            }
            setSendingRequest(false);
        }).catch(err => {
            notif(err.message, true)
            setSendingRequest(false);
        });
    }

    return (
        <div
            className="bg-[#00437ebd] border border-blue-900 shadow-2xl shadow-black rounded-lg w-3/4 p-5 absolute top-1/2 left-1/2 transform -translate-1/2">
            <Input label={'موبایل'} value={mobile} error={hasMobileError ? mobileValidationError : undefined}
                   onChange={changePassword} placeholder="09*********"/>
            <div className={wrapperStyle}>
                <PasswordInput label={'پسورد'} value={password} onChange={setPassword} placeholder={'******'}/>
            </div>
            <div className={"flex justify-center w-full" + wrapperStyle}>
                <Button disabled={sendingRequest} onClick={() => sendLoginRequest()} leftIcon={sendingRequest ? <FiLoader /> : <FiLogIn/>}>ورود</Button>
            </div>
        </div>
    )
}
