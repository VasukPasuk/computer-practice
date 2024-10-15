"use client"
import React, {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {useRouter} from "next/navigation";


interface ITopic {
  value: string,
  label: string
}

const LIST_OF_TOPICS: ITopic[] = [
  {
    label: "Програмування на Arduino",
    value: "arduino-programming", // href
  },
]

function NavDrawer() {
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const router = useRouter();


  useEffect(() => {
    if (activeTab) {
      router.push(`/${activeTab}`)
    }
  }, [activeTab, router])

  return (
    <div className="w-96  flex-col gap-y-4 items-start justify-center p-4 hidden lg:flex">
      <div className="flex justify-between items-center w-full p-2">
        <h2 className="font-semibold text-xl">
          Теми навчання
        </h2>
        <div className="w-8 h-8 rounded-lg bg-black text-white font-extralight flex justify-center items-center">
          {LIST_OF_TOPICS.length}
        </div>
      </div>
      <Separator/>
      <div className="flex flex-col gap-y-2 items-start justify-center">
        {
          LIST_OF_TOPICS.map((item) => (
            <Option
              active={activeTab === item.value}
              key={item.label}
              label={item.label}
              onClickFn={() => setActiveTab(item.value)}
            />
          ))
        }
      </div>

    </div>
  );
}

interface IOptionProps {
  label: string
  onClickFn: () => void
  active: boolean
}

const Option: React.FC<IOptionProps> = (props) => {
  const {
    onClickFn,
    label,
    active
  } = props

  const variant = active ? "default" : "ghost"

  return (
    <Button
      variant={variant}
      onClick={onClickFn}
    >
      {label}
    </Button>
  )
}


export default NavDrawer;
