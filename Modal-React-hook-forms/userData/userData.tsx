import { useSelector } from "react-redux";
import { Rootstate } from "../../Redux/store/store";

const UserData = ({onClose}:{onClose: ()=> void}) => {

    const data =  useSelector(
        (state: Rootstate) => state.userData
    )

    return (
        <>
            {data.map(item =>
                <div key={item.id}>
                    <img src={item.imageUpload} alt="profile image" />
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                    <button
                    onClick={onClose}
                    >Close</button>
                </div>
            )}
        </>
    )
}
export default UserData