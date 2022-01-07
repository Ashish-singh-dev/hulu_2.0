import Image from "next/image";
import HuluIcon from "../public/hulu.svg";
import {
  HomeIcon,
  LightningBoltIcon,
  UserIcon,
  CollectionIcon,
  BadgeCheckIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="xs:px-4 py-5 flex flex-col  sm:flex-row justify-center sm:justify-between items-center">
      <div className="flex items-center justify-center flex-wrap xs:space-x-4">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Trending" Icon={LightningBoltIcon} />
        <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
        <HeaderItem title="Collection" Icon={CollectionIcon} />
        <HeaderItem title="Search" Icon={SearchIcon} />
        <HeaderItem title="Account" Icon={UserIcon} />
      </div>
      <Image width={48} height={48} src={HuluIcon} alt="logo" />
    </header>
  );
}

export default Header;
