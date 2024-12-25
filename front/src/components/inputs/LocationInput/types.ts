import { TextInputProps as MantineTextInputProps } from '@mantine/core'

import { FieldValues, Path, UseFormSetValue } from 'react-hook-form'

export type LocationInputProps<T extends FieldValues> = {
  setValue: UseFormSetValue<T>
  name: Path<T>
} & Omit<MantineTextInputProps, 'value' | 'defaultValue'>
