import BasicButton from "../components/BasicButton"

const DownloadApp = () => {
  return (
    <div className="infos" >
    <img src="/assets/download-app-image.svg" alt="" />
    <div className="info-card">
        <h1>Download our mobile apps</h1>
        <div className="line" ></div>
        <p> Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely </p>
        <BasicButton text="Download" arrow="&#8595;"/>
    </div>
  
</div>
  )
}
export default DownloadApp