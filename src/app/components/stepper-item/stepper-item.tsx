type StepperItemProps = {
    id: number;
    title: string;
    description: string;
    hasNext: boolean;
    isActive: boolean;
};

import StepperItemStyles from './stepper-item.module.css';

export default function StepperItem({ id, title, description, hasNext, isActive }: StepperItemProps) {
    return (
        <>
            <div className={`${StepperItemStyles['item-container']} ${isActive && StepperItemStyles.active}`}>
                <div className={StepperItemStyles['item-step-count']}>{id}</div>
                <div className={StepperItemStyles['item-details-container']}>
                    <label className={StepperItemStyles['item-details-container__title']}>{title}</label>
                    <p className={StepperItemStyles['item-details-container__description']}>{description}</p>
                </div>
            </div>
            {hasNext && <div className={StepperItemStyles['dotted-line']} />}
        </>
    );
}
