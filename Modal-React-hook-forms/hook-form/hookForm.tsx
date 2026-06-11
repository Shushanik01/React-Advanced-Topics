import { useForm } from "react-hook-form";
import { addUserData, removeUserData } from "../../Redux/slices/silce";
import type { UserData } from '../../Redux/slices/silce';
import { useDispatch } from "react-redux";
import { useState } from "react";
import styles from "./hookForm.module.css";

function HookForm({ onDataStored, onClose }: { onDataStored: () => void, onClose:()=> void }) {
    const [userId, setUserId] = useState<null | string>(null);


    const { register, handleSubmit } = useForm<UserData>();

    const dispatch = useDispatch();

    const sendDataToState = async (data: UserData) => {

        const file = (data.imageUpload as unknown as FileList)[0];
        const toBase64 = (file: File): Promise<string> =>
            new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file)
                reader.onload = () => resolve(reader.result as string)
                reader.onerror = reject
            });

        const imageBase64 = file ? await toBase64(file) : ''

        const id = crypto.randomUUID();
        dispatch(addUserData({ ...data, imageUpload: imageBase64, id }));
        setUserId(id);
        onDataStored();
        onClose()
    };

    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit(sendDataToState)}>
                <label htmlFor="name">Enter your name</label>
                <input {...register('name')} type="text" id="name" />

                <label htmlFor="password">Enter your password</label>
                <input {...register('password')} type="text" id="password" />

                <label htmlFor="email">Enter your email</label>
                <input {...register('email')} type="text" id="email" />

                <label htmlFor="imageUpload">Enter your image</label>
                <input {...register('imageUpload')} type="file" id="imageUpload" />

                <label htmlFor="terms">Accept terms and conditions</label>
                <input {...register('terms')} type="checkbox" id="terms" />

                <button className={styles.submitButton} type="submit">Submit</button>
            </form>
            <button
                className={styles.deleteButton}
                onClick={() => userId && dispatch(removeUserData(userId))}
            >
                Delete my credentials
            </button>
        </div>
    );
}

export default HookForm;
