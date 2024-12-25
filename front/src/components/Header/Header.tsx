import { Badge, Flex, Title } from "@mantine/core";
import { HeaderProps } from "./types";
import { Gift } from "lucide-react";

export const Header = ({ title, icon }: HeaderProps) => {
    return (
        <Flex
            miw="100%"
            justify={"center"}
            align="center"
            py={16}
            sx={{ position: "fixed", zIndex: 10, left: 0, top: 0 }}
            bg="dark.6"
        >
            <Flex align="center" gap={4}>
                {icon}
                <Title order={4} weight={700}>
                    {title}
                </Title>
            </Flex>
            <Badge
                sx={{ position: "absolute", right: 10 }}
                size="lg"
                variant="outline"
                leftSection={<Gift size={20} style={{ marginTop: 6 }} />}
            >
                PRO
            </Badge>
        </Flex>
    );
};
