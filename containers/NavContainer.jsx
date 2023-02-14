import logo from "../public/logo.png";
import logoSmall from "../public/logo-small.png"
import Image from 'next/image';

export default function NavContainer(props) {
  return(
    <div className={props.scrollVal > 50 ? "navContainerScroll" : "navContainer"}>
      <Image className="logo" src={props.imageSrc} alt="Yogi Korean Asian Logo"/>
      <div className={props.scrollVal > 50 ? "navigatorScroll" : "navigator"}>
        <div className="navItem" onClick={() => props.topRef.current.scrollIntoView()}>Top</div>
        <div className="navItem" onClick={() => props.menuRef.current.scrollIntoView()}>Menu</div>
        <div className="navItem" onClick={() => props.aboutRef.current.scrollIntoView()}>Location</div>
        <a href="https://www.clover.com/online-ordering/yogi-suwanee" className="navItem" >Order</a>
        {props.scrollVal > 50 && <div className="hamburger"></div>}
        {props.scrollVal > 50 && <div className="hamburger"></div>}
        {props.scrollVal > 50 && <div className="hamburger"></div>}
      </div>
    </div>
  )
};
