import { removeUser,  } from "@/features/task/UserSlice";
import { useAppDispatch, } from "@/redux/hook";
import type { IUser } from "@/types/taskInterface";
import { Trash2 } from "lucide-react";

interface IProps{
    user:IUser
}

const UserCard = ({ user }: IProps) => {

  const Dispatch = useAppDispatch()






    return (
        <div className="shadow-md border rounded-xl p-5 hover:shadow-lg transition duration-300 mt-2">

      <div className="flex justify-between items-center">
        {/* Avatar */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center text-xl font-semibold text-indigo-700">
            {user.name?.charAt(0)?.toUpperCase()}
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-300">{user.name}</h2>
            
          </div>
        </div>

        {/* Delete button */}
        <button className="text-red-500 hover:text-red-600 transition">
          <Trash2 onClick={()=>Dispatch(removeUser(user.id))} size={20} />
        </button>
      </div>
    </div>
    );
};

export default UserCard;