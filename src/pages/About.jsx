import BasicButton from "../components/BasicButton"

const About = () => {
  return (
    <div className="infos" >
        <img src="/assets/leading-healthcare-image.svg" alt="" />
        <div className="info-card">
            <h1>Leading healthcare providers</h1>
            <div className="line" ></div>
            <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
            in the solutions we deliver</p>
            <BasicButton text="Learn More"/>
        </div>
      
    </div>
  )
}
export default About