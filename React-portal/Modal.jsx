import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export default function Modal({ open, children, onClose }) {

    const portalRef = useRef(null);

    useEffect(()=>{
        portalRef.current?.focus();

        const handleKeyDown = (e)=>{
            if(e.key === 'Escape')
                onClose()
        }

        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }

    },[onClose])


    if (!open) return null
    else {
        return ReactDOM.createPortal(


            <div>
                <button onClick={onClose}>Close</button>
                {children}
            </div>,
            document.getElementById('portal')
        )
    }
}