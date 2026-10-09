"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./components/Button";
import TextArea from "./components/TextArea";
import Dropdown from "./components/Dropdown";
import SpeedSelector from "./components/SpeedSelector";

export default function Home() {
  // user input and speech synthesis settings
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("en-US");
  const [voice, setVoice] = useState("");

  // available voices loaded from speechSynthesis.getVoices()
  const [availableLanguages, setAvailableLanguages] = useState<string[]>([]);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);

  // speed ​​control
  const [speed, setSpeed] = useState("1x");
  const speeds = ["0.5x", "0.75x", "1x", "1.5x"];

  // helps to stop the sound if it's already playing 
  const [isSpeaking, setIsSpeaking] = useState(false);

  
  useEffect(() => {
    // extracts the unique languages ​​of the voices available for the selection filter
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      // deduplicates languages ​​(multiple voices can have the same language)
      const uniqueLanguages = [...new Set(voices.map(v => v.lang))];
      // updates the state with the list of languages ​​to populate the select
      setAvailableLanguages(uniqueLanguages);

      // store complete objects, not just names
      setAvailableVoices(voices);
    };

    // initial load
    loadVoices();
    // reload when browser finishes loading voices
    window.speechSynthesis.onvoiceschanged = loadVoices;

    // cleanup
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };

  }, []);

  // handle text to speech
  const handleSpeaking = () => {
    
    // avoid launching text-to-speech if the text is empty or contains only spaces
    if(!text.trim()) return;

    // check if speechSynthesis is supported
    if('speechSynthesis' in window) {
      // if already reading, stop
      if(isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }

      // create the utterance with text to speak
      const utterance = new SpeechSynthesisUtterance(text);
      // set language
      utterance.lang = language;
      // convert "1x" string to number
      utterance.rate = parseFloat(speed);
      // find and assign the selected voice by name
      const selectedVoice = availableVoices.find(v => v.name === voice);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      
      // events management
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      // play
      window.speechSynthesis.speak(utterance);
    }
    
  }

  return (
    <div className="relative bg-[var(--color-dark-primary)] flex max-w-[1350px] w-full mx-auto max-h-[940px] min-h-screen">
      {/* Left Side - Background Image (50%) */}
      <div className="w-1/2 h-full relative overflow-hidden">
        <Image
          src="/assets/bg-robot.png"
          alt=""
          width={675}
          height={940}
          className="w-full h-screen object-cover object-center"
          priority
        />
      </div>

      {/* Right Side - Content (50%) */}
      <div className="w-1/2 h-full relative overflow-hidden">
        <div className="flex flex-col gap-8 w-full mt-[9px] px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mt-[13px]">
          <h1 className="text-logo text-[var(--color-light)] font-medium tracking-tight">
            Speechbot
          </h1>
          <div className="relative w-[55px] h-[28px]">
            <Image src="/assets/vector.svg" alt="" fill />
          </div>
        </div>

        {/* Text Input Section */}
        <div className="flex flex-col">
          <div className="relative">
            <TextArea value={text} onChange={setText} placeholder="Enter your text" />
            <div className="absolute bottom-2 right-2">
              <Image
                src="/assets/group-3.svg"
                alt=""
                width={10}
                height={9}
              />
            </div>
          </div>
          <p className="text-sm text-[var(--color-light)] font-medium tracking-[-0.01em]">
            Enter your text above and hit &quot;play.&quot; You can choose a different voice by selecting an option from the dropdown menu.</p>
        </div>

        {/* Settings Section */}
        <div className="flex flex-col gap-[7px]">
          <p className="text-small text-[var(--color-light)] font-medium relative mt-[-4px]">
            Settings
          </p>

          <div className="flex flex-wrap gap-3 items-start">
            {/* Voice Settings */}
            <div className="bg-[var(--color-dark-secondary)] rounded-xl px-4 py-3 inline-flex items-center gap-4 max-w-[295px] w-full">
              <span className="text-[var(--color-light)] font-medium text-base">
                Voice
              </span>

              <div className="h-9 w-px bg-[var(--color-muted)] opacity-30" />

              <Dropdown
                className="gap-[0]"
                value={language}
                onChange={setLanguage}
                options={availableLanguages}
                label=""
              />

              <div className="h-9 w-px bg-[var(--color-muted)] opacity-30" />

              <Dropdown
                className="gap-[0]"
                value={voice}
                onChange={setVoice}
                // filter available voices based on the chosen language
                options={availableVoices.filter(v => v.lang === language).map(v => v.name)}
                label=""
              />
            </div>

            {/* Speed Settings */}
            <div className="bg-[var(--color-dark-secondary)] rounded-xl px-4 py-3 inline-flex items-center max-w-[306px] gap-[13px] w-full">
              <span className="text-[var(--color-light)] font-medium text-base">
                Speed
              </span>

              <div className="h-9 w-px bg-[var(--color-muted)] opacity-30" />

              <SpeedSelector
                value={speed}
                onChange={setSpeed}
                options={speeds}
              />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Button
        className="max-w-[576px] w-full"
        onClick={handleSpeaking}
        >Text to Speech</Button>
        </div>
      </div>
    </div>
  );
}
