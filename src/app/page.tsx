'use server';

import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import StrategicThinking from './components/StrategicThinking/StrategicThinking';
import SharingIsCaring from './components/SharingIsCaring/SharingIsCaring';
import SkillsExperiences from './components/SkillsExperiences/SkillsExperiences';

const Home = () => {
    // const [state, setState] = useState({ left: 0, top: 0 });
    //   useEffect(() => {
    //       document. addEventListener('mousemove', (e) => {
    //           setState({ left: e.pageX, top: e.pageY });  
    //       })
    //   }, [])
    return (
        <> 
            <NavBar></NavBar>
            <main className="font-['Poppins']">
                <Hero></Hero>
                <AboutMe></AboutMe>
                <StrategicThinking></StrategicThinking>
                <SharingIsCaring></SharingIsCaring>
                <SkillsExperiences></SkillsExperiences>
            </main>
        </>
    )
}

export default Home;
