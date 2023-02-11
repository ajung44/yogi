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
import S1 from "../public/S1.jpg";
import S2 from "../public/S2.jpg";
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
                <Image className="galleryPic" src={D1} alt=""/>
                <Image className="galleryPic" src={D2} alt=""/>
                <Image className="galleryPic" src={D3} alt=""/>
                <Image className="galleryPic" src={D4} alt=""/>
                <Image className="galleryPic" src={D5} alt=""/>
                <Image className="galleryPic" src={D6} alt=""/>
                <Image className="galleryPic" src={D7} alt=""/>
                <Image className="galleryPic" src={D8} alt=""/>
                <Image className="galleryPic" src={D9} alt=""/>
                <Image className="galleryPic" src={D10} alt=""/>
                <Image className="galleryPic" src={O1} alt=""/>
                <Image className="galleryPic" src={O2} alt=""/>
                <Image className="galleryPic" src={O3} alt=""/>
                <Image className="galleryPic" src={O4} alt=""/>
                <Image className="galleryPic" src={O5} alt=""/>
                <Image className="galleryPic" src={O6} alt=""/>
                <Image className="galleryPic" src={O7} alt=""/>
                <Image className="galleryPic" src={O8} alt=""/>
                <Image className="galleryPic" src={M1} alt=""/>
                <Image className="galleryPic" src={M2} alt=""/>
                <Image className="galleryPic" src={M4} alt=""/>
                <Image className="galleryPic" src={M5} alt=""/>
                <Image className="galleryPic" src={M6} alt=""/>
                <Image className="galleryPic" src={M7} alt=""/>
                <Image className="galleryPic" src={S1} alt=""/>
                <Image className="galleryPic" src={S2} alt=""/>
                <Image className="galleryPic" src={S3} alt=""/>
                <Image className="galleryPic" src={S4} alt=""/>
                <Image className="galleryPic" src={S5} alt=""/>
                <Image className="galleryPic" src={S6} alt=""/>
                <Image className="galleryPic" src={S7} alt=""/>
                <Image className="galleryPic" src={S8} alt=""/>
            </div>
        </div>
    )
};
