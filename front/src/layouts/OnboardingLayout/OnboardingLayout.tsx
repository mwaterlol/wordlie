import { Header, Navigation, Stepper } from "@/components";
import { Stack } from "@mantine/core";
import { Outlet, useLocation } from "react-router-dom";
import { getActiveStepIndex } from "./utils";
import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import { useTranslation } from "react-i18next";
import { CircleHelp } from "lucide-react";

export const OnboardingLayout = () => {
    const location = useLocation();
    const { t } = useTranslation();
    const activeStep = getActiveStepIndex(location.pathname);

    useEffect(() => {
        document.getElementById("root")?.setAttribute(
            "style",
            `
        min-height: 100%;  
        height: 100%;   
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
        <Stack align="center" h="100%">
            <Stepper stepsAmmount={4} activeStep={activeStep} mt={50} />
            <Stack px="md" pb={170}>
                <Header
                    title={t("rules.components.title")}
                    icon={<CircleHelp size={20} />}
                />
                <Outlet />
            </Stack>
            <Navigation />
        </Stack>
    );
};
