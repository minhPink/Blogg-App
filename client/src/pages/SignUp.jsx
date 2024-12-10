import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'


export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-4xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
          <Link to="/" className='text-4xl font-bold dark:text-white'>

            <span className="px-2 py-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-lg text-white">Minh2K3's</span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            Đây là sản phẩm thử nghiệm. Bạn có thể đăng nhập với email và mật khẩu
            hoặc với Google
          </p>
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div className=''>
              <Label htmlFor='user' value='Tên'/>
              <TextInput
                type='text'
                placeholder='Tên'
                id='username'
              />
            </div>
            <div className=''>
              <Label htmlFor='email' value='Email'/>
              <TextInput
                type='text'
                placeholder='Email'
                id='email'
              />
            </div>
            <div className=''>
              <Label htmlFor='password' value='Mật khẩu'/>
              <TextInput
                type='password'
                placeholder='Mật khẩu'
                id='password'
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Đăng ký 
            </Button>
          </form>
          <div className='flex gap-2 mt-5'>
            <span>Bạn có tài khoản ?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

 