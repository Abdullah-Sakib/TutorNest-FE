import { convertTo12HourFormat } from "./convertTo12HourFormat";

export const formatSlot = (startTime: string, endTime: string) => {
  const updatedSlot = {
    slot: `${convertTo12HourFormat(startTime)} - ${convertTo12HourFormat(
      endTime
    )}`,
    status: "pending",
  };
  return updatedSlot;
};
