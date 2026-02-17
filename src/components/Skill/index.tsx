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

export default function Skill({ technology }: SkillProps) {
    const icons = {
        python: <IconBrandPython />,
        pytmx: <IconBox />,
        html: <IconBrandHtml5 />,
        css: <IconBrandCss3 />,
        javascript: <IconBrandJavascript />,
        typescript: <IconBrandTypescript />,
        mysql: <IconBrandMysql />,
        sqlite: <IconDatabase />,
        markdown: <IconBook />,
        flask: <IconFlask />,
        react: <IconBrandReact />,
        tailwind: <IconBrandTailwind />,
        git: <IconBrandGit />,
        github: <IconBrandGithub />,
        figma: <IconBrandFigma />,
        vscode: <IconBrandVscode />,
        vite: <IconBrandVite />,
        docker: <IconBrandDocker />,
        ia: <IconBrain />,
        pygame: <IconDeviceGamepad2 />,
        numpy: <IconSquareNumber0 />,
    };
    const icon = icons[technology.toLowerCase() as keyof typeof icons] ?? <IconCode />;

    return (
        <span className='flex gap-2 rounded-lg border-2 border-black px-2 py-1 font-primary text-black'>
            {icon}
            {technology}
        </span>
    );
}
