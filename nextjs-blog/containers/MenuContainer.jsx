import CatSelector from "../components/CatSelector";

export default function MenuContainer(props) {
  const {category, currCat, setCat} = props;
  return(
    <div className="menuContainer" ref={props.menuRef}>
      <CatSelector categories={category.keys()} setCat={setCat} currCat={currCat}/>
      <div className="menuItem">
        {category.get(currCat)}
      </div>
    </div>
  )
};
