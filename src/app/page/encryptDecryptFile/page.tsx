'use client'
import React, {useEffect, useState} from 'react';
import {EncryptFile} from "@/app/lib/functions/EncryptFile/EncryptFile";
import {DecryptFile} from "@/app/lib/functions/DecryptFile/DecryptFile";
import appStore from "@/app/lib/store/app-store";
import Icon from "@/app/UI/Icon/Icon";

const EncryptDecryptFile: React.FC = () => {
    const [password, setPassword] = useState<string>('');
    const [vis, setVis] = useState(true)

    useEffect(() => {
        appStore.setPage(1)
    }, [])
    return (
        <div className='flex flex-col items-center justify-center animate'>
            <div className='flex'>
                <input
                    type={vis ? "password" : 'text'}
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input input-bordered w-full"
                />
                <button className='btn ml-2 ' onClick={() => setVis(!vis)}>
                    {!vis ? Icon.eyeSlash : Icon.eye}
                </button>
            </div>
            <br/>
            <br/>
            <div className='flex'>
                <button className="btn btn-neutral mr-2" onClick={() => EncryptFile(password)}>
                    {Icon.lock}
                    Зашифровать
                </button>
                <button className="btn btn-neutral" onClick={() => DecryptFile(password)}>
                    {Icon.unLock}
                    Расшифровать
                </button>
            </div>

        </div>
    );
};

export default EncryptDecryptFile;
