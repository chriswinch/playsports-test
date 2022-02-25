import cx from 'classnames';
import { Facebook, Twitter, Instagram } from "react-feather"
import styles from './SocialButton.css';

interface Props {
    site: 'facebook' | 'twitter' | 'instagram',
    className?: string,
}

const sites = {
    facebook: {
        url: 'https://facebook.com',
        icon: Facebook
    },
    twitter: {
        url: 'https://twitter.com',
        icon: Twitter
    },
    instagram: {
        url: 'https://instagram.com',
        icon: Instagram
    }
}

export const links = () => ([
    { rel: "stylesheet", href: styles }
])

const SocialButton: React.FC<Props> = ({ site, className }) => {
    const { url, icon: Icon } = sites[site];

    return (
        <a
            className={cx('social-button', className)}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Icon />
        </a>
    )
}

export default SocialButton;
