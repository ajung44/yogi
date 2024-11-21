import Image from "next/image";
import D1 from "../src/assets/D1.jpg";
import D2 from "../src/assets/D2.jpg";
import D3 from "../src/assets/D3.jpg";
import D4 from "../src/assets/D4.jpg";
import D5 from "../src/assets/D5.jpg";
import D6 from "../src/assets/D6.jpg";
import D7 from "../src/assets/D7.jpg";
import D8 from "../src/assets/D8.jpg";
import D9 from "../src/assets/D9.jpg";
import D10 from "../src/assets/D10.jpg";
import O1 from "../src/assets/O1.jpg";
import O2 from "../src/assets/O2.jpg";
import O3 from "../src/assets/O3.jpg";
import O4 from "../src/assets/O4.jpg";
import O5 from "../src/assets/O5.jpg";
import O6 from "../src/assets/O6.jpg";
import O7 from "../src/assets/O7.jpg";
import O8 from "../src/assets/O8.jpg";
import M1 from "../src/assets/M1.jpg";
import M2 from "../src/assets/M2.jpg";
import M3 from "../src/assets/M3.jpg";
import M4 from "../src/assets/M4.jpg";
import M5 from "../src/assets/M5.jpg";
import M6 from "../src/assets/M6.jpg";
import M7 from "../src/assets/M7.jpg";
import S3 from "../src/assets/S3.jpg";
import S4 from "../src/assets/S4.jpg";
import S5 from "../src/assets/S5.jpg";
import S6 from "../src/assets/S6.jpg";
import S7 from "../src/assets/S7.jpg";
import S8 from "../src/assets/S8.jpg";

export default function GalleryContainer(props) {
    return (
        <div className="galleryContainer">
            <h2>
                THE GALLERY
            </h2>
            <div className="gallery">
                <Image className="galleryPic" loading="lazy" src={D1} alt="Shrimp Tempura Don"/>
                <Image className="galleryPic" src={D2} alt="Braised Pork Belly Don"/>
                <Image className="galleryPic" src={D3} alt="Grilled Beef Bulgogi Don"/>
                <Image className="galleryPic" src={D4} alt="Grilled Chicken Thigh Don"/>
                <Image className="galleryPic" src={D5} alt="Grilled Pork Rib Don"/>
                <Image className="galleryPic" src={D6} alt="Grilled K-Meat Patties Don"/>
                <Image className="galleryPic" src={D7} alt="Grilled Chicken Wing Don"/>
                <Image className="galleryPic" src={D8} alt="Grilled Spicy Pork Don"/>
                <Image className="galleryPic" src={D9} alt="Spicy Beef Intestines Don"/>
                <Image className="galleryPic" src={D10} alt="Spicy Squid Don"/>
                <Image className="galleryPic" src={O1} alt="Braised Pork Belly Omelette Rice"/>
                <Image className="galleryPic" src={O2} alt="Grilled Chicken Wing Omelette Rice"/>
                <Image className="galleryPic" src={O3} alt="Grilled Pork Rib Omelette Rice"/>
                <Image className="galleryPic" src={O4} alt="Grilled Beef Bulgogi Omelette Rice"/>
                <Image className="galleryPic" src={O5} alt="Grilled Chicken Thigh Omelette Rice"/>
                <Image className="galleryPic" src={O6} alt="Grilled Spicy Pork Omelette Rice"/>
                <Image className="galleryPic" src={O7} alt="Grilled Korean Meat Patties Omelette Rice"/>
                <Image className="galleryPic" src={O8} alt="Spicy Beef Intestines Omelette Rice"/>
                <Image className="galleryPic" src={M1} alt="Yogi Toast"/>
                <Image className="galleryPic" src={M2} alt="Donkatsu (Pork Cutlet)"/>
                <Image className="galleryPic" src={M4} alt="Ddukbbokki (Spicy Rice Cake)"/>
                <Image className="galleryPic" src={M5} alt="Ramen"/>
                <Image className="galleryPic" src={M6} alt="Jjolmyun (cold chewy noodles)"/>
                <Image className="galleryPic" src={M7} alt="Udon"/>
                <Image className="galleryPic" src={S3} alt="French Fries"/>
                <Image className="galleryPic" src={S4} alt="Cheese Bulgogi French Fries"/>
                <Image className="galleryPic" src={S5} alt="Fish Cake"/>
                <Image className="galleryPic" src={S6} alt="Kimmari Tempura"/>
                <Image className="galleryPic" src={S7} alt="Squid Tempura"/>
                <Image className="galleryPic" src={S8} alt="Fried Dumplings"/>
            </div>
        </div>
    )
};
