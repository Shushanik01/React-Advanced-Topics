import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import Modal from "./Modal";

export default function Component() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Fragment>
            <button
            onClick={()=> setIsOpen(true)}
            >Open modal</button>
            <Modal
            open={isOpen}
            onClose={()=> setIsOpen(false)}
            >Fancy modal</Modal>
        </Fragment>
    )
}