import Banner from "./Banner";
import Banner2 from "./Banner2";
import Catagory from "./Catagory";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Recommed from "./Recommed";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <>
      <Banner />
      <Catagory />
      <Banner2 />
      <PopularMenu />
      <Recommed />
      <Featured />
      <Testimonial />
    </>
  );
}

export default Home;
