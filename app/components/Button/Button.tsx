import cx from 'classnames';
import { Link } from "remix";
import styles from './Button.css';

interface Props {
    className?: string;
}

interface To extends Props {
    to: string;
    onClick?: never;
}

interface Click extends Props {
    to?: never;
    onClick: () => void;
}

type ButtonProps = To | Click;

export const links = () => ([
    { rel: "stylesheet", href: styles }
]);

const Button: React.FC<ButtonProps> = ({ children, onClick, to, className, ...rest }) => {
    if (to) return (
        <Link className={cx('button', className)} to={to} {...rest}>
            {children}
        </Link>
    );

    return (
        <button className={cx('button', className)} onClick={onClick} {...rest}>
            {children}
        </button>
    );
}

export default Button;
