import face from "@/assets/facelogo.png";
import instaGram from "@/assets/instalogo.png";
import linkedIn from "@/assets/linkdlogo.png";
import telegram from "@/assets/telegramlogo.png";
import xlogo from "@/assets/xlogo.png";
import youTube from "@/assets/youtubelogo.png";
import "./styles.css";

export function Rodape() {
  return (
    <footer className="rodape mt-[50px]">
      <div className="clear-box">
        <div className="footer-box-h4">
          <b>Connect with us!</b>
        </div>

        <div className="social-box">
          <div className="x-social">
            <a href="https://twitter.com/thehackersnews" target="_blank">
              <img src={xlogo} width="50" height="50"></img>
            </a>
          </div>
          <div className="linkd-social">
            <a href="https://twitter.com/thehackersnews" target="_blank">
              <img src={linkedIn} width="50" height="50"></img>
            </a>
          </div>
          <div className="you-social">
            <a href="https://twitter.com/thehackersnews" target="_blank">
              <img src={youTube} width="50" height="50"></img>
            </a>
          </div>
          <div className="insta-social">
            <a href="https://twitter.com/thehackersnews" target="_blank">
              <img src={instaGram} width="50" height="50"></img>
            </a>
          </div>
          <div className="face-social">
            <a href="https://twitter.com/thehackersnews" target="_blank">
              <img src={face} width="50" height="50"></img>
            </a>
          </div>
          <div className="tele-social">
            <a href="https://twitter.com/thehackersnews" target="_blank">
              <img src={telegram} width="50" height="50"></img>
            </a>
          </div>
        </div>
        <div className="menu-box">
          <div className="menu-company">
            <b>Company</b>
            <a href="1">About THN</a>
            <a href="1">Advertise with us</a>
            <a href="1">Contact</a>
          </div>
          <div className="menu-pages">
            <b>Pages</b>
            <a href="1">Webinars</a>
            <a href="1">Deals Store</a>
            <a href="1">Privacy Policy</a>
          </div>
          <div className="hidden sm:flex flex-col">
            <b>Deals</b>
            <a href="1">Hacking</a>
            <a href="1">Development</a>
            <a href="1">Android</a>
          </div>
          <div className="menu-more">
            <a href="1" className="a-more">
              RSS FEED
            </a>
            <br></br>
            <a href="1" className="a-more">
              Contact Us
            </a>
          </div>
        </div>
        <div className="note-box">
          © The Hacker News, 2024. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
