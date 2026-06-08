import ReactDOM from "react-dom";

export default function Modal({ open, children, onClose }) {
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