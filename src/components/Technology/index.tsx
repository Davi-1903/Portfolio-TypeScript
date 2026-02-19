import {
    IconBook,
    IconBox,
    IconBrain,
    IconBrandCss3,
    IconBrandDocker,
    IconBrandFigma,
    IconBrandGit,
    IconBrandGithub,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandMysql,
    IconBrandPython,
    IconBrandReact,
    IconBrandTailwind,
    IconBrandTypescript,
    IconBrandVite,
    IconBrandVscode,
    IconCode,
    IconDatabase,
    IconDeviceGamepad2,
    IconFlask,
    IconSquareNumber0,
} from '@tabler/icons-react';
import type { SkillProps } from '../../interfaces/Props';

export default function Technology({ technology }: SkillProps) {
    const icons = {
        python: <IconBrandPython className='dark:stroke-blue-600' />,
        pytmx: <IconBox className='dark:stroke-green-600' />,
        html: <IconBrandHtml5 className='dark:stroke-orange-600' />,
        css: <IconBrandCss3 className='dark:stroke-blue-600' />,
        javascript: <IconBrandJavascript className='dark:stroke-yellow-600' />,
        typescript: <IconBrandTypescript className='dark:stroke-blue-600' />,
        mysql: <IconBrandMysql className='dark:stroke-blue-600' />,
        sqlite: <IconDatabase className='dark:stroke-blue-600' />,
        markdown: <IconBook className='dark:stroke-blue-600' />,
        flask: <IconFlask className='dark:stroke-' />,
        react: <IconBrandReact className='dark:stroke-blue-600' />,
        tailwind: <IconBrandTailwind className='dark:stroke-teal-400' />,
        git: <IconBrandGit className='dark:stroke-orange-600' />,
        github: <IconBrandGithub className='dark:stroke-' />,
        figma: <IconBrandFigma className='dark:stroke-pink-500' />,
        vscode: <IconBrandVscode className='dark:stroke-blue-600' />,
        vite: <IconBrandVite className='dark:stroke-purple-600' />,
        docker: <IconBrandDocker className='dark:stroke-blue-600' />,
        ia: <IconBrain className='dark:stroke-blue-600' />,
        pygame: <IconDeviceGamepad2 className='dark:stroke-green-600' />,
        numpy: <IconSquareNumber0 className='dark:stroke-blue-600' />,
    };
    const icon = icons[technology.toLowerCase() as keyof typeof icons] ?? <IconCode />;

    return (
        <span className='flex gap-2 rounded-lg border-2 border-black-100 px-2 py-1 font-primary text-black-100'>
            {icon}
            {technology}
        </span>
    );
}
