import FollowBar from "./layout/FollowBar";
import Sidebar from "./layout/Sidebar";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-7 sm:grid-cols-8 md:grid-cols-6 h-full">
          <Sidebar />
          <div
            className="
            col-span-6 
            sm:col-span-7 
            md:col-span-4 
            lg:col-span-3
            border-x-[1px] 
            border-neutral-800
        "
          >
            {children}
          </div>
          <FollowBar />
        </div>
      </div>
    </div>
  );
};
export default Layout;
