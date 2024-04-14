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
import { AiOutlineDelete } from "react-icons/ai";

const Channel = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [channelList, setChannelList] = useState<Channel[]>([]); // 검색한 채널 리스트
  const [categoryList, setCategoryList] = useState<Category[]>([]); // 내가 설정한 카테고리 리스트
  const [selectCategory, setSelectCategory] = useState<Category>(); // 선택한 카테고리

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
        toast.error("카테고리를 불러오는데 실패하였습니다.");
      }
    };

    fetchCategoryList();
  }, [data]);

  console.log(selectCategory);
  const handleSearchChannel = async () => {
    if (keyword.length <= 1) {
      return toast.info("최소 2글자 이상부터 검색가능합니다.");
    }

    try {
      const response = await axios.post("/api/channel", {
        keyword,
      });

      if (response.status === 200) {
        setChannelList(response.data.list);
      } else {
        toast.error("채널을 검색하는데 실패하였습니다.");
      }
      // Todo : channel search api token 줄이기
      // setChannelList(youtubeMock);
    } catch (error) {
      toast.error("채널을 검색하는데 실패하였습니다.");
    }
  };

  const handleSaveChannel = async (id: string, item: Channel) => {
    let progress = true;
    let updatedCategoryList = categoryList.map((category: Category) => {
      if (category.id === id) {
        if (category.channel.length >= 3) {
          toast.info("카테고리에 최대 3개의 채널만 추가 가능합니다.");
          progress = false;
          return category;
        }
        return {
          ...category,
          channel: [...category.channel, item],
        };
      }
      return category;
    });

    if (progress) {
      try {
        const response = await axios.post("/api/category/save", {
          id: data?.user.id,
          category: updatedCategoryList,
        });
        if (response.status === 200) {
          toast.success("카테고리에 해당 채널을 추가하였습니다.");
        }
      } catch (error) {
        toast.error("카테고리에 저장하는데 실패하였습니다.");
      }
    }
  };

  const handleDeleteChannel = async (channel: Channel) => {
    const deleteChannelId = channel.snippet.channelId;

    let deleteChannel = categoryList.map((category) => ({
      ...category,
      channel: category.channel.filter(
        (channel: Channel) => channel.id.channelId !== deleteChannelId
      ),
    }));

    const response = await axios.post("/api/category/save", {
      id: data?.user.id,
      category: deleteChannel,
    });
    if (response.status === 200) {
      toast.success("카테고리에 해당 채널을 삭제하였습니다.");
    }
  };

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
      <div className=" text-center">
        <p>구독할 채널을 검색하여 주세요.</p>
        <p>키워드와 연관된 채널 최대 5개까지만 표시됩니다.</p>
      </div>
      <div className={styles.categoryListWrapper}>
        {categoryList.map((category: Category) => (
          <div key={category.id}>
            <Button
              className="hover:bg-primary/10"
              variant="secondary"
              onClick={() => setSelectCategory(category)}
            >
              {category.name}
            </Button>
          </div>
        ))}
      </div>
      <div className={styles.separator} />
      {selectCategory && (
        <div className={styles.categoryViewer}>
          <div>{`${selectCategory.name} 카테고리에 구독중인 채널 목록입니다.`}</div>
          <div className={styles.channelViewer}>
            {selectCategory?.channel.map((channel: Channel) => (
              <Button
                variant="secondary"
                key={channel.id.channelId}
                className={styles.channelDeleteWrapper}
                onClick={() => handleDeleteChannel(channel)}
              >
                <div>{channel.snippet.channelTitle}</div>
                <AiOutlineDelete />
              </Button>
            ))}
          </div>
        </div>
      )}

      <div className={styles.searchResultWrapper}>
        <div className={styles.separator} />
        {channelList.length >= 1 && <p>검색 결과입니다.</p>}
        {channelList?.map((item: Channel, idx: number) => (
          <div key={idx} className={styles.searchItemWrapper}>
            <Image
              src={item.snippet.thumbnails.default.url}
              alt="youtube channel"
              width={100}
              height={100}
            />
            <div className={styles.channelTitle}>
              <div>{item.snippet.channelTitle}</div>
              <div>{item.snippet.description || "채널 설명없음"}</div>
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
