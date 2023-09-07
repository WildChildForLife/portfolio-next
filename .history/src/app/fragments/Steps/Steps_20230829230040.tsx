'use client';

import { AvailableStepsForIcon, mappedStepsIcons } from "@/app/components/StrategicThinking/strategicThinking-content";
import React, { ReactElement } from "react";
import { IconType } from "../Icon/IconTypes";
import { motion } from "framer-motion";
import Icon from "../Icon/_Icon";

type StepAsReactElement = ReactElement<HTMLLIElement & IconType, any>;

type StepsPropsType = {
    items: AvailableStepsForIcon[]
}

const Steps: React.FC<StepsPropsType> = ({ items }) => (
    getHydratedSteps(items).map<StepAsReactElement>((step: IconType, index: number) => (
        <motion.li 
            key={index}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            <Icon code={step.code} type={step.type} />                        
            {step.name}
        </motion.li>
    ))
);

const getHydratedSteps = (steps: AvailableStepsForIcon[]): IconType[] => (
    steps.map((stepName: AvailableStepsForIcon) => mappedStepsIcons[stepName])
)

export default Steps;