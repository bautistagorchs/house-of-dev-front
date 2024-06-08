import React, { ReactNode, useEffect } from "react";
import { AppDispatch } from "./store.state";
import { useDispatch } from "react-redux";
import { authMeService } from "@/services/user.services";
import { setUser } from "./features/userSlice";

const UserMe = ({ children }: { children: ReactNode }) => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    authMeService()
      .then((user) => {
        if (user) return dispatch(setUser(user.data.user));
        return;
      })
      .catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{children}</>;
};

export default UserMe;
