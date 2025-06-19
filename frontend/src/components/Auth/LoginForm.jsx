import React, { useState } from 'react'


const LoginForm = ({API, router, Swal, loading, setLoading}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
        const res = await API.post(`/api/auth/login`, {
            email,
            password
        });

        Swal.fire({
            icon: 'success',
            title: 'Logged in successfully',
            text: `Welcome, ${res.data.user.fullName}`,
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            router.push('/dashboard');
          });
      
    } catch (err) {
        setError(err.response?.data?.message || 'Login failed');
        Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: err.response?.data?.message || 'Login failed',
          });
    } finally {
        setLoading(false);
    }
  }
  return (
    <form onSubmit={handleSubmit} action="" className='w-[22rem] flex flex-col gap-y-4'>



    <div className='flex flex-col gap-y-1'>
        <label htmlFor="" className='text-sm'>Email Address:</label>
        <input onChange={e => setEmail(e.target.value)} type="email" placeholder='Enter your email' name="" id="" className='w-full border border-gray-300 py-2 px-4 text-sm rounded-sm' required />
    </div>

    <div>
        <label htmlFor="" className='text-sm'>Password:</label>
        <input onChange={e => setPassword(e.target.value)} type="password" placeholder='Enter your password' name="" id="" className='w-full border border-gray-300 py-2 px-4 text-sm rounded-sm'/>
    </div>

    <div className='flex items-center justify-between text-sm'>
        <div className='flex items-center gap-x-1'>
            <input type="checkbox" name="" id="" className='cursor-pointer' />
            <span>Remember me</span>
        </div>

        <span className='text-[#6366F1] cursor-pointer'>
            Forgot Password?
        </span>
    </div>

    <button className='bg-[#6366F1] py-2 text-sm text-white rounded-sm cursor-pointer'>{loading ? 'Signing in...' : 'Sign in to your account'}</button>
</form>
  )
}

export default LoginForm