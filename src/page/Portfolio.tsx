import { useState, useEffect } from 'react';
import Homesection from '../components/Homesection';
import Projectsection from '../components/Projectsection';
import Background from './../components/background';
import Navbar from './../components/Navbar';
import Aboutmesection from '../components/Aboutmesection';
import Toolssection from './../components/Toolssection';
import Contactsection from '../components/Contactsection';
import Experiencesection from '../components/Experiencesection';

function Portfolio() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = ['home', 'projects', 'tools', 'about', 'experience', 'contact'];
        
        const handleScrollSpy = () => {
            const container = document.getElementById('scroll-container');
            if (!container) return;

            const scrollPosition = container.scrollTop + 150; // Offset for navbar

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        const container = document.getElementById('scroll-container');
        container?.addEventListener('scroll', handleScrollSpy);
        return () => container?.removeEventListener('scroll', handleScrollSpy);
    }, []);

    return (
        <div className="relative w-screen h-screen overflow-hidden bg-[#030712]">
            
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Background />
            </div>

            {/* Navbar */}
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar activeSection={activeSection} />
            </div>
            
            {/* Containers  */}
            <div 
                id="scroll-container"
                className="relative z-10 w-full h-full overflow-y-auto scroll-smooth pt-20"
            >
                <section id="home" className="w-full min-h-[calc(100vh-5rem)] flex items-center justify-center p-6 md:p-12">
                    <Homesection />
                </section>

                <section id="projects" className="w-full min-h-screen p-6 md:p-24">
                    <Projectsection />
                </section>

                <section id="tools" className="w-full min-h-screen p-6 md:p-24">
                    <Toolssection />
                </section>

                <section id="about" className="w-full min-h-screen p-6 md:p-24">
                    <Aboutmesection />
                </section>

                <section id="experience" className="w-full min-h-screen p-6 md:p-24">
                    <Experiencesection />
                </section>

                <section id="contact" className="w-full min-h-screen p-6 md:p-24">
                    <Contactsection />
                </section>
            </div>
        </div>
    );
}

export default Portfolio;