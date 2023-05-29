import React from 'react'
import { Login } from './Login'
import { useSelector } from 'react-redux'
import { LoginView } from './LoginView'

export default function Main() {
    const isLogin= useSelector(state=>state.isLogin)
  return (
    <div className='App'>
        <h1>H Store</h1>
        {isLogin?<LoginView/>:<Login/>}
    </div>
  )
}
