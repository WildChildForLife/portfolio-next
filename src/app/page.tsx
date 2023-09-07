import routes from './routes';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import StrategicThinking from './components/StrategicThinking/StrategicThinking';
import SharingIsCaring from './components/SharingIsCaring/SharingIsCaring';
import SkillsExperiences from './components/SkillsExperiences/SkillsExperiences';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import { experiences } from './components/SkillsExperiences/experience-content';

const App: React.FC = () => {
    // const [state, setState] = useState({ left: 0, top: 0 });
    //   useEffect(() => {
    //       document. addEventListener('mousemove', (e) => {
    //           setState({ left: e.pageX, top: e.pageY });  
    //       })
    //   }, [])

    const yearsOfExperience = experiences.reduce((acc, exp) => {
        const [startStr, endStr] = exp.time.split(' - ');
        const start = Number(startStr);
        const end = endStr === 'Current' ? new Date().getFullYear() : Number(endStr);
        return acc + (end - start);
    }, 0);

    return (
        <>
            <Hero id={routes.Home} />
            <AboutMe id={routes.About} yearsOfExperience={yearsOfExperience} />
            <StrategicThinking id={routes.Skills} />
            <SharingIsCaring id={routes.Blog} />
            <SkillsExperiences id={routes.Experience} yearsOfExperience={yearsOfExperience} />
            <Contact id={routes.Contact} />
            <Footer />
        </>
    )
}

export default App;
