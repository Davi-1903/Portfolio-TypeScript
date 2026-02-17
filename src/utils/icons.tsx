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
import type { ReactNode } from 'react';

export function getIcons(name: string): ReactNode {
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
    const key = name.toLowerCase() as keyof typeof icons;
    return icons[key] ?? <IconCode />;
}
