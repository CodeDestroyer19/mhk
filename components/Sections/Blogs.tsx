import React from "react";
import Image from "next/image";

import Logo from "../../public/res/news.png";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Introducing Munchkin Koneko: The Future of Crypto",
      image:
        "https://headline.cdn.prismic.io/headline/62069231-c6a1-455e-9185-2d539a30d352_headline-ogimage.svg",
      date: "March 1, 2023",
      description:
        "Munchkin Koneko is a revolutionary new token that promises to change the way we think about finance. Learn more about this exciting new project and what makes it unique.",
      url: "/blog/1",
    },
    {
      id: 2,
      title: "Munchkin Koneko Partners with Major DeFi Platforms",
      image:
        "https://headline.cdn.prismic.io/headline/62069231-c6a1-455e-9185-2d539a30d352_headline-ogimage.svg",
      date: "March 10, 2023",
      description:
        "Munchkin Koneko has announced partnerships with some of the biggest names in the DeFi space. Discover what these partnerships mean for the future of Munchkin Koneko and its users.",
      url: "/blog/2",
    },
    {
      id: 3,
      title: "Munchkin Koneko Launches on Major Crypto Exchanges",
      image:
        "https://headline.cdn.prismic.io/headline/62069231-c6a1-455e-9185-2d539a30d352_headline-ogimage.svg",
      date: "March 17, 2023",
      description:
        "Munchkin Koneko has officially launched on some of the most popular crypto exchanges in the world. Find out where you can buy and trade Munchkin Koneko tokens.",
      url: "/blog/3",
    },
  ];

  return (
    <div className="mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <div className="w-full md:w-1/4">
          <Image src={Logo} alt="Munchkin Koneko logo" />
        </div>
        <div className="md:w-3/4 text-gray-800 text-center md:text-right">
          <h1 className="text-4xl font-bold mb-4">Latest News</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map(post => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                  <p className="text-sm text-gray-600 mb-4">{post.date}</p>
                  <p className="text-sm text-gray-700 mb-4">
                    {post.description}
                  </p>
                  <a
                    href={post.url}
                    className="bg-purple-700 text-white rounded-full py-2 px-6 font-semibold hover:bg-purple-600 transition-all duration-200"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
