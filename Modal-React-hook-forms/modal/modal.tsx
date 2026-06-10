import { useEffect, useRef } from "react";
import { createPortal } from "react-dom"

interface ModalProps {
    children: React.ReactNode,
    onClose: () => void,
    isOpen: boolean
}

function Modal({ children, onClose, isOpen }: ModalProps) {

    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen) return

        dialogRef.current?.focus();
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'escape') onClose()
        }
        document.addEventListener('keydown', handleKeyDown)

        return () => removeEventListener('keydown', handleKeyDown)

    }, [isOpen, onClose]);

    if (!isOpen) return null

    const targetElement = document.getElementById('portal');

    if(!targetElement) return null

    return createPortal(
        <div
            onClick={onClose}
        >
            <div
                ref={dialogRef}
                tabIndex={-1}
                aria-modal='true'
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
            <button
                onClick={onClose}
                aria-label="Close"
            >
                ✕
            </button>
        </div>,
        targetElement
    )
}
export default Modal