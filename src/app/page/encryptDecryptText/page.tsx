"use client"
import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import encryptStore from "@/app/lib/store/encrypt-store";
import CryptoJS from "crypto-js";
import LabelTextarea from "@/app/UI/LabelTextarea/LabelTextarea";
import LabelForm from "@/app/UI/LabelForm/LabelForm";
import appStore from "@/app/lib/store/app-store";

function EncryptDecryptText() {
    const [state, setState] = useState(true)
    const [vis, setVis] = useState(true)

    useEffect(() => {
        appStore.setPage(2)
    }, [])

    const onClick = () => {
        const { text, key } = encryptStore;

        if (!text || !key) {
            encryptStore.setOutput('');
            return;
        }

        try {
            const result = state
                ? CryptoJS.Rabbit.encrypt(JSON.stringify(text), key).toString()
                : CryptoJS.Rabbit.decrypt(text.toString(), key).toString(CryptoJS.enc.Utf8);

            encryptStore.setOutput(result);
        } catch (e) {
            alert('Ошибка, сообщение не может быть обработано');
            encryptStore.setOutput('');
        }
    };


    return (
        <div className='text-right'>
            <div role="tablist" className="tabs tabs-boxed mb-8 ">
                <a onClick={() => setState(true)} role="tab" className={`tab ${state && "tab-active"}`}>
                    <svg style={{marginRight: '10px'}} xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
                    </svg>
                    Зашифровать</a>
                <a onClick={() => setState(false)} role="tab" className={`tab ${!state && "tab-active"}`}>
                    <svg style={{marginRight: '10px'}} xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
                    </svg>
                    Расшифровать</a>
            </div>
            <>
                <div className='flex'>
                    <LabelForm label={'Текст'} value={encryptStore.text}
                               onChange={(event) => encryptStore.setText(event.target.value)}/>
                    <div className='flex items-end w-full	'>
                        <LabelForm type={vis ? "password" : "text"} label={'Ключ'} value={encryptStore.key}
                                   onChange={(event) => encryptStore.setKey(event.target.value)}/>
                        <button className='btn ml-2 ' onClick={() => setVis(!vis)}>{
                            !vis ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"/>
                                </svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>

                        }
                        </button>
                    </div>

                </div>

                <LabelTextarea label={"Сообщение"} defaultValue={encryptStore.output}
                               placeholder={'Сообщение'}/>
            </>

            <br/>
            <button onClick={onClick} className="btn btn-neutral">Го!</button>
        </div>
    )
        ;
}


export default observer(EncryptDecryptText);