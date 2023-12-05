"use client"
import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import encryptStore from "@/app/lib/store/encrypt-store";
import CryptoJS from "crypto-js";
import LabelTextarea from "@/app/UI/LabelTextarea/LabelTextarea";
import LabelForm from "@/app/UI/LabelForm/LabelForm";
import appStore from "@/app/lib/store/app-store";
import Icon from "@/app/UI/Icon/Icon";

function EncryptDecryptText() {
    const [state, setState] = useState(true)
    const [vis, setVis] = useState(true)

    useEffect(() => {
        appStore.setPage(2)
    }, [])

    const onClick = () => {
        const {text, key} = encryptStore;

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

    const onChangeState = (val) => {
        setState(val)
        encryptStore.setText('')
        encryptStore.setOutput('')
    }
    return (
        <div className='text-right animate'>
            <div role="tablist" className="tabs tabs-boxed mb-8 ">
                <a onClick={() => onChangeState(true)} role="tab" className={`tab ${state && "bg-neutral text-white"}`}>
                    {Icon.lock}
                    Зашифровать</a>
                <a onClick={() => onChangeState(false)} role="tab"
                   className={`tab ${!state && "bg-neutral text-white"}`}>
                    {Icon.unLock}
                    Расшифровать</a>
            </div>
            <>
                <div className='flex mb-8'>
                    <LabelForm label={'Текст'} value={encryptStore.text}
                               onChange={(event) => encryptStore.setText(event.target.value)}/>
                    <div className='flex items-end w-full	'>
                        <LabelForm type={vis ? "password" : "text"} label={'Ключ'} value={encryptStore.key}
                                   onChange={(event) => encryptStore.setKey(event.target.value)}/>
                        <button className='btn ' onClick={() => setVis(!vis)}>{
                            !vis ? Icon.eyeSlash :
                                Icon.eye

                        }
                        </button>
                    </div>

                </div>

                <LabelTextarea  label={"Сообщение"} defaultValue={encryptStore.output}
                               placeholder={'Сообщение'}/>
            </>

            <button onClick={onClick} style={{minWidth: '10rem'}} className="btn btn-neutral mt-8">Го!</button>
        </div>
    )
        ;
}


export default observer(EncryptDecryptText);
