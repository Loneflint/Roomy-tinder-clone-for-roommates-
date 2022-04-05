import axios from "axios";
import User from "../Server/models/user";

const instance = axios.create({
  baseURL: "http://192.168.1.131:5000",
});
export const getUser = () => instance.get("/user/get");


export const postUser = (data) => {
  // console.warn( 'hello world' );
  instance.post("/user/post", {
    username: data.data.username,
    password: data.data.password,
    email: data.data.email,
  });
};

export const postUserLogin = (data) => {
  // console.warn( 'hello world' );
  instance.post("/userlogin/post", {
    password: data.data.password,
    email: data.data.email,
  });
};

export const postListing = (data) => {
  // console.log( data.data.pic );
  instance.post("/listing/post", {
    price: data.data.price,
    address: data.data.address,
    description: data.data.description,
    img: Buffer(data.data.pic, "base64"),
  });
  console.log(data.data.smoking)
  console.log(data.data.pets)
};
// availability: data.data.availability, poster: data.data.poster
