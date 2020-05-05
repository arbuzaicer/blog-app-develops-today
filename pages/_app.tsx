import React from 'react';
import '../reset.css';

interface IMyApp {
    Component: any
    pageProps: any
}

 const MyApp: React.FC<IMyApp> = ({ Component, pageProps}) => {
    return <Component {...pageProps} />
}

export default MyApp;
