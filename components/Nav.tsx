import navlinks from "@/data/navlinks";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      {navlinks.map((nav) => (
        <Link href={nav.link} key={nav.title}>
          <span className={`mr-5`}>{nav.title}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
