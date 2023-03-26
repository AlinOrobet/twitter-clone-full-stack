import useCurrentUser from "@/hooks/useCurrentUser";
import {signOut} from "next-auth/react";
import {BiLogOut} from "react-icons/bi";
import {RiHome7Fill} from "react-icons/ri";
import {CiSearch, CiMail, CiCircleMore} from "react-icons/ci";
import {IoNotificationsOutline} from "react-icons/io5";
import {BsBookmark} from "react-icons/bs";
import {BsPerson} from "react-icons/bs";
import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import SidebarTweetButton from "./SidebarTweetButton";
const Sidebar = () => {
  const {data: currentUser} = useCurrentUser();
  const SidebarData = [
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
      auth: true,
      alert: currentUser?.hasNotification,
    },
    {
      label: "Messages",
      href: "/messages",
      icon: CiMail,
      auth: true,
    },
    {
      label: "Bookmarks",
      href: "/bookmarks",
      icon: BsBookmark,
      auth: true,
    },
    {
      label: "Profile",
      href: `/users/${currentUser?.id}`,
      icon: BsPerson,
      auth: true,
    },
    {
      label: "More",
      icon: CiCircleMore,
    },
  ];

  return (
    <div className="col-span-1 h-full mx-auto md:mx-0 md:pr-4 lg:pr-6">
      <div className="flex flex-col items-end h-screen justify-between">
        <div className="">
          <SidebarLogo />
          {SidebarData.map((item) => (
            <SidebarItem
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              auth={item.auth}
              alert={item.alert}
            />
          ))}

          <SidebarTweetButton />
        </div>
        {currentUser && (
          <SidebarItem
            onClick={() => {
              signOut();
            }}
            icon={BiLogOut}
            label="Logout"
          />
        )}
      </div>
    </div>
  );
};
export default Sidebar;
