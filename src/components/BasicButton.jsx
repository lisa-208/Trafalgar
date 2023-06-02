const BasicButton = ({text,arrow}) => {
  return (
    <>

        <a className="btn">
        <span >{text}</span> 
        {arrow && <img src="/assets/down-arrow-svgrepo-com.svg" alt="" />}
        </a>
    
    </>
  )
}
export default BasicButton