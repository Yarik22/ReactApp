import React from "react";
import "./cart.scss";
import { Button } from "@mui/material";
export default function Cart({ checkedGoods }) {
  return (
    <div className="wrappercart">
      {checkedGoods.length ? (
        checkedGoods.map((item, idx) => (
          <form>
            <section key={idx}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <img src={item.url} alt={`Image ${idx + 1}`} />
              <p>{item.description}</p>
              <textarea placeholder="Write your opinion"></textarea>
              <Button variant="outlined">Set comment</Button>
            </section>
          </form>
        ))
      ) : (
        <p>No goods</p>
      )}
    </div>
  );
}
