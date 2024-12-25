import { TimeInput as MantineTimeInput } from '@mantine/dates'
import { useMergedRef } from '@mantine/hooks'
import { useController, useFormContext } from 'react-hook-form'

import { forwardRef } from 'react'

import { TimeInputProps } from './types'

export const TimeInput = forwardRef(
  (
    { name, shouldUnregister = false, readOnly, ...props }: TimeInputProps,
    ref
  ) => {
    const { control, formState } = useFormContext()

    const {
      field: { ref: fieldRef, value, ...fieldProps },
      fieldState: { error },
    } = useController({
      name,
      control,
      shouldUnregister,
      defaultValue: null,
    })

    const mergedRef = useMergedRef(ref, fieldRef)

    return (
      <MantineTimeInput
        ref={mergedRef}
        error={error?.message}
        readOnly={formState.isSubmitting || readOnly}
        value={value ?? ''}
        {...fieldProps}
        {...props}
      />
    )
  }
)
