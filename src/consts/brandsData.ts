import { incrementalNumber } from "@/utils/incrementNumber";

const incrNumber = incrementalNumber();
export const brandsData = [
  {
    id: incrNumber(),
    name: "apple",
    link: "apple",
  },
  {
    id: incrNumber(),
    name: "samsung",
    link: "samsung",
  },
  {
    id: incrNumber(),
    name: "huawei",
    link: "huawei",
  },
];
