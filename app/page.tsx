import Hero from "@/components/Hero";
import FloatingNavbar from "@/components/ui/FloatingNavbar";
import {FaHome, FaInfo} from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center
    items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
          <FloatingNavbar
              navItems={
              [
                  {name: 'Home', link: '#', icon: <FaHome/>},
                  {name: 'About', link: '#', icon: <FaInfo/>}
              ]
              }
          />
        <Hero />
      </div>
    </main>
  );
}
