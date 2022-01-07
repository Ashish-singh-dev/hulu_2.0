import { useRouter } from "next/router";
import NavItems from "../utils/requests";

function Navbar() {
  const router = useRouter();
  return (
    <nav>
      <div
        className="flex pl-4 items-center whitespace-nowrap space-x-10 
      md:space-x-16 3xl:space-x-20 overflow-x-scroll scrollbar-hide"
      >
        {Object.entries(NavItems).map(([key, { title }]) => (
          <h2
            key={title}
            className="last:pr-4 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => router.push(`/?genre=${key}`)}
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
