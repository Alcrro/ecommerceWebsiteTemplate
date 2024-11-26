"use client";
import React, { CSSProperties, useState } from "react";
import DefaultButton from "../DefaultButton";
import { useRouter } from "next/navigation";
import shopNow from "./shopNow.module.scss";

const ShopNow = () => {
  const [isAdded, setIsAdded] = useState(false);
  const router = useRouter();

  return (
    <>
      <DefaultButton
        label={"Show Now"}
        onClick={() => router.push("/products")}
        styles={shopNow}
        className={"shop_now"}
      />
    </>
  );
};

export default ShopNow;
