import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import Input from 'app/components/input/input';
import { Checkbox, Label } from 'flowbite-react';
import { useForm } from 'react-hook-form';

import { resolver } from './form-schema';

import Button from 'app/components/button/button';
import { RegistrationInfoType } from 'app/types/registration-info-type';
import styles from './user-info.module.css';

export function UserInfo({
    defaultValues,
    onSubmit,
}: {
    defaultValues: RegistrationInfoType;
    onSubmit: (data) => void;
}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver, defaultValues, mode: 'onSubmit' });

    return (
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full flex flex-col p-10 gap-4 justify-center items-center md:w-[500px] m-auto">
                <p className="text-[#181C32] text-2xl font-semibold">Account Details</p>
                <p className="text-[#7E8299] text-xs">Add your personal info</p>

                <div className={styles['social-container']}>
                    <button className={styles['social-icon']}>
                        <FcGoogle /> Sign in with Google
                    </button>
                    <button className={styles['social-icon']}>
                        <FaApple />
                        Sign in with Apple
                    </button>
                </div>

                <div className="flex w-full items-center gap-2">
                    <div className="flex-1 h-[1px] bg-[#EFF2F5]" />
                    <p className="text-[#A1A5B7] text-xs font-[500]">Or with email</p>
                    <div className="flex-1 h-[1px] bg-[#EFF2F5]" />
                </div>

                <div className="flex w-full gap-2 flex-col md:flex-row">
                    <Input
                        {...register('firstName', { required: true })}
                        className="flex-1"
                        placeholder="First Name"
                        error={errors?.firstName?.message}
                    />
                    <Input
                        {...register('lastName')}
                        className="flex-1"
                        placeholder="Last Name"
                        error={errors?.lastName?.message}
                    />
                </div>

                <Input
                    {...register('creatorName')}
                    className="w-full"
                    placeholder="Creator Name"
                    error={errors?.creatorName?.message}
                />

                <Input {...register('email')} className="w-full" placeholder="Email" error={errors?.email?.message} />

                <Input
                    {...register('phone')}
                    className="w-full"
                    placeholder="Phone Number"
                    error={errors?.phone?.message}
                />

                <Input
                    {...register('password')}
                    type="password"
                    className="w-full"
                    placeholder="Password"
                    error={errors?.password?.message}
                />

                <Input
                    {...register('confirmPassword')}
                    type="password"
                    className="w-full"
                    placeholder="Confirm Password"
                    error={errors?.confirmPassword?.message}
                />

                <div className="w-full">
                    <div className="flex items-center gap-2">
                        <Checkbox {...register('terms')} className="focus:ring-0 checked:bg-default" />
                        <Label htmlFor="accept" className="flex text-[#5E6278] font-semibold">
                            I Accept&nbsp;
                            <a href="#" className="text-[#3E97FF] hover:underline dark:text-cyan-500">
                                terms
                            </a>
                        </Label>
                    </div>
                    {errors?.terms?.message && <p className="text-xs text-red-600 pt-2">{errors?.terms?.message}</p>}
                </div>

                <Button className="w-full">Continue</Button>

                <Label htmlFor="accept" className="flex text-gray-500">
                    Already have an account?&nbsp;
                    <a href="#" className="text-default hover:underline dark:text-cyan-500">
                        Sign In
                    </a>
                </Label>
            </div>
        </form>
    );
}
