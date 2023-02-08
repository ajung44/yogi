import { useMemo } from "react";

export default function CatSelector(props) {
  const { categories, setCat, currCat } = props;
  const iterator = [];

  function clickHandler(curr) {
    setCat(curr.target.id);
  }

  useMemo(() => {
    let cat = categories.next().value;
    let i = 1;

    while (cat) {
      iterator.push(
        <div key={`${cat}${i++}`} className={ cat === currCat ? "categoryButtonActive" : "categoryButton" } id={`${cat}`} onClick={(e) => clickHandler(e)}>
          {cat}
        </div>
      )
      cat = categories.next().value;
    }
  });

  return (
    <div className="categoryContainer">
      {iterator}
    </div>
  )
}