import {BiLogOut} from "react-icons/bi";
import {SidebarData} from "../../data/SidebarData";
import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import SidebarTweetButton from "./SidebarTweetButton";
const Sidebar = () => {
  return (
    <div className="col-span-1 h-full mx-auto md:mx-0 md:pr-4 lg:pr-6">
      <div className="flex flex-col items-end h-screen justify-between">
        <div className="">
          <SidebarLogo />
          {SidebarData.map((item) => (
            <SidebarItem key={item.href} href={item.href} label={item.label} icon={item.icon} />
          ))}

          <SidebarTweetButton />
        </div>
        <SidebarItem onClick={() => {}} icon={BiLogOut} label="Logout" />
      </div>
    </div>
  );
};
export default Sidebar;
