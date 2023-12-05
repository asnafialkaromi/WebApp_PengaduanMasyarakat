import { useState, useEffect } from "react";
import axios from "axios";
import NavBarAdmin from "../components/elements/NavBarAdmin";
import SideBar from "../components/elements/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getMe } from "../features/authSlice";
import AOS from "aos";
import "aos/dist/aos.css";

const Petugas = () => {
  window.scrollTo(0, 0);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  const [Role, setRole] = useState([]);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
    if (user && user.role !== "admin") {
      navigate("/");
    }
  }, [isError, navigate]);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user");
      const allRole = response.data;

      const Role = allRole.filter((role) => role.role === "admin");

      setRole(Role);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:5000/user/${userId}`);
    getUsers();
  };

  return (
    <div className="drawer lg:drawer-open" >
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-base-200 items-center ">
        {/* Page content here */}
        <NavBarAdmin>Petugas</NavBarAdmin>
        <div className="w-full h-fit p-6" data-aos="fade-up" data-aos-duration="2000">
          <div className="overflow-x-auto rounded-xl w-full">
            <table className="table table-auto">
              {/* head */}
              <thead className="">
                <tr className="bg-blue-700 text-white">
                  <th>NO</th>
                  <th>NAMA</th>
                  <th>EMAIL</th>
                  <th>NO TELP</th>
                  <th>AKSI</th>
                </tr>
              </thead>
              <tbody>
                {Role.map((user, index) => (
                  <tr className="bg-white" key={user.uuid}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.noTelp}</td>
                    <td>
                      <button
                        className="btn btn-ghost btn-xs text-red-600 p-0"
                        onClick={() => deleteUser(user.uuid)}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <SideBar />
    </div>
  );
};

export default Petugas;
