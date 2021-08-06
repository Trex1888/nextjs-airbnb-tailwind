import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectPosition="left"
          objectFit="contain"
        />
      </div>

      <div className="flex items-center bg-gray-100 rounded-md mx-4">
        <input
          type="text"
          placeholder="Start Your Search..."
          className="ml-2"
        />
        <SearchIcon
          className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer outline-none
         ml-2"
        />
      </div>
      <div className="px-2">header left</div>
    </header>
  );
}

export default Header;
