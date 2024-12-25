import {
  AccordionControlProps,
  AccordionItemProps,
  AccordionPanelProps,
  AccordionProps,
  Card,
  Accordion as MantineAccordion,
  Stack,
} from '@mantine/core'

export const Accordion = ({ sx, children, ...props }: AccordionProps) => {
  return (
    <MantineAccordion
      multiple
      miw="100%"
      sx={{
        '& .mantine-Accordion-label': {
          padding: 0,
        },
        ...sx,
      }}
      {...props}
    >
      <Stack spacing={8}>{children}</Stack>
    </MantineAccordion>
  )
}

export const AccordionItem = ({ children, ...props }: AccordionItemProps) => {
  return (
    <Card sx={{ border: '1px solid #303238' }}>
      <MantineAccordion.Item {...props}>{children}</MantineAccordion.Item>
    </Card>
  )
}

export const AccordionControl = ({
  children,
  ...props
}: AccordionControlProps) => {
  return (
    <MantineAccordion.Control {...props} p={0} mah="fit-content">
      {children}
    </MantineAccordion.Control>
  )
}

export const AccordionPanel = ({ children, ...props }: AccordionPanelProps) => {
  return (
    <Card sx={{ border: '1px solid #303238' }}>
      <MantineAccordion.Panel
        {...props}
        mt={16}
        p={0}
        sx={{ '& .mantine-Accordion-content': { padding: 0 } }}
      >
        {children}
      </MantineAccordion.Panel>
    </Card>
  )
}

Accordion.Item = AccordionItem
Accordion.Control = AccordionControl
Accordion.Panel = AccordionPanel
