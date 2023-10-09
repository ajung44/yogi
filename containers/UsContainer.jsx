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
                    We strive to provide the best Korean food in Suwanee, Georgia. Try our beef bulgogi Korean street toast, spicy simmered rice cake (tteobokki) or a classic kimbap (roll) with various fillings such as kimchi or tuna. How about our homemade Dalgona Milk drink? Whichever you choose, you won't be disappointed!
                </p>
            </div>
        </div>
    )
};
