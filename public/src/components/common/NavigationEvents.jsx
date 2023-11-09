"use client";

import { me } from "airbnb/lib/auth";
import { useAppStore } from "airbnb/store/store";
import React, { useEffect } from "react";

const NavigationEvents = () => {

  const {userInfo, setUserInfo} = useAppStore();
  useEffect(() => {
    if(!userInfo){
      const getData = async () => {
        const data = await me();
        setUserInfo(data);
      };
      getData();
    }
  }, [userInfo]);


  return null;
};

export default NavigationEvents;
