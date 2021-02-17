import {useEffect} from "react";

export default function useOnClick(ref, handler, trigger) {
    useEffect(() => {
        
        const listener = event => {
            if (!ref.current || ref.current.contains(event.target) || trigger === event.target) {
                return;
            }

            handler(event);
        };

        document.addEventListener("mousedown", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
        };
    }, []);
}