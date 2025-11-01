import { selectTask } from "@/features/task/taskSlice";
import { AddTaskModal } from "@/module/task/AddTaskModal";
import TaskCard from "@/module/task/TaskCard";
import { useAppSelector } from "@/redux/hook";


function Tasks() {

  const tasks = useAppSelector(selectTask)
  console.log(tasks);


  return (
    <div className="mx-auto max-w-7xl mt-20">

        <div className="flex justify-between items-center" >
             <h1> Task  </h1>
             <AddTaskModal/> 
        </div>

      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Tasks;