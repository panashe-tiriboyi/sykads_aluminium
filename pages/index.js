import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "../components/Navbar/navbar";
import Home2 from "../components/Home/Home";
import AboutUs from "../components/AboutUs/aboutus";
import Products from "../components/Products/products";
import ContactUs from "../components/ContactUs/contactUs";
import Welcome from "../components/Welcome/welcome";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sykads aluminium Solution</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navigation />
      </div>

      <main>
        <Home2 />
        <Welcome />

        <div className="container">
          <AboutUs />
          <Products />
          <ContactUs />
        </div>
      </main>
    </div>
  );
}
