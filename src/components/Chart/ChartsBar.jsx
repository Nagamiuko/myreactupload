import React from 'react'
import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
const Chartsbar = ({ datach }) => {
  return (
    <div>
      <Bar data={datach} />
    </div>
  )
}

export default Chartsbar
