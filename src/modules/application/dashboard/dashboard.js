"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../auth/auth.action'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export const Dashboard = () => {

    const router = useRouter();
    const dispatch = useDispatch();
    const authState = useSelector(state => state.auth);

    const logout = () => {
        dispatch(authActions.postLogout(
            (response) => {
                if (response.success === true) {
                    toast.success(response.message);
                    router.push('/login');
                }
            },
            (error) => {
                toast.error(error.error || 'Login failed');
                setLoading(false);
            },
        ))
    };
    console.log(authState, 'authState')

    return (
        <div className='text-center mt-6'>
            <h1 className="text-4xl font-bold">Welcome {authState?.user?.firstName} {authState?.user?.lastName}</h1>
            <Button variant='default' className="mt-4" onClick={logout}>Logout</Button>
        </div>
    )
}
