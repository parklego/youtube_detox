import axios from "axios";
import { NextResponse } from "next/server";

export const POST = async (request: Request, response: Response) => {
  try {
    const data = await request.json();

    const searchChannel = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: data.keyword,
          type: "channel",
          key: process.env.YOUTUBE_API_KEY,
        },
      }
    );

    let result = {
      keyword: data.keyword,
      list: searchChannel.data.items,
    };

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
