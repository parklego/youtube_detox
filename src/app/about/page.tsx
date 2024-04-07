import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const timer = [
  {
    name: "벤저민 프랭클린",
    talk: "시간을 헛되이 보내지 말라. 그것은 목숨을 낭비하는 것과 같다.",
    image: "/h1.png",
  },
  {
    name: "스티브 잡스",
    talk: "당신의 시간은 한정적입니다. 그것을 다른 사람의 삶을 살거나 다른 사람의 기대에 부응하는 데 소비하지 마십시오.",
    image: "/h2.png",
  },
  {
    name: "윌리엄 셰익스피어",
    talk: "시간은 가장 공평한 것이다. 모든 사람에게 하루는 24시간씩 주어진다. 그러나 어떤 사람은 시간을 낭비하고, 어떤 사람은 시간을 활용한다.",

    image: "/h3.png",
  },
  {
    name: "파블로 피카소",
    talk: "당신의 시간을 헛되이 보내지 말고, 시간이 당신을 살아있게 만들도록 하라.",
    image: "/h4.png",
  },
];

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>유명 인사들의 조언</h1>
        <div className={styles.talkerContainer}>
          {timer.map((item) => {
            return (
              <div className={styles.itemContainer} key={item.name}>
                <Image
                  src={item.image}
                  alt={item.name}
                  key={item.name}
                  width={200}
                  height={200}
                />
                <div className={styles.info}>
                  <p>{item.name}</p>
                  <p>{`"${item.talk}"`}</p>
                </div>
              </div>
            );
          })}
        </div>
        <h1 className={styles.title}>Q&A</h1>
        <div className={styles.guide}>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                유튜브를 보지 말라는 소리인가요?
              </AccordionTrigger>
              <AccordionContent>
                <p>이 사이트의 취지는 유튜브를 보지말자는 것이 아닙니다.</p>
                <br />
                <p>
                  출퇴근 혹은 짜투리 시간에는 유튜브를 보세요. 쓸데없이
                  알고리즘에 이끌려 꼬리에 꼬리를 물며 시청하는 습관을 버리자는
                  것입니다.
                </p>
                <p>
                  이 사이트를 통해 유튜브 시청을 절제했으면 하는 바람입니다.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>어떻게 이용하면 되는건가요?</AccordionTrigger>
              <AccordionContent>
                <p>아래의 순서에 따라 이용하면 됩니다.(로그인 필요)</p>
                <br />
                <p>1. 가장 먼저 카테고리 탭을 눌러, 카테고리를 만듭니다.</p>
                <p>2. 채널 탭을 눌러, 채널을 카테고리에 추가를 합니다. </p>
                <p>
                  3. 컨텐츠 탭을 눌러, 유튜브를 즐깁니다. 중요한 것은 컨텐츠를
                  모두 보았으면 그 이후에는 최대한 업데이트가 되기 전까지
                  유튜브를 보지 않는 것입니다.
                </p>
                <p>
                  4. 어느정도 유튜브의 시청이 줄고 생산적인 곳에 시간을 썼다면
                  기록 탭을 눌러, 유튜브의 시청 시간을 입력합니다.
                </p>
                <p>
                  5. 로그인 이후 메인 화면에서 얼마나 시청시간이 줄었고,
                  생산적인 곳에 썼는지 비교해봅니다.
                </p>
                <br />
                <p>
                  유튜브 중독에서 벗어나 절제력을 기르기에 도움이 되었으면
                  합니다. 커뮤니티를 통해 다른 사람들과 응원과 다짐 등을 공유
                  해보는 것도 좋은 선택입니다.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>이 사이트는 유료인가요?</AccordionTrigger>
              <AccordionContent>
                아니요. 현재 유튜브에서 제공하는 무료 일일 사용량 만큼
                이용가능합니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>버그가 발생했어요.</AccordionTrigger>
              <AccordionContent>
                <p>
                  hbd9425@gmail.com 으로 해당 운영체제, 발생 시기, 해당 상황을
                  자세하게 써서 보내주세요. 자세할 수록 도움이 됩니다.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>건의사항이 있어요.</AccordionTrigger>
              <AccordionContent>
                <p>hbd9425@gmail.com 으로 건의 내용을 자세하게 보내주세요.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default About;
