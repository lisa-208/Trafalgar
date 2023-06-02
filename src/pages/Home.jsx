const Home = () => {
  return (
    <div className="home">
        <div className="home-info">
            <h1>Virtual healthcare for you</h1>
            <p>Trafalgar provides progressive, and affordable 
            healthcare, accessible on mobile and online 
            for everyone</p>
            <a className="btn-primary" href="#">Consult today</a>
        </div>
        <img src="/assets/illustration.svg" alt="" />
        <img className="home-dotted" src="/assets/dotted-element.svg" alt="" />
    </div>
  )
}
export default Home