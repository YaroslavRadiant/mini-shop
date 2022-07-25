import React from "react";
import { useForm } from "react-hook-form";
import "./UserFormComponent.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { getDatabase, ref, child, push, update } from "firebase/database";
import { useSelector } from "react-redux";
import { schema } from "../../config/yupConfig/yupConfig";

export default function UserFormComponent() {
  const purchases = useSelector((state) => state.cart);
  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function writeNewPost(cartData, userData) {
    const db = getDatabase();

    const postData = {
      purchases: cartData,
      userData: userData,
    };

    const newPostKey = push(child(ref(db), "posts")).key;
    const updates = {};
    updates["/orders/" + newPostKey] = postData;
    return update(ref(db), updates);
  }

  const onSubmit = (data) => {
    writeNewPost(data, purchases);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" />
      <input {...register("surname")} placeholder="Surname" />
      <input {...register("address")} placeholder="Address" />
      <input {...register("phone")} placeholder="Phone" />
      {/* <p>{errors.phone?.message}</p> */}
      <input type="submit" />
    </form>
  );
}
