export default function Modal({ open, children, onClose }) {
    if (!open) return null
    else {
        return (
            <div>
                <button onClick={onClose}>Close</button>
                {children}
            </div>
        )    
    }
}