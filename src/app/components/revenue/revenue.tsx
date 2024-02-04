'use client'

import { useEffect, useRef, useState } from 'react'
import { revenueData } from '../colab/data'
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
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

interface GraphWidgetPropsInterface {
    data?: unknown
}

export default function Revenue(props: GraphWidgetPropsInterface) {
    const { data } = props
    const [gradient, setGradient] = useState<CanvasGradient>()
    const [borderColor, setBorderColor] = useState<string>()
    const [metrics, setMetrics] = useState<{ change: number, total: number }>({ change: 0, total: 0 })

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


    useEffect(() => {
        const metrics = getRevenueDataMetrics();
        setMetrics(metrics);
    }, [])

    useEffect(() => {

        const chart = chartRef.current;
        if (!chart) return
        const ctx = chart.ctx
        if (!ctx) return
        const gradient = createGradient(ctx, chart.chartArea.height)
        setGradient(gradient)
        const borderColor = createBorderColor();
        setBorderColor(borderColor)
    }, [metrics])

    const createGradient = (ctx: CanvasRenderingContext2D, height: number): CanvasGradient => {
        var gradient = ctx.createLinearGradient(0, 0, 0, height);
        if (metrics.change > 0) {
            gradient.addColorStop(0, 'rgba(0, 255, 155,0.5)');
            gradient.addColorStop(1, 'rgba(101,214,164,0)');
        } else {
            gradient.addColorStop(0, 'rgba(255, 0, 32,0.5)');
            gradient.addColorStop(1, 'rgba(255, 0, 32,0)');
        }
        return gradient
    }

    const createBorderColor = (): string => {
        if (metrics.change > 0) {
            return 'rgb(61,182,129)'
        } else {
            return 'rgb(229,82,100)'
        }
    }

    const calculateArrayMetrics = (data: number[]): {
        change: number,
        total: number
    } => {
        return data.reduce((prev, current, index, array) => {
            if (current > array[index - 1]) {
                return {
                    change: prev.change + current,
                    total: prev.total + current
                }
            } else {
                return {
                    change: prev.change - current,
                    total: prev.total + current
                }
            }
        }, { change: data[0], total: data[0] })
    }

    const getRevenueDataMetrics = () => {
        const dataList = revenueData.map((node) => node.revenue)
        return calculateArrayMetrics(dataList);
    }

    const inCurrency = (number: number) => {
        return Intl.NumberFormat('en-US', {
            notation: "compact",
            maximumFractionDigits: 1
        }).format(number);
    }

    const ChartData = {
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
            <div className={styles.title}>
                Total Revenue
            </div>
            <div className={styles.chartwrapper}>
                <Chart ref={chartRef} type='line' data={ChartData} options={options} />
            </div>
            <div className={styles.metricswrapper}>
                <div className={styles.headingmetric}>
                    {inCurrency(metrics.total)}
                </div>
                <div className={styles.changewidget} data-direction={metrics.change > 0 ? "up" : "down"}>
                    <div className={styles.widgetmetric}>
                        {metrics.change > 0 && "+"}
                        {inCurrency(metrics.change)}
                    </div>
                    <div className={styles.widgetarrow}>
                        {metrics.change > 0 ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
                    </div>
                </div>
            </div>
        </div>
    )
}