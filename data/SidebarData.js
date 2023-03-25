import {RiHome7Fill} from "react-icons/ri";
import {CiSearch, CiMail, CiCircleMore} from "react-icons/ci";
import {IoNotificationsOutline} from "react-icons/io5";
import {BsBookmark} from "react-icons/bs";
import {BsPerson} from "react-icons/bs";
export const SidebarData = [
  {
    label: "Home",
    href: "/",
    icon: RiHome7Fill,
  },
  {
    label: "Explore",
    href: "/explore",
    icon: CiSearch,
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: IoNotificationsOutline,
  },
  {
    label: "Messages",
    href: "/messages",
    icon: CiMail,
  },
  {
    label: "Bookmarks",
    href: "/bookmarks",
    icon: BsBookmark,
  },
  {
    label: "Profile",
    href: "/users/123",
    icon: BsPerson,
  },
  {
    label: "More",
    icon: CiCircleMore,
  },
];
