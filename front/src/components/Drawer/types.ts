import { DrawerProps as MantineDrawerProps } from '@mantine/core'
import { ReactNode } from 'react'

export type DrawerProps = MantineDrawerProps & {
  footer?: ReactNode
  header?: ReactNode
  children: ReactNode
  close?: VoidFunction
  borderTopColor?: string
  needShadow?: boolean
}
