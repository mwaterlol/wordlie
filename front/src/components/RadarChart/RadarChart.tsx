import ReactApexChart from 'react-apexcharts'
import { RadarChartProps } from './types'
import { useMantineTheme } from '@mantine/core'

export const RadarChart = ({ data, categories, name }: RadarChartProps) => {
  const theme = useMantineTheme()
  return (
    <ReactApexChart
      type="radar"
      series={[
        {
          name,
          data,
          color: '#6547DB',
        },
      ]}
      height={150}
      width={300}
      options={{
        chart: {
          type: 'radar',
          toolbar: { show: false },
          offsetX: 0,
          offsetY: 0,
          parentHeightOffset: 0,
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {
          radar: {
            polygons: {
              strokeColors: theme.colors.dark[4],
              connectorColors: theme.colors.dark[4],
            },
          },
        },
        grid: {
          show: false,
          padding: { left: 15, right: 0, top: 0, bottom: 0 },
        },
        title: {
          text: '',
        },
        tooltip: {
          enabled: true,
          theme: 'dark',
          fillSeriesColor: false,
        },
        yaxis: {
          stepSize: 50,
          show: false,
          max: 100,
        },
        xaxis: {
          categories,
          labels: {
            show: true,
            style: {
              colors: ['white', 'white', 'white', 'white', 'white'],
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'Open Sans, sans-serif',
            },
          },
        },
        markers: {
          size: 4,
          strokeColors: '#6547DB',
          colors: ['#624CDC'],
        },
      }}
    />
  )
}
