import BasicButton from "../components/BasicButton"
import ServiceCard from "../components/ServiceCard"

const OurServices = () => {
  return (
    <div className="our-services relative" >
        <img className="bg-element" src="/assets/bg element.svg" alt="" />
        <img className="bg-element-dotted" src="/assets/dotted-element.svg" alt="" />
        <h1>Our Services</h1>
        <div className="line" ></div>
        <p>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
        
        <div className="service-cards">
            <ServiceCard src="mag-glass.svg" title="Search doctor" info="Choose your doctor from thousands of specialist, general, and trusted hospitals" />

            <ServiceCard src="med-bottle.svg" title="Online pharmacy" info="Buy  your medicines with our mobile application with a simple delivery system" />

            <ServiceCard src="tab.svg" title="Consultation" info="Free consultation with our trusted doctors and get the best recomendations" />

            <ServiceCard src="details-info.svg" title="Details info" info="Free consultation with our trusted doctors and get the best recomendations" />

            <ServiceCard src="bag.svg" title="Emergency care" info="You can get 24/7 urgent care for yourself or your children and your lovely family" />

            <ServiceCard src="tracking.svg" title="Tracking" info="Track and save your medical history and health data" />
        </div>
        <BasicButton text="Learn More"/>
        
    </div>
  )
}
export default OurServices