'use client'
import React, {useEffect} from 'react';
import Link from "next/link";
import appStore from "@/app/lib/store/app-store";
import {RouteData} from "@/app/routeData";


const Home: React.FC = () => {
    useEffect(() => {
        appStore.setPage(0)
    }, [])

    return (
        <div className='flex flex-col items-center justify-center animate'>
           <div className='flex'>
               {
                   RouteData.map((item,index)=>(
                       index!==0&&
                       <Link href={item.href} className='card card-body bg-base-200 shadow-md mr-2 cursor-pointer hover:shadow-2xl'>
                           {item.icon}{item.title}
                       </Link>
                   ))
               }
           </div>
        </div>
    );
};

export default Home;
