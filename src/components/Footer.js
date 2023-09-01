import guideImg from "../images/caleb.jpg"

export default function Footer() {
  return(
    <footer>
      <div className="footer-card">
        <img src={guideImg}/>
        <div>
          <h2>Your guide</h2>
          <p>“I have lived at Lagos for over 17 years, so I can show you all of its best parts and hidden secrets.”</p>
          <h4 title="guide's name">Caleb Banky aka C-sharp</h4>
        </div>
      </div>
    </footer>
  )
}
