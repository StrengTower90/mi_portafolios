import './Skills.css';
import  { SkillsIcons }  from '../../assets';
import { SkillViews } from '../views';
import SvgIcon from './SvgIcon.jsx';



export const Skills = () => {
  console.log(SkillsIcons);
  return (
    <section className='all_skill_contain' id="scroll_skills">
      {/* <SkillViews />  */}
      {/* <svg className='skill_wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#f2f1ed" fill-opacity="1" d="M0,96L60,96C120,96,240,96,360,122.7C480,149,600,203,720,240C840,277,960,299,1080,282.7C1200,267,1320,213,1380,186.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
      <div className="skill__container">
      <div className="skill_title">
        <h1>Mis Habilidades</h1>
      </div>        
        <div className="skill__templates">
          {Object.entries(SkillsIcons).map(([key, {src, title }]) => (
            <SvgIcon key={key} src={src} title={title} />
          ))}
            </div> 
    </div>  
    </section>
    
  )
}
