import './Skills.css';
import  { SkillsIcons }  from '../../assets';
import { SkillViews } from '../views';
import SvgIcon from './SvgIcon.jsx';



export const Skills = () => {

  //  const { html, java, php, piton, react, asp, csharp, css, mtui, boots } = getIcons;

  return (
    <section className='all_skill_contain' id="scroll_skills">
      <SkillViews />
      {/* <svg className='skill_wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#f2f1ed" fill-opacity="1" d="M0,96L60,96C120,96,240,96,360,122.7C480,149,600,203,720,240C840,277,960,299,1080,282.7C1200,267,1320,213,1380,186.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
      <div className="skill__container">
      <div className="skill_title">
        <h1>Mis Habilidades</h1>
        {/* <hr /> */}
      </div>        
        <div className="skill__templates">
          {Object.entries(SkillsIcons).map(([key, {src, title }]) => (
            <SvgIcon key={key} src={src} title={title} />
          ))}
          
          {/* <svg viewBox="0 0 128 128">
            <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
            </svg> */}
          
             {/* <div className="skill___itemitem__1">
              {/* <img src={ html?.src } alt="" /> */}
              
              {/* <svg viewBox="0 0 128 128">
              <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
              </svg> */}
          
              {/* <h4>{ html?.title }</h4> */}
              {/* </div>
             <div className="skill___item item__2">
              <img src={ java?.src } alt="" />
              <h4>{ java?.title }</h4>
              </div>
             <div className="skill___item item__3">
              <img src={ php?.src } alt="" />
              <h4>{ php?.title }</h4>
              </div>
             <div className="skill___item item__4">
              <img src={ piton?.src } alt="" />
              <h4>{ piton?.title }</h4>
              </div>
             <div className="skill___item item__5">
              <img src={ react?.src } alt="" />
              <h4>{ react?.title }</h4>
              </div>
             <div className="skill___item item__6">
              <img src={ asp?.src } alt="" />
              <h4>{ asp?.title }</h4>
              </div>
             <div className="skill___item item__7">
              <img src={ csharp?.src } alt="" />
              <h4>{ csharp?.title }</h4>
              </div>
             <div className="skill___item item__8">
              <img src={ css?.src } alt="" />
              <h4>{ css?.title }</h4>
              </div>
             <div className="skill___item item__9">
              <img src={ mtui?.src } alt="" />
              <h4>{ mtui?.title }</h4>
              </div>
             <div className="skill___item item__10">
              <img src={ boots?.src } alt="" />
              <h4>{ boots?.title }</h4>
              </div>      */}
            {/* <svg className="skill_wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#00cba9" fill-opacity="1" d="M0,160L40,138.7C80,117,160,75,240,64C320,53,400,75,480,101.3C560,128,640,160,720,186.7C800,213,880,235,960,250.7C1040,267,1120,277,1200,272C1280,267,1360,245,1400,234.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}
            </div> 
    </div>  
    </section>
    
  )
}
