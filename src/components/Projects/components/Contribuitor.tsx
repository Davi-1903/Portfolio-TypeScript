import type { ContributorProps } from '../../../interfaces/Props';

const Contributor = ({ name, url }: ContributorProps) => {
    return (
        <a
            href={url}
            target='_blank'
            className='block cursor-pointer rounded-md border-2 border-secund px-2 py-1 font-primary text-secund underline hover:decoration-2'
        >
            {name}
        </a>
    );
};

export default Contributor;
