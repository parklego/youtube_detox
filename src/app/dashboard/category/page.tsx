"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import styles from "./page.module.css";
import { nanoid } from "nanoid";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import axios from "axios";

const Category = () => {
  const session = useSession();
  const [category, setCategory] = useState<
    { id: string; name: string; channel: string[] }[]
  >([]);
  const [addCategory, setAddCategory] = useState<string>("");
  const { data } = useSession();

  useEffect(() => {
    const dataFetch = async () => {
      const response = await axios.post("/api/category/read", {
        id: data?.user?.id,
      });

      if (response.data.category) {
        setCategory(response.data.category);
      }
    };

    dataFetch();
  }, [data]);

  const handleAddCategory = () => {
    if (addCategory.trim().length >= 1 && addCategory.trim().length <= 12) {
      setCategory([
        ...category,
        {
          id: nanoid(),
          name: addCategory,
          channel: [],
        },
      ]);
    } else if (category.length >= 6) {
      toast("카테고리는 최대 6개까지 생성가능합니다.");
    } else {
      toast("카테고리는 최소 1글자에서 최대 12글자까지 가능합니다.");
    }
    setAddCategory("");
  };

  const handleDeleteCategory = (id: string) => {
    setCategory(category.filter((item) => item.id !== id));
  };

  const handleSubmitCategory = async () => {
    const response = await axios.post("/api/category/save", {
      id: session?.data?.user?.id,
      category: category,
    });

    console.log(response);
  };

  return (
    <div className={styles.container}>
      <div className={styles.categoryInputWrapper}>
        <Input
          type="input"
          placeholder="새 카테고리 추가하기"
          id="textInput"
          value={addCategory}
          onChange={(e) => setAddCategory(e.target.value)}
          disabled={category?.length === 6}
        />

        <IoIosAddCircleOutline fontSize={30} onClick={handleAddCategory} />
      </div>

      <div className={styles.categoryViewContainer}>
        {category?.map((item: { id: string; name: string }) => {
          return (
            <div key={item.id} className={styles.categoryWrapper}>
              <Button className={styles.category} variant="outline">
                {item.name}
              </Button>
              <AiOutlineDelete
                fontSize={15}
                onClick={() => handleDeleteCategory(item.id)}
              />
            </div>
          );
        })}
      </div>
      <Button className={styles.saveButton} onClick={handleSubmitCategory}>
        저장하기
      </Button>
    </div>
  );
};

export default Category;
