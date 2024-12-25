export type RadarChartProps = {
  data:
    | (number | null)[]
    | {
        x: any
        y: any
        fill?: ApexFill
        fillColor?: string
        strokeColor?: string
        meta?: any
        goals?: any
        barHeightOffset?: number
        columnWidthOffset?: number
      }[]
    | [number, number | null][]
    | [number, (number | null)[]][]
    | number[][]
  categories: string[]
  name: string
}
