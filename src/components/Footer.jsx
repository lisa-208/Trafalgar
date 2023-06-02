const Footer = () => {
  return (
    <footer className="footer">
        <div className="col-1">
            <img src="/assets/footer-logo.png" alt="" />
            <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
            <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
        </div>

        <div className="col-2">
            <h3>Company</h3>
            <a href="#">About</a>
            <a href="#">Testomonials</a>
            <a href="#">Find a doctor</a>
            <a href="#">Apps</a>
        </div>

        <div className="col-2">
            <h3>Region</h3>
            <a href="#">Indonesia</a>
            <a href="#">Singapore</a>
            <a href="#">Hong Kong</a>
            <a href="#">Canada</a>
        </div>

        <div className="col-2">
            <h3>Help</h3>
            <a href="#">Help center</a>
            <a href="#">Contact support</a>
            <a href="#">Instruction</a>
            <a href="#">How it works</a>
        </div>
    </footer>
  )
}
export default Footer