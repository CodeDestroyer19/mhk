import React, { useState } from "react";
import TokenChart from "./MiniComps/Chart";
interface TokenInfo {
  name: string;
  symbol: string;
  price: number;
  supply: number;
}

export default function TokenEconomics() {
  const [tokenInfo, setTokenInfo] = useState<TokenInfo>({
    name: "MyToken",
    symbol: "MTK",
    price: 1.0,
    supply: 1000000,
  });

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseFloat(event.target.value);
    setTokenInfo(prevTokenInfo => ({
      ...prevTokenInfo,
      price: newPrice,
    }));
  };

  const handleSupplyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSupply = parseFloat(event.target.value);
    setTokenInfo(prevTokenInfo => ({
      ...prevTokenInfo,
      supply: newSupply,
    }));
  };

  const marketCap = tokenInfo.price * tokenInfo.supply;

  const mockData = {
    date: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    price: [100, 125, 150, 200, 175, 225, 250, 300, 350, 400, 450, 500],
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Token Economics</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <p className="text-gray-700">
          Name: <strong>{tokenInfo.name}</strong>
        </p>
        <p className="text-gray-700">
          Symbol: <strong>{tokenInfo.symbol}</strong>
        </p>
        <p className="text-gray-700">
          Price:{" "}
          <input
            className="border rounded p-2 w-24"
            type="number"
            value={tokenInfo.price}
            onChange={handlePriceChange}
            min="0"
            step="0.01"
          />
          USD
        </p>
        <p className="text-gray-700">
          Supply:{" "}
          <input
            className="border rounded p-2 w-24"
            type="number"
            value={tokenInfo.supply}
            onChange={handleSupplyChange}
            min="0"
            step="1"
          />{" "}
          {tokenInfo.symbol}
        </p>
      </div>
      <p className="text-gray-700">
        Market Cap: <strong>{marketCap.toFixed(2)}</strong> USD
      </p>
      <div className="mt-6">
        <TokenChart data={mockData} />
      </div>
    </div>
  );
}
