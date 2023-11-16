import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import CardAdmin from "../components/CardAdmin";


const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <div>
        <div className="hero bg-blue-700">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-3xl font-bold text-white pt-6 pb-6">
                Jenis - Jenis Pelayanan
              </h1>
              <div className="flex justify-center items-center">
                <div className="grid grid-rows-2 grid-flow-col gap-4 align-items-center">
                  <CardAdmin />
                  <CardAdmin />
                  <CardAdmin />
                  <CardAdmin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
