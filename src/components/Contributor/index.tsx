import type { ContributorProps } from '../../interfaces/Props';

export default function Contributor({ name, url }: ContributorProps) {
    return (
        <a
            href={url}
            target='_blank'
            className='block rounded-md border-2 border-black px-2 py-1 font-primary text-black underline hover:decoration-2'
        >
            {name}
        </a>
    );
}
