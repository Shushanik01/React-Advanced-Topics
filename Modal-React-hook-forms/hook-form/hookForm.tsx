import { useForm } from "react-hook-form";
import { addUserData, removeUserData } from "../../Redux/slices/silce";
import type { UserData } from '../../Redux/slices/silce';
import { useDispatch } from "react-redux";
import { useState } from "react";

function HookForm() {
    const [userId, setUserId] = useState<null | string>(null)

    const { register, handleSubmit } = useForm<UserData>();

    const dispatch = useDispatch()

    const sendDataToState = (data: UserData) => {
        const id = crypto.randomUUID()
        dispatch(addUserData({ ...data, id}))
        setUserId(id)
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit(sendDataToState)}
            >
                <label htmlFor="name">Enter your name</label>
                <input {...register('name')} type="text" id="name" />

                <label htmlFor="password">Enter your password</label>
                <input {...register('password')} type="text" id="password" />

                <label htmlFor="email"></label>
                <input {...register('email')} type="text" id='email' />

                <label htmlFor="imageUpload">Enter your image</label>
                <input {...register('imageUpload')} type="file" id="imageUpload" />

                <label htmlFor="terms">Accept terms and conditins</label>
                <input {...register('terms')} type="checkbox" id='terms' />

                <button type="submit">Submit</button>
            </form>
            <button
            onClick={()=> userId && dispatch(removeUserData(userId))}
            >Delete my credentials</button>
        </div>
    )
}
export default HookForm