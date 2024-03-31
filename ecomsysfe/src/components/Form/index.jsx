import style from './Form.module.scss';

export default function Form({ className, children }) {
    return <div className={`${style.container} ${className}`}>{children}</div>;
}
