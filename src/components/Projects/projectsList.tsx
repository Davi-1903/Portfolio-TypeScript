import {
    IconBox,
    IconBrain,
    IconBrandCss3,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandMysql,
    IconBrandReact,
    IconBrandTailwind,
    IconDeviceGamepad2,
    IconFlask,
    IconSquareNumber0,
} from '@tabler/icons-react';
import type { Project } from '../../interfaces/Objects';

export const projectList: Project[] = [
    {
        id: 1,
        name: 'EduIA',
        description: 'Game developed with pygame for technological exhibition.',
        imageURL: '/projects/EduIA.png',
        projectURL: 'https://github.com/Davi-1903/EduIA',
        technologies: [
            { name: 'React', icon: <IconBrandReact /> },
            { name: 'Flask', icon: <IconFlask /> },
            { name: 'Tailwind', icon: <IconBrandTailwind /> },
            { name: 'MySQL', icon: <IconBrandMysql /> },
            { name: 'IA', icon: <IconBrain /> },
        ],
    },
    {
        id: 2,
        name: 'Expotec-2024',
        description: 'Game developed with pygame for technological exhibition.',
        imageURL: '/projects/Expotec-2024.png',
        projectURL: 'https://github.com/Davi-1903/Expotec-2024',
        technologies: [
            { name: 'PyGame', icon: <IconDeviceGamepad2 /> },
            { name: 'PyTMX', icon: <IconBox /> },
        ],
    },
    {
        id: 3,
        name: 'Dino-IA',
        description: 'Secund project made to study neural networks',
        imageURL: '/projects/Dino-IA.png',
        projectURL: 'https://github.com/Davi-1903/Dino-IA',
        technologies: [
            { name: 'PyGame', icon: <IconDeviceGamepad2 /> },
            { name: 'NumPy', icon: <IconSquareNumber0 /> },
        ],
    },
    {
        id: 4,
        name: 'Pong-IA',
        description: 'First project mate to study neural networks',
        imageURL: '/projects/Pong-IA.png',
        projectURL: 'https://github.com/Davi-1903/Pong-IA',
        technologies: [
            { name: 'PyGame', icon: <IconDeviceGamepad2 /> },
            { name: 'NumPy', icon: <IconSquareNumber0 /> },
        ],
    },
    {
        id: 5,
        name: 'CubeTime',
        description: 'Simple application to learn how to integrate Flask and React',
        imageURL: '/projects/CubeTime.png',
        projectURL: 'https://github.com/Davi-1903/Personagens',
        technologies: [
            { name: 'React', icon: <IconBrandReact /> },
            { name: 'Flask', icon: <IconFlask /> },
            { name: 'Tailwind', icon: <IconBrandTailwind /> },
            { name: 'MySQL', icon: <IconBrandMysql /> },
        ],
    },
    {
        id: 6,
        name: 'GoWay',
        description: 'Web design project. Tourism blog.',
        imageURL: '/projects/GoWay.png',
        projectURL: 'https://github.com/Davi-1903/GoWay',
        technologies: [
            { name: 'HTML', icon: <IconBrandHtml5 /> },
            { name: 'CSS', icon: <IconBrandCss3 /> },
            { name: 'JavaScript', icon: <IconBrandJavascript /> },
        ],
    },
];
