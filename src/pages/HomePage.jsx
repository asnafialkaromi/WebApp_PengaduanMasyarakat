import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import CardAdmin from "../components/CardAdmin";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <div>
        <div className="flex flex-col gap-8 hero text-center py-10 px-4 dark:bg-white">
          <h1 className="text-3xl font-bold text-white bg-blue-700 w-fit px-6 py-3 rounded-full">
            Jenis - Jenis Pelayanan
          </h1>
          <div className="flex justify-center items-center">
            <div className="grid lg:grid-rows-2 lg:grid-flow-col gap-10 align-items-center max-w-[1280px]">
              <CardAdmin />
              <CardAdmin />
              <CardAdmin />
              <CardAdmin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
