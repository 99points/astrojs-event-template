import { colors } from "./colors";

export interface Playlist {
  id: string;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
  description: string;
  date: string;
}

export const playlists: Playlist[] = [
  {
    id: "1",
    title: "Sound Pulse",
    color: colors.teal,
    cover:
      "/event1.jpg",
    artists: ["Lincoln Center, NY"],
    description: "Experience the ultimate concert event, where music comes alive and memories are made. Join us for an unforgettable...",
    date: "May 14-15, 2023 01:00 - 05:00 PM",
  },
  {
    id: "2",
    title: "Groove Summit",
    color: colors.green,
    cover:
      "/event2.jpg",
    artists: ["Hollywood Bowl, Los Angeles"],
    description: "Experience the ultimate concert event, where music comes alive and memories are made. Join us for an unforgettable...",
    date: "May 14-15, 2023 01:00 - 05:00 PM",
  },
  {
    id: "3",
    title: "Vibe Wave",
    color: colors.rose,
    cover:
      "/event4.jpg",
    artists: ["Kennedy Center, Washington"],
    description: "Experience the ultimate concert event, where music comes alive and memories are made. Join us for an unforgettable...",
    date: "May 14-15, 2023 01:00 - 05:00 PM",
  },
  {
    id: "4",
    title: "Rhythm Revival",
    color: colors.red,
    cover:
      "/event3.jpg",
    artists: ["Symphony Hall, New York"],
    description: "Experience the ultimate concert event, where music comes alive and memories are made. Join us for an unforgettable...",
    date: "May 14-15, 2023 01:00 - 05:00 PM",
  },
  {
    id: "5",
    title: "Roots Revelry",
    color: colors.pink,
    cover:
      "/event5.jpg",
    artists: ["Millennium Park, Chicago"],
    description: "Experience the ultimate concert event, where music comes alive and memories are made. Join us for an unforgettable...",
    date: "May 14-15, 2023 01:00 - 05:00 PM",
  },
  {
    id: "6",
    title: "Cultural Mosaic",
    color: colors.pink,
    cover:
      "/event6.jpg",
    artists: ["The Fox Theatre, GA"],
    description: "Experience the ultimate concert event, where music comes alive and memories are made. Join us for an unforgettable...",
    date: "May 14-15, 2023 01:00 - 05:00 PM",
  },
];

export const morePlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "a",
  })),
];

export const sidebarPlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "_side",
  })),
];

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
];

