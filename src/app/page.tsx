import routes from './routes';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import StrategicThinking from './components/StrategicThinking/StrategicThinking';
import SharingIsCaring from './components/SharingIsCaring/SharingIsCaring';
import SkillsExperiences from './components/SkillsExperiences/SkillsExperiences';
import Contact from './components/Contact/Contact';

const App: React.FC = () => {
    // const [state, setState] = useState({ left: 0, top: 0 });
    //   useEffect(() => {
    //       document. addEventListener('mousemove', (e) => {
    //           setState({ left: e.pageX, top: e.pageY });  
    //       })
    //   }, [])
    return (
        <>
            <Hero id={routes.Home}></Hero>
            <AboutMe id={routes.About}></AboutMe>
            <StrategicThinking id={routes.Skills}></StrategicThinking>
            <SharingIsCaring id={routes.Blog}></SharingIsCaring>
            <SkillsExperiences id={routes.Experience}></SkillsExperiences>
            <Contact id={routes.Contact}></Contact>
        </>
    )
}

export default App;
