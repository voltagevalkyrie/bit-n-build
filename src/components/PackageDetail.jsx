import Showcase from "./Showcase";
import { PortalDetail } from "../Detail/PortalDetail";
import WrapperContainer from "./WrapperContainer";

const PackageDetail = () => {
  return (
    <div className="bg-[#0b8185]">
    <WrapperContainer> 
      
      <div className="flex flex-col md:flex-row items-center p-4 py-12 text-[#fcf2de]">
        <div className="w-1/2">
          <span>Events</span>
          <h3 className="text-4xl">UPCOMING!</h3>
        </div>
        <div className="w-1/2">
          <p className="text-[16px]">
          Are you entirely unaware of ongoing events?
          Missing out on valuable opportunities?
          Information about events often gets lost or goes unnoticed?
          Here is our Site providing you all details...
          Grab your chance and Register Soon!
          </p>
        </div>
      </div>
      <div
        id="showcase-Section"
        className="container m-auto flex flex-wrap flex-col md:flex-row justify-between items-center"
      >
        {PortalDetail.map((detail) => (
          <Showcase
            img={detail.image}
            time={detail.time}
            title={detail.title}
            desc={detail.desc}
            // desc1={deatail.desc}
            button={detail.button}
          />
        ))}
      </div>
      </WrapperContainer> 
    </div>
  );
};

export default PackageDetail;
