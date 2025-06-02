import { createSlice } from "@reduxjs/toolkit";

interface User {
    fullName:string;
    email:string;
    password:string;
}


interface AuthState {
    user: User | null;
}

const initialState: AuthState = {
    user:null
}

 const AuthSlice = createSlice({
    name:"Auth",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user = action.payload
        },
       login:(state,action)=>{
        state.user = action.payload
        console.log(state.user)
       }
    }
})
    

export const {setUser , login} = AuthSlice.actions;
export default AuthSlice.reducer;