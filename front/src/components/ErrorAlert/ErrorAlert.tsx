import { Alert, AlertProps, Text } from '@mantine/core'

export const ErrorAlert = ({ children, variant, sx, ...props }: AlertProps) => {
  return (
    <Alert
      color="red"
      variant={variant ?? 'outline'}
      {...props}
      sx={(theme) => ({
        root: {
          boxShadow: `0px 4px 10px ${theme.fn.darken(theme.colors.red[7], 0.2)}`,
          color: theme.colors.red[5],
        },
        message: {
          color: theme.colors.red[5],
        },
      })}
      radius={16}
    >
      <Text
        size="md"
        weight={600}
        sx={{ textAlign: 'center', textWrap: 'balance' }}
      >
        {children}
      </Text>
    </Alert>
  )
}
