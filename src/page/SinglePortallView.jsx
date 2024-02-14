import React, { useEffect, useState } from "react";
import WrapperContainer from "../components/WrapperContainer";
import { useParams } from "react-router-dom";
import { PortalEventsDetail, PortalEventsDetailDetail } from "../Detail/PortalDetail";

const SinglePortalView = () => {
  const { id } = useParams();
  const [PortalDetail, setPortalDetail] = useState([]);

  useEffect(() => {
    const arrayDetail = [...PortalEventsDetail];
    const PortalDetailFilter = arrayDetail.filter((detail) => detail.id === +id);
    setHotelDetail(PortalDetailFilter);
  }, [id]);

  if (PortalDetail.length === 0) {
    return null; // or a loading indicator
  }

  const { images, capacity, name, description, type, price, extras } = PortalDetail[0];

  let extraFeatureComponent;

  // Customize features based on the Portal id
  switch (id) {
    case '6':
      // Code block for Portal ID 1
      console.log('Executing extra code for Portal ID 1');
      // Add your specific logic for Portal ID 1
      break;
  
    case '7':
      // Code block for Portal ID 2
      console.log('Executing extra code for Portal ID 2');
      // Add your specific logic for Portal ID 2
      break;
  
      case '8':
      // Code block for Portal ID 1
      console.log('Executing extra code for Portal ID 1');
      // Add your specific logic for Portal ID 1
      break;

      case '9':
      // Code block for Portal ID 1
      console.log('Executing extra code for Portal ID 1');
      // Add your specific logic for Portal ID 1
      break;

      case '10':
      // Code block for Portal ID 1
      console.log('Executing extra code for Portal ID 1');
      // Add your specific logic for Portal ID 1
      break;

    // Add more cases for other Portal IDs as needed
  
    default:
      // Code block for other Portal IDs or a default case
      console.log('No extra code for this Portal ID');
      // Add your default logic or leave it empty
      break;
  }

  return (
    <div
      className="bg-cover bg-center h-screen relative"
      style={{ backgroundImage: `url(${images})` }}
    >
      <WrapperContainer>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className=" absolute">
          <div className="relative container text-[#fcf2de] capitalize">
            <p className="text-center p-4 py-8 text-6xl">
            Believe you can, and you're halfway there.
            </p>
            <div className="flex justify-between items-center py-8">
              <img className="w-1/2 p-4 rounded" src={images} alt="" />
              <div className="p-4">
                <span>Participation Events : {capacity}</span>
                <h2 className="text-7xl font-bold">{name}</h2>
                <span>{description}</span>
                <p>{type}</p>
                <p className="text-white text-4xl py-4">Points{price}</p>
                <ul className="pl-6">
                  {extras.map((detail, i) => (
                    <li className="list-decimal" key={i}>
                      {detail}
                    </li>
                  ))}
                </ul>
                {extraFeatureComponent}
              </div>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};

export default SinglePortalView;
