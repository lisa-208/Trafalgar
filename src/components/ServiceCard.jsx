const ServiceCard = ({src,title,info}) => {
  return (
    <div className="service-card">
                <img src={`/src/assets/${src}`} alt="" />
                <div className="card-title">
                    {title}
                </div>
                <p className="card-info" >
                    {info}
                </p>
    </div>
  )
}
export default ServiceCard