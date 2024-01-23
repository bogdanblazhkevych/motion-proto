'use client'
import { Doughnut } from 'react-chartjs-2'
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
    ArcElement,
    ChartOptions,
} from 'chart.js'
import rawJson from './../../companies.json'
import { Chart } from 'react-chartjs-2'
import styles from './styles.module.css'
import { useEffect, useRef, useState } from 'react'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
)
export default function MarketShare() {
    const chartRef = useRef<ChartJS>(null);
    const [companiesData, setCompaniesData] = useState<number[]>([])

    useEffect(() => {
        const healthCompanies = rawJson.reduce((accum: any[], current) => {
            const entry = {...current}
            if (entry.industry !== 'Health' || typeof entry.revenue !== 'string') {
                return accum
            }
            const tempArr = entry.revenue.split(' ')
            let revenueNumber = 0
            if (tempArr[1] === 'Million') {
                revenueNumber = Number(tempArr[0]) * 1000000
            } else if (tempArr[1] === 'Billion') {
                revenueNumber = Number(tempArr[0]) * 1000000000
            }
            entry.revenue = revenueNumber as any
            accum.push(entry)
            return accum
        }, [])

        const healthCompaniesSorted = healthCompanies.map((company) => company.revenue).sort((a, b) => {
            return b - a
        })

        const healthCompaniesTopTen = healthCompaniesSorted.slice(0, 10)

        setCompaniesData(healthCompaniesTopTen)
    }, [])

    const inCurrency = (number: number) => {
        return Intl.NumberFormat('en-US', {
            notation: "compact",
            maximumFractionDigits: 1
        }).format(number);
    }

    const getMarketShare = (revenue: number) => {
        const totalRevenue = companiesData.reduce((accum, current) => {
            return accum + current
        }, 0)

        const fractionalMarketShare = Number((revenue / totalRevenue).toFixed(4))

        return fractionalMarketShare * 100 + "%"
    }

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: companiesData,
                backgroundColor: [
                    'rgba(61, 99, 182, 1)',
                    'rgba(85, 61, 182, 1)',
                    'rgba(61, 144, 182, 1)',
                    'rgba(61, 182, 126, 1)',
                    'rgba(176, 182, 61, 1)',
                    'rgba(182, 107, 61, 1)',
                ],
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 1,
            },
        ],
    };

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
        },
        events: []
    };

    return (
        <div className={styles.marketsharewrapper}>
            <div className={styles.title}>
                Market Share
            </div>
            <div className={styles.chartwrapper}>
                <Chart ref={chartRef} type='doughnut' data={data} options={options} />
            </div>
            <div className={styles.metricwrapper}>
                <div className={styles.metric}>
                    <div className={styles.metricvalue}>
                        {inCurrency(companiesData[0])}
                    </div>
                    <div className={styles.metricname}>
                        Total Revenue
                    </div>
                </div>
                <div className={styles.metric}>
                    <div className={styles.metricvalue}>
                        {getMarketShare(companiesData[0])}
                    </div>
                    <div className={styles.metricname}>
                        Market Share
                    </div>
                </div>
            </div>
        </div>
    )
}