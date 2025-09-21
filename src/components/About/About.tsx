import type React from 'react';
import SectionEmerge from '../SectionEmerge/SectionEmerge';
import Me from '../../media/Me.jpg';
import './About.css';

export default function About(): React.JSX.Element {
    return (
        <SectionEmerge threshold={0.4}>
            <section className='about'>
                <div className='picture-container'>
                    <img src={Me} alt='Me' />
                </div>
                <div className='text-container'>
                    <h2>Who am i?</h2>
                    <hr />
                    <p>
                        My full name is <strong>Davi Francisco da Silva Fonseca</strong> and I'm 17
                        years old. I live in Jucurutu, RN - Brazil, and I'm studing Computer Science
                        for the Internet at <strong>IFRN</strong> - Campus Caicó.
                    </p>
                </div>
            </section>
        </SectionEmerge>
    );
}
