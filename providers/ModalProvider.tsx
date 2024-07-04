"use client";

import AuthModal from "@/components/AuthModal";
import Modal from "@/components/modal";
import SubscribeModal from "@/components/SubscribeModal";
import UploadModal from "@/components/uploadModal";
import { ProductWithPrice } from "@/types";
import { Children, useEffect, useState } from "react";


interface ModalProviderProps{
    products:ProductWithPrice[];
}
const ModalProvider:React.FC<ModalProviderProps> = ({
    products,
}) => {
    const [isMounted,setIsMounted]=useState(false);

    // to avoid error in server side rendering (like hydration erro etc)

    // if this loads then we are in the client side only
    useEffect(()=>{
        setIsMounted(true);
    },[]);

    // we are in server side
    if(!isMounted){
        return null;
    }
    return ( 
        <>
            <AuthModal/>
            <UploadModal/>
            <SubscribeModal products={products}/>
        </>
     );
}
 
export default ModalProvider;