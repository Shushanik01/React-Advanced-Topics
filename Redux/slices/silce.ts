import { createSlice } from "@reduxjs/toolkit";

export interface UserData {
    id: string,
    name: string,
    password: string,
    email: string,
    imageUpload: string,
    terms: boolean
}

const initialState: UserData[] = [];

const userDataSlice = createSlice({
    name: 'userData',
    initialState, 
    reducers : {
        addUserData: (state, action) =>{
            state.push(action.payload)
        },
        removeUserData: (state, action) => {
          return state.filter(user => user.id !== action.payload )
        }
    }
})
export const {addUserData, removeUserData} = userDataSlice.actions;
export default userDataSlice.reducer