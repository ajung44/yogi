import Image from "next/image";
import D1 from "../public/D1.jpg";
import D2 from "../public/D2.jpg";
import D3 from "../public/D3.jpg";
import D4 from "../public/D4.jpg";
import D5 from "../public/D5.jpg";
import D6 from "../public/D6.jpg";
import D7 from "../public/D7.jpg";
import D8 from "../public/D8.jpg";
import D9 from "../public/D9.jpg";
import D10 from "../public/D10.jpg";
import O1 from "../public/O1.jpg";
import O2 from "../public/O2.jpg";
import O3 from "../public/O3.jpg";
import O4 from "../public/O4.jpg";
import O5 from "../public/O5.jpg";
import O6 from "../public/O6.jpg";
import O7 from "../public/O7.jpg";
import O8 from "../public/O8.jpg";
import M1 from "../public/M1.jpg";
import M2 from "../public/M2.jpg";
import M3 from "../public/M3.jpg";
import M4 from "../public/M4.jpg";
import M5 from "../public/M5.jpg";
import M6 from "../public/M6.jpg";
import M7 from "../public/M7.jpg";
import S3 from "../public/S3.jpg";
import S4 from "../public/S4.jpg";
import S5 from "../public/S5.jpg";
import S6 from "../public/S6.jpg";
import S7 from "../public/S7.jpg";
import S8 from "../public/S8.jpg";

export default function GalleryContainer(props) {
    return (
        <div className="galleryContainer">
            <h2>
                THE GALLERY
            </h2>
            <div className="gallery">
                <Image className="galleryPic" src={D1} alt="Shrimp Tempura Don"/>
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
