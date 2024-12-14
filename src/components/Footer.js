import { Twitter, Youtube } from "lucide-react";
import "./Footer.css";

export function Footer() {
  const footer_details = {
    address_line1: `IT Group`,
    address_line2: `C. Salvador de Madariaga, 1 28027 MadridSpain`,
    follow: "Follow us on",
    copyright: "Copyright © 2022 IT Hote ls. All rights reserved.",
  };
  return (
    <>
      <footer className="footer">
        <div className="address-section">
          <div style={{ width: "10rem" }}>
            <div style={{ fontWeight: "600" }}>
              {footer_details.address_line1}
            </div>
            <div>{footer_details.address_line2}</div>
          </div>
          <div className="follow-us">
            <span>{footer_details.follow}</span>
            <Twitter size={30} />
            <Youtube size={30} />
          </div>
        </div>
      </footer>
      <hr style={{ margin: 0 }} />
      <div style={{ padding: "2rem 6rem", backgroundColor: "#1d1d1d" }}>
        <div>{footer_details.copyright}</div>
        <div></div>
      </div>
    </>
  );
}
