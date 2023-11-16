import { DEFAULT_USER_REGISTRATION_INFO, DEFAULT_USER_REGISTRATION_STEPS } from 'app/constants/registration';
import { RegistrationInfoType } from 'app/types/registration-info-type';
import { StepperItem } from 'app/types/stepper-type';
import { createContext, useContext, useState } from 'react';

type AuthContextProviderProps = {
    children: React.ReactNode;
};

export type AuthContext = {
    registrationInfo: RegistrationInfoType;
    setRegistrationInfo: React.Dispatch<React.SetStateAction<RegistrationInfoType>>;
    steps: StepperItem[];
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    initiateRegistrationSteps: () => void;
};

const AuthContext = createContext<AuthContext>({
    registrationInfo: DEFAULT_USER_REGISTRATION_INFO,
    setRegistrationInfo: () => {},
    steps: [],
    currentStep: 0,
    setCurrentStep: () => {},
    initiateRegistrationSteps: () => {},
});

function useAuthController() {
    const [steps, setSteps] = useState<StepperItem[]>([]);
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [registrationInfo, setRegistrationInfo] = useState(DEFAULT_USER_REGISTRATION_INFO);

    const initiateRegistrationSteps = () => {
        setSteps(DEFAULT_USER_REGISTRATION_STEPS);
    };

    return { registrationInfo, setRegistrationInfo, steps, currentStep, setCurrentStep, initiateRegistrationSteps };
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    return <AuthContext.Provider value={useAuthController()}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
    const context = useContext<AuthContext>(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be inside AuthContextProvider');
    }
    return context;
}
