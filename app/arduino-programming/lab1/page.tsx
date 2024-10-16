import SyntaxHighlighter from 'react-syntax-highlighter';
import {paraisoDark} from "react-syntax-highlighter/dist/esm/styles/hljs";

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
    <section className="p-6 max-w-[1300px]">
      <SyntaxHighlighter
        language="cpp"
        style={paraisoDark}
        showLineNumbers
        wrapLines
        customStyle={{
          borderRadius: "0.25rem"
        }}
      >
        {codeString}
      </ SyntaxHighlighter>
    </section>
  );
}

export default Page;