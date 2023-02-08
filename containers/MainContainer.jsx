import food from "../public/food.jpeg"
import Image from "next/image"

export default function MainContainer(props) {
  return(
    <div className="mainContainer" ref={props.topRef}>
      <div className="fluff">We serve the modern Asian cuisine you deserve</div>
      <Image className="foodPoster" src={food} alt="Korean Atlanta dinner picture"/>
    </div>
  )
};
