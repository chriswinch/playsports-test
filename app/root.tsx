import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";

import Header, { headerLinks } from "./components/Header";
import Footer, { footerLinks } from "./components/Footer";
import Overlay, { overlayLinks } from "./components/Overlay";
import { NavigationProvider } from "./context/navigation-context";

import resetStyles from "./styles/reset.css";
import indexStyles from './styles/index.css';

export const meta: MetaFunction = () => {
    return { title: "GCN Nav Test", description: 'Navigate to the best cycling content' };
};

export const links: LinksFunction = () => ([
    { rel: "stylesheet", href: resetStyles },
    { rel: "stylesheet", href: indexStyles },
    ...headerLinks(),
    ...footerLinks(),
    ...overlayLinks()
])

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <Meta />
                <Links />
            </head>

            <body>
                <NavigationProvider>
                    <Header />
                    <Outlet />
                    <Footer />
                    <Overlay />
                </NavigationProvider>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
