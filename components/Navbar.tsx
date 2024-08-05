import { CircleEllipsis, Phone } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {    
  return (
    <div className="navbarSection flex text-center text-white items-center justify-around h-10 shadow-xl">

<div>
        <Sheet>
          <SheetTrigger asChild>
            <CircleEllipsis />
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px]">
            <SheetHeader></SheetHeader>
            <div className="mt-6">
              <ul>
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/about"}>About us</Link>
                </li>
                <li>
                  <Link href={"/contact"}>Contact us</Link>
                </li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      
      {/* <nav>
        <ul className="flex flex-row gap-4">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About us</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact us</Link>
          </li>
        </ul>        
      </nav> */}
    
      <div><h1>Hello World</h1></div>
      <Link href={"tel:+254708905136"}>
        <Phone />
      </Link>
    </div>
  );
};

export default Navbar;