"use client"
import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const BarChart = () => {
    const [chartData, setchartData] = useState({
        datasets: [],
    })
    const [chartOption, setChartOption] = useState({})
    useEffect(() => {
        setchartData({
            labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'بنج شنبه', 'جمعه'],
            datasets: [{
                label: 'قیمت',
                data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
                borderColor: 'rgb(25, 162, 235)',
                backgroundColor: 'rgb(138,43,226,0.6)',
            }]
        })
        setChartOption({
            plugins: {
                legend:
                {
                    position: "top",
                },
                title: {
                    display: 'true',
                    text: " روزه هفته"
                }

            },
            maintainAspecctRation: false,
            responsive: true
        })
    })
    return (<>

        <div className=' w-full md:col-span-2 relative lg:h-[70vh] h-[50vh]  m-auto p-4 border rounded-lg bg-white'>
            <Bar data={chartData} options={chartOption} />
        </div>
    </>
    )
}

export default BarChart
