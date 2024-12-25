import { Stack } from "@mantine/core";
import { useEffect } from "react";
import { useBackButton } from "@/hooks";
import { SettingsLanguagePicker } from "../components";
import { useTranslation } from "react-i18next";
import { Settings } from "lucide-react";
import { Header } from "@/components";

export const SettingsMainPage = () => {
    const { t } = useTranslation();

    const { hide } = useBackButton();

    useEffect(() => {
        hide();
    }, []);

    return (
        <Stack justify="center" align="center" spacing={0} mt={100}>
            <Header
                title={t("settings.components.title")}
                icon={<Settings size={30} />}
            />
            <SettingsLanguagePicker />
        </Stack>
    );
};
