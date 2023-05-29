import { createSlice } from "@reduxjs/toolkit";

let userLogin= JSON.parse(sessionStorage.getItem("userLogin"));
const initState = {
    listUser:[{id:1,username:"hunghx",password:"123456", fullname:"Hồ Xuân Hùng"},
    {id:2,username:"Daivt",password:"123456", fullname:"Vũ Trọng Đại"},
    {id:3,username:"Anhht",password:"12345678", fullname:"Hà Tuấn Anh"}],
    isLogin: userLogin!=null?true:false,
}

// export const reducer = (state= initState,action)=>{
//     switch(action.type){
//         case 'LOGIN':
//             if(checkLogin(action.payload.username, action.payload.password,state.listUser)){
//                 return {
//               ...state,
//                 isLogin: true
//             }
//             }else{
//                 alert("Login failed");
//                 return {...state,
//                      isLogin: false}
//             }
            
//         case 'LOGOUT':
//             sessionStorage.removeItem('userLogin');
//             return {
//               ...state,
//                 isLogin: false
//             }
//             case "REGISTER":
//                 let id = state.listUser[state.listUser.length - 1].i+1
//                 return {
//                     ...state,
//                     listUser: [...state.listUser, {...action.payload,id}]
//                 }
//         default:
//             return state
//     }
// }

export const userSlice = createSlice({
    name: "user",
        initialState: initState,
        reducers: {
            login: (state, action) => {
                if(checkLogin(action.payload.username, action.payload.password,state.listUser)){
                    return {
                      ...state,
                        isLogin: true
                    }
                }else{
                    alert("Login failed");
                    return {...state,
                         isLogin: false}
                    }
            },
            logout: (state, action) => {
                sessionStorage.removeItem('userLogin');
                return {
                     ...state,
                     isLogin: false
                 }
            },
            register: (state, action) => {
                let id = state.listUser[state.listUser.length - 1].i+1
                return {
                   ...state,
                    listUser: [...state.listUser, {...action.payload,id}]
                }
            }
        }
})

const checkLogin =(username, password,listUsers)=>{
    let check = false;
    listUsers.forEach((user)=>{
        if(user.username.toLowerCase() === username.toLowerCase() && user.password === password){
            sessionStorage.setItem('userLogin',JSON.stringify(user))
             check = true;
             return;     
        }
    })
    return check;
}