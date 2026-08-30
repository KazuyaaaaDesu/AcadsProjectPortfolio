import Homesection from '../components/Homesection';
import Projectsection from '../components/Projectsection';
import Background from './../components/background';
import Navbar from './../components/Navbar';
import Aboutmesection from '../components/Aboutmesection';
import Toolssection from '../components/Toolssection';
import Contactsection from '../components/Contactsection';

function Portfolio() {
    return (
        <div className="relative w-screen h-screen overflow-hidden bg-[#030712]">
            
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Background />
            </div>

            <Navbar /> 
            
            <div className="relative z-10 h-screen overflow-y-scroll scroll-smooth p-24 pt-0">
                
                <section className="w-full h-screen snap-start bg-transparent">
                    <Homesection />
                </section>

                <section className="w-full h-screen snap-start bg-transparent">
                    <Aboutmesection />
                </section>

                <section className="w-full h-screen snap-start bg-transparent">
                    <Toolssection />
                </section>

                <section className="w-full h-screen snap-start bg-transparent">
                    <Contactsection />
                </section>
                
            </div>
        </div>
    );
}

export default Portfolio;
