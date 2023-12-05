'use client'
import React, {useState} from 'react';
import Link from "next/link";
import appStore from "@/app/lib/store/app-store";
import {observer} from "mobx-react-lite";
import {RouteData} from "@/app/routeData";


interface IDrawer {
    children: React.ReactNode
}

export const Drawer = observer(({children}: IDrawer) => {
    const [stateBtn, setStateBtn] = useState(false)



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
                        RouteData.map((item, index) => (
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

