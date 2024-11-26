"use client";
import React, { ReactNode, useEffect } from "react";
import Cookies from "js-cookie";

const LoginModalOffer = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // Clear the 'user_visited' cookie when navigating to the login page
    Cookies.remove("first-order-offer");
  }, []);
  return <div>{children}</div>;
};

export default LoginModalOffer;
