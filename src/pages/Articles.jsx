import ArticleCard from "../components/ArticleCard"
import BasicButton from "../components/BasicButton"

const Articles = () => {
  return (
    <div className="articles" >
        <h1>Check out our latest article</h1>
        <div className="line" ></div>
        <div className="article-cards">
            <ArticleCard src="image-1.png" title="Disease detection, check up in the laboratory" info="In this case, the role of the health laboratory is very important to do a disease detection..." />

            <ArticleCard src="image 2.png" title="Herbal medicines that are safe for consumption" info="Herbal medicine is very widely used at this time because of its very good for your health..." />

            <ArticleCard src="image 3.png" title="Natural care for healthy facial skin" info="A healthy lifestyle should start from now and also for your skin health. There are some..." />
           
        </div>
        <BasicButton text="View All" />
    </div>
  )
}
export default Articles