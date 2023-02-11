import CatSelector from "../components/CatSelector";

export default function MenuContainer(props) {
  const {category, currCat, setCat} = props;
  return(
    <div className="menuContainer" ref={props.menuRef}>
      <h2>THE MENU</h2>
      <CatSelector categories={category.keys()} setCat={setCat} currCat={currCat}/>
      <div className="menuBox">
        {category.get(currCat)}
      </div>
    </div>
  )
};
