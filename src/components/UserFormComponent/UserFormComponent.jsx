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
    // .matches(phoneRegExp, "Phone number is not valid")
    .required(),
});

export default function UserFormComponent() {
  const purchases = useSelector((state) => state.cart);
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  function writeNewPost(userData, cartData) {
    const db = getDatabase();

    // A post entry.
    const postData = {
      userData: userData,
      purchases: cartData,
    };

    // Get a key for a new Post.
    const newPostKey = push(child(ref(db), "posts")).key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates["/orders/" + newPostKey] = postData;
    // updates["/user-posts/" + uid + "/" + newPostKey] = postData;

    return update(ref(db), updates);
  }

  const onSubmit = (data) => {
    console.log({ data });
    // writeNewPost(data, purchases);
    reset();
  };
  return (
    <form onSubmit={()=>handleSubmit(onSubmit)}>
      <input placeholder="Name" name="name" required />
      {console.log(errors)}
      <input
        {...register("surname")}
        placeholder="Surname"
        name="surname"
        required
      />
      {/* <p>{errors}</p> */}
      <input
        {...register("address")}
        placeholder="Address"
        name="address"
        required
      />
      <input {...register("phone")} placeholder="Phone" name="phone" required />
      {/* <p>{errors.phone?.message}</p> */}
      <input type="submit" />
    </form>
  );
}
