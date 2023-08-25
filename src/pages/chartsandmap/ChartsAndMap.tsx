import LineGraph from "./LineGraph";
import MapWithMarker from "./MapWithMarkers";

const ChartsAndMap = () => {
  return (
    <div className=" mx-auto max-w-screen-xl justify-between items-center">
      <LineGraph />
      <div className="">
        <MapWithMarker />
      </div>
    </div>
  );
};

export default ChartsAndMap;
