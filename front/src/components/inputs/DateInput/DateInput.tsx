import { useMantineTheme } from '@mantine/core'
import { DateInput as MantineDateInput } from '@mantine/dates'
import { useMergedRef } from '@mantine/hooks'
import { CalendarIcon } from 'lucide-react'
import { forwardRef } from 'react'
import { useFormContext, useController } from 'react-hook-form'
import { DateInputProps } from './types'
import dayjs from 'dayjs'

export const DateInput = forwardRef(
  (
    { name, shouldUnregister = false, readOnly, ...props }: DateInputProps,
    ref
  ) => {
    const theme = useMantineTheme()

    const { control, formState } = useFormContext()

    const {
      field: { ref: fieldRef, ...fieldProps },
      fieldState: { error },
    } = useController({ name, control, shouldUnregister })

    const mergedRef = useMergedRef(ref, fieldRef)

    const leftSection = !(props.clearable && fieldProps.value) && (
      <CalendarIcon color={theme.fn.dimmed()} size="1rem" />
    )

    return (
      <MantineDateInput
        ref={mergedRef}
        error={error?.message}
        dateParser={(value) => dayjs(value, 'DD.MM.YYYY').toDate()}
        getDayProps={(date) =>
          date.toDateString() === new Date().toDateString()
            ? {
                sx: (theme) => ({
                  border: `1px solid ${theme.colors.violet[2]}`,
                }),
              }
            : {}
        }
        popoverProps={{ shadow: 'sm' }}
        readOnly={formState.isSubmitting || readOnly}
        icon={leftSection}
        {...fieldProps}
        {...props}
      />
    )
  }
)
