import styles from './Footer.css';

export const links = () => ([
    { rel: "stylesheet", href: styles }
]);

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer__inner'>
                <h4>Global Cycling Network</h4>
            </div>
        </footer>
    )
}

export default Footer;
