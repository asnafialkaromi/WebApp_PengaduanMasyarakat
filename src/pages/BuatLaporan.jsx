import { useEffect } from "react";
import NavBarUser from "../components/elements/NavBarUser";
import FormBuatLaporan from "../components/section/FormBuatLaporan";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import Footer from "../components/elements/Footer";

const BuatLaporan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);

  return (
    <>
      <NavBarUser />
      <FormBuatLaporan />
      <Footer/>
    </>
  );
};

export default BuatLaporan;
