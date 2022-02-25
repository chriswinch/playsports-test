import cx from 'classnames';
import { useNavigationContext } from '~/context/navigation-context';

import styles from './Overlay.css';

export const links = () => ([
    { rel: "stylesheet", href: styles }
]);

const Overlay = () => {
    const { navOpen, setNavOpen } = useNavigationContext();

    const handleClick = () => {
        setNavOpen(false);
    };

    return <div className={cx('overlay', { 'overlay--active': navOpen })} onClick={handleClick} />
}

export default Overlay;
