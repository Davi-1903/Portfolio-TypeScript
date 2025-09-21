export interface Project {
    id: number;
    name: string;
    description: string;
    imageURL: string;
    projectURL: string;
}

export const projectList: Project[] = [
    {
        id: 1,
        name: 'Expotec-2024',
        description: 'Game developed with pygame for technological exhibition.',
        imageURL: 'src/media/projects/Expotec-2024.png',
        projectURL: 'https://github.com/Davi-1903/Expotec-2024',
    },
    {
        id: 2,
        name: 'GoWay',
        description: 'Web design project. Tourism blog.',
        imageURL: 'src/media/projects/GoWay.png',
        projectURL: 'https://github.com/Davi-1903/GoWay',
    },
    {
        id: 3,
        name: 'Dino-IA',
        description: 'Project made to study neural networks',
        imageURL: 'src/media/projects/Dino-IA.png',
        projectURL: 'https://github.com/Davi-1903/Dino-IA',
    },
    {
        id: 4,
        name: 'Personagens',
        description: 'Simple application to learn how to integrate Flask and React',
        imageURL: 'src/media/projects/Personagens.png',
        projectURL: 'https://github.com/Davi-1903/Personagens',
    },
];
