import { categoryMock, resultVidoe } from "@/app/resources/mock";
import prisma from "@/utils/db";
import axios from "axios";
import { NextResponse } from "next/server";

export const POST = async (request: Request, response: Response) => {
  try {
    const data = await request.json();

    const { id } = data;

    const userData = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    // Todo : youtube api token access to userData

    // const videoListPromises = categoryMock.map(async (category) => {
    //   const videoList = await Promise.all(
    //     category.channel.map(async (item: any) => {
    //       let channelId = item.id.channelId;
    //       const searchVideo = await axios.get(
    //         "https://www.googleapis.com/youtube/v3/search",
    //         {
    //           params: {
    //             part: "snippet",
    //             channelId: channelId,
    //             type: "video",
    //             key: process.env.YOUTUBE_API_KEY,
    //             maxResults: 1,
    //             order: "date",
    //           },
    //         }
    //       );
    //       return searchVideo.data;
    //     })
    //   );

    //   return {
    //     id: category.id,
    //     name: category.name,
    //     video: videoList,
    //   };
    // });

    // let result = await Promise.all(videoListPromises);

    let result = resultVidoe;

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
