"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { addUser } from "@/features/task/UserSlice";
import { useAppDispatch } from "@/redux/hook";
import type { IUser } from "@/types/taskInterface";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

const AddUserModal = () => {

  const Dispatch = useAppDispatch()


  // 🔥 form initialize
  const form = useForm({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit: SubmitHandler <FieldValues> = (data) => {
     Dispatch(addUser(data as IUser))
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add User +</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add User</DialogTitle>
          </DialogHeader>

          {/* Form start */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>

              {/* Task Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User Name</FormLabel>
                    <FormControl>
                      <input
                        placeholder="Enter User name"
                        {...field}
                        className="border p-2 rounded-md w-full"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />


              {/* Buttons */}
              <DialogFooter className="mt-4">
                <DialogClose asChild>
                  <Button variant="outline" type="button">Cancel</Button>
                </DialogClose>

                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </Form>
          {/* Form end */}
        </DialogContent>

      </Dialog>
    </div>
  );
};

export default AddUserModal;
