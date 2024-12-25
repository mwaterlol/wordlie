import { SegmentedControl as MantineSegmentedControl } from '@mantine/core'
import { useStyles } from './styles'
import { SegmentedControlProps } from './types'

export const SegmentedControl = ({
  radius,
  size,
  classNames,
  ...props
}: SegmentedControlProps) => {
  const { classes } = useStyles()

  return (
    <MantineSegmentedControl
      radius={radius ?? 'xl'}
      size={size ?? 'md'}
      classNames={{
        root: classes.root,
        indicator: classes.indicator,
        control: classes.control,
        label: classes.label,
        ...classNames,
      }}
      {...props}
    />
  )
}
