import ChooseAccountType from 'app/components/registration-steps/choose-account-type/choose-account-type';
import { UserInfo } from 'app/components/registration-steps/user-info/user-info';
import { useAuthContext } from 'app/contexts/AuthContext';
import { useLayoutEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const { currentStep, setCurrentStep, initiateRegistrationSteps, registrationInfo, setRegistrationInfo } =
        useAuthContext();

    useLayoutEffect(() => {
        setCurrentStep(0);
        initiateRegistrationSteps();
    }, []);

    const stepOneDefaultValues = useMemo(() => {
        return {
            accountType: registrationInfo.accountType,
        };
    }, [registrationInfo]);

    const handleStepOneSubmit = (data) => {
        setRegistrationInfo((prev) => ({ ...prev, ...data }));
        setCurrentStep((prev) => prev + 1);
    };

    const handleStepTwoSubmit = (data) => {
        setRegistrationInfo((prev) => ({ ...prev, ...data }));
        navigate('/home');
    };

    return (
        <>
            {currentStep === 0 && (
                <ChooseAccountType defaultValues={stepOneDefaultValues} onSubmit={handleStepOneSubmit} />
            )}
            {currentStep === 1 && <UserInfo defaultValues={registrationInfo} onSubmit={handleStepTwoSubmit} />}
        </>
    );
}
