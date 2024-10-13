/* eslint-disable array-bracket-spacing */
/* eslint-disable react-refresh/only-export-components */
import React, { useContext, useState } from "react";

const QuestionContext = React.createContext();

export function useQuestion() {
  return useContext(QuestionContext);
}

export default function QuestionProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState({
    TestId: "",
    Gender: "",
    AgeRange: "",
    WeightType: "",
    SocialConcerned: [],
    Involved: "",
    bodyPartQuestions: {}
  });

  const setTestData = (data) => setAnswer(data);
  const setTestId = (data) => setAnswer({ ...answer, TestId: data });
  const setGender = (data) => setAnswer({ ...answer, Gender: data });
  const setAgeRange = (data) => setAnswer({ ...answer, AgeRange: data });
  const setWeightType = (data) => setAnswer({ ...answer, WeightType: data });
  const setSocialConcerned = (data) => setAnswer((prev) => {
    if(!data.length) return { ...prev, SocialConcerned: [] };
    const updatedConcerns = prev.SocialConcerned.includes(data)
      ? prev.SocialConcerned.filter(item => item !== data)
      : [...prev.SocialConcerned, data];
    return { ...prev, SocialConcerned: updatedConcerns }
  });
  const setInvolved = (data) => setAnswer({ ...answer, Involved: data });
  const setBodyPartQuestions = (data) => setAnswer((prev) => {
    return { ...prev, bodyPartQuestions: { ...prev.bodyPartQuestions, ...data } }
  });

  const value = {
    loading,
    answer,
    setLoading,
    setTestData,
    setTestId,
    setGender,
    setAgeRange,
    setWeightType,
    setSocialConcerned,
    setInvolved,
    setBodyPartQuestions
  };
  return <QuestionContext.Provider value={value}>{children}</QuestionContext.Provider>;
}
