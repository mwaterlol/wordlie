import { languages, LanguageType } from "@/configs/i18n";
import { Group, Select, Stack, Text } from "@mantine/core";
import { forwardRef, FunctionComponent, SVGProps } from "react";
import { useTranslation } from "react-i18next";
import images from "./images";
import { useLaunguageStore } from "@/hooks";
import { initHapticFeedback } from "@telegram-apps/sdk-react";

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
    icon: FunctionComponent<
        SVGProps<SVGSVGElement> & {
            title?: string;
        }
    >;
    label: string;
    value: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
    ({ icon: Icon, label, ...others }: ItemProps, ref) => (
        <div ref={ref} {...others}>
            <Group noWrap>
                <Icon />
                <div>
                    <Text size="sm">{label}</Text>
                </div>
            </Group>
        </div>
    )
);

export const SettingsLanguagePicker = () => {
    const { t, i18n } = useTranslation();

    const { setLanguage } = useLaunguageStore();

    const hapticFeedback = initHapticFeedback();
    const options: ItemProps[] = languages.map((lang) => ({
        label: lang.label,
        value: lang.value,
        icon: images[lang.value as LanguageType],
    }));

    const onChangeLanguage = (value: LanguageType | null) => {
        if (!value) {
            return;
        }

        hapticFeedback.selectionChanged();
        i18n.changeLanguage(value);
        setLanguage(value);
    };
    return (
        <Stack spacing={4} miw="100%" mt={8}>
            <Text
                color="white"
                size="sm"
                sx={{ whiteSpace: "nowrap", flexGrow: 1 }}
                weight={600}
            >
                {t("settings.root.components.language")}
            </Text>
            <Select
                data={options}
                value={i18n.language}
                onChange={onChangeLanguage}
                itemComponent={SelectItem}
                dropdownPosition="bottom"
                sx={{
                    input: { height: 48, color: "white" },
                    "& .mantine-Select-dropdown": {
                        paddingTop: 3,
                        paddingBottom: 3,
                    },
                }}
            />
        </Stack>
    );
};
