import Button from 'app/components/button/button';
import { Controller, useForm } from 'react-hook-form';
import { FaArrowRight, FaUserCircle } from 'react-icons/fa';
import { MdBusinessCenter } from 'react-icons/md';
import AccountTypeItem from './account-type-item';

export default function ChooseAccountType({
    defaultValues,
    onSubmit,
}: {
    defaultValues: { accountType: string };
    onSubmit: (data) => void;
}) {
    const {
        control,
        watch,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues, mode: 'onSubmit' });

    const onChange = (type) => {
        setValue('accountType', type);
    };

    const accountType = watch('accountType');

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="w-full flex flex-col p-10 gap-4">
                <p className="font-semibold text-2xl text-[#181C32]">Choose Account Type</p>
                <p className="text-[#A1A5B7] text-sm font-[500]">
                    If you need more info, please visit our{' '}
                    <a href="#" className="text-default">
                        help page
                    </a>
                    .
                </p>
                <Controller
                    name="accountType"
                    control={control}
                    rules={{ required: true }}
                    render={() => (
                        <div className="w-full">
                            <div className="flex flex-col md:flex-row gap-4 pt-8">
                                <AccountTypeItem
                                    title="Creator"
                                    desc="Sign-up as a creator"
                                    value={'creator'}
                                    icon={(className) => <FaUserCircle fontSize={26} className={className} />}
                                    isActive={accountType === 'creator'}
                                    onClick={onChange}
                                />
                                <AccountTypeItem
                                    title="Creator"
                                    desc="Sign-up as a Business"
                                    value={'business'}
                                    icon={(className) => <MdBusinessCenter fontSize={26} className={className} />}
                                    isActive={accountType === 'business'}
                                    onClick={onChange}
                                />
                            </div>
                            {errors.accountType && (
                                <p className="text-red-600 text-xs pt-2">Account Type is Required</p>
                            )}
                        </div>
                    )}
                />

                <Button className="gap-4 self-end">
                    Continue <FaArrowRight />
                </Button>
            </div>
        </form>
    );
}
