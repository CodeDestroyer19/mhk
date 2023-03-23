import { useSpring, animated } from "react-spring";
import { ParallaxBanner } from "react-scroll-parallax";
import img2 from "../../public/res/back2.png";

const Props = () => {
  const tokenValue = useSpring({ from: { value: 0 }, to: { value: 2.5 } });
  const tokenSupply = useSpring({
    from: { value: 0 },
    to: { value: 1000000000 },
  });
  const tokenMarketCap = useSpring({
    from: { value: 0 },
    to: { value: 25000000 },
  });

  return (
    <div className="py-16 min-h-screen absolute inset-0 flex items-center justify-center">
      <div className="white-glassmorphism shadow rounded-lg p-6">
        <h2 className="text-4xl font-bold mb-4 text-black">
          Munchkin Konenko Token Economics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center ">
            <p className="text-gray-500 text-sm uppercase mb-2">Token Value</p>
            <animated.p className="text-3xl font-bold">
              {tokenValue.value.interpolate(
                (val: number) => `$${val.toFixed(2)}`
              )}
            </animated.p>
          </div>
          <div className="text-center ">
            <p className="text-gray-500 text-sm uppercase mb-2">Token Supply</p>
            <animated.p className="text-3xl font-bold">
              {tokenSupply.value.interpolate(
                (val: number) => `${val.toLocaleString()}`
              )}
            </animated.p>
          </div>
          <div className="text-center ">
            <p className="text-gray-500 text-sm uppercase mb-2">Market Cap</p>
            <animated.p className="text-3xl font-bold">
              {tokenMarketCap.value.interpolate(
                (val: number) => `$${val.toLocaleString()}`
              )}
            </animated.p>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          euismod viverra lacus at consectetur. Etiam condimentum hendrerit
          augue, in ultricies erat fringilla vel. Morbi quis mauris aliquet,
          convallis ex a, fermentum mauris. Vivamus finibus felis augue, nec
          mattis lorem efficitur at.
        </p>
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
