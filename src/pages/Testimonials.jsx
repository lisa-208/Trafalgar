const Testimonials = () => {
  return (
    <div className="testimonials" >
        <div className="testimonial-card">
            <h1>What our customer are saying</h1>
            <div className="line" ></div>
            <div className="customer">
                <div className="customer-info">
                    <img src="/assets/customer-pic.png" alt="" />
                    <div>
                        <h3>Edward Newgate</h3>
                        <p>Founder Circle</p>
                    </div>
                </div>
                <div className="quote">“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</div>
            </div>
            <img className="dotted-blue" src="/assets/dotted-element.svg" alt="dotted" />
            <img className="dotted-white" src="/assets/dotted-white.png" alt="dotted" />
        </div>
    </div>
  )
}
export default Testimonials