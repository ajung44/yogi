import food from "../public/food.jpeg"
import Image from "next/image"
import bg from "../public/topbg.jpg"

export default function MainContainer(props) {
  return(
    <div className="mainContainer" ref={props.topRef}>
      <Image className="foodBG" src={bg} alt="SuwaneeBG"/>
      <section>Welcome to <span className="yogi">yogi</span></section>
      <Image className="foodPoster" src={food} alt="Korean Suwanee dinner picture"/>
      <h1 className="fluff">The best Korean food in Suwanee, Georgia</h1>
    </div>
  )
};
