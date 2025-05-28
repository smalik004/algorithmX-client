'use client';

import { useEffect, useRef } from 'react';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
    subsets: ["latin"],
    weight: "500",
    fallback: ["sans-serif"],
});

const monsterfont1 = Montserrat({
    subsets: ["latin"],
    weight: "100",
    fallback: ["sans-serif"],
});

const ParticleAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const cnv = canvasRef.current;
        const ctx = cnv.getContext('2d');
        let cw, ch, cx, cy;
        let dotList = [];
        const dirstList = [];

        const cfg = {
            bgFillColor: 'rgba(0,0,0,.01)',
            dirsCount: 6,
            stepsToTurn: 15,
            dotSize: 2,
            dotCount: 600,
            dotVelocity: 3.5,
            distance: 300
        };

        function init() {
            cw = cnv.width = window.innerWidth;
            ch = cnv.height = window.innerHeight;
            cx = cw / 2;
            cy = ch / 2;

            const baseArea = 1920 * 1080;
            const currentArea = cw * ch;
            cfg.dotCount = Math.floor(600 * (currentArea / baseArea));
            cfg.distance = Math.min(cw, ch) / 2;
        }

        function drawRect(color, x, y, w, h, shadowColor, shadowBlur, gco) {
            ctx.globalCompositeOperation = gco || 'source-over';
            ctx.shadowColor = shadowColor || 'black';
            ctx.shadowBlur = shadowBlur || 0;
            ctx.fillStyle = color;
            ctx.fillRect(x, y, w, h);
        }

        class Dot {
            constructor() {
                this.pos = { x: cx, y: cy };
                this.dir = (Math.random() * 3 | 0) * 2;
                this.step = 0;
            }

            redrawDot() {
                let color = '#FFCA00';
                let size = cfg.dotSize;
                let x = this.pos.x - size / 2;
                let y = this.pos.y - size / 2;
                drawRect(color, x, y, size, size, color, 0);
            }

            moveDot() {
                this.step++;
                this.pos.x += dirstList[this.dir].x * cfg.dotVelocity;
                this.pos.y += dirstList[this.dir].y * cfg.dotVelocity;
            }

            changeDir() {
                if (this.step % cfg.stepsToTurn === 0) {
                    this.dir = Math.random() > .5 ?
                        (this.dir + 1) % cfg.dirsCount :
                        (this.dir + cfg.dirsCount - 1) % cfg.dirsCount;
                }
            }

            killDot(id) {
                let percent = Math.exp(this.step / cfg.distance) * Math.random();
                if (percent > 100) {
                    dotList.splice(id, 1);
                }
            }
        }

        function createDirs() {
            for (let i = 0; i < 360; i += 360 / cfg.dirsCount) {
                let x = Math.cos(i * Math.PI / 180);
                let y = Math.sin(i * Math.PI / 180);
                dirstList.push({ x, y });
            }
        }

        function addDot() {
            if (dotList.length < cfg.dotCount && Math.random() > .8) {
                dotList.push(new Dot());
            }
        }

        function refreshDots() {
            dotList.forEach((dot, id) => {
                dot.moveDot();
                dot.redrawDot();
                dot.changeDir();
                dot.killDot(id);
            });
        }

        function loop() {
            drawRect(cfg.bgFillColor, 0, 0, cw, ch, null, 0);
            addDot();
            refreshDots();
            requestAnimationFrame(loop);
        }

        init();
        createDirs();
        loop();

        const handleResize = () => {
            dotList = [];
            init();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <div className="relative w-full h-screen overflow-hidden">
            <canvas 
                ref={canvasRef} 
                className="absolute top-0 left-0 w-full h-full bg-black -z-10" 
            />

            {/* Content Container */}
            <div className="relative z-10 w-full h-full flex justify-center items-center">
            <div
  className="max-w-[1200px] w-full mx-auto p-[14px] md:p-8 rounded-lg"
  style={{
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(1px)",
  }}
>
                    <div className="flex flex-row max-sm:justify-between  items-center md:gap-4">
                        {/* Text Content */}
                        <div className="max-sm:flex-1  text-white">
                            <h1 className={`${monsterfont1.className} text-[31px]  leading-[35px] md:text-[46.5px] md:leading-[24px] md:leading-[50px] md:mb-4`}>
                                From Concept to Market Dominance!
                            </h1>
                            <h2 className={` font-helveticaneue text-[19.5px] leading-[30px] md:text-[34.4px] md:leading-[22px] md:leading-[38px]`}>
                                We're the Holistic Solution you've been Looking for
                            </h2>
                        </div>

                        {/* Vertical Line */}
                        <div className="h-[185px] md:h-32 w-[2px] bg-white ml-[2px]"></div>

                        {/* Right Side - Image & Text */}
                        <div className="flex flex-row items-start md:gap-4">
                            <img 
                                src="images/logo-slide.png" 
                                alt="Placeholder" 
                                className="w-16 md:w-24 h-auto object-contain"
                            />
                            <div className={`${monsterfont.className} text-white text-[16px] md:text-[20px] max-sm:leading-[24px] `}>
                                esthetic
                                <br />
                                gile
                                <br />
                                mplify
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParticleAnimation;