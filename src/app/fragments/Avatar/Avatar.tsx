'use client';

import React, { useState, useEffect, useRef } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import Fills from './Fills';
import { head, insideHead, kimono, rightPattern, necklace, leftPattern } from './parts';

const Avatar: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const [initialAnimationComplete, setInitialAnimationComplete] = useState(false);

    const duration = 40;
    const svgPath = [
        { d: head, duration: duration / 10 },
        { d: insideHead, duration: duration / 10 },
        { d: kimono, duration: duration },               
        { d: `${rightPattern}${leftPattern}`, duration: duration },
        { d: necklace, duration: duration / 5 },
    ];

    
    useEffect(() => {
        // Clean up the animation complete listener
        return () => {
            setInitialAnimationComplete(false);
        };
      }, []);

    return (
        <>
            <svg {...props} viewBox='0 0 506 600' xmlns="http://www.w3.org/2000/svg" id='svg-avatar' >
                {svgPath.map((path, index) => (
                    <motion.path
                        key={index}
                        d={path.d}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: path.duration, delay: 1 * (index + 1) }}
                        onAnimationComplete={_v => {
                            setInitialAnimationComplete(true);
                            setSVGPathStrokeColor('black');
                        }}
                     
                    />
                ))}    
            </svg>
            <AnimatePresence>
                {!!initialAnimationComplete && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                            <Fills className='avatar-fills'></Fills>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

const setSVGPathStrokeColor = (color: string) => {
    const query = document.getElementById('svg-avatar')?.getElementsByTagName('path') ?? [];
    const paths = Array.from(query);

    paths.map(path => path.style.stroke = color);
}

export default Avatar;