import StepperItem from 'app/components/stepper-item/stepper-item';
import { useAuthContext } from 'app/contexts/AuthContext';
import { ReactNode } from 'react';

type AuthLayoutProps = {
    children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
    const { steps, currentStep } = useAuthContext();
    return (
        <div className="flex flex-col md:flex-row h-full">
            <div
                className="flex flex-col flex-1 p-10 md:pt-[125px] justify-center items-center"
                style={{ backgroundImage: 'url(/images/auth-bg.png)' }}
            >
                <img
                    className="pb-10 md:pb-[100px]"
                    src={require('app/assets/images/logo.png')}
                    width={260}
                    height={70}
                    alt="Company Logo"
                />

                <div className="h-full pb-10">
                    {steps.map((step, i) => (
                        <StepperItem
                            key={i}
                            id={i + 1}
                            {...step}
                            isActive={currentStep === i}
                            hasNext={i !== steps.length - 1}
                        />
                    ))}
                </div>

                <div className="flex w-[250px] justify-between">
                    <a href="#" className="text-success text-xs font-[500]">
                        Terms
                    </a>
                    <a href="#" className="text-success text-xs font-[500]">
                        Plans
                    </a>
                    <a href="#" className="text-success text-xs font-[500]">
                        Contact Us
                    </a>
                </div>
            </div>
            <div className="flex-[2] flex items-center">{children}</div>
        </div>
    );
}
