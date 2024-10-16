"use client"
import React, { useState } from 'react';
import { Button } from '../ui/button';
import {MdCopyAll} from "react-icons/md";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

function CopyToClipboardButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={handleCopy} variant="secondary">
            {copied ?  'Код скопійовано': (
              <MdCopyAll size={24}/>
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          Скопіювати код
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

  );
}

export default CopyToClipboardButton;


