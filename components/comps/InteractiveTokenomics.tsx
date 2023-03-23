import { useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import img2 from "../../public/res/back2.jpg";

const Props = () => {
  const [showMore, setShowMore] = useState(false);

  const tokenSymbol = "MHK";
  const maxSupply = 16000000000;
  const tokenName = "Munchkin Konenko";
  const currentSupply = 200000000;
  const initialSupply = 100000000;
  const circulationRate = 150;
  const stakingAPY = 12;

  return (
    <div className="absolute inset-0 flex items-center justify-center h-half">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <h2 className="text-3xl font-bold">{tokenName} Token Economics</h2>
          <p className="text-gray-500 text-lg mt-2">
            {tokenSymbol} is a utility token used for...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-1.02">
            <h3 className="text-xl font-bold mb-4">Token Supply</h3>
            <div className="flex justify-between">
              <p>Max Supply:</p>
              <p>{maxSupply}</p>
            </div>
            <div className="flex justify-between">
              <p>Current Supply:</p>
              <p>{currentSupply}</p>
            </div>
            <div className="flex justify-between">
              <p>Initial Supply:</p>
              <p>{initialSupply}</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-1.02">
            <h3 className="text-xl font-bold mb-4">Token Circulation</h3>
            <div className="flex justify-between">
              <p>Circulation Rate:</p>
              <p>{circulationRate}%</p>
            </div>
            <div className="flex justify-between">
              <p>Staking APY:</p>
              <p>{stakingAPY}%</p>
            </div>
          </div>
        </div>

        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>

        {showMore && (
          <div className="bg-white mt-4 p-4 rounded-md shadow-md animate-slide-in">
            <h3 className="text-xl font-bold mb-4">Tokenomics Breakdown</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              semper turpis et velit tincidunt aliquet. Nullam varius eu felis
              sed tincidunt. Suspendisse blandit, eros vitae pretium faucibus,
              justo eros mollis lorem, euismod viverra lacus quam eu velit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor qui
              ipsum voluptatum quis nemo ad, aperiam placeat omnis perferendis
              nisi animi, ipsa repellat excepturi, incidunt tempora enim illum
              vitae sit. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Iure, provident dignissimos vitae reiciendis autem
              voluptates dolorem accusantium ut quibusdam omnis delectus
              laudantium voluptate! Iure quas quae esse quos facilis
              repudiandae? Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Iste quos aut sit ut exercitationem. Itaque voluptate
              dolorem pariatur non praesentium quisquam minima maiores tempore
              nulla magni, eius neque, ducimus mollitia. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quis sapiente, quia at
              asperiores, iure aut labore architecto dolore, possimus quasi
              doloremque eum quibusdam recusandae libero ipsum dolorem eos est
              repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur officia asperiores vero modi alias nesciunt rem
              officiis odit ipsa atque provident laborum harum cupiditate, ut,
              sint pariatur! Vel, blanditiis consectetur.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

function TokenEconomicsSection() {
  return (
    <ParallaxBanner
      layers={[
        {
          image: img2.src,
          speed: -30,
          style: {
            width: "100vw",
          },
        },

        {
          speed: -15,
          children: <Props />,
        },
      ]}
      className="aspect-[2/1] min-h-screen "
    />
  );
}

export default TokenEconomicsSection;
