import {memo, useState} from "react"

const EmployeeProfile = memo(function EmployeeProfile({name, email}: {name: string, email: string}){

    return (
        <>
            <h1>{name}</h1>
            <p>{email}</p>
        </>
    )
});

export default function EmployeeRegForm(){
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    return(
        <>
        <label>
            Name:{""}
            <input value={name} onChange={(e)=>setName(e.target.value)} />
        </label>
        <label>
            Email: {""}
            <input value={email} onChange={(e)=> setEmail(e.target.value)} />
        </label>
        <hr/>
        <EmployeeProfile name={name} email={email}/>
        </>
    )
}