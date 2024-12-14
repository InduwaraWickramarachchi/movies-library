import { Loader } from "lucide-react";
import "./Navbar.css";

export default function NavBar() {
  const site_details = {
    site_name: "Logoipsum",
    navbar_items: [
      "HOME",
      "OUR SCREENS",
      "SCHEDULE",
      "MOVIE LIBRARY",
      "LOCATION & CONTACT",
    ],
    menu: "/menu.svg",
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <Loader size={50} color="#cc9601" />
        <span style={{ fontSize: "2rem", fontWeight: "700" }}>
          {site_details.site_name}
        </span>
      </div>
      <div className="navbar-items">
        <ul className="navbar-items__item">
          {site_details.navbar_items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <img
          className="navbar-items__menu"
          src={site_details.menu}
          alt="menu"
        />
      </div>
    </nav>
  );
}
