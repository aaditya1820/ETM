import React from 'react';
import { ClipboardPlus, CheckCircle, PlayCircle, XCircle } from 'lucide-react'; // Add more icons if needed

function TaskBar({ data }) {
  const taskCards = [
    {
      title: 'New Task',
      count: data.taskCounts.newTask,
      bgColor: 'bg-blue-700',
      icon: <ClipboardPlus size={28} className="text-white" />,
    },
    {
      title: 'Completed Task',
      count: data.taskCounts.completed,
      bgColor: 'bg-green-700',
      icon: <CheckCircle size={28} className="text-white" />,
    },
    {
      title: 'Accepted Task',
      count: data.taskCounts.active,
      bgColor: 'bg-orange-600',
      icon: <PlayCircle size={28} className="text-white" />,
    },
    {
      title: 'Failed Task',
      count: data.taskCounts.failed,
      bgColor: 'bg-red-700',
      icon: <XCircle size={28} className="text-white" />,
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 px-6 mt-6 w-full">
      {taskCards.map((task, index) => (
        <div
          key={index}
          className={`${task.bgColor} w-[22%] min-w-[240px] h-[160px] rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between`}
        >
          <div className="flex justify-between items-center">
            <div className="text-white text-4xl font-bold">{task.count}</div>
            <div>{task.icon}</div>
          </div>
          <div className="text-white text-xl font-semibold mt-2">{task.title}</div>
        </div>
      ))}
    </div>
  );
}

export default TaskBar;
