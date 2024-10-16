import {FaComputer} from "react-icons/fa6";
import {MdMenu} from "react-icons/md";
import Link from "next/link";
import ResponsiveNavDrawer from "@/components/custom/ResponsiveNavDrawer";

function Navigation() {
  return (
    <nav className="flex items-center justify-start h-16 p-4 gap-x-4 bg-slate-950 text-zinc-300">
      <ResponsiveNavDrawer/>
      <Link className="flex items-center justify-center gap-x-3 lg:ml-8 hover:text-blue-300 transition-colors duration-500 ease-in" href={"/"}>
        <FaComputer className="h-12 w-12" />
        <h2 className="flex flex-col items-center justify-center text-lg font-normal">
          <span className="translate-y-1">Комп&#39;ютерний </span>
          <span>
            практикум
          </span>
        </h2>
      </Link>
    </nav>
  );
}

export default Navigation;
