import './Skills.css';
import  { getIcons }  from '../../assets';
import { SkillViews } from '../views';



export const Skills = () => {

   const { html, java, php, piton, react, asp, csharp, css, mtui, boots } = getIcons;

  return (
    <section className='all_skill_contain' id="scroll_skills">
      <SkillViews />
      {/* <svg className='skill_wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#f2f1ed" fill-opacity="1" d="M0,96L60,96C120,96,240,96,360,122.7C480,149,600,203,720,240C840,277,960,299,1080,282.7C1200,267,1320,213,1380,186.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
      <div className="skill__container">
      <div className="skill_title">
        <h1>Mis Habilidades</h1>
        <hr />
      </div>        
        <div className="skill__templates">
             <div className="skill___item item__1">
              <img src={ html.src } alt="" />
              <h4>{ html.title }</h4>
              </div>
             <div className="skill___item item__2">
              <img src={ java.src } alt="" />
              <h4>{ java.title }</h4>
              </div>
             <div className="skill___item item__3">
              <img src={ php.src } alt="" />
              <h4>{ php.title }</h4>
              </div>
             <div className="skill___item item__4">
              <img src={ piton.src } alt="" />
              <h4>{ piton.title }</h4>
              </div>
             <div className="skill___item item__5">
              <img src={ react.src } alt="" />
              <h4>{ react.title }</h4>
              </div>
             <div className="skill___item item__6">
              <img src={ asp.src } alt="" />
              <h4>{ asp.title }</h4>
              </div>
             <div className="skill___item item__7">
              <img src={ csharp.src } alt="" />
              <h4>{ csharp.title }</h4>
              </div>
             <div className="skill___item item__8">
              <img src={ css.src } alt="" />
              <h4>{ css.title }</h4>
              </div>
             <div className="skill___item item__9">
              <img src={ mtui.src } alt="" />
              <h4>{ mtui.title }</h4>
              </div>
             <div className="skill___item item__10">
              <img src={ boots.src } alt="" />
              <h4>{ boots.title }</h4>
              </div>     
            </div>
            {/* <svg className="skill_wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#00cba9" fill-opacity="1" d="M0,160L40,138.7C80,117,160,75,240,64C320,53,400,75,480,101.3C560,128,640,160,720,186.7C800,213,880,235,960,250.7C1040,267,1120,277,1200,272C1280,267,1360,245,1400,234.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}
    </div>  
    </section>
    
  )
}
