import SyntaxHighlighter from 'react-syntax-highlighter';
import {paraisoDark} from "react-syntax-highlighter/dist/esm/styles/hljs";
import Image from "next/image"
import {ARDUINO_PROGRAMMING_LABS} from "@/config/topic-list-data";
import {Separator} from "@/components/ui/separator";
import CopyToClipboardButton from "@/components/custom/CopyButton";

function Page() {
  const codeString = `
// оголошення змінної цілого типу, що містить номер порту до якого ми підключили другий провід
int LED = 8; 
  
// обов'язкова процедура setup, яка запускається на початку програми; оголошення процедур починається словом void
void setup() 
{

  // оголошення порту, який використовується,
  // LED - номер порту, другий аргумент - тип використання порту - на вхід (INPUT) або на вихід (OUTPUT)
  pinMode(LED, OUTPUT); 
}
// обов'язкова процедура loop, що запускається циклічно після процедури setup
void loop() 
{

  // ця команда використовується для включення або виключення напруги на цифровому порте; led - номер
  // порту, другий аргумент - включення (HIGH) або вимикання (LOW)
  digitalWrite(LED, HIGH); 
  
  // ця команда використовується для очікування між діями, аргумент - час очікування в мілісекундах
  delay(1000); 

  digitalWrite(LED, LOW);
  delay(1000);
}
  `
  return (
    <section className="p-6 max-w-[1300px] flex flex-col gap-y-4 w-full flex-1">
      <h1 className="lg:text-4xl text-xl font-semibold w-full">
        Завдання №1: {ARDUINO_PROGRAMMING_LABS[0].tasks[0].lab_name}
      </h1>
      <Separator className="my-4"/>
      <ul>Для підключення миготливого світлодіода на Arduino і управління ним вам знадобиться:</ul>
      <li>плата Arduino</li>
      <li>breadboard</li>
      <li>2 дроти «male-male»</li>
      <li>светодиод</li>
      <li>резистор. 220 Ом</li>
      <p>Також вам буде потрібна програма Arduino IDE, що можна загрузити з сайту Arduino.</p>
      <p>Breadboard представляє з себе сітку з гнізд, які зазвичай з&#39;єднуються так:</p>
      {/*<div className="flex lg:flex-row lg:gap-x-16 flex-col gap-y-16 items-center justify-center my-16">*/}
      {/*  <div className="relative w-64 h-32">*/}
      {/*    <Image*/}
      {/*      src={"/lab1-i-1.png"}*/}
      {/*      alt={"Картинка до лабораторної роботи №1"}*/}
      {/*      fill*/}
      {/*      className="object-cover"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className="relative w-96 h-72">*/}
      {/*    <Image*/}
      {/*      src={"/lab1-i-2.png"}*/}
      {/*      alt={"Картинка до лабораторної роботи №1"}*/}
      {/*      fill*/}
      {/*      className="object-cover"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<p className="text-xl">*/}
      {/*  Для роботи цієї моделі напишемо наступну програму (скетч):*/}
      {/*</p>*/}
      <div className="relative">
        <SyntaxHighlighter
          language="cpp"
          style={paraisoDark}
          showLineNumbers
          wrapLines
          customStyle={{
            borderRadius: "0.25rem",
            width: "100%"
          }}
        >
          {codeString}
        </ SyntaxHighlighter>
        <div className="absolute top-5 right-5">
          <CopyToClipboardButton text={codeString}/>
        </div>
      </div>
    </section>
  );
}

export default Page;