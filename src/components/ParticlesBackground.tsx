"use client"

import { useEffect, useRef } from "react"

interface ParticlesBackgroundProps {
    darkMode: boolean
}

export function ParticlesBackground({ darkMode }: ParticlesBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        const particles: Particle[] = []
        const particleCount = 50

        class Particle {
            x: number
            y: number
            size: number
            speedX: number
            speedY: number
            opacity: number

            constructor() {
                // @ts-ignore
                this.x = Math.random() * canvas.width
                // @ts-ignore
                this.y = Math.random() * canvas.height
                this.size = Math.random() * 2 + 1
                this.speedX = Math.random() - 0.5
                this.speedY = Math.random() - 0.5
                this.opacity = Math.random() * 0.5 + 0.2
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY

                // @ts-ignore
                if (this.x > canvas.width) this.x = 0
                if (this.x < 0) { // @ts-ignore
                    this.x = canvas.width
                }
                // @ts-ignore
                if (this.y > canvas.height) this.y = 0
                if (this.y < 0) { // @ts-ignore
                    this.y = canvas.height
                }
            }

            draw() {
                if (!ctx) return
                ctx.fillStyle = darkMode
                    ? `rgba(255, 255, 255, ${this.opacity})` // White particles for dark mode
                    : `rgba(0, 0, 0, ${this.opacity})` // Black particles for light mode
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        function init() {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle())
            }
        }

        function animate() {
            // @ts-ignore
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach((particle) => {
                particle.update()
                particle.draw()
            })
            animationFrameId = requestAnimationFrame(animate)
        }

        function handleResize() {
            // @ts-ignore
            canvas.width = window.innerWidth
            // @ts-ignore
            canvas.height = window.innerHeight
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        init()
        animate()

        return () => {
            window.removeEventListener("resize", handleResize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [darkMode]) // Re-run effect when darkMode changes

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full bg-white dark:bg-slate-900"
        />

    )
}