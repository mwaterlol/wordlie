import { DatePickerInput as MantineDatePickerInput } from '@mantine/dates'
import { useMergedRef } from '@mantine/hooks'
import { useController, useFormContext } from 'react-hook-form'

import { forwardRef } from 'react'

import { useMantineTheme } from '@mantine/core'

import { CalendarIcon } from 'lucide-react'

import { DatePickerInputProps } from './types'

export const DatePickerInput = forwardRef(
  (
    {
      name,
      shouldUnregister = false,
      readOnly,
      ...props
    }: DatePickerInputProps,
    ref
  ) => {
    const theme = useMantineTheme()

    const { control, formState } = useFormContext()

    const {
      field: { ref: fieldRef, ...fieldProps },
      fieldState: { error },
    } = useController({ name, control, shouldUnregister })

    const mergedRef = useMergedRef(ref, fieldRef)

    const rightSection = !(props.clearable && fieldProps.value) && (
      <CalendarIcon color={theme.fn.dimmed()} size="1rem" />
    )

    return (
      <MantineDatePickerInput
        ref={mergedRef}
        error={error?.message}
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
        rightSection={rightSection}
        {...fieldProps}
        {...props}
      />
    )
  }
)
