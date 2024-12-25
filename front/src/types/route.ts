import { ComponentType } from 'react'
import { LoaderFunction } from 'react-router-dom'

export type Route = {
  path: string
  Component: ComponentType
  title?: string
  icon?: JSX.Element
  loader?: LoaderFunction<any>
}
