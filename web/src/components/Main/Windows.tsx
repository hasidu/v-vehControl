import { MoveVertical } from "lucide-react";
import React from "react";
import { VehicleData } from "../../types/VehicleData";
import { fetchNui } from "../../utils/fetchNui";
import IconButton from "./IconButton";

interface Props {
  vehicleData: VehicleData | undefined;
}

const Windows: React.FC<Props> = React.memo(({ vehicleData }) => {
  const windows = !vehicleData?.closedWindows
    ? [0, 1]
    : vehicleData.closedWindows;
  return (
    <>
      <div className="bg-gradient-to-r from-[#222530] to-[#1d212b] h-fit  px-4 py-1 rounded-[2px]">
        <div className="flex flex-col gap-2 justify-center items-center font-main">
          <p className="bg-gradient-to-r px-6 py-1  mt-1 rounded-[2px] from-[#2f323d] via-[#3d3f49] to-[#292c37] text-[#2fffd2] font-bold">
            Windows
          </p>
          <div className="grid grid-cols-2 gap-2 mb-1">
            {Array.from({
              length: !vehicleData?.doors ? 4 : vehicleData.doors,
            }).map((_, index) => {
              return (
                <>
                  <IconButton
                    key={index}
                    Icon={MoveVertical}
                    isActive={!windows.includes(index)}
                    disabled={!vehicleData?.isDriver}
                    onClick={() => {
                      fetchNui("vehmenu:togglewindow", index);
                    }}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
});

export default Windows;
