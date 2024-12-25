import { useIntegration } from "@telegram-apps/react-router-integration";
import { initNavigator, SDKProvider } from "@telegram-apps/sdk-react";
import { useEffect, useMemo } from "react";
import {
    Navigate,
    Route,
    Router,
    Routes,
    useRouteError,
} from "react-router-dom";
import "@/configs/i18n";
import { MainLayout, OnboardingLayout } from "@/layouts";
import { mainRoutes } from "@/_routes";
import { MainProvider } from "./providers";
import { ResponseInterceptor } from "./components";
import { useTranslation } from "react-i18next";
import { useLaunguageStore } from "./hooks";
import ru from "dayjs/locale/ru";
import es from "dayjs/locale/es-us";
import en from "dayjs/locale/en";
import dayjs from "@/_libs/dayjs";
import WebApp from "@twa-dev/sdk";
import { rulesRoutes } from "./domains/rules/routes";
import { GameLayout } from "./layouts/GameLayout";
import { gameRoute } from "./domains/game/routes";

function ErrorBoundary() {
    let error = useRouteError();
    console.error(error);
    return <div>Dang!</div>;
}

const getLocale = (language?: string) => {
    switch (language) {
        case "es":
            return es;
        case "ru":
            return ru;
        default:
            return en;
    }
};

export const AppRouter = () => {
    const navigator = useMemo(() => initNavigator("app-navigation-state"), []);
    const [location, reactNavigator] = useIntegration(navigator);

    const { language } = useLaunguageStore();
    const { i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(language.language);
        dayjs.locale(getLocale(language.language));
    }, [language.language]);

    useEffect(() => {
        if (!WebApp) return;

        WebApp?.ready();
        WebApp?.expand();
        document.body.style.height = `var(--tg-viewport-stable-height)`;
        setTimeout(() => {
            WebApp?.expand();
            WebApp?.disableVerticalSwipes();
            document.getElementById("root")?.setAttribute(
                "style",
                `
        min-height: var(--tg-viewport-stable-height);  
        height: var(--tg-viewport-stable-height);   
        width: 100%;
        z-index: 5;
        top: 0;
        bottom: 0;
        overflow-y: scroll;
        overflow-x: hidden;
        clear: both;
        `
            );
        }, 1500);
        setTimeout(() => {
            WebApp?.expand();
            document.getElementById("root")?.setAttribute(
                "style",
                `
        min-height: var(--tg-viewport-stable-height);  
        height: var(--tg-viewport-stable-height);   
        width: 100%;
        z-index: 5;
        top: 0;
        bottom: 0;
        overflow-y: scroll;
        overflow-x: hidden;
        clear: both;
        `
            );
        }, 3000);
        setTimeout(() => {
            WebApp?.expand();
            document.getElementById("root")?.setAttribute(
                "style",
                `
        min-height: var(--tg-viewport-stable-height);  
        height: var(--tg-viewport-stable-height);   
        width: 100%;
        z-index: 5;
        top: 0;
        bottom: 0;
        overflow-y: scroll;
        overflow-x: hidden;
        clear: both;
        `
            );
        }, 5000);
        setTimeout(() => {
            WebApp?.expand();
            document.getElementById("root")?.setAttribute(
                "style",
                `
        min-height: var(--tg-viewport-stable-height);  
        height: var(--tg-viewport-stable-height);   
        width: 100%;
        z-index: 5;
        top: 0;
        bottom: 0;
        overflow-y: scroll;
        overflow-x: hidden;
        clear: both;
        `
            );
        }, 8000);
    }, [[WebApp]]);

    useEffect(() => {
        if (!import.meta.env.DEV) {
            navigator.attach();
        }
        return () => navigator.detach();
    }, [navigator]);

    // useEffect(() => {
    //   if (import.meta.env.VITE_IS_DEV_BOT === 'true') {
    //     import('eruda').then((lib) => lib.default.init({}))
    //   }
    // }, [])

    useEffect(() => {
        WebApp?.expand();
        document.getElementById("root")?.setAttribute(
            "style",
            `
        min-height: var(--tg-viewport-stable-height);  
        height: var(--tg-viewport-stable-height);   
        width: 100%;
        z-index: 5;
        top: 0;
        bottom: 0;
        overflow-y: scroll;
        overflow-x: hidden;
        clear: both;
        `
        );
    }, [WebApp]);

    return (
        <SDKProvider acceptCustomStyles>
            <MainProvider>
                <Router location={location} navigator={reactNavigator}>
                    <Routes>
                        <Route path="" Component={MainLayout}>
                            {mainRoutes.map((route) => (
                                <Route
                                    key={route.path}
                                    {...route}
                                    errorElement={<ErrorBoundary />}
                                />
                            ))}
                        </Route>
                        <Route path="" Component={OnboardingLayout}>
                            {rulesRoutes.map((route) => (
                                <Route
                                    key={route.path}
                                    {...route}
                                    errorElement={<ErrorBoundary />}
                                />
                            ))}
                        </Route>
                        <Route path="" Component={GameLayout}>
                            <Route
                                {...gameRoute}
                                errorElement={<ErrorBoundary />}
                            />
                        </Route>

                        {!import.meta.env.DEV && (
                            <Route path="*" element={<Navigate to="/" />} />
                        )}
                    </Routes>
                    <ResponseInterceptor />
                </Router>
            </MainProvider>
        </SDKProvider>
    );
};
