import { Stepper as MantineStepper } from "@mantine/core";
import { StepperProps } from "./types";

export const Stepper = ({ stepsAmmount, activeStep, mt }: StepperProps) => {
    return (
        <MantineStepper
            active={activeStep}
            w={230}
            sx={(theme) => ({
                position: "relative",
                zIndex: 10,

                ".mantine-Stepper-steps": {
                    position: "relative",
                    zIndex: 3,
                    gap: 3,
                    justifyContent: "center",
                    height: 54,
                },

                ".mantine-Stepper-stepWrapper": {
                    display: "none",
                    borderRadius: 4,
                },
                ".mantine-Stepper-separator": {
                    height: 6,
                    borderRadius: 4,
                    width: 41,
                    minWidth: 41,
                    maxWidth: 41,
                    margin: 0,
                    background: theme.colors.dark[4],
                },
                ".mantine-Stepper-separatorActive": {
                    height: 6,
                    borderRadius: 4,
                    width: 41,
                    minWidth: 41,
                    maxWidth: 41,
                    margin: 0,
                    background: theme.colors.green[8],
                },
            })}
            mt={mt}
            maw="fit-content"
        >
            {Array.from({ length: stepsAmmount + 1 }, (_, index) => (
                <MantineStepper.Step label="" description="" key={index} />
            ))}
        </MantineStepper>
    );
};
