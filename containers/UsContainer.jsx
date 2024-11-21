import Image from "next/image";
import friedrice from "../src/assets/friedrice.jpeg"
import toast from "../src/assets/toast.jpeg"
import tonkatsu from "../src/assets/tonkatsu.jpeg"

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
