import React from 'react'

export const LoginView = () => {
    let user = JSON.parse(sessionStorage.getItem('userLogin')  ) 
  return (
    <div>
        <p>Chào mừng bạn {user.fullname} đến với trang web</p>
    </div>
  )
}
