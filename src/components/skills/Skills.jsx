import './Skills.css';
import  { SkillsIcons }  from '../../assets';
import SvgIcon from './SvgIcon.jsx';



export const Skills = () => {
  return (
    <section className='all_skill_contain' id="scroll_skills">
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
