import { IFooterData } from "@/types/FooterMenu.types";
import { incrementalNumber } from "@/utils/incrementNumber";

const itemCounter = incrementalNumber();
export const footerData: IFooterData[] = [
  {
    id: itemCounter(),
    label: "alcrro",
    menuLink: [
      { link: "https://github.com/Alcrro", name: "github" },
      {
        link: "https://www.linkedin.com/in/alexandru-roventa",
        name: "linkedin",
      },
    ],
  },
  {
    id: itemCounter(),
    label: "company",
    menu: ["about", "features", "works", "career"],
  },
  {
    id: itemCounter(),
    label: "help",
    menu: [
      "customer support",
      "delivery details",
      "terms & conditions",
      "privacy policy",
    ],
  },
  {
    id: itemCounter(),
    label: "faq",
    menu: ["account", "manage deliveries", "orders", "payments"],
  },
  {
    id: itemCounter(),
    label: "resource",
    menu: [
      "free ebooks",
      "development tutorial",
      "how to - blog",
      "youtube playlist",
    ],
  },
];
