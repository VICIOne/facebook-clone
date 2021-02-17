import {useEffect} from 'react'

export default function useOnKeyDown(trigger, dependencies, callback){

    useEffect(() => {

    const listener = (event) =>{
        if(event.code === trigger){
            callback()
        }
    }

    document.addEventListener('keydown',listener)

    return () => {
        document.removeEventListener('keydown',listener)
    }
}, [dependencies])

}

