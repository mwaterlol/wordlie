import { Select as MantineSelect } from '@mantine/core'
import { useMergedRef } from '@mantine/hooks'
import { useController, useFormContext } from 'react-hook-form'

import { forwardRef } from 'react'

import { SelectProps } from './types'
import { initHapticFeedback } from '@telegram-apps/sdk-react'

export const Select = forwardRef(
  (
    { name, shouldUnregister = false, readOnly, ...props }: SelectProps,
    ref
  ) => {
    const { control, formState } = useFormContext()

    const {
      field: { ref: fieldRef, value, onChange, ...fieldProps },
      fieldState: { error },
    } = useController({ name, control, shouldUnregister })

    const hapticFeedback = initHapticFeedback()

    const mergedRef = useMergedRef(ref, fieldRef)

    return (
      <MantineSelect
        ref={mergedRef}
        error={error?.message}
        readOnly={formState.isSubmitting || readOnly}
        value={value && value.length ? value : null}
        onChange={(value) => {
          hapticFeedback.selectionChanged()
          onChange(value ?? '')
        }}
        {...fieldProps}
        {...props}
      />
    )
  }
)
