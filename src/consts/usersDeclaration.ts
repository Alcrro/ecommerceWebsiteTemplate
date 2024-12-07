import { IUserDeclaration } from "@/types/usersDeclarations.types";
import { incrementalNumber } from "@/utils/incrementNumber";

const incNum = incrementalNumber();

export const usersDeclaration: IUserDeclaration[] = [
  {
    id: incNum(),
    productId: 0,
    userId: 1,
    userName: "Alex",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Dolorum, voluptatum. Iste accusamus assumenda non delectus cupiditate quae distinctio, possimus provident.",
  },
  {
    id: incNum(),
    productId: 1,
    userId: 2,
    userName: "john",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Dolorum, voluptatum. Iste accusamus assumenda non delectus cupiditate quae distinctio, possimus provident.",
  },
  {
    id: incNum(),
    productId: 3,
    userId: 3,
    userName: "Melan",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Dolorum, voluptatum. Iste accusamus assumenda non delectus cupiditate quae distinctio, possimus provident.",
  },
  {
    id: incNum(),
    productId: 4,
    userId: 4,
    userName: "Noemi",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Dolorum, voluptatum. Iste accusamus assumenda non delectus cupiditate quae distinctio, possimus provident.",
  },

  {
    id: incNum(),
    productId: 5,
    userId: 5,
    userName: "Noemi",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Dolorum, voluptatum. Iste accusamus assumenda non delectus cupiditate quae distinctio, possimus provident.",
  },
];
