import { Navbar, Hero, Projects, Slider, Interests, Contact, IconBanner } from "../components";

const Home = () => {
  return (
    <div className = "min-h-screen bg-gray-900">

      {/* Imported Navbar Section */}
      <Navbar />

      {/* Creating different sections for website */}
      <section id = "hero" className = "p-10">
        <Hero />
      </section>

      <section id = "banner" className = "p-10">
        <IconBanner />
      </section>

      <section id = "slider" className = "p-10">
        <Slider />
      </section>
      
      <section id = "projects" className = "p-10">
        <Projects />
      </section>

      <section id = "interests" className = "p-10">
        <Interests />
      </section>

      <section id = "contact" className = "p-10">
        <Contact />
      </section>

    </div>
  );
};

export default Home;