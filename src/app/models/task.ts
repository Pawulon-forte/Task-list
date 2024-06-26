export interface Task {
  id: string;
  taskNumber: string;
  name: string;
  description: string;
  status: Status;
  priority: Priority;
  percentageOfProgress: number;
  startDate: string;
  endDate: string;
  childTasks: Task[];
}

export enum Status {
  ToDO = 'TODO',
  InProgress = 'IN_PROGRESS',
  Done = 'DONE',
}

export enum Priority {
  Normal = 'NORMAL',
  Medium = 'MEDIUM',
  Hight = 'HIGH',
}
