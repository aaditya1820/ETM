import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

function Tasklist({ data }) {
  console.log(data.email)
  return (
    <div
      id="tasklist"
      className="h-[50%] w-full flex flex-nowrap  items-center justify-start py-3 px-6 gap-5 overflow-x-auto scrollbar-hide"
    >
      {data.tasks.map((elem, index) => {
        
        if (elem.active) {
          return <AcceptTask data={elem} email={data.email} key={index} />
        }
        if (elem.newTask) {
          return <NewTask data={elem} email={data.email} key={index} />
        }
        if (elem.completed) {
          return <CompleteTask data={elem} email={data.email} key={index} />
        }
        if (elem.failed) {
          return <FailedTask data={elem} email={data.email} key={index} />
        }
      })}
    </div>
  );
}

export default Tasklist;
