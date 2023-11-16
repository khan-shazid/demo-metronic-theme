import { RegistrationInfoType } from "app/types/registration-info-type";
import { StepperItem } from "app/types/stepper-type";

export const DEFAULT_USER_REGISTRATION_INFO: RegistrationInfoType = {
    accountType: '',
    firstName: '',
    lastName: '',
    creatorName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    terms: false,
};

export const DEFAULT_USER_REGISTRATION_STEPS: StepperItem[] = [
    {
        title: 'Account Type',
        description: 'Select your account type',
    },
    {
        title: 'Personal Info',
        description: 'Setup your personal Info',
    },
    {
        title: 'Verification',
        description: 'Verify your account.',
    },
    {
        title: 'Creator Info',
        description: 'Setup creator details',
    },
    {
        title: 'Completed',
        description: 'Your account is created',
    },
];