export interface Task {
  id: string;
  taskNumber: string;
  name: string;
  description: string;
  status: string;
  priority: string;
  percentageOfProgress: number;
  startDate: string;
  endDate: string;
  childTasks: Task[];
}

// "id": "f90531ca-3e23-4c1c-9b76-a5aee6496791",
// "taskNumber": "5-003-1",
// "name": "Design Website Mockup",
// "description": "Create an initial design mockup for the client's new website.",
// "status": "TO_DO",
// "priority": "HIGH",
// "percentageOfProgress": 85,
// "startDate": "2024-06-01",
// "endDate": "2024-06-07",
// "childTasks": [
