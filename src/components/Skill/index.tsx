import type { SkillProps } from '../../interfaces/Props';
import { getIcons } from '../../utils/icons';

export default function Skill({ technology }: SkillProps) {
    return (
        <span className='flex gap-2 rounded-lg border-2 border-black px-2 py-1 font-primary text-black'>
            {getIcons(technology)}
            {technology}
        </span>
    );
}
