import { useRef } from "react";

export default function UserProfile() {
    const usernameRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(`Username is ${usernameRef.current}`);

    }

    return (

        <form
            onSubmit={handleSubmit}
            action="submit">
            <label>
                Name:
                <input type="text" ref={usernameRef} />
            </label>
            <button>Submit</button>
        </form>

    )
}