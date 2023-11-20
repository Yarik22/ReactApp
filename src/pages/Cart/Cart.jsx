// Cart.js
import React, { useState } from "react";
import { Button } from "@mui/material";
import useGlobalStore from "../../store/zustand";
import styles from "./cart.module.scss";
import DialogComponent from "../../components/DialogComponent/DialogComponent";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [comment, setComment] = useState();

  const checkedGoods = useGlobalStore((state) =>
    state.goods.filter((v) => v.checked)
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Ваш відгук:", event.target.comment.value);
    setComment(event.target.comment.value);
    setIsOpen(true);
  };

  return (
    <div className={styles.wrappercart}>
      <DialogComponent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        comment={comment}
      />
      {checkedGoods.length ? (
        checkedGoods.map((item, idx) => (
          <form onSubmit={handleSubmit} key={idx}>
            <section className={styles.section}>
              <p className={styles.p}>{item.name}</p>
              <p className={styles.p}>
                {item.price} {item.currency}
              </p>
              <img
                src={item.url}
                alt={`Image ${idx + 1}`}
                className={styles.img}
              />
              <p className={styles.p}>{item.description}</p>
              <textarea
                className={styles.textarea}
                required
                name="comment"
                placeholder="Write your opinion"
              ></textarea>
              <Button
                variant="outlined"
                type="submit"
                className={styles.Button}
              >
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
