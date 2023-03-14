import { useState,useEffect} from 'react';

const useRWD=()=>{
    const [device,setDevice]=useState("mobile");

    const handleRWD=()=>{
        if(window.innerWidth>500)
            setDevice("PC");
        else
            setDevice("mobile");
    }

    useEffect(()=>{ 
        window.addEventListener('resize',handleRWD);
        return(()=>{
            window.removeEventListener('resize',handleRWD);
        })
    },[]);

    return device;
}

export default useRWD;