import { forwardRef, useMemo, useState } from 'react';
import styles from './input.module.css';
import { Eye, EyeSlash } from 'app/assets/svgs/icons';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    containerClass?: string;
    error: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ type = 'text', containerClass = '', error, ...props }, ref) => {
        const [show, setShow] = useState(false);

        const typeValue = useMemo(() => {
            if (type === 'password') {
                return show ? 'text' : 'password';
            }
            return type;
        }, [type, show]);
        
        return (
            <div className={`${styles['input-container']} w-full ${containerClass}`}>
                <div className={styles.input}>
                    <input type={typeValue} ref={ref} {...props} />
                    {type === 'password' && show && (
                        <span onClick={() => setShow(!show)}>
                            <Eye />
                        </span>
                    )}
                    {type === 'password' && !show && (
                        <span onClick={() => setShow(!show)}>
                            <EyeSlash />
                        </span>
                    )}
                </div>
                {error && <p className="text-xs text-red-600 pt-2">{error}</p>}
            </div>
        );
    },
);

Input.displayName = 'Input';

export default Input;
