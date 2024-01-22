'use client'

import { useEffect, useRef, useState } from 'react'
import { RevenueDataInterface, revenueData } from '../colab/data'
import { Line } from 'react-chartjs-2';
import styles from './styles.module.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ChartOptions,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'


export default function Revenue() {
    const chartRef = useRef<ChartJS>(null);
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        Filler
    )

    const [gradient, setGradient] = useState<CanvasGradient>()
    const [borderColor, setBorderColor] = useState<string>() 

    useEffect(() => {
        const chart = chartRef.current;
        if (!chart) return
        const ctx = chart.ctx
        if (!ctx) return
        const gradient = createGradient(ctx, chart.chartArea.height, revenueData)
        setGradient(gradient)
        const borderColor = createBorderColor(revenueData);
        setBorderColor(borderColor)
    }, [])

    const createGradient = (ctx: CanvasRenderingContext2D, height: number, data: RevenueDataInterface[]): CanvasGradient => {
        const dataList = data.map((node) => node.revenue)
        const change = calculateChange(dataList);
        var gradient = ctx.createLinearGradient(0, 0, 0, height);
        if (change > 0) {
            gradient.addColorStop(0, 'rgba(0, 255, 155,0.5)');
            gradient.addColorStop(1, 'rgba(101,214,164,0)');
        } else {
            gradient.addColorStop(0, 'rgba(255, 0, 32,0.5)');
            gradient.addColorStop(1, 'rgba(255, 0, 32,0)');
        }
        return gradient
    }

    const createBorderColor = (data: RevenueDataInterface[]): string => {
        const dataList = data.map((node) => node.revenue)
        const change = calculateChange(dataList);
        if (change > 0) {
            return 'rgb(61,182,129)'
        } else {
            return 'rgb(229,82,100)'
        }
    }

    const calculateChange = (data: number[]) => {
        return data.reduce((total, current, index, array) => {
            if (current > array[index - 1]) {
                return total + current
            } else {
                return total - current
            }
        })
    }

    const data = {
        labels: revenueData.map((node) => node.date),
        datasets: [
            {
                label: 'test',
                data: revenueData.map((node) => node.revenue),
                borderColor: borderColor,
                backgroundColor: gradient,
                fill: true,
                cubicInterpolationMode: 'monotone' as const,
                tension: 0.4,
                pointStyle: false as const,
            }
        ]
    }

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        },
        scales: {
            x: {
                display: false
            },
            y: {
                display: false
            }
        }
    };

    return (
        <div className={styles.revenuewrapper}>
            <Chart ref={chartRef} type='line' data={data} options={options} />
        </div>
    )
}