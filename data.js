[
    {
      "category": "Git",
      "command": "git status",
      "description": "Check the status of your working directory"
    },
    {
      "category": "Git",
      "command": "git add .",
      "description": "Stage all changes in the current directory"
    },
    {
      "category": "Git",
      "command": "git commit -m 'message'",
      "description": "Commit staged changes with a message"
    },
    {
      "category": "Git",
      "command": "git push origin main",
      "description": "Push committed changes to the remote repository"
    },
    {
      "category": "Git",
      "command": "git pull origin main",
      "description": "Pull changes from the remote main branch"
    },
    {
      "category": "Git",
      "command": "git checkout -b new-branch",
      "description": "Create and switch to a new branch"
    },
    {
      "category": "Git",
      "command": "git merge branch-name",
      "description": "Merge the specified branch into your current branch"
    },
    {
      "category": "Git",
      "command": "git log",
      "description": "View commit history"
    },
    {
      "category": "Git",
      "command": "git clone <repo-url>",
      "description": "Clone a repository"
    },
    {
      "category": "Git",
      "command": "git init",
      "description": "Initialize a new Git repository"
    },
    {
      "category": "npm",
      "command": "npm install",
      "description": "Install all project dependencies"
    },
    {
      "category": "npm",
      "command": "npm install package-name",
      "description": "Install a specific package"
    },
    {
      "category": "npm",
      "command": "npm run dev",
      "description": "Run the project in development mode"
    },
    {
      "category": "npm",
      "command": "npm start",
      "description": "Run the production build or default start script"
    },
    {
      "category": "npm",
      "command": "npm uninstall package-name",
      "description": "Remove a package from the project"
    },
    {
      "category": "Node.js",
      "command": "node filename.js",
      "description": "Run a JavaScript file using Node.js"
    },
    {
      "category": "Node.js",
      "command": "nodemon index.js",
      "description": "Run the server with auto-restart on file changes"
    },
    {
      "category": "MongoDB",
      "command": "mongod",
      "description": "Start the MongoDB server"
    },
    {
      "category": "MongoDB",
      "command": "mongo",
      "description": "Open MongoDB shell"
    },
    {
      "category": "MongoDB",
      "command": "use dbname",
      "description": "Switch to or create a MongoDB database"
    },
    {
      "category": "MongoDB",
      "command": "db.collection.insertOne({})",
      "description": "Insert a document into a collection"
    },
    {
      "category": "Terminal",
      "command": "ls",
      "description": "List files and directories"
    },
    {
      "category": "Terminal",
      "command": "cd folder-name",
      "description": "Change directory to a specified folder"
    },
    {
      "category": "Terminal",
      "command": "mkdir new-folder",
      "description": "Create a new directory"
    },
    {
      "category": "Terminal",
      "command": "rm -rf folder-name",
      "description": "Force delete a folder and its contents"
    },
    {
      "category": "Terminal",
      "command": "code .",
      "description": "Open the current folder in VS Code"
    },
    {
      "category": "Terminal",
      "command": "clear",
      "description": "Clear the terminal screen"
    },
    {
    "category": "Git",
    "command": "git stash",
    "description": "Temporarily save changes without committing"
  },
  {
    "category": "Git",
    "command": "git reset --hard HEAD",
    "description": "Discard all local changes and reset to the last commit"
  },
  {
    "category": "npm",
    "command": "npm outdated",
    "description": "Check for outdated packages"
  },
  {
    "category": "npm",
    "command": "npm audit",
    "description": "Run a security audit of installed packages"
  },
  {
    "category": "Node.js",
    "command": "npm init -y",
    "description": "Generate a default package.json file"
  },
  {
    "category": "MongoDB",
    "command": "db.collection.find()",
    "description": "Retrieve all documents from a collection"
  },
  {
    "category": "MongoDB",
    "command": "db.collection.deleteOne({})",
    "description": "Delete a single document from a collection"
  },
  {
    "category": "Terminal",
    "command": "touch filename.txt",
    "description": "Create an empty file"
  },
  {
    "category": "Terminal",
    "command": "cat filename.txt",
    "description": "Display file contents"
  },
  {
    "category": "React",
    "command": "npm install react-router-dom",
    "description": "Install React Router for routing"
  },
  {
    "category": "React",
    "command": "npm install tailwindcss",
    "description": "Install Tailwind CSS framework"
  },
  {
    "category": "React",
    "command": "npm run build",
    "description": "Create a production build of your React app"
  }
  {
    "category": "Docker",
    "command": "docker --version",
    "description": "Check installed Docker version"
  },
  {
    "category": "Docker",
    "command": "docker build -t image-name .",
    "description": "Build an image from Dockerfile"
  },
  {
    "category": "Docker",
    "command": "docker images",
    "description": "List all Docker images"
  },
  {
    "category": "Docker",
    "command": "docker run -d -p 3000:3000 image-name",
    "description": "Run a container in detached mode mapping port 3000"
  },
  {
    "category": "Docker",
    "command": "docker ps -a",
    "description": "List all running and stopped containers"
  }
]
Linux Essentials
json
Copy code
[
  {
    "category": "Linux",
    "command": "pwd",
    "description": "Print the current directory path"
  },
  {
    "category": "Linux",
    "command": "whoami",
    "description": "Display the current user"
  },
  {
    "category": "Linux",
    "command": "chmod 755 filename",
    "description": "Change file permissions"
  },
  {
    "category": "Linux",
    "command": "top",
    "description": "Display running processes"
  },
  {
    "category": "Linux",
    "command": "df -h",
    "description": "Show disk space usage in human-readable format"
  }
]
Express.js Routes
json
Copy code
[
  {
    "category": "Express.js",
    "command": "app.get('/route', callback)",
    "description": "Handle GET request on specified route"
  },
  {
    "category": "Express.js",
    "command": "app.post('/route', callback)",
    "description": "Handle POST request on specified route"
  },
  {
    "category": "Express.js",
    "command": "app.put('/route', callback)",
    "description": "Handle PUT request on specified route"
  },
  {
    "category": "Express.js",
    "command": "app.delete('/route', callback)",
    "description": "Handle DELETE request on specified route"
  },
  {
    "category": "Express.js",
    "command": "app.use(middleware)",
    "description": "Use middleware for all routes"
  }
]
Would you like me to prep some for React Hooks, Redux, TypeScript, or maybe MongoDB Aggregation commands next? Just name it — I’ll get them ready for you!






You said:
Yes


ChatGPT said:
Love the energy — let’s build some more! Here’s a clean categorized command list for React Hooks, Redux, and MongoDB Aggregation commands in your JSON style:

React Hooks
json
Copy code
[
  {
    "category": "React Hooks",
    "command": "useState()",
    "description": "Hook to add local state to functional components"
  },
  {
    "category": "React Hooks",
    "command": "useEffect(() => {}, [])",
    "description": "Hook to perform side effects after render"
  },
  {
    "category": "React Hooks",
    "command": "useContext(Context)",
    "description": "Access the value from a React Context"
  },
  {
    "category": "React Hooks",
    "command": "useRef()",
    "description": "Create a mutable ref object that persists across renders"
  },
  {
    "category": "React Hooks",
    "command": "useMemo(() => computeValue, [deps])",
    "description": "Memoize a computed value to avoid unnecessary recalculations"
  }
]
Redux
json
Copy code
[
  {
    "category": "Redux",
    "command": "createStore(reducer)",
    "description": "Create a new Redux store"
  },
  {
    "category": "Redux",
    "command": "store.dispatch(action)",
    "description": "Dispatch an action to the Redux store"
  },
  {
    "category": "Redux",
    "command": "store.getState()",
    "description": "Retrieve the current state from the Redux store"
  },
  {
    "category": "Redux",
    "command": "combineReducers({ reducer1, reducer2 })",
    "description": "Combine multiple reducers into one"
  },
  {
    "category": "Redux",
    "command": "useSelector(state => state.value)",
    "description": "Select a part of the state from the Redux store"
  }
]
MongoDB Aggregation Commands
json
Copy code
[
  {
    "category": "MongoDB Aggregation",
    "command": "db.collection.aggregate([{ $match: { status: 'active' } }])",
    "description": "Filter documents by status 'active'"
  },
  {
    "category": "MongoDB Aggregation",
    "command": "db.collection.aggregate([{ $group: { _id: '$category', total: { $sum: 1 } } }])",
    "description": "Group documents by category and count them"
  },
  {
    "category": "MongoDB Aggregation",
    "command": "db.collection.aggregate([{ $sort: { price: -1 } }])",
    "description": "Sort documents by price descending"
  },
  {
    "category": "MongoDB Aggregation",
    "command": "db.collection.aggregate([{ $project: { name: 1, price: 1 } }])",
    "description": "Select specific fields from documents"
  },
  {
    "category": "MongoDB Aggregation",
    "command": "db.collection.aggregate([{ $limit: 5 }])",
    "description": "Limit the result set to 5 documents"
  }
]
Would you like a batch for TypeScript basics, Next.js commands, or JWT authentication commands next? Say the word — I’ll have them lined up for you.









  ]
  