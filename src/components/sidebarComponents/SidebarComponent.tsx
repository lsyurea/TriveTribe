"use client";
import React from "react";
import ProfileComponent from "./ProfileComponent";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HistoryIcon from "@mui/icons-material/History";
import TokenIcon from "@mui/icons-material/Token";
import SettingsIcon from "@mui/icons-material/Settings";
import SidebarButtonComponent from "./SidebarButtonComponent";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { deleteCookie } from "@/app/actions";

type Props = {};

const DEFAULT_NAME = "John Doe";

const SidebarComponent = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const buttons = [
    {
      name: "Home",
      icon: <HomeIcon />,
      url: "/",
      callback: undefined
    },
    {
      name: "Events",
      icon: <CalendarMonthIcon />,
      url: "/events",
      callback: undefined
    },
    {
      name: "History",
      icon: <HistoryIcon />,
      url: "/history",
      callback: undefined
    },
    {
      name: "Badges",
      icon: <TokenIcon />,
      url: "/badges",
      callback: undefined
    },
    {
      name: "Settings",
      icon: <SettingsIcon />,
      url: "/settings",
      callback: undefined
    },
    {
      name: "Logout",
      icon: <SettingsIcon />,
      url: "/login",
      callback: () => {
        deleteCookie("pb_auth");
      }
    },
  ];

  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  return (
    <div className="flex flex-col max-w-[300px] min-h-full border-r border-b border-lightGreen bg-white py-8">
      <ProfileComponent name={DEFAULT_NAME} />
      <div className="flex flex-col space-y-4 m-8 p-4">
        {buttons.map((button, index) => {
          return (
            <SidebarButtonComponent
              key={index}
              name={button.name}
              icon={button.icon}
              url={button.url}
              callback={button.callback}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SidebarComponent;
