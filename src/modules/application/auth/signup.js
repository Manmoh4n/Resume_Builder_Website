'use client'
import { Input } from '@/components/ui/input';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import {SignupSchema} from '@/validations';
import { Button } from '@/components/ui/button';

export const Signup = () => {
    const [showPass, setShowPass] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(SignupSchema),
        mode: 'onBlur',
    });

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                }),
            });
            const result = await response.json();
            if (result.success) {
                alert('Signup successful!');
                reset();
                router.push('/login');
            } else {
                alert(result.error || 'Signup failed');
            }
        } catch (error) {
            console.error('Signup Error:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="md:w-1/2 p-6">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>

                {/* Email Field */}
                <div>
                    <Label htmlFor="email" className="mb-2">
                        Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        {...register('email')}
                        className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                           {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Password Field */}
                <div className="mt-4">
                    <Label htmlFor="password" className="mb-2">
                        Password <span className="text-red-500">*</span>
                    </Label>
                    <InputGroup className={errors.password ? 'border-red-500' : ''}>
                        <InputGroupInput
                            id="password"
                            placeholder="Enter strong password"
                            type={showPass ? 'text' : 'password'}
                            {...register('password')}
                        />
                        <InputGroupAddon align="inline-end">
                            <InputGroupButton
                                type="button"
                                aria-label="Toggle password visibility"
                                title="Toggle password"
                                size="icon-xs"
                                onClick={() => setShowPass(!showPass)}
                            >
                                {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
                            </InputGroupButton>
                        </InputGroupAddon>
                    </InputGroup>
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            {errors.password.message}
                        </p>
                    )}
                    {!errors.password && (
                        <p className="text-gray-500 text-xs mt-1">
                            Must be 8+ characters with uppercase, lowercase, number & special character
                        </p>
                    )}
                </div>

                {/* Confirm Password Field */}
                <div className="mt-4">
                    <Label htmlFor="confirmPassword" className="mb-2">
                        Confirm Password <span className="text-red-500">*</span>
                    </Label>
                    <InputGroup className={errors.confirmPassword ? 'border-red-500' : ''}>
                        <InputGroupInput
                            id="confirmPassword"
                            placeholder="Re-enter password"
                            type={showConfirm ? 'text' : 'password'}
                            {...register('confirmPassword')}
                        />
                        <InputGroupAddon align="inline-end">
                            <InputGroupButton
                                type="button"
                                aria-label="Toggle confirm password visibility"
                                title="Toggle confirm password"
                                size="icon-xs"
                                onClick={() => setShowConfirm(!showConfirm)}
                            >
                                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                            </InputGroupButton>
                        </InputGroupAddon>
                    </InputGroup>
                    {errors.confirmPassword && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            {errors.confirmPassword.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    disabled={loading}
                    size={'lg'}
                    className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
                >
                    {loading ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Creating account...
                        </span>
                    ) : (
                        'Sign Up'
                    )}
                </Button>

                {/* Already have account */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{' '}
                    <a href="/login" className="text-blue-600 hover:underline font-medium">
                        Login here
                    </a>
                </p>
            </form>
        </div>
    );
};