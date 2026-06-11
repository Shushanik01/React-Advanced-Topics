import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";

interface ModalProps {
    children: React.ReactNode,
    onClose: () => void,
    isOpen: boolean
}

function Modal({ children, onClose, isOpen }: ModalProps) {

    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        dialogRef.current?.focus();
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        }
        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);

    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const targetElement = document.getElementById('portal');

    if (!targetElement) return null;

    return createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <div
                className={styles.content}
                ref={dialogRef}
                tabIndex={-1}
                aria-modal='true'
                onClick={(e) => e.stopPropagation()}
            >
                <button className={styles.closeButton} onClick={onClose} aria-label="Close">
                    ✕
                </button>
                {children}
            </div>
        </div>,
        targetElement
    );
}

export default Modal;
