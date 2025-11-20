import AddUserModal from "@/module/user/AddUserModal";
import UserCard from "@/module/user/UserCard";
import { useAppSelector } from "@/redux/hook";

function User() {


  const users  = useAppSelector((state) => state.user.users)

  return (
    <div >

    <div className="w-full flex justify-end px-6 mt-4"  >
      <AddUserModal/>
    </div>

     
     <div>
 {
  users.map((user)=>(
    <UserCard key={user.id} user={user

    } />
  ))
 }
     </div>

    </div>
  );
} 

export default User;