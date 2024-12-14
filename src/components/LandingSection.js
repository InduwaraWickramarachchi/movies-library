import "./LandingSection.css";

export function LandingSection() {
  const landing_details = {
    image: "/landing_image.jpg",
    title: "MOVIE LIBRARY",
    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. `,
  };
  return (
    <section className="landing-section">
      <img
        className="landing-image"
        src={landing_details.image}
        alt="landing-section-image"
      />
      <div className="landing-details">
        <h2 className="landing-details__header">{landing_details.title}</h2>
        <p className="landing-details__header">{landing_details.description}</p>
      </div>
    </section>
  );
}
