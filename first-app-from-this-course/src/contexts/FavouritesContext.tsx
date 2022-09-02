import React, { createContext, useState } from "react";
import { IMeetupsItem } from "../components/Meetups/MeetupItem";

export const FavouritesContext = createContext({
  favourites: [] as IMeetupsItem[],
  itemIsFavourite: (meetupId: string): boolean => {
    console.log(meetupId);
    return false;
  },
  onAddFavourite: (meetup: IMeetupsItem) => {
    console.log(meetup);
  },
  onDeleteFavourite: (meetupId: string) => {
    console.log(meetupId);
  },
  totalFavourites: 0,
});

export const FavouritesContextProvider = (props: any) => {
  const [favourites, setFavourites] = useState<IMeetupsItem[]>([]);

  const onAddFavourite = (meetup: IMeetupsItem) => {
    setFavourites((prevState) => {
      return prevState.concat(meetup);
    });
  };

  const onDeleteFavourite = (meetupId: string) => {
    setFavourites((prevState) =>
      prevState.filter((meetup) => meetup.id !== meetupId)
    );
  };

  const itemIsFavourite = (meetupId: string): boolean =>
    favourites.some((meetup) => meetup.id === meetupId);

  const context = {
    favourites,
    itemIsFavourite,
    onAddFavourite,
    onDeleteFavourite,
    totalFavourites: favourites?.length,
  };
  return (
    <FavouritesContext.Provider value={context}>
      {props?.children}
    </FavouritesContext.Provider>
  );
};
