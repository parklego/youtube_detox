"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Content = () => {
  const { data } = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      if (data) {
        try {
          const response = await axios.post("/api/content", {
            id: data.user.id,
          });

          if (response.status === 200) {
            console.log(response.data);
            setContent(response.data);
          }
        } catch (error) {
          toast.error("컨텐츠를 불러오는데 실패하였습니다.");
        }
      }
    };
    dataFetch();
  }, [data]);

  return (
    <div>
      <div>
        {content?.map((c) => {
          return (
            <>
              <p>{c.name}</p>
              {c.video.map((videoItem) => {
                const videoTitle = videoItem.items[0].snippet.title;
                const videoId = videoItem.items[0].id.videoId;
                const videoThumbnails =
                  videoItem.items[0].snippet.thumbnails.high;
                const { width, height, url } = videoThumbnails;

                return (
                  <div key={videoItem.etag}>
                    {/* <Image
                      src={url}
                      width={width}
                      height={height}
                      alt={videoTitle}
                    /> */}
                    <iframe
                      id="player"
                      width={width}
                      height={height}
                      src={`https://www.youtube.com/embed/${videoId}`}
                      allowFullScreen={true}
                    />
                    <p>{videoTitle}</p>
                  </div>
                );
              })}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
