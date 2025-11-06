export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isComplete: boolean;
  priority: "all" | "low" | "medium" | "high";
}