import { LucideProps } from 'lucide-react'
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react'

export type InfoLineProps = {
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
  label: string
  children?: ReactNode
}
