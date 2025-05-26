import { ThemeToggle } from "@/components/theme-toggle";
import { MenuBar } from "@/components/menu-bar";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <div className="flex  max-w-7xl mx-auto items-center justify-center">
        <MenuBar />
      </div>
    </div>
  );
}
