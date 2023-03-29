import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const mediumEndpoint = "https://api.medium.com/v1";
const accessToken =
  "2c3e74360d3159da46b90620687ef5b25b1f747391d0b9e9c8fdbcb59fe4df8f8";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get(
      `${mediumEndpoint}/users/@MunchkinKoneko/posts?limit=10&state=published&format=json`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error: any) {
    res.status(500).json({
      message: "Error retrieving Medium articles",
      errormsg: error.message,
    });
  }
}
