import Image from "next/image";
import businessBG from "../public/locationbg.jpeg"

export default function AboutContainer(props) {
  return(
    <section className="aboutContainer" ref={props.aboutRef}>
      <div className="aboutLeft">
        <div className="findUs">
          Modernizing Traditional Asian flavors
        </div>
        <Image className="aboutBG"src={businessBG} alt="Duluth Korean Spicy Rice Cake Snack Food"/>
      </div>
      <div className="aboutRight">
        <address className="location">
          <h2>
            Our Location:
          </h2>
          <span id="address">80 Horizon Dr #201</span>
          <br />
          Suwanee, GA 30024 
          <br/>
          <span id="phoneNum">(678) 926-3019</span>
        </address>
        <div className="businessHours">
          <h2>
            Our Business Hours:
          </h2>
          Monday:<br/>10:30AM - 9:00PM<br/><br/>
          <span className="closed">Tuesday:<br/>CLOSED</span><br/><br/>
          Wednesday:<br/>10:30AM - 9:00PM<br/><br/>
          Thursday:<br/>10:30AM - 9:00PM<br/><br/>
          Friday:<br/>10:30AM - 9:00PM<br/><br/>
          Saturday:<br/>10:30AM - 9:00PM<br/><br/>
          Sunday:<br/>11:00AM - 8:00PM<br/><br/>

          <h3>
            Last order at closing time.
          </h3>
        </div>
      </div>
    </section>
  )
};
