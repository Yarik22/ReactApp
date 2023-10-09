import "./main.scss";
import DoneIcon from "@mui/icons-material/Done";
//To do:
//  - Add content
function Main({ goods, setGoods }) {
  const changeChecked = (idx) => {
    const updatedGoods = [...goods];
    const isCurrentGoodChecked = updatedGoods[idx].checked;
    updatedGoods[idx].checked = !isCurrentGoodChecked;
    setGoods(updatedGoods);
  };
  return (
    <div className="wrapper">
      {goods.map((item, idx) => (
        <section
          key={idx}
          className={item.checked ? "checked" : null}
          onClick={() => changeChecked(idx)}
        >
          <p>
            {item.price} {item.currency}
          </p>
          {item.checked ? <DoneIcon /> : null}
          <img src={item.url} alt={`Image ${idx + 1}`} />
          <p>{item.name}</p>
        </section>
      ))}
    </div>
  );
}

export default Main;
