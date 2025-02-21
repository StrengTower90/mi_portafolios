
export const ScrollThem = ( ) => {
    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      };
    
      const toTheAbout = () => {
        window.scrollTo({ top: 650, left: 0, behavior: "smooth"});
      }
    
      const toTheProject = () => {
        window.scrollTo({
          top: 1250, 
          left: 0, 
          behavior: "smooth"
        })
      }
    
      const toTheSkills = () => {
        window.scrollTo({
          top: 2000, 
          left: 0, 
          behavior: "smooth"
        })
      }

      return{
        toTheTop,
        toTheAbout,
        toTheProject,
        toTheSkills
      }
}