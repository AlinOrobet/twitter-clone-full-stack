import useCurrentUser from "@/hooks/useCurrentUser";
import {signOut} from "next-auth/react";
import {BiLogOut} from "react-icons/bi";
import {SidebarData} from "../../data/SidebarData";
import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import SidebarTweetButton from "./SidebarTweetButton";
const Sidebar = () => {
  const {data: currentUser} = useCurrentUser();
  return (
    <div className="col-span-1 h-full mx-auto md:mx-0 md:pr-4 lg:pr-6">
      <div className="flex flex-col items-end h-screen justify-between">
        <div className="">
          <SidebarLogo />
          {SidebarData.map((item) => (
            <SidebarItem
              key={item.label}
              href={item.label === "Profile" ? `/users/${currentUser?.id}` : item.href}
              label={item.label}
              icon={item.icon}
              auth={item.auth}
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
