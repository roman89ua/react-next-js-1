import { IMeetupsItem } from "../components/Meetups/MeetupItem";

export const fireBaseGetRequestDataTransform = (
  fireBaseData: Record<string, Omit<IMeetupsItem, "id">>
): IMeetupsItem[] => {
  const result = [];
  for (let key in fireBaseData) {
    const dataItem: IMeetupsItem = {
      id: key,
      ...fireBaseData[key],
    };
    result.push(dataItem);
  }
  return result;
};
