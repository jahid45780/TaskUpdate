import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"

import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { addTask } from "@/features/task/taskSlice"
import type { ITask } from "@/types/taskInterface"
import { selectUsers } from "@/features/task/UserSlice"


export function AddTaskModal() {
  const form = useForm()
  const users = useAppSelector(selectUsers)
  const Dispatch = useAppDispatch()
  const onSubmit: SubmitHandler<FieldValues>  =(data)=>{
    Dispatch(addTask(data as ITask))
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Task</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
        </DialogHeader>

        {/*  এখানে Form শুরু */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit((onSubmit))}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Task Name</FormLabel>
                  <FormControl>
                    <input
                      placeholder="Enter task name"
                      {...field}
                      className="border p-2 rounded-md w-full"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

              {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter task description"
                      {...field}
                      className="border p-2 rounded-md w-full"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
              {/* Priority Select */}
            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Priority</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />


             {/* User Assigned */}
            <FormField
              control={form.control}
              name="AssignedTo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Assigned To</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select user" />
                      </SelectTrigger>
                      <SelectContent>
                        
                        {
                          users.map((user)=>(
                            <SelectItem key={user.id} value={user.id}>{user.name}</SelectItem>
                          ))
                        }
                        
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />


              {/* Due Date Picker */}
            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Due Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? format(field.value, "PPP") : "Pick a date"}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <DialogFooter className="mt-4">
              <DialogClose asChild>
                <Button variant="outline" type="button">Cancel</Button>
              </DialogClose>

              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
        {/*  এখানে Form শেষ */}
      </DialogContent>
    </Dialog>
  )
}
