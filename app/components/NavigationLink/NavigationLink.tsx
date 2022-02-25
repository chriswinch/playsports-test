import React, { useState } from 'react';
import { Link } from "remix";
import cx from 'classnames';

import Button from '../Button';
import { useNavigationContext } from "~/context/navigation-context";

import styles from './NavigationLink.css';
import { ArrowDown, ArrowUp } from 'react-feather';

interface Props {
    to: string;
    text: string;
    className?: string;
}

export const links = () => ([
    { rel: "stylesheet", href: styles },
]);

const NavigationLink: React.FC<Props> = ({ className, to, children, text }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { navOpen } = useNavigationContext();

    const handleToggle = (e: MouseEvent) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    const hasChildren = React.Children.count(children) > 0;

    return (
        <div className="navigation-link__wrapper">
            <Link className={cx('navigation-link', className, { 'navigation-link--active': isOpen })} to={to} tabIndex={navOpen ? 1 : -1}>
                {text}
                {hasChildren && (
                    <Button
                        className="navigation-link__toggle"
                        onClick={handleToggle}
                    >
                        {isOpen ? <ArrowUp /> : <ArrowDown />}
                    </Button>
                )}
            </Link>
            {React.Children.count(children) > 0 && (
                <div className={cx('navigation-link__dropdown', { 'navigation-link__dropdown--active': isOpen })}>
                    {children}
                </div>
            )}
        </div>
    )
};

export default NavigationLink;
