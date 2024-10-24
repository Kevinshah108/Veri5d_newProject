import WorldMap from "../assets/worldmap.png";
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";
import "../Clients.css";

const Clients = () => {
  return (
    <section
      id="clients"
      className="lg:h-auto lg:flex justify-center bg-white text-white lg:w-[100%]"
    >
      <div>
        <ComposableMap
          // projection="geoAzimuthal"
          projectionConfig={{
            // rotate: [-50, -20, 0],
            // center: [-5, -3],
            scale: 200,
          }}
        >
          <Geographies
            geography="/features.json"
            fill="#D6D6DA"
            stroke="#FFFFFF"
            strokeWidth={0.5}
          >
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
          <Annotation
            subject={[78.3522, 15.8566]}
            dx={30}
            dy={-50}
            connectorProps={{
              stroke: "#FF5533",
              strokeWidth: 3,
              strokeLinecap: "round",
            }}
          >
            <text
              x="-8"
              textAnchor="end"
              alignmentBaseline="middle"
              fill="#F53"
            >
              {"India"}
            </text>
          </Annotation>
          <Annotation
            subject={[53.3522, 23.8566]}
            dx={20}
            dy={-40}
            connectorProps={{
              stroke: "#FF5533",
              strokeWidth: 3,
              strokeLinecap: "round",
            }}
          >
            <text
              x="-8"
              textAnchor="end"
              alignmentBaseline="middle"
              fill="#F53"
            >
              {"UAE"}
            </text>
          </Annotation>
          <Annotation
            subject={[47.3522, 18.8566]}
            dx={0}
            dy={50}
            connectorProps={{
              stroke: "#FF5533",
              strokeWidth: 3,
              strokeLinecap: "round",
            }}
          >
            <text
              x="-8"
              textAnchor="end"
              alignmentBaseline="middle"
              fill="#F53"
            >
              {"Saudi Arabia"}
            </text>
          </Annotation>
          <Annotation
            subject={[31.3522, 28.8566]}
            dx={-20}
            dy={-20}
            connectorProps={{
              stroke: "#FF5533",
              strokeWidth: 3,
              strokeLinecap: "round",
            }}
          >
            <text
              x="-8"
              textAnchor="end"
              alignmentBaseline="middle"
              fill="#F53"
            >
              {"Egypt"}
            </text>
          </Annotation>
          <Annotation
            subject={[7.3522, 7.8566]}
            dx={-40}
            dy={-10}
            connectorProps={{
              stroke: "#FF5533",
              strokeWidth: 3,
              strokeLinecap: "round",
            }}
          >
            <text
              x="-8"
              textAnchor="end"
              alignmentBaseline="middle"
              fill="#F53"
            >
              {"Nigeria"}
            </text>
          </Annotation>
        </ComposableMap>

        <div className="bg-gray-700 pb-10 lg:w-auto lg:justify-center ">
          <h2 className="text-4xl font-bold lg:pt-20 pt-10 flex justify-center">
            Our Clients
          </h2>

          <div className="lg:flex md:flex lg:pt-20 pt-10 px-5 lg:pl-20 w-auto h-auto ">
            <div className="bg-white rounded-lg text-black font-bold font-Kanit lg:text-xl text-md lg:p-5 lg:pl-10 lg:pr-7 p-5 lg:w-[34%] lg:ml-[110px] md:ml-20">
              <ul>Ark Golden India Pvt. Limited – Vadodara</ul>
              <ul>SRF Ltd. – Dahej / Chennai</ul>
              <ul>ADNOC – Abu Dhabi</ul>
              <ul>In Touch Engg. – Vadodara</ul>
              <ul>Deepak Nitrite Ltd. – Nandesari, Vadodara</ul>
              <ul>Sodium Metal Pvt. Ltd. – Nandesari, Vadodara</ul>
              <ul>Mks Engineering – Vadodara</ul>
            </div>
            <div className="bg-white rounded-lg text-black font-bold font-Kanit lg:text-xl text-md pl-5 lg:pt-5 lg:pl-10 pt-5 pb-5 mt-5 lg:pr-5 lg:w-[30%] lg:ml-[170px]  lg:mx-40 md:mx-24 md:my-0 md:ml-10">
              <ul>Mysore Ammonia Envirotech Pvt. Ltd. – Vadodara</ul>
              <ul>Jubilant Organosys Ltd. – Savli</ul>
              <ul>Sam De Services – Vadodara</ul>
              <ul>Meck Industries – Vadodara</ul>
              <ul>Prabha Steel Ltd. – Vadodara</ul>
              <ul>ACE Engineering – Vadodara</ul>
              <ul>S Nanavati – Vadodara</ul>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/3 block lg:mt-20 mt-10 mx-auto md:mx-auto">
            <h2 className="text-3xl font-bold flex justify-center">
              System Engineers
            </h2>
            <h3 className="text-2xl font-bold pb-10 flex justify-center">
              Vadodara Projects:
            </h3>

            <div className="bg-white rounded-lg text-black font-bold font-Kanit lg:pl-10 lg:text-xl text-md p-5 mx-5 lg:w-[90%] ">
              <ul>Emulsion Polymerization Plant - Saudi</ul>
              <ul>VA Emulsion Plant - Egypt</ul>
              <ul>Alkyd Plant - Nigeria</ul>
              <ul>Casein Plant - Nigeria</ul>
              <ul>Emulsion Plant - Nigeria.</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
