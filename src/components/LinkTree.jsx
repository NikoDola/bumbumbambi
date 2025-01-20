
import './LinkTree.css';
import '../../public/stars.css';

export default function LinkTree() {
  return (
    <>
    <section className="animated-background">
        <div id="stars1"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
    </section>
      <div className="topImage"></div>
      <div className="logoWrapper">
        <img className="logo" src="./assets/branding/bumbumbambi_logo-icon_color.svg"/>
      </div>
      <img className="companyName" src="./assets/branding/bumbumbambi_text-white.svg"/>
    
    
    <main className="main">
      <a target="_blank" href="https://bsky.app/profile/jkbelcher.bsky.social" className="buttonWrapper">
        <img  src="./assets/images/icon_blue-sky.svg" className="imgButton icon"/>
        <div className="textButtonWrapper">
          <p className="textButton">My BlueSky Profile</p>
        </div>
      </a>
    
      <a target="_blank" href="https://www.instagram.com/bumbum_bambi/" className="buttonWrapper">
        <img  src="./assets/images/icon_instagram.svg" className="icon imgButton"/>
        <div className="textButtonWrapper">
          <p className="textButton">My Instagram Profile</p>
        </div>
      </a>

      <a target="_blank" href="https://www.ashemaletube.com/profiles/3072250/" className="buttonWrapper">
        <img  src="./assets/images/icon_ashemaletube.svg" className="icon imgButton"/>
        <div className="textButtonWrapper">
          <p className="textButton">My Ashemaletube Channel</p>
        </div>
      </a>

      <a target="_blank" href="https://www.tranny.one/user/522911/" className="buttonWrapper">
        <img  src="./assets/images/icon_tranny.svg" className="icon imgButton"/>
        <div className="textButtonWrapper">
          <p className="textButton">My Tranny.one Channel</p>
        </div>
      </a>
    
      <a target="_blank" href="https://xhamster.com/users/bumbumbambi" className="buttonWrapper">
        <img  src="./assets/images/icon_xHamster.svg" className="imgButton icon"/>
        <div className="textButtonWrapper">
          <p className="textButton">My Xhamster Channel</p>
        </div>
      </a>

      <a target="_blank" href="https://www.pornhub.com/users/eefbde5" className="buttonWrapper">
        <img src="./assets/images/icon_pornhub.svg" className="imgButton icon"/>
        <div className="textButtonWrapper">
          <p className="textButton">My PornHub Channel</p>
        </div>
      </a>
 
    
      <a target="_blank" href="https://www.instagram.com/bumbum_bambi/" className="buttonWrapper">
        <img  src="./assets/images/icon_x-videos.svg" className="imgButton icon"/>
        <div className="textButtonWrapper">
          <p className="textButton">My X video Channel</p>
        </div>
      </a>

      <a target="_blank" href="https://hypnotube.com/my-profile" className="buttonWrapper">
        <img  src="./assets/images/icon_HT.svg" className="imgButton icon"/>
        <div className="textButtonWrapper">
          <p className="textButton">My Hypnotube Channel</p>
        </div>
      </a>

    
    </main>

    </>

  );
}