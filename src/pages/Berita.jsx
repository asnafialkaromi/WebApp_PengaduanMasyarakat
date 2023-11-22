import NavbarUser from "../components/elements/NavBarUser";
import LatestNews from "../components/section/LatestNews";
import OtherNews from "../components/section/OtherNews";

const BeritaPage = () => {
  return (
    <>
      <NavbarUser />
      <div className="flex flex-col bg-slate-200 w-screen h-fit mt-[80px] py-10 items-center gap-6">
        <LatestNews />
        <OtherNews />
      </div>
    </>
  );
};

export default BeritaPage;
