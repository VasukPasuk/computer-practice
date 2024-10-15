import {ARDUINO_PROGRAMMING_LABS} from "@/config/topic-list-data"
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {SlChemistry} from "react-icons/sl";

function Page() {
  return (
    <section className="flex flex-col gap-y-4 py-8 px-6">
      <div>
        <h1 className="lg:text-4xl text-2xl font-semibold mb-8">
          Дисципліна: Програмування на Arduino
        </h1>
      </div>
      {
        ARDUINO_PROGRAMMING_LABS.map(({lab, tasks}, idx) => (
          <>
            <div className="flex flex-col gap-y-4" key={lab}>
              <div className="w-full flex justify-start items-center gap-x-4">
                <h1 className="text-neutral-800 lg:text-2xl text-lg flex justify-center items-center gap-x-2">
                  <SlChemistry/>
                  {lab}
                </h1>
                <div className="py-1 px-3 rounded flex justify-center items-center bg-black text-white">
                  {tasks.length} завдань
                </div>
              </div>
              <ul className="flex flex-row gap-x-4 flex-wrap gap-y-4">
                {
                  tasks.map((task) => (
                    <Button
                      key={task.lab_name}
                      variant="secondary"
                      className="hover:bg-black hover:text-white flex gap-x-2 items-center justify-start w-full md:w-fit p-8"
                    >
                      <div className="block p-1 px-3 rounded-lg bg-black/5">{task.lab_number}</div>
                      <div className="text-wrap line-clamp-2">{task.lab_name}</div>
                    </Button>
                  ))
                }
              </ul>
            </div>
            {idx !== ARDUINO_PROGRAMMING_LABS.length - 1 && <Separator/>}
          </>
        ))
      }
    </section>
  )
}

export default Page