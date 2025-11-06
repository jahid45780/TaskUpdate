import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTask, updateFilter } from "@/features/task/taskSlice";
import { AddTaskModal } from "@/module/task/AddTaskModal";
import TaskCard from "@/module/task/TaskCard";
import { useAppDispatch, useAppSelector } from "@/redux/hook";


function Tasks() {

  const tasks = useAppSelector(selectTask)
  const dispatch = useAppDispatch()


  return (
    <div className="mx-auto max-w-7xl mt-20">

        <div className="flex justify-between items-center" >
             <h1> Task  </h1>

                <Tabs  defaultValue="all">
                    <TabsList>
          <TabsTrigger onClick={()=>dispatch( updateFilter ("all"))} value="all">All</TabsTrigger>
          <TabsTrigger onClick={()=>dispatch( updateFilter ("low"))} value="low">Low</TabsTrigger>
          <TabsTrigger  onClick={()=>dispatch( updateFilter ("medium"))} value="medium">Medium</TabsTrigger>
          <TabsTrigger onClick={()=>dispatch( updateFilter ("high"))}  value="high">High</TabsTrigger>
        
        </TabsList>
                </Tabs>

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