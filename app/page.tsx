"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./components/Button";
import TextArea from "./components/TextArea";
import Dropdown from "./components/Dropdown";
import SpeedSelector from "./components/SpeedSelector";

export default function Home() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("en-US");
  const [voice, setVoice] = useState("Albert");
  const [speed, setSpeed] = useState("1x");

  const languages = ["en-US", "en-GB", "fr-FR", "es-ES", "de-DE"];
  const voices = ["Albert", "Emma", "James", "Sophia"];
  const speeds = ["0.5x", "0.75x", "1x", "1.5x"];

  return (
    <div className="relative min-h-screen bg-[var(--color-dark-primary)] flex">
      {/* Left Side - Background Image (50%) */}
      <div className="w-1/2 relative overflow-hidden">
        <Image
          src="/assets/robot-bg-2.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Side - Content starts at 50% + 32px */}
      <div className="absolute left-[calc(50%+32px)] right-8 top-8 flex flex-col gap-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-logo text-[var(--color-light)] font-medium tracking-tight">
            Speechbot
          </h1>
          <div className="relative w-[55px] h-[28px]">
            <Image src="/assets/vector.svg" alt="" fill />
          </div>
        </div>

        {/* Text Input Section */}
        <div className="flex flex-col gap-2">
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
          <p className="text-sm text-[var(--color-light)] font-medium">
            Enter your text above and hit &quot;play.&quot; You can choose a<br />
            different voice by selecting an option from the dropdown menu.
          </p>
        </div>

        {/* Settings Section */}
        <div className="flex flex-col gap-2">
          <p className="text-small text-[var(--color-light)] font-medium">
            Settings
          </p>

          <div className="flex flex-wrap gap-3 items-start">
            {/* Voice Settings */}
            <div className="bg-[var(--color-dark-secondary)] rounded-xl px-4 py-3 inline-flex items-center gap-4">
              <span className="text-[var(--color-light)] font-medium text-base">
                Voice
              </span>

              <div className="h-9 w-px bg-[var(--color-muted)] opacity-30" />

              <Dropdown
                value={language}
                onChange={setLanguage}
                options={languages}
                label=""
              />

              <div className="h-9 w-px bg-[var(--color-muted)] opacity-30" />

              <Dropdown
                value={voice}
                onChange={setVoice}
                options={voices}
                label=""
              />
            </div>

            {/* Speed Settings */}
            <div className="bg-[var(--color-dark-secondary)] rounded-xl px-4 py-3 inline-flex items-center gap-3.5">
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
        <Button className="w-[576px]">Text to Speech</Button>
      </div>
    </div>
  );
}
