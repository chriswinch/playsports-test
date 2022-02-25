import { useEffect, useState } from 'react';
import cx from 'classnames';
import Search, { searchLinks } from '../Search';
import Button, { buttonLinks } from '../Button';
import SocialButton, { socialButtonLinks } from '../SocialButton';
import NavigationLink, { navigationLinks } from '../NavigationLink';
import { useNavigationContext } from '~/context/navigation-context';
import useWindowResize from '~/hooks/useWindowResize';

import styles from './Navigation.css';

export const links = () => ([
    { rel: "stylesheet", href: styles },
    ...navigationLinks(),
    ...searchLinks(),
    ...buttonLinks(),
    ...socialButtonLinks()
]);

const Navigation = () => {
    const { navOpen } = useNavigationContext();
    const [isResizing, setIsResizing] = useState(false);

    // Stop nav animating between breakpoints
    useWindowResize(
        () => setIsResizing(true),
        () => setIsResizing(false)
    );

    // Hack to stop page scroll when nav is open
    // Cleaner way to do this would be have a wrapper higher up the dom tree
    // that has access to the nav state so that we can set the styles directly
    useEffect(() => {
        if (navOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [navOpen])

    return (
        <nav className={cx('navigation', { 'navigation--active': navOpen, 'navigation--resizing': isResizing })} aria-hidden={!navOpen} aria-expanded={navOpen}>
            <div className="navigation__inner">
                <div className="navigation__list">
                    <NavigationLink to="/gcn-show" text="GCN Show" />
                    <NavigationLink to="/how-to" text="How To" />
                    <NavigationLink to="/maintenance" text="Maintenance" />
                    <NavigationLink to="/ask-gcn" text="Ask GCN" />
                    <NavigationLink to="/training" text="Training" />
                    <NavigationLink to="/features" text="Features">
                        <NavigationLink className="navigation-link__sub" to="/feature-1" text="Conor Dunne" />
                        <NavigationLink className="navigation-link__sub" to="/feature-2" text="Daniel Lloyd" />
                        <NavigationLink className="navigation-link__sub" to="/feature-3" text="James Lowsley-Williams" />
                    </NavigationLink>
                    <NavigationLink to="/top-tens" text="Top 10s" />
                    <NavigationLink to="/gcn-racing" text="GCN Racing" />
                    <NavigationLink to="/gcn-tech" text="GCN Tech" />
                    <NavigationLink to="/presenters" text="Presenters">
                        <NavigationLink className="navigation-link__sub" to="/presenters/connor-dunne" text="Conor Dunne" />
                        <NavigationLink className="navigation-link__sub" to="/presenters/daniel-lloyd" text="Daniel Lloyd" />
                        <NavigationLink className="navigation-link__sub" to="/presenters/james-lowsley-williams" text="James Lowsley-Williams" />
                        <NavigationLink className="navigation-link__sub" to="/presenters/jon-cannings" text="Jon Cannings" />
                        <NavigationLink className="navigation-link__sub" to="/presenters/manon-lloyd" text="Manon Lloyd" />
                        <NavigationLink className="navigation-link__sub" to="/presenters/oliver-bridgewood" text="Oliver Bridgewood" />
                    </NavigationLink>
                </div>
                <div className={cx('navigation__mobile-only', 'navigation__buttons')}>
                    <Button className="navigation__button" to="/">Events</Button>
                    <Button className="navigation__button" to="/">Club</Button>
                    <Button className="navigation__button" to="/">Shop</Button>
                    <Button className="navigation__button" to="/">Youtube</Button>
                </div>
                <div className="navigation__search">
                    <Search />
                </div>
                <div className={cx('navigation__mobile-only', 'navigation__social')}>
                    <SocialButton site="facebook" />
                    <SocialButton site="twitter" />
                    <SocialButton site="instagram" />
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
