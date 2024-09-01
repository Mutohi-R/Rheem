import Navbar from "../../components/Navbar/Navbar";
import "./services.scss";

const Services = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="services-hero">
          <div className="wrapper">
            <div className="services-hero-container">
              <div className="services-hero-heading">
                <h1>Expert Care for Every Step of Your Cooling Journey</h1>
                <p>Ensuring Comfort, Efficiency, and Peace of Mind with Our Full Range of Services</p>
              </div>
              <div className="services-hero-image">
                <img src="src/assets/services-hero-img.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
