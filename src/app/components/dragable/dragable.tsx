'use client'

import { useState } from "react"

import { ReactNode } from 'react'
interface DragablePropsInterface {
    children: ReactNode
}

export default function Dragable({ children }: DragablePropsInterface) {
    const [initialMouseCoordinates, setInitialMouseCoordinates] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
    const [initialTranslateCoordinates, setInitialTranslateCoordinates] = useState<{ x: number, y: number }>({x: 0, y: 0})

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault()
        if (e.screenX === 0) {
            return;
        }
        const targetNode = e.currentTarget as HTMLDivElement
        const newX = e.clientX - initialMouseCoordinates.x
        const newY = e.clientY - initialMouseCoordinates.y
        targetNode.style.transform = `translate(${initialTranslateCoordinates.x + newX}px, ${initialTranslateCoordinates.y + newY}px)`
    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        setInitialMouseCoordinates((prev) => {
            prev.x = e.clientX
            prev.y = e.clientY
            return prev
        })

        setInitialTranslateCoordinates((prev) => {
            const targetNode = e.currentTarget as HTMLDivElement;
            if (!targetNode) return prev
            const matrix = new DOMMatrixReadOnly(window.getComputedStyle(targetNode).getPropertyValue('transform'));
            prev.x = matrix.m41
            prev.y = matrix.m42
            return prev
        })
    }

    return (
        <div draggable
            onDrag={handleDrag}
            onMouseDown={handleMouseDown}
            onDragOver={handleDragOver}>
            {children}
        </div>
    )
}

