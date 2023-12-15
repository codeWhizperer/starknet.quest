import React, { FunctionComponent } from "react";
import QuizControls from "./quizControls";
import ScreenLayout from "./screenLayout";
import styles from "@styles/components/quests/quiz.module.css";
import Button from "@components/UI/button";

type StartScreenProps = {
  setStep: (s: number) => void;
  name: string;
  description: string;
  step: number;
};

const StartScreen: FunctionComponent<StartScreenProps> = ({
  setStep,
  name,
  description,
  step,
}) => {
  return (
    <>
      <div className={styles.contentContainer}>
        <ScreenLayout
          title={name}
          actionBar={
            <Button onClick={() => setStep(step + 1)}>Start Quiz</Button>
          }
        >
          <p>{description}</p>
        </ScreenLayout>
      </div>
      <QuizControls step={step} setStep={setStep} />
    </>
  );
};

export default StartScreen;
