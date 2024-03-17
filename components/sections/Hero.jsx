'use client'
import { useState, useEffect, useRef } from "react";

import useMousePosition from '@/hooks/useMouse'

import OverflowReveal from "@/components/animationWrappers/OverflowReveal";

const Hero = () => {
    const [boundingBox, setBoundingBox] = useState({x:0, y:0});
    const offsetValues = [40, 20, 30, 40];

    const divRefs = useRef([useRef(null),useRef(null),useRef(null),useRef(null)]);
    const [center, setCenter] = useState([{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }]);
    const [divOffsets, setDivOffsets] = useState([{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }])

    const {x, y} = useMousePosition();
    

    useEffect(() => {
        const updateCenter = () => {
            if (divRefs.current) {
                const centerArray = [{}, {}, {}, {}];
                
                for(let i=0;i<4;i++){
                    let { left, top, width, height } = divRefs.current[i].current.getBoundingClientRect();
                    let centerX = left + width / 2;
                    let centerY = top + height / 2;
                    centerArray[i] = { x: centerX, y: centerY }
                }

                setCenter(centerArray);
            }
            setBoundingBox({x: window.innerWidth*0.5, y: window.innerHeight*0.5})
        };

        updateCenter(); // Initial update


        window.addEventListener('resize', updateCenter);

        return () => {
            window.removeEventListener('resize', updateCenter);
        };
    }, []);

    useEffect(() => {
        const divOffsetsArray = [{}, {}, {}, {}]
        for (let i = 0;i<4;i++){
            divOffsetsArray[i] = {x:Math.min(((center[i].x-x)/boundingBox.x), 1)*-offsetValues[i], y:Math.min(((center[i].y-y)/boundingBox.y),1)*-offsetValues[i]}
        }
        
        setDivOffsets(divOffsetsArray)
    }, [x, y])

    return (
        <main className="flex-1 flex justify-center items-center pb-64">
            <div className="text-[11rem] relative">
                <div ref={divRefs.current[0]} className="w-80 h-96 top-[14rem] left-[8rem] absolute"></div>
                <div className="div-1 w-80 h-96 top-[14rem] left-[8rem] absolute group" style={{transform:`translate(${divOffsets[0].x}px,${divOffsets[0].y}px)`}}>
                    <div className="w-full h-full group-hover:rotate-y-180 transition-all duration-500" style={{transformStyle:'preserve-3d'}}>
                        <div className="w-full h-full bg-red-200"></div>
                        <div className="w-full h-full bg-primary -translate-y-full" style={{backfaceVisibility:'hidden'}}></div>
                    </div>
                </div>
                <div ref={divRefs.current[1]} className="w-80 h-96 top-[5rem] left-[20rem] absolute"></div>
                <div className="div-2 w-80 h-96 top-[5rem] left-[20rem] absolute group" style={{transform:`translate(${divOffsets[1].x}px,${divOffsets[1].y}px)`}}>
                    <div className="w-full h-full group-hover:rotate-y-180 transition-all duration-500" style={{transformStyle:'preserve-3d'}}>
                        <div className="w-full h-full bg-red-200"></div>
                        <div className="w-full h-full bg-accent-100 -translate-y-full" style={{backfaceVisibility:'hidden'}}></div>
                    </div>
                </div>
                <div ref={divRefs.current[2]} className="w-60 h-72 -bottom-[16rem] right-[14rem] absolute"></div>
                <div className="div-3 w-60 h-72 -bottom-[16rem] right-[14rem] absolute group" style={{transform:`translate(${divOffsets[2].x}px,${divOffsets[2].y}px)`}}>
                    <div className="w-full h-full group-hover:rotate-y-180 transition-all duration-500" style={{transformStyle:'preserve-3d'}}>
                        <div className="w-full h-full bg-red-200"></div>
                        <div className="w-full h-full bg-accent-200 -translate-y-full" style={{backfaceVisibility:'hidden'}}></div>
                    </div>
                </div>
                <div ref={divRefs.current[3]} className="w-60 h-72 -bottom-[8rem] right-[7rem] absolute"></div>
                <div className="div-4 w-60 h-72 -bottom-[8rem] right-[7rem] absolute group" style={{transform:`translate(${divOffsets[3].x}px,${divOffsets[3].y}px)`}}>
                    <div className="w-full h-full group-hover:rotate-y-180 transition-all duration-500" style={{transformStyle:'preserve-3d'}}>
                        <div className="w-full h-full bg-red-200"></div>
                        <div className="w-full h-full bg-background-200 -translate-y-full" style={{backfaceVisibility:'hidden'}}></div>
                    </div>
                </div>
                <div className="relative font-englisch font-extrabold text-center leading-[91%] text-text tracking-normal pointer-events-none">
                    <OverflowReveal>
                       <h1>Hello I&#8217;m</h1>
                    </OverflowReveal>
                    <OverflowReveal delay={0.1}>
                        <h1>Minglun Shao</h1>
                    </OverflowReveal>
                </div>
            </div>
        </main>
    );
}

export default Hero;