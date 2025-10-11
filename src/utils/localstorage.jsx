const employee = [
  {
    id: "emp001",
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskSummary: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        taskTitle: "Design Homepage",
        taskDescription: "Create a responsive homepage layout",
        taskDate: "2025-06-11",
        category: "design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve collapsing navbar issue on mobile",
        taskDate: "2025-06-12",
        category: "development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Write Unit Tests",
        taskDescription: "Add unit tests for login component",
        taskDate: "2025-06-13",
        category: "testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: "emp2",
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskSummary: { active: 2, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        taskTitle: "Update Footer",
        taskDescription: "Add links and copyright info",
        taskDate: "2025-06-10",
        category: "design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Implement Auth Guard",
        taskDescription: "Protect private routes",
        taskDate: "2025-06-15",
        category: "development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Create 404 Page",
        taskDescription: "Design and implement 404 error page",
        taskDate: "2025-06-16",
        category: "UI",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Bug Fix: Dark Mode",
        taskDescription: "Fix layout issues in dark mode",
        taskDate: "2025-06-17",
        category: "bug",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: "emp003",
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    taskSummary: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        taskTitle: "Optimize Images",
        taskDescription: "Reduce image sizes without losing quality",
        taskDate: "2025-06-11",
        category: "performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Refactor API Calls",
        taskDescription: "Organize and structure API services",
        taskDate: "2025-06-12",
        category: "development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: "emp004",
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskSummary: { active: 1, newTask: 0, completed: 1, failed: 1 },
    tasks: [
      {
        taskTitle: "Accessibility Review",
        taskDescription: "Ensure site meets WCAG standards",
        taskDate: "2025-06-09",
        category: "audit",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Write Documentation",
        taskDescription: "Complete API and component documentation",
        taskDate: "2025-06-14",
        category: "documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Header Alignment",
        taskDescription: "Header misaligned on small screens",
        taskDate: "2025-06-18",
        category: "bug",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: "emp005",
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    taskSummary: { active: 2, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        taskTitle: "Create Admin Dashboard",
        taskDescription: "Design and develop admin UI",
        taskDate: "2025-06-08",
        category: "development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Setup CI/CD",
        taskDescription: "Configure deployment pipelines",
        taskDate: "2025-06-12",
        category: "devops",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Improve SEO",
        taskDescription: "Add meta tags and improve page structure",
        taskDate: "2025-06-13",
        category: "marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Mobile Responsiveness",
        taskDescription: "Ensure full compatibility on all screen sizes",
        taskDate: "2025-06-16",
        category: "design",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = {
  id: "admin001",
  firstName: "Anjali",
  email: "admin@example.com",
  password: "123"
};

export const setLocalStorage = () =>{
    localStorage.setItem('employee', JSON.stringify(employee))
    localStorage.setItem('admin',JSON.stringify(admin))
 }
 export const getLocalStorage = () =>{
   const employee= JSON.parse(localStorage.getItem('employee'))

   const admin = JSON.parse(localStorage.getItem('admin'))
   return {employee,admin}
 }
 //parse will convert the string of data back into array of objects
//  and stringify does the opposite
// parse will convert the string of data back into array of objects and stringify does the opposite 

