import React from "react";
import { useForm } from "react-hook-form";
import "./UserFormComponent.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { getDatabase, ref, child, push, update } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(20)
    .required(),
  surname: yup
    .string()
    .min(2)
    .max(20)
    .required(),
  address: yup
    .string()
    .min(2)
    .max(32)
    .required(),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required(),
});

schema.validate({ name: "jimmy", address: 11 }).catch(function(err) {
  console.log(err);
});

export default function UserFormComponent() {
  const purchases = useSelector((state) => state.cart);
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  function writeNewPost(userData, cartData) {
    const db = getDatabase();

    const postData = {
      userData: userData,
      purchases: cartData,
    };

    const newPostKey = push(child(ref(db), "posts")).key;

    const updates = {};
    updates["/orders/" + newPostKey] = postData;
    // updates["/user-posts/" + uid + "/" + newPostKey] = postData;

    return update(ref(db), updates);
  }

  const onSubmit = (data) => {
    console.log({ data });
    writeNewPost(data, purchases);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" />
      <input {...register("surname")} placeholder="Surname" />
      {/* <p>{errors.surname?.message}</p> */}
      <input {...register("address")} placeholder="Address" />
      <input {...register("phone")} placeholder="Phone" />
      <p>{errors}</p>
      <input type="submit" />
    </form>
  );
}
