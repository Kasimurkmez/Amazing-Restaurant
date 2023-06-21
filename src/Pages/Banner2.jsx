import banner2 from "../assets/home/chef-service.jpg";

function Banner2() {
  return (
    <div className="w-5/6 mx-auto text-center my-10 relative">
      <img src={banner2} alt="" />
      <div className="bg-white md:absolute top-5 bottom-5 md:p-8 md:m-16">
        <h2 className="uppercase font-bold my-4">Fresh Food</h2>
        <p>
          "Fresh Food website, filled with healthy, fresh, and delicious natural
          foods, aims to support a healthy lifestyle by offering users
          nutritious and innovative meal options."
        </p>
      </div>
    </div>
  );
}

export default Banner2;
