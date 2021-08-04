import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'

const BarChart = ({ completed, incompleted }) => {
  const [barData, setData] = useState({
    options: {
      chart: {
        id: 'basic-bar'
      },
      xaxis: {
        categories: ['Completed', 'Incompleted']
      }
    },
    series: [
      {
        name: 'series-1',
        data: [completed, incompleted]
      }
    ]
  })
  useEffect(() => {
    setData({
      options: {
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: ['Completed', 'Incompleted']
        }
      },
      series: [
        {
          name: 'series-1',
          data: [completed, incompleted]
        }
      ]
    })
  }, [completed, incompleted])

  return (
    <Chart
      type='bar'
      width='500'
      options={barData.options}
      series={barData.series}
    />
  )
}
export default BarChart
