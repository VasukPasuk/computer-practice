import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center p-4"
      style={{
        height: "calc(100dvh - 64px)"
      }}
    >
      <div className="flex flex-row w-full items-center justify-center gap-x-4">
        <div className="hidden lg:block w-full lg:w-1/3 h-96 relative overflow-hidden rounded shadow-lg scale-75 translate-x-48
          hover:translate-x-0 transition-transform duration-500 ease-out hover:scale-95
        ">
          <Image
            src="/students-repair-computers-1.jpeg"
            alt="Діти ремонтують технічне обладнання"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-3/4 h-64 lg:w-[600px] lg:h-96 relative overflow-hidden rounded shadow-lg scale-100 z-50">
          <Image
            src="/students-repair-computers-2.jpeg"
            alt="Діти ремонтують технічне обладнання"
            fill
            className="object-cover"
          />
        </div>
        <div className="hidden lg:block w-full lg:w-1/3 h-96 relative overflow-hidden rounded shadow-lg scale-75 -translate-x-48
          hover:translate-x-0 transition-transform duration-500 ease-out hover:scale-95
        ">
          <Image
            src="/students-repair-computers-3.jpeg"
            alt="Діти ремонтують технічне обладнання"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <h3
        className="
          lg:text-2xl font-normal text-neutral-800 w-full lg:w-[48ch] text-center mt-16
          md:text-xl
          text-lg
        "
      >
        Вітаю Вас на сайті з Комп&#39;ютерного практикуму, де зібрано інформацію про поточні лабораторні та практичні
        роботи!
      </h3>
    </div>
  );
}
