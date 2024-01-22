'use client'
import { useEffect } from 'react'
import styles from './styles.module.css'

export default function Canvas() {
    const points = [
        [50, 50],
        [150, 400],
        [250, 200],
        [350, 450],
        [450, 100]
    ]
    function draw() {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        canvas.height = 500;
        canvas.width = 500;

        const ctx = canvas.getContext('2d');
        if (!ctx) return
        ctx.beginPath()
        ctx.strokeStyle = "red"
        ctx.lineWidth = 5
        ctx.moveTo(points[0][0],points[0][1]);
        const tanStart = 
        ctx.lineTo(points[1][0], points[1][0])
        ctx.stroke();
    }
    useEffect(() => {
        draw()
    }, [])
    return(
        <div className={styles.wrapper}>
        <canvas id="canvas" className={styles.canvas}>

        </canvas>
        </div>
    )
}