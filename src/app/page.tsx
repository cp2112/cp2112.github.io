'use client'
import React, {useEffect} from 'react';
import Link from "next/link";
import appStore from "@/app/lib/store/app-store";


const Home: React.FC = () => {
    useEffect(() => {
        appStore.setPage(0)
    }, [])
    const data = [
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
        <div className='flex flex-col items-center justify-center animate'>
           <div className='flex'>
               {
                   data.map((item)=>(
                       <Link href={item.href} className='card card-body shadow-md mr-2 cursor-pointer hover:shadow-2xl'>
                           {item.icon}{item.title}
                       </Link>
                   ))
               }
           </div>
        </div>
    );
};

export default Home;
