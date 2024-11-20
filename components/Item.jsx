import Image from "next/image";
import picture from "../public/picture.png"
import { useState } from "react";

export default function Item(props) {
  const {
    ide, name, price, accompaniment, description, hot, extra, pic
  } = props;

  const [hover, setHover] = useState(false);
  
  return (
    <div className="menuItem" identifier={ide}>
      <div className="name" id={hot ? "hot" : "notHot"}><span className="inlineId">{ide}. </span>{name}</div>
      
      <div className="details">
        { accompaniment && <div className="accompaniment">Comes with {accompaniment}</div>}
        <div className="description">{description}</div>
        <div className="extra">{extra}</div>
      </div>
      <div className="price" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
        {pic && <Image className="menuPic" src={picture} alt="view picture" />}
        {price && `$${price}`}
      </div>
      {pic && hover && <Image className="foodThumb" src={require(`../public/${pic}`)} alt={name}/>}
    </div>
  )
};
