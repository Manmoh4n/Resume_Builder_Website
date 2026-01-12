'use client'
import { Input } from '@/components/ui/input';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import {LoginSchema} from "@/validations"
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './auth.action';

export const Login = () => {

    const dispatch = useDispatch();
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(LoginSchema),
        mode: "onChange",
    });

    const onSubmit = async (data) => {
        const payload = {
            username: data.email,
            password: data.password,
            expiresInMins: 30
        }
        setLoading(true);
        dispatch(authActions.postLogin(
            payload,
            (response) => {
                if (response.success === true) {
                    setLoading(false);
                    toast.success("Login Successful!");
                    // reset();
                    router.push('/dashboard');
                }
            },
            (error) => {
                toast.error(error.error || 'Login failed');
                setLoading(false);
            },
        ))
    };

    return (
        <div className="md:w-1/2 p-6">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>

                {/* Email Field */}
                <div>
                    <Label htmlFor="email" className="mb-2"> Email<span className="text-red-500">*</span></Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter Your Email"
                        {...register('email', { required: true })}
                        className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                {/* Password Field */}
                <div className="mt-4">
                    <Label htmlFor="password" className="mb-2"> Password<span className="text-red-500">*</span></Label>
                    <InputGroup className={errors.password ? 'border-red-500' : ''}>
                        <InputGroupInput
                            id="password"
                            placeholder="Enter Password"
                            type={showPass ? 'text' : 'password'}
                            {...register('password', { required: true })}
                        />
                        <InputGroupAddon align="inline-end">
                            <InputGroupButton
                                type="button"
                                size="icon-xs"
                                onClick={() => setShowPass(!showPass)}
                            >
                                {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
                            </InputGroupButton>
                        </InputGroupAddon>
                    </InputGroup>
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    disabled={loading}
                    size={'lg'}
                    className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                    {loading ? "Logging in..." : "Login"}
                </Button>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Don’t have an account?{' '}
                    <a href="/signup" className="text-blue-600 hover:underline font-medium">
                        Register here
                    </a>
                </p>
            </form>
        </div>
    );
};
