import React from "react";
import { useForm } from "react-hook-form";
import "./UserFormComponent.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

export default function UserFormComponent() {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log({ data });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Name" name="name" required />
      {/* <p>{errors.name?.message}</p> */}
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
      <input type="submit" value="Order" />
    </form>
  );
}
