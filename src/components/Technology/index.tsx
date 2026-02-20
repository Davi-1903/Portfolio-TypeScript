import {
    IconBook,
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
        python: <IconBrandPython className='stroke-blue-600' />,
        html: <IconBrandHtml5 className='stroke-orange-600' />,
        css: <IconBrandCss3 className='stroke-blue-600' />,
        javascript: <IconBrandJavascript className='stroke-yellow-600' />,
        typescript: <IconBrandTypescript className='stroke-blue-600' />,
        mysql: <IconBrandMysql className='stroke-blue-600' />,
        sqlite: <IconDatabase className='stroke-blue-600' />,
        markdown: <IconBook className='stroke-teal-600' />,
        flask: <IconFlask />,
        react: <IconBrandReact className='stroke-cyan-600' />,
        tailwind: <IconBrandTailwind className='stroke-teal-400' />,
        git: <IconBrandGit className='stroke-orange-600' />,
        github: <IconBrandGithub />,
        figma: <IconBrandFigma className='stroke-rose-500' />,
        vscode: <IconBrandVscode className='stroke-blue-600' />,
        vite: <IconBrandVite className='stroke-purple-600' />,
        docker: <IconBrandDocker className='stroke-blue-600' />,
        ia: <IconBrain className='stroke-blue-600' />,
        pygame: <IconDeviceGamepad2 className='stroke-green-600' />,
        numpy: <IconSquareNumber0 className='stroke-blue-400' />,
    };
    const icon = icons[technology.toLowerCase() as keyof typeof icons] ?? <IconCode />;

    return (
        <span className='flex gap-2 rounded-lg border-2 px-2 py-1 font-primary text-black-100'>
            {icon}
            {technology}
        </span>
    );
}
