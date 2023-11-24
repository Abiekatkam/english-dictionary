import React, { useEffect, useRef, useState } from "react";
import InputField from "./InputField";

const DictionaryCard = () => {
  const [validationText, setValidationText] = useState(
    "Type a word and press enter to get meaning, example, pronounciation, and synonyms of that typed word."
  );
  const [validationBool, setValidationBool] = useState(false);
  const [validateVisible, setValidateVisible] = useState(false);
  const [data, setData] = useState(null);
  const [word, setWord] = useState("");
  const wordRef = useRef(null);

  function speakWord() {
    const msg = new SpeechSynthesisUtterance();
    msg.text = wordRef.current.value;
    window.speechSynthesis.speak(msg);
  }

  function clearInput() {
    wordRef.current.value = "";
    setWord("");
    setValidationBool(false);
    setValidationText(
      "Type a word and press enter to get meaning, example, pronounciation, and synonyms of that typed word."
    );
    setValidateVisible(false);
  }

  function validateWord() {
    if (wordRef.current.value.length > 20) {
      setValidationText("Word length should be less than 20 characters.");
      setValidationBool(true);
      setWord(wordRef.current.value);
    } else {
      setValidationText(
        "Type a word and press enter to get meaning, example, pronounciation, and synonyms of that typed word."
      );
      setWord(wordRef.current.value);
      setValidationBool(false);
    }
  }

  function fetchApi(word) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => res.json())
      .then((data) => {
        setValidationText(`Search results for "${word}".`);
        if (data?.title) {
          setValidationText(
            `Can't find meaning of ${word}. Please try another word.`
          );
          setValidationBool(true);
          setValidateVisible(false);
          return;
        } else {
          setValidationBool(false);
          setValidationText(`Search results for "${word}".`);
          setValidateVisible(true);
          setData(data[0]);
        }
      })
      .catch((err) => {
        if (validationBool) {
          setValidationText("Word length should be less than 20 characters.");
          setValidateVisible(false);
        } else {
          setValidationText(
            `Can't find meaning of ${word}. Please try another word.`
          );
        }
      });
  }

  useEffect(() => {
    function handleKeyUp(e) {
      if (
        e.key === "Enter" &&
        wordRef.current.value.length > 0 &&
        !validationBool &&
        wordRef.current.value.length != 0
      ) {
        fetchApi(wordRef.current.value);
      }
    }

    wordRef.current.addEventListener("keyup", handleKeyUp);

    return () => {
      if (wordRef.current)
        wordRef.current.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (word.length == 0 && word == "") {
      setValidateVisible(false);
      clearInput();
    }
  }, [word]);

  return (
    <div className="relative lg:min-h-[210px] lg:top-4 h-fit w-full bg-white/10  backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl lg:py-4 lg:px-6 p-4 mt-12 lg:mt-0">
      <div className="w-full lg:h-full gap-2 flex items-center flex-col">
        <p className="lg:text-[2rem] text-[1.6rem] font-bold capitalize">
          English dictionary
        </p>
        <InputField
          wordRef={wordRef}
          validateWord={validateWord}
          word={word}
          clearInput={clearInput}
        />
        {!validateVisible && (
          <p
            className={`w-[90%] flex items-center gap-2 text-[0.9rem] leading-5 mt-2 ${
              validationBool ? "text-indigo-900" : "text-slate-700"
            }`}
          >
            {validationText}
          </p>
        )}

        {validateVisible && (
          <div className="lg:w-[80%] w-full flex flex-col gap-2">
            <div className="w-full h-[75px] p-2 rounded-lg flex flex-row justify-between items-center">
              <div className="w-fit flex flex-col">
                <p className="text-[1.3rem] font-bold capitalize">
                  {data?.word}
                </p>
                <span className="text-[0.9rem] text-slate-700">
                  {data?.meanings[0].partOfSpeech} | {data?.phonetics[0].text}
                </span>
              </div>
              <span
                className="text-[1.2rem] text-slate-700 hover:text-slate-900 transition-all ease-in cursor-pointer hover:scale-110"
                onClick={speakWord}
              >
                <i className="fa-solid fa-volume-high"></i>
              </span>
            </div>
            <div className="w-full h-fit overflow-y-scroll flex flex-col gap-3 mb-2">
              <div className="w-full h-fit p-2 rounded-lg border-l-4 border-l-pink-400">
                <p className="text-[1.2rem] font-bold capitalize">meaning</p>
                <span className="text-[0.9rem] text-slate-700">
                  {data?.meanings[0].definitions[0].definition}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DictionaryCard;
