import { useForm } from "react-hook-form"

function HookForm() {

    const {register, handleSubmit} = useForm();

    return (
        <form>
            <label htmlFor="name">Enter your name</label>
            <input {...register('name')} type="text" id="name"/>

            <label htmlFor="password">Enter your password</label>
            <input {...register('password')} type="text" id="password"/>

            <label htmlFor="email"></label>
            <input {...register('email')} type="text" id='email'/>

            <label htmlFor="imageUpload">Enter your image</label>
            <input {...register('imageUpload')} type="file" id="imageUpload"/>

            <label htmlFor="terms">Accept terms and conditins</label>
            <input {...register('terms')} type="checkbox" id = 'terms' />
        </form>
    )
}
export default HookForm