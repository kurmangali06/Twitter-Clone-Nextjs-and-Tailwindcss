import Image from "next/image";
import { SidebarMenuItem } from "./SidebarMenuItem";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  HomeIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png"
          width="50"
          height="50"
        />
      </div>
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        {session && (
          <>
            <SidebarMenuItem text="Notifications" Icon={BellIcon} />
            <SidebarMenuItem text="Messages" Icon={InboxIcon} />
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
          </>
        )}
      </div>
      {session ? (<>
              <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
              Tweet
            </button>
      
            <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
              <img
                onClick={signOut}
                className="w-10 h10 rounded-full xl:mr-2"
                src={session.user.image}
                alt="user-img"
              />
              <div className="leading-5 hidden xl:inline">
                <h4 className="font-bold">{session.user.name}</h4>
                <p className="text-gray-500">{session.user.email}</p>
              </div>
              <DotsHorizontalIcon className="h-5 xl:ml-8" />
            </div></>
      ): (
        <button 
        onClick={signIn}
        className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Sign in</button>
      )}

    </div>
  );
}
