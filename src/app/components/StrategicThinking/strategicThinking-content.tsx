import { IconType } from "@/app/fragments/Icon/IconTypes";


const availableSteps = [
    'Blueprinting',
    'Prototyping',
    'Roadmapping',
    'Scoping',
    'Integration',
    'Cloud-Services',
    'API-Design',
    'Security',
    'Consulting',
    'Presentations',
    'Negotiations',
    'Documentation',
    'Governance',
    'Risk-Assessment',
    'Quality-Control',
    'Monitoring'
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
    'Blueprinting': {
        code: 'SiBlueprint',
        name: 'Blueprinting',
        type: 'si',
    },
    'Roadmapping': {
        code: 'RiRoadMapLine',
        name: 'Roadmapping',
        type: 'ri',
    },
    'Scoping': {
        code: 'VscOpenPreview',
        name: 'Scoping',
        type: 'vsc',
    },
    'Integration': {
        code: 'GrIntegration',
        name: 'Integration',
        type: 'gr',
    },
    'Cloud-Services': {
        code: 'BsFillCloudFill',
        name: 'Cloud Services',
        type: 'bs',
    },
    'API-Design': {
        code: 'AiOutlineApi',
        name: 'API Design',
        type: 'ai',
    },
    'Consulting': {
        code: 'SiConsul',
        name: 'Consulting',
        type: 'si',
    },
    'Presentations': {
        code: 'PiPresentationChart',
        name: 'Presentations',
        type: 'pi'
    },
    'Negotiations': {
        code: 'SiHandshake',
        name: 'Negotiations',
        type: 'si'
    },
    'Security': {
        code: 'GrShieldSecurity',
        name: 'Security',
        type: 'gr'
    },
    'Documentation': {
        code: 'GrDocumentCloud',
        name: 'Documentation',
        type: 'gr'
    },
    'Governance': {
        code: 'AiOutlineCrown',
        name: 'Governance',
        type: 'ai'
    },
    'Risk-Assessment': {
        code: 'MdOutlineAssessment',
        name: 'Risk Assessment',
        type: 'md'
    },
    'Quality-Control': {
        code: 'AiOutlineControl',
        name: 'Quality Control',
        type: 'ai'
    },
    'Monitoring': {
        code: 'GoStopwatch',
        name: 'Monitoring',
        type: 'go'
    },
};
export const cards: Card[] = [{
    title: 'Design & Planning',
    items: [
        'Blueprinting',
        'Prototyping',
        'Roadmapping',
        'Scoping'
    ]
},
{
    title: 'Technical Expertise',
    items: [
        'Integration',
        'Cloud-Services',
        'API-Design',
        'Security',
    ]
},
{
    title: 'Client Relations',
    items: [
        'Consulting',
        'Presentations',
        'Negotiations',
        'Documentation',
    ]
},
{
    title: 'Project Oversight',
    items: [
        'Governance',
        'Risk-Assessment',
        'Quality-Control',
        'Monitoring'
    ]
}];