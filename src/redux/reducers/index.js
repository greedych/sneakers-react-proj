import { data } from "../../data";

const initialState = {
  sneakers: [
    {
      image:
        "https://i.pinimg.com/736x/36/fa/f1/36faf183a58232a48d79997067080d2b.jpg",
      name: "Globe shoes | brown",
      price: 140,
      id: 1,
    },
    {
      image:
        "https://i.pinimg.com/1200x/13/0f/30/130f30fe3ac00fef68be674e3972fa42.jpg",
      name: "DC shoes | black",
      price: 100,
      id: 2,
    },
    {
      image:
        "https://i.pinimg.com/1200x/38/98/a8/3898a83dc389daaae5bda533920ecc77.jpg",
      name: "Adidas Superstar | black",
      price: 120,
      id: 3,
    },
    {
      image:
        "https://i.pinimg.com/736x/d7/95/fa/d795fa09110dadc6aa78409a3a3e4ae5.jpg",
      name: "Vans | red",
      price: 150,
      id: 4,
    },
  ],
};

const sneakerReducer = (state = initialState) => {
  return state;
};

export default sneakerReducer;
