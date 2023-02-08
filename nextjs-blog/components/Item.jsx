export default function Item(props) {
  const {
    ide, name, price, accompaniment, description, hot
  } = props;

  return (
    <div className="menuItem" identifier={ide}>
      {ide} {name} {price} {accompaniment} {description} {hot}
    </div>
  )
};
