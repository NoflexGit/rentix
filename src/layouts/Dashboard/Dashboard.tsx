import React, { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Sidebar from "../../components/Sidebar";
import Content from "../../components/Content";
import useAppDispatch from "../../hooks/useAppDispatch";
import { auth } from "../../firebase";
import { getUserInfo } from "../../store/user/slice";

const Dashboard: FC = () => {
  const [user, loading] = useAuthState(auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) {
      dispatch(getUserInfo(user.uid));
    } else {
      navigate("/login");
    }
  }, [user, loading, dispatch, navigate]);

  return (
    <>
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </>
  );
};

export default Dashboard;
