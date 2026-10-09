import {
  FolderKanban,
  HatGlasses,
  LayoutGridCircles,
  PanelLeft,
} from "lucide-react";
import Logo from "../../../src/images/logo3.png";
import { Link, NavLink } from "react-router";

export default function Aside() {
  return (
    <aside className=" left-0 top-0 bottom-0 lg:w-50 overflow-y-hidden">
      <nav className="flex relative h-full flex-col bg-background-secondary/30 rounded-tr-lg rounded-br-lg justify-center w-full">
        <PanelLeft
          className="absolute top-4 right-5 text-foreground/80 cursor-pointer"
          size={20}
        />
        <div className=" relative  bottom-0 w-full top-0 h-full  z-50">
          <NavLink
            to="/"
            className="flex  cursor-pointer mb-10 logo items-center  px-2 py-4   gap-2"
          >
            <img src={Logo} width={35} className="object-contain " />
            <div className="flex flex-col">
              <span className="text-xs text-foreground/80 text-wrap max-w-15 w-full">
                Neura Agency
              </span>
            </div>
          </NavLink>
          <div className="h-full relative">
            <ul className="w-full">
              <NavLink
                to={"/dashboard"}
                className=" text-shadow-2xs text-foreground/80 px-2 py-4 flex items-center  text-sm gap-2 cursor-pointer group transition-all duration-300 hover:bg-blue-500 "
              >
                <LayoutGridCircles className="group-hover:translate-x-1 transition-all duration-300 group-hover:fill-blue-300" />
                <li className="group-hover:translate-x-1 transition-all duration-300 ">
                  Dashboard
                </li>
              </NavLink>
              <NavLink
                to={"/projects"}
                className="text-foreground/80 text-shadow-2xs px-2 py-4 flex items-center  text-sm gap-2 cursor-pointer group transition-all duration-300 hover:bg-blue-500 "
              >
                <FolderKanban className="group-hover:translate-x-1 transition-all duration-300" />
                <li className="group-hover:translate-x-1 transition-all duration-300 ">
                  Projects
                </li>
              </NavLink>
              <NavLink
                to={"/agents"}
                className=" text-foreground/80 px-2 text-shadow-2xs py-4 flex items-center  text-sm gap-2 cursor-pointer group transition-all duration-300 hover:bg-blue-500 "
              >
                <HatGlasses className="group-hover:translate-x-1 transition-all duration-300" />
                <li className="group-hover:translate-x-1 transition-all duration-300 ">
                  Agents
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </aside>
  );
}
