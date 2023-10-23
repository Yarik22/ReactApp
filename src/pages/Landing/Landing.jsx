import useGlobalStore from "../../store/zustand";
import DoneIcon from "@mui/icons-material/Done";
import "./landing.scss";
import useLocalStorage from "../../hooks/useLocalStorage";
function Landing() {
  const goods = useGlobalStore((state) => state.goods);
  const toggleItemChecked = useGlobalStore((state) => state.toggleItemChecked);
  const [checkedGoods, setCheckedGoods] = useLocalStorage(
    useGlobalStore((state) => state.goods.filter((v) => v.checked)),
    "checkedGoods"
  );
  const changeChecked = (idx) => {
    toggleItemChecked(idx);
    setCheckedGoods(goods.filter((v) => v.checked).map((v) => v.id));
  };
  return (
    <>
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
    </>
  );
}

export default Landing;
