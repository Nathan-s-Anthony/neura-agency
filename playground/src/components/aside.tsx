import Logo from "../../../src/images/logo3.png";
import User from "../../src/assets/vite.svg";
export default function Aside() {
  return (
    <aside className="fixed h-full lg:w-60 z-10">
      <nav className="flex bg-slate-200 h-full flex-col shadow-lg border-r-4 border-slate-300 rounded-tr-lg rounded-br-lg justify-between">
        <a className="flex cursor-pointer  items-center p-6 gap-2">
          <img src={Logo} width={50} />
          <div className="flex flex-col">
            <span className="text-shadow-xs text-slate-950 text-sm">Neura</span>
            <span className="text-shadow-xs text-slate-950 text-xs">
              Agency
            </span>
          </div>
        </a>
        {/* <ul className="p-2 flex flex-col gap-2 h-full">
          <a className="bg-blue-200 cursor-pointer  hover:bg-blue-300 transition-all duration-300 shadow-sm rounded-xl p-2">
            <li className="p-1">Tasks Pipeline</li>
          </a>
          <a className="bg-blue-200 cursor-pointer hover:bg-blue-300 transition-all duration-300  shadow-sm rounded-xl p-2">
            <li className="p-1">Agents</li>
          </a>
        </ul> */}
        <div className=" cursor-pointer  bg-blue-200 shadow-sm rounded-lg block p-2">
          <div className="flex items-center gap-2">
            <img
              src={User}
              width={50}
              className="bg-slate-300 rounded-full p-2"
            />
            <div className="flex flex-col">
              <h4 className="text-slate-950">Nathan</h4>
              <p className="text-slate-950">Test</p>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
