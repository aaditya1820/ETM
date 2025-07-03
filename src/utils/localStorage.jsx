const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "aarav.singh@company.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 3,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update website",
        taskDescription: "Revamp the homepage design",
        taskDate: "2024-10-12",
        category: "Design "
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client meeting",
        taskDescription: "Discuss project requirements",
        taskDate: "2024-10-10",
        category: "Meeting"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix bugs",
        taskDescription: "Resolve bugs reported in issue tracker",
        taskDate: "2024-10-14",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "priya.sharma@company.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 2,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database optimization",
        taskDescription: "Optimize queries for better performance",
        taskDate: "2024-10-11",
        category: "Database"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design new feature",
        taskDescription: "Create mockups for the new feature",
        taskDate: "2024-10-09",
        category: "Design"
      }
    ]
  },
  {
    id: 3,
    firstName: "Ishaan",
    email: "ishaan.verma@company.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 3,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare presentation",
        taskDescription: "Prepare slides for upcoming client presentation",
        taskDate: "2024-10-13",
        category: "Presentation"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Code review",
        taskDescription: "Review the codebase for optimization",
        taskDate: "2024-10-12",
        category: "Development"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Testing",
        taskDescription: "Test the latest build for bugs",
        taskDate: "2024-10-08",
        category: "QA"
      }
    ]
  },
  {
    id: 4,
    firstName: "Meera",
    email: "meera.joshi@company.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 2,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write documentation",
        taskDescription: "Update the project documentation",
        taskDate: "2024-10-13",
        category: "Documentation"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Set up CI/CD",
        taskDescription: "Implement continuous integration pipeline",
        taskDate: "2024-10-11",
        category: "DevOps"
      }
    ]
  },
  {
    id: 5,
    firstName: "Vivaan",
    email: "vivaan.nair@company.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 3,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "UI redesign",
        taskDescription: "Redesign the user interface for better UX",
        taskDate: "2024-10-14",
        category: "Design"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Deploy new build",
        taskDescription: "Deploy the latest build to production",
        taskDate: "2024-10-09",
        category: "DevOps"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client feedback",
        taskDescription: "Gather feedback from clients after product launch",
        taskDate: "2024-10-12",
        category: "Support"
      }
    ]
  }
];



const admin = [
    {
        employee_id: "ADM001",
        email: "admin@me.com",
        password: "123",
    },
];

export const setlocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
};
export const getlocalStorage = () => {
    const employeeData = JSON.parse(localStorage.getItem("employees"));
    const adminData = JSON.parse(localStorage.getItem("admin"));

    // to see dataaa in console
    //   console.log("data", JSON.parse(adminData));
    //   console.log("data", JSON.parse(employeeData));

    return { employeeData, adminData }
};
