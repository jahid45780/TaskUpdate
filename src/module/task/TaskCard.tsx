
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox"
import type { ITask } from "@/types/taskInterface";
import { Trash2 } from "lucide-react";
import { useAppDispatch } from "@/redux/hook";
import { deleteTask, toggleCompleteState } from "@/features/task/taskSlice";



interface IProps{
    task:ITask
}



function TaskCard({task}: IProps) {
   
  
  const Dispatch = useAppDispatch()

  return (
    <div className=" border px-5 py-5 rounded-md" >

        <div className=" flex justify-between items-center" >
            <div className=" flex gap-2 items-center">
                <div className={cn(" size-3 rounded-full ",{
                   "bg-amber-200":task.priority ==="low",
                   "bg-green-500":task.priority ==="medium",
                    "bg-red-400":task.priority ==="high",
                })}></div>
                <h1> 
                   <h1 className={cn({"line-through":task.isComplete})} >{task.title}</h1>
                </h1>
                  
                   </div>

                   <div className=" flex gap-2 items-center" >
                    <button  className=" p-0 text-red-500 " >  

                        <Trash2 onClick={()=>Dispatch(deleteTask(task.id))} />
                    </button>
                      <Checkbox 
                      checked={task.isComplete}
                      onClick={()=>Dispatch(toggleCompleteState(task.id))} className=" border-amber-300" />
                   </div>

        </div>

        <p className=" mt-5" > {task.description} </p>
    
    </div>
  );
}

export default TaskCard;