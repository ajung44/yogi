import Image from "next/image";
import friedrice from "../public/friedrice.jpeg"
import toast from "../public/toast.jpeg"
import tonkatsu from "../public/tonkatsu.jpeg"

export default function UsContainer(props) {
    return (
        <div className="usContainer">
            <div className="usLeft">
                <Image className="usImg" id="img1" src={friedrice} alt="Asian Fried Rice"/>
                <Image className="usImg" id="img2" src={tonkatsu} alt="Japanese Deep Fried Pork Cutlet"/>
                <Image className="usImg" id="img3" src={toast} alt="Korean Street Toast"/>
            </div>
            <div className="usRight">
                <h2>
                    We're a family-owned restaurant
                </h2>
                <p>
                    We're local, and we strive to provide the best Korean food within Suwanee, Georgia. Try our Bulgogi Korean Street Toast, or maybe spicy simmered rice cake (tteobokki)? How about our homemade Dalgona Milk drink?.
                </p>
            </div>
        </div>
    )
};
