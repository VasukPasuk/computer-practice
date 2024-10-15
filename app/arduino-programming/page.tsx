import {ARDUINO_PROGRAMMING_LABS} from "@/config/topic-list-data"
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";

function Page () {
  return (
    <section className="flex flex-col gap-y-4 py-8 px-6">
      <div>
        <h1 className="text-4xl font-semibold mb-8">
          Дисципліна: Програмування на Arduino
        </h1>
      </div>
      {
        ARDUINO_PROGRAMMING_LABS.map(({lab, tasks }, idx) => (
          <>
            <div className="flex flex-col gap-y-4" key={lab}>
              <h1 className="text-neutral-800 text-2xl">
                {lab}
              </h1>
              <ul className="flex flex-row gap-x-4 flex-wrap gap-y-4">
                {
                  tasks.map((task) => (
                    <Button
                      key={task}
                      variant="secondary"
                      className="hover:bg-black hover:text-white"
                    >
                      {task}
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