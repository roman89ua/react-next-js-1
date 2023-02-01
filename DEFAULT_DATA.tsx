export const DEFAULT_DATA = [
  {
    id: "1",
    title: "Title 1",
    description:
      "Some description for event Some description for event Some description for event Some description for event",
    date: "2012-01-25",
    image:
      "https://c8.alamy.com/comp/2BYK92T/new-post-neon-sign-in-speech-bubble-frame-on-dark-background-2BYK92T.jpg",
    isFeatured: false,
    location:
      "103 W Alexandria Ave, Alexandria, VA 22301, Сполучені Штати Америки",
  },
  {
    id: "2",
    title: "Title 2",
    description:
      "Some description for event Some description for event Some description for event Some description for event",
    date: "2012-02-25",
    image:
      "https://c8.alamy.com/comp/2BYK92T/new-post-neon-sign-in-speech-bubble-frame-on-dark-background-2BYK92T.jpg",
    isFeatured: true,
    location:
      "103 W Alexandria Ave, Alexandria, VA 22301, Сполучені Штати Америки",
  },
  {
    id: "3",
    title: "Title 3",
    description:
      "Some description for event Some description for event Some description for event Some description for event",
    date: "2012-03-25",
    image:
      "https://c8.alamy.com/comp/2BYK92T/new-post-neon-sign-in-speech-bubble-frame-on-dark-background-2BYK92T.jpg",
    isFeatured: false,
    location:
      "103 W Alexandria Ave, Alexandria, VA 22301, Сполучені Штати Америки",
  },

  {
    id: "4",
    title: "Title 4",
    description:
      "Some description for event Some description for event Some description for event Some description for event",
    location:
      "103 W Alexandria Ave, Alexandria, VA 22301, Сполучені Штати Америки",
    date: "2012-04-25",
    image:
      "https://c8.alamy.com/comp/2BYK92T/new-post-neon-sign-in-speech-bubble-frame-on-dark-background-2BYK92T.jpg",
    isFeatured: true,
  },
  {
    id: "5",
    title: "Title 5",
    description:
      "Some description for event Some description for event Some description for event Some description for event",
    date: "2012-05-25",
    image:
      "https://c8.alamy.com/comp/2BYK92T/new-post-neon-sign-in-speech-bubble-frame-on-dark-background-2BYK92T.jpg",
    isFeatured: false,
    location:
      "103 W Alexandria Ave, Alexandria, VA 22301, Сполучені Штати Америки",
  },
];

export const getFeaturedEvents = () => {
  return DEFAULT_DATA.filter((event) => event.isFeatured);
};

export const getAllEvents = () => {
  return DEFAULT_DATA;
};

export const getFilteredEvents = (dateFilter: any) => {
  const { year, month } = dateFilter;

  return DEFAULT_DATA.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
};

export const getEventById = (id: string) => {
  return DEFAULT_DATA.find((event) => event.id === id);
};
