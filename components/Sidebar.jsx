import Image from "next/image";
import { SidebarMenuItem } from "./SidebarMenuItem";
import  { BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, HomeIcon, InboxIcon, UserIcon } from "@heroicons/react/solid"

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png' width='50' height="50"/>
      </div>
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
        <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
        <SidebarMenuItem text="Notifications" Icon={BellIcon}/>
        <SidebarMenuItem text="Messages" Icon={InboxIcon}/>
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon}/>
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon}/>
        <SidebarMenuItem text="Profile" Icon={UserIcon}/>
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon}/>
      </div>

      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>

      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img className="w-10 h10 rounded-full xl:mr-2"  src="https://sun9-66.userapi.com/impf/c856136/v856136123/a2d35/0ik-LMKxfpE.jpg?size=453x604&quality=96&sign=da3fdc05d52a7d43b2649982ff0f5906&type=album" alt="user-img"/>
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Kurmangali</h4>
          <p className="text-gray-500">@Kurmangali_kusainoff</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8"/>
      </div>
    </div>
  )
}
