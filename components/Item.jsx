import Image from "next/image";

export default function Item(props) {
  const {
    ide, name, price, accompaniment, description, hot, extra, pic
  } = props;

  return (
    <div className="menuItem" identifier={ide}>
      <div className="name" id={hot ? "hot" : "notHot"}><span className="inlineId">{ide}. </span>{name}</div>
      {pic && <Image className="foodThumb" src={require(`../public/${pic}`)} alt={name}/>}
      <div className="details">
        { accompaniment && <div className="accompaniment">Comes with {accompaniment}</div>}
        <div className="description">{description}</div>
        <div className="extra">{extra}</div>
      </div>
      <div className="price">${price}</div>
    </div>
  )
};
