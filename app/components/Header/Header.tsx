import { Link } from "remix";
import Button, { buttonLinks } from "../Button";
import SocialButton, { socialButtonLinks} from "../SocialButton";
import Navigation, { navigationLinks } from "../Navigation";
import { useNavigationContext } from "~/context/navigation-context";

import styles from './Header.css';
import { Menu, X } from "react-feather";

export const links = () => ([
    { rel: "stylesheet", href: styles },
    ...socialButtonLinks(),
    ...buttonLinks(),
    ...navigationLinks()
]);

const Header = () => {
    const { navOpen, setNavOpen } = useNavigationContext();
    return (
        <>
            <header className="header">
                <div className="header__inner">
                    <Link className="header__logo" to="/">
                        <h1><img srcSet="/images/gcn-logo@2x.png 2x" src="/images/gcn-logo.png" alt="Global Cycling Network" /></h1>
                    </Link>

                    <div className="header__buttons">
                        <SocialButton site="facebook" />
                        <SocialButton site="twitter" />
                        <SocialButton site="instagram" />
                        <Button className="header__button" to="/">Events</Button>
                        <Button className="header__button" to="/">Club</Button>
                        <Button className="header__button" to="/">Shop</Button>
                        <Button className="header__button" to="/">Youtube</Button>
                    </div>

                    <Button
                        className="header__nav-toggle"
                        onClick={() => setNavOpen(!navOpen)}
                        aria-label='Toggle navigation'
                    >
                        {navOpen ? <X /> : <Menu />}
                    </Button>
                </div>
            </header>

            <Navigation />
        </>
    )
}

export default Header;
