import { useEffect } from "react";
import FrameHeader from "../components/FrameHeader/FrameHeader";
import FrameMainContent from "../components/FrameMainContent/FrameMainContent";
import FrameMenuAppsHidden from "../components/FrameMenuAppsHidden/FrameMenuAppsHidden";
import FrameMenuCrearHidden from "../components/FrameMenuCrearHidden/FrameMenuCrearHidden";
import FrameMenuLeftHidden from "../components/FrameMenuLeftHidden/FrameMenuLeftHidden";
import FrameMenuLeftSmall from "../components/FrameMenuLeftSmall/FrameMenuLeftSmall";
import FrameMenuNotificationsHidden from "../components/FrameMenuNotificationsHidden/FrameMenuNotificationsHidden";
import FrameMenuProfileHidden from "../components/FrameMenuProfileHidden/FrameMenuProfileHidden";

import './YouTubePage.css';

const YouTubePage = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/js/YouTubePage.js'; // Ruta pública desde la carpeta public
        script.async = true;
        document.body.appendChild(script);

        // Limpiar el script cuando el componente se desmonte
        return () => {
            document.body.removeChild(script);
        };
    }, []);


    return <>
        <header className="header">
            <FrameHeader></FrameHeader>
        </header>
        <FrameMenuLeftHidden></FrameMenuLeftHidden>
        <FrameMenuLeftSmall></FrameMenuLeftSmall>
        <FrameMenuCrearHidden></FrameMenuCrearHidden>
        <FrameMenuAppsHidden></FrameMenuAppsHidden>
        <FrameMenuNotificationsHidden></FrameMenuNotificationsHidden>
        <FrameMenuProfileHidden></FrameMenuProfileHidden>
        <main className="main-content">
            <FrameMainContent></FrameMainContent>
        </main>
    </>;
}
export default YouTubePage