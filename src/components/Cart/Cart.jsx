import React, { useState } from "react";
import "./cart.scss";
import { Button } from "@mui/material";
export default function Cart({ checkedGoods }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Ваш відгук:", event.target.comment.value);
    alert(`Ваш відгук: "${event.target.comment.value}" додано успішно!`);
  };
  return (
    <div className="wrappercart">
      {checkedGoods.length ? (
        checkedGoods.map((item, idx) => (
          <form onSubmit={handleSubmit} key={idx}>
            <section>
              <p>{item.name}</p>
              <p>
                {item.price} {item.currency}
              </p>
              <img src={item.url} alt={`Image ${idx + 1}`} />
              <p>{item.description}</p>
              <textarea
                required
                name="comment"
                placeholder="Write your opinion"
              ></textarea>
              <Button variant="outlined" type="submit">
                Set comment
              </Button>
            </section>
          </form>
        ))
      ) : (
        <p>No goods</p>
      )}
    </div>
  );
}
