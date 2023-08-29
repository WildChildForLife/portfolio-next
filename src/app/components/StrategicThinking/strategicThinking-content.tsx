import { IconType } from "@/app/fragments/Icon/IconTypes";


const availableSteps = [
    'Analysis',
    'Prototyping',
    'Code-Review',
    'User-Acceptance-Testing',
    'Monitoring',
    'Requirements',
    'Deployment',
    'Development',
    'Performance',
    'Maintenance',
    'Design',
    'Bug-Fixing',
    'CI/CD',
    'Security',
    'Code-Refactoring',
    'Architecture',
    'Testing',
    'Documentation',
    'Release-Management'
] as const;

type Card = {
    title: string,
    items: AvailableStepsForIcon[]
}

export type AvailableStepsForIcon = typeof availableSteps[number];

type IconsMappedType = {
    [key in AvailableStepsForIcon]: IconType
}

export const mappedStepsIcons: IconsMappedType = {
    'Prototyping': {
        code: 'PiEyedropperSampleLight',
        name: 'Prototyping',
        type: 'pi',
    },
    'Analysis': {
        code: 'BiAnalyse',
        name: 'Analysis',
        type: 'bi',
    },
    'Code-Review': {
        code: 'GoCodeReview',
        name: 'Code Review',
        type: 'go',
    },
    'User-Acceptance-Testing': {
        code: 'GrTest',
        name: 'User Acceptance Testing',
        type: 'gr',
    },
    'Monitoring': {
        code: 'MdMonitorHeart',
        name: 'Monitoring',
        type: 'md',
    },
    'Requirements': {
        code: 'FaTasks',
        name: 'Requirements',
        type: 'fa',
    },
    'Deployment': {
        code: 'AiOutlineDeploymentUnit',
        name: 'Deployment',
        type: 'ai',
    },
    'Development': {
        code: 'BsCodeSlash',
        name: 'Development',
        type: 'bs',
    },
    'Performance': {
        code: 'GrPerformance',
        name: 'Performance',
        type: 'gr',
    },
    'Maintenance': {
        code: 'GrVmMaintenance',
        name: 'Maintenance',
        type: 'gr'
    },
    'Design': {
        code: 'AiOutlineAntDesign',
        name: 'Design',
        type: 'ai'
    },
    'Bug-Fixing': {
        code: 'BsBug',
        name: 'Bug Fixing',
        type: 'bs'
    },
    'CI/CD': {
        code: 'RiLoopLeftLine',
        name: 'CI/CD',
        type: 'ri'
    },
    'Security': {
        code: 'GrShieldSecurity',
        name: 'Security',
        type: 'gr'
    },
    'Code-Refactoring': {
        code: 'FaCodepen',
        name: 'Code Refactoring',
        type: 'fa'
    },
    'Architecture': {
        code: 'MdOutlineArchitecture',
        name: 'Architecture',
        type: 'md'
    },
    'Testing': {
        code: 'BiTestTube',
        name: 'Testing',
        type: 'bi'
    },
    'Documentation': {
        code: 'GrDocumentCloud',
        name: 'Documentation',
        type: 'gr'
    },
    'Release-Management': {
        code: 'SiSemanticrelease',
        name: 'Release Management',
        type: 'si'
    }
};
export const cards: Card[] = [{
    title: 'Analysis',
    items: [
        'Analysis',
        'Prototyping',
        'Code-Review',
        'User-Acceptance-Testing',
        'Monitoring'
    ]
},
{
    title: 'Development',
    items: [
        'Requirements',
        'Deployment',
        'Development',
        'Performance',
        'Maintenance'
    ]
},
{
    title: 'Deployment',
    items: [
        'Design',
        'Bug-Fixing',
        'CI/CD',
        'Security',
        'Code-Refactoring'
    ]
},
{
    title: 'Optimization',
    items: [
        'Architecture',
        'Testing',
        'Documentation',
        'Release-Management'
    ]
}];