'use client'
import React, {useState} from 'react';
import Link from "next/link";
import appStore from "@/app/lib/store/app-store";
import {observer} from "mobx-react-lite";


interface IDrawer {
    children: React.ReactNode
}

export const Drawer = observer(({children}: IDrawer) => {
    const [stateBtn, setStateBtn] = useState(false)

    const data = [
        {
            id: 0,
            href: '/',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            ,
            title: 'Главная'
        },
        {
            id: 1,
            href: '/page/encryptDecryptFile',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                       stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
            </svg>,
            title: ' Шифрование/Дешифрование файла'
        },
        {
            id: 2,
            href: '/page/encryptDecryptText',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                       stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
            </svg>,
            title: ' Шифрование/Дешифрование текста'
        },

    ]

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" checked={stateBtn} onClick={()=>setStateBtn(true)} className="drawer-toggle"/>
            <div className="drawer-content flex flex-col items-center justify-center">
                <div className='navbar'>
                    <div className='navbar-start'><label htmlFor="my-drawer-2"
                                                         className="btn btn-ghost drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>
                    </label></div>
                    <div className='navbar-center'></div>
                    <div className='navbar-end'></div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
                    {
                        data.map((item, index) => (
                            <li onClick={()=>setStateBtn(false)} key={`draw-${index}`}
                                className={item.id === appStore.page ? 'bg-base-300 rounded-md' : 'rounded-md'}>
                                <Link href={item.href}>
                                    {item.icon}
                                    {item.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    );
})

