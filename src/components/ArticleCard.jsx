const ArticleCard = ({src,title,info}) => {
  return (
    <div className="article-card">
        <img src={`/assets/${src}`} alt="" />
        <div className="info">
            <h2>{title}</h2>
            <p>{info}</p>
            <a href="#">Read More &#8594;</a>
        </div>
    </div>
  )
}
export default ArticleCard