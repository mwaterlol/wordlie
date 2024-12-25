import {
    useMiniApp,
    useThemeParams,
    useViewport,
    bindMiniAppCSSVars,
    bindThemeParamsCSSVars,
    bindViewportCSSVars,
} from "@telegram-apps/sdk-react";
import { useEffect } from "react";

export const useTelegramInit = () => {
    const miniApp = useMiniApp();
    const themeParams = useThemeParams();
    const viewport = useViewport();

    useEffect(() => {
        return bindMiniAppCSSVars(miniApp, themeParams);
    }, [miniApp, themeParams]);

    useEffect(() => {
        return bindThemeParamsCSSVars(themeParams);
    }, [themeParams]);

    useEffect(() => {
        return viewport && bindViewportCSSVars(viewport);
    }, [viewport]);
    useEffect(() => {
        miniApp.setBgColor("#25262b");
        miniApp.setHeaderColor("#25262b");
    }, []);
};
