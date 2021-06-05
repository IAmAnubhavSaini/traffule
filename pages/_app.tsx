import './styles/globals.css';
import './styles/react-toggle.css';
import Page from "../components/Page";

import type {AppProps} from "next/app";
import dynamic from "next/dynamic";
import React from "react";

const App = ({Component, pageProps}: AppProps) => {
    return (
        <Page>
            <Component {...pageProps} />
        </Page>
    );
};

export default dynamic(() => Promise.resolve(App), {
    ssr: false,
});
