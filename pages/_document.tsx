import Document, {Html, Main, Head, NextScript, DocumentContext} from "next/document";
import {ServerStyleSheet} from "styled-components";

export default class AppCover extends Document {
    static getInitialProps(props) {
        const sheet = new ServerStyleSheet();
        const page = props.renderPage(App => props => sheet.collectStyles(<App {...props}/>));
        const styleTags = sheet.getStyleElement();
        return {...page, styleTags};
    }

    render() {
        return (
            <Html>
                <Head/>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}