"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import { toast } from "sonner";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useSession } from "next-auth/react";
import { youtubeMock } from "@/app/resources/mock";

const Channel = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [channelList, setChannelList] = useState<Channel[]>([]); // 검색한 채널 리스트
  const [categoryList, setCategoryList] = useState<Category[]>([]); // 내가 설정한 카테고리 리스트

  const { data } = useSession();

  useEffect(() => {
    const fetchCategoryList = async () => {
      try {
        if (data?.user.id) {
          const response = await axios.post("/api/category/read", {
            id: data?.user.id,
          });
          if (response.status === 200) {
            setCategoryList(response.data.category || []);
          } else {
            toast.error("카테고리를 불러오는데 실패하였습니다.");
          }
        }
      } catch (error) {
        console.error("Error fetching category list:", error);
        toast.error("카테고리를 불러오는데 실패하였습니다.");
      }
    };

    fetchCategoryList();
  }, [data]);

  const handleSearchChannel = async () => {
    try {
      // API 호출 함수
      // const response = await axios.post("/api/channel", {
      //   keyword,
      // });

      // if (response.status === 200) {
      //   setChannelList(response.data.list);
      // } else {
      //   toast.error("채널을 검색하는데 실패하였습니다.");
      // }

      setChannelList(youtubeMock);
    } catch (error) {
      console.error("Error searching channels:", error);
      toast.error("채널을 검색하는데 실패하였습니다.");
    }
  };

  const handleSaveChannel = async (id: string, item: Channel) => {
    let updatedCategoryList = categoryList.map((category: Category) => {
      if (category.id === id) {
        if (category.channel.length >= 3) {
          toast.info("카테고리에 최대 3개의 채널만 추가 가능합니다.");
          return category;
        }
        return {
          ...category,
          channel: [...category.channel, item],
        };
      }
      return category;
    });

    setCategoryList(updatedCategoryList);

    // try {
    //   const response = await axios.post("/api/category/save", {
    //     id: data?.user.id,
    //     category: categoryList,
    //   });
    //   if (response.status === 200) {
    //     toast.success("카테고리에 해당 채널을 추가하였습니다.");
    //   }
    // } catch (error) {
    //   console.error("Error fetching category list:", error);
    //   toast.error("카테고리에 저장하는데 실패하였습니다.");
    // }
  };
  console.log(channelList);
  return (
    <div className={styles.container}>
      <div className={styles.searchChannelWrapper}>
        <Input
          type="input"
          placeholder="search channel"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <IoSearch onClick={handleSearchChannel} />
      </div>

      <div className={styles.searchResultWrapper}>
        {channelList.map((item: Channel, idx: number) => (
          <div key={idx} className={styles.searchItemWrapper}>
            <Image
              src={item.snippet.thumbnails.default.url}
              alt="youtube channel"
              width={100}
              height={100}
            />
            <div className={styles.channelTitle}>
              <div>{item.snippet.channelTitle}</div>
              <div> {item.snippet.description}</div>
            </div>

            <Dialog>
              <DialogTrigger className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm">
                채널추가
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {`${item.snippet.channelTitle} 채널을 어느 카테고리에 추가 하시겠습니까?`}
                  </DialogTitle>
                  <div className={styles.categoryListWrapper}>
                    {categoryList.map((category: Category) => (
                      <div key={category.id}>
                        <Button
                          className="hover:bg-primary/10"
                          variant="secondary"
                          onClick={() => handleSaveChannel(category.id, item)}
                        >
                          {category.name}
                        </Button>
                      </div>
                    ))}
                  </div>
                  {/* <DialogClose asChild>
                    <Button aria-label="Close">닫기</Button>
                  </DialogClose> */}
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Channel;
