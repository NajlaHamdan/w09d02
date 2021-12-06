const initialState={
    user:null,
    token:""
}

const signIn=(state=initialState,action)=>{
    const {type,payload}=action;

    switch(type){
        case "LOGIN":
            const {user,token}=payload;
            return (user,token);
        case "LOGOUT":
            return payload;
        default:
            return state;
    }
}
export default signIn;

export const login=(data)=>{
    return{
        type:"LOGIN",
        payload:data
    }
}
export const logout=(data)=>{
    return{
        type:"LOGOUT",
        payload:data
    }
}