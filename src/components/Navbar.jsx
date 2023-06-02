import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
 
    return (
      <nav>
        <div className="logo">
            <h2 className="logo-icon" >T</h2>
            <h3>Trafalgar</h3>
        </div>
        <div className="hamburger-links">
          <HamburgerMenu/>
        </div>
        
        <ul className="nav-links">
            <li>
            <a className="active-bar" href="#home">Home</a>
            </li>
            <li>
            <a href="#findDoctor">Find a doctor</a>
            </li>
            <li>
            <a href="#downloadApp">Apps</a>
            </li>
            <li>
            <a href="#testimonials">Testimonials</a>
            </li>
            <li>
            <a href="#about">About us</a>
            </li>
        </ul>
      </nav>
    );
  };

export default Navbar;