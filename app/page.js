import BarChart from "./commponets/BarChart";
import Oreders from "./commponets/Oreders";
import ToCart from "./commponets/ToCart";


export default function Home() {
  return (
    <>
      <div className=" mr-20">
        <ToCart />
        <div className=" p-4 grid md:grid-cols-3 grid-cols-1 gap-4">

        <BarChart />
        <Oreders />
        </div>
      </div>
    </>
  );
}
