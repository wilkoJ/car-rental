interface ICars {
  name: string;
  mark: string;
  description: string;
  price: number;
  batterie: string;
  seats: number;
  bags: number;
  img: string;
}
export const defaultCar = {
  name: "VW ID.3",
  mark: "Volkswagen",
  description: "Comfortable, dynamic, quiet",
  price: 87.88,
  batterie: "385km",
  seats: 5,
  bags: 4,
  img: "/cars/vw-id3-4d-white-2022.png",
};
export default ICars;
