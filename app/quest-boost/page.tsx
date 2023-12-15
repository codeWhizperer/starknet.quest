"use client";

import React, { useEffect, useState } from "react";
import styles from "@styles/questboost.module.css";
import BoostCard from "@components/quest-boost/boostCard";
import CategoryTitle from "@components/UI/titles/categoryTitle";
import Componentstyles from "@styles/components/pages/home/howToParticipate.module.css";
import Steps from "@components/UI/steps/steps";
import { getBoosts } from "@services/apiService";

export default function Page() {
  const [boosts, setBoosts] = useState<Boost[]>([]);

  const fetchBoosts = async () => {
    try {
      const res = await getBoosts();
      setBoosts(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBoosts();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Boosts Quest</h1>
      <div className={styles.card_container}>
        {boosts?.map((boost) => {
          return <BoostCard key={boost.id} boost={boost} />;
        })}
      </div>

      <section className={styles.instructions_container}>
        <CategoryTitle
          title="How Quest Boosts and the Lottery Work ?"
          subtitle="Boost Your Quests, Maximize Your Gains!"
        />
        <div className={Componentstyles.stepsContainer}>
          <Steps
            subTitleBefore={true}
            steps={[
              {
                title: "Complete Boosted Quests & Earn tokens",
                subtitle: "01",
                description:
                  "When a quest is boosted, every completion automatically gives you a chance in our lottery to earn tokens. The more boosted quests you complete, the higher your chances of winning are!",
                icon: "/icons/starknet.svg",
                banner: "/visuals/boost/rocket.webp",
              },
              {
                title: "Claim Your Piece of the Pie",
                subtitle: "02",
                description:
                  "Once the quest is finished, check the quest's special page to see if you've won the lottery. If you have, claim your reward with just one click!",
                icon: "/icons/crown.svg",
                banner: "/visuals/boost/coins.webp",
              },
              {
                title: "Increase Your Chances",
                subtitle: "03",
                description:
                  "You're not limited to just one boost. If you complete several boosted quests, you multiply your chances in the lottery. Be adventurous and maximize your gains!",
                icon: "/icons/verified.svg",
                banner: "/visuals/boost/leaf.webp",
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
