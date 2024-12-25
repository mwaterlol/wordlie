import { LocationInputProps } from './types'
import { MapPin } from 'lucide-react'
import { Select } from '@mantine/core'
import { FieldValues, Path, PathValue, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { initHapticFeedback } from '@telegram-apps/sdk-react'

export const LocationInput = <T extends FieldValues>({
  setValue,
  name,
  ...props
}: LocationInputProps<T>) => {
  const { t } = useTranslation()
  const { formState, getFieldState, watch } = useFormContext<T>()

  const value = watch(name)

  const hapticFeedback = initHapticFeedback()
  const state = getFieldState(name)
  return (
    <Select
      {...props}
      icon={<MapPin size={20} />}
      error={state.error?.message}
      readOnly={formState.isSubmitting}
      value={value as string}
      searchable
      data={['Moscow, Russia', 'Saint-Petersburg, Russia']}
      onChange={(value) => {
        hapticFeedback.selectionChanged()
        setValue(name, value as PathValue<T, Path<T> & (string | undefined)>)
      }}
      placeholder={t('common.inputs.chooseLocation')}
      clearable
      dropdownPosition="bottom"
    />
  )
}
