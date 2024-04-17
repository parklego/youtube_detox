"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Content = () => {
  const { data } = useSession();
  const [content, setContent] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      if (data) {
        try {
          const response = await axios.post("/api/content", {
            id: data.user.id,
          });

          if (response.status === 200) {
            setContent(response.data);
          }
        } catch (error) {
          toast.error("컨텐츠를 불러 올 수 없습니다.");
        }
      }
    };
    dataFetch();
  }, [data]);

  return (
    <div className="p-4">
      {!content.length && (
        
          <p>컨텐츠가 없습니다. </p>
     
      )}
      {content?.map((c: Content) => {
        return (
          <div key={c.id} className="flex flex-col gap-10">
            <p className="border-black border-b-2 py-2">{c.name} 카테고리</p>
            <div className="flex flex-wrap gap-10 mb-10 justify-center lg:justify-start">
              {!c.video.length && (
                <p>
                  현재 카테고리에 구독한 채널이 없습니다. channel탭에서 채널을
                  추가하여 주세요.
                </p>
              )}
              {c.video.map((videoItem: Video) => {
                const videoTitle = videoItem.items[0].snippet.title;
                const videoId = videoItem.items[0].id.videoId;
                const channelTitle = videoItem.items[0].snippet.channelTitle;
                const videoThumbnails =
                  videoItem.items[0].snippet.thumbnails.medium;
                const { width, height, url } = videoThumbnails;

                return (
                  <div
                    key={videoItem.etag}
                    className="border border-solid rounded overflow-hidden"
                  >
                    <div className="flex flex-col cursor-pointer">
                      {/* <Image
                        className="rounded"
                        src={url}
                        width={width}
                        height={height}
                        alt={videoTitle}
                      /> */}
                      <iframe
                        id="player"
                        className="w-60 md:w-80"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        allowFullScreen={true}
                      />
                      <div className="flex flex-col gap-2 p-2 w-60 md:w-80">
                        <p> {channelTitle}</p>
                        <p> {videoTitle}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
