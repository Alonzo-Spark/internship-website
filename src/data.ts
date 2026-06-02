import { Project } from "./types";

export const projectsData: Project[] = [
  {
    id: "medical-camp-management",
    name: "SWASTH Medical Camp Management System",
    duration: "5 Weeks",
    domain: "Healthcare Tech & Operations",
    description: "This project focuses on enhancing an existing static web-based medical camp system by adding missing functionalities, fixing existing issues, and integrating intelligent automation features. The system supports full-lifecycle patient registration and vastly improves medical inventory management by introducing advanced Vision AI (OCR) models. This OCR integration allows clinical staff to instantly digitize complex, handwritten medicine stock sheets by simply snapping a photo, eliminating manual data entry errors. Additionally, an automated, regional-language voice bot is deeply integrated into the backend to handle patient follow-ups. The AI autonomously dials patients to provide medication reminders, check health statuses, and schedule revisits, instantly syncing their responses back into the database. Ultimately, the overall goal is to transform semi-manual, paper-heavy workflows into a reliable, structured, and fully automated digital healthcare system.",
    image: "/ProjectLogo.jpeg",
    tech: ["React", "Django", "Google gemini text ( 3.1 flash-lite)", " SQlite", " Django REST framework", "Tailwind CSS", "Gemini flash 3.5", "Exotel", "Sarvam AI", "Ngrok"],
    contributors: [
      {
        id: "Pavithra",
        name: "Y.Pavithra Philomena",
        role: "Frontend, UI/UX, Voice bot ",
        avatar: "/Pavithra.jpeg",
        cgpa: "8.63/10",
        github: "",
        linkedin: "linkedin.com/in/pavithra-philomena-3ba501364",
        email: "pavithraphilo@gmail.com",
        phone: "+91 8897921297",
        resumePdf: "/Pavithra_Resume.pdf",
        skills: [
          "Prompt Engineering",
          "AI-Assisted Software Development",
          "Full stack web development",
          "Databases : SQL",
          "REST API Integration",
          "Languages : C, Python",
          "Tools : Git, GitHub",
          "Frameworks : React, Django",
          "Web Technologies: HTML, CSS, Tailwind CSS",
          "Software Testing & Debugging",
          "Voice Bot Development Concepts"
        ],
        techUsed: ["React", "Tailwind CSS", "Django", "SQLite", "Tesseract OCR", "Paddle OCR", "Gemini 3.1 Flash-Lite", "Exotel", "Sarvam AI", "Ngrok"],
        bio: "Aspiring AI enthusiast currently pursuing B.Tech, fascinated by the potential of Artificial Intelligence to solve complex problems. Seeking an internship to gain research exposure and develop innovative AI-driven solutions.",
        contributions: "Pavithra made significant contributions across frontend UI development, database engineering, data visualization, AI document scanning (OCR), and voice bot integration. In frontend, she built and enhanced user interfaces for Patient Registration (Old and New), Admin Login, Patient Vitals, and the Doctor Consultation log, implementing dynamic features like field auto-filling and validation alerts. On the backend and database layer, she created schema tables, mapped medicine formulations, and integrated unit cost metrics. She also drove advanced data visualization by designing graphical summaries for camp reporting and vitals tracking. In AI/automation, she conducted comprehensive research and implementation of document text extraction using models like Tesseract, docTR, and Gemini Flash, and integrated Exotel and Sarvam AI to build a regional-language automated outbound voice bot that schedules patient follow-ups and captures structured responses into the database.",
        dailyTasks: [
          "Patient Vitals",
          "Creating Tables in database, Patient Registration UI",
          "Enhanced UI and frontend",
          "Camp Registration scetion, Enhanced login page, Added Logo",
          "Updated Icons, Included Lab tests in Log vitals with checkboxes",
          "Implemented registration form redirection and UI enhancements",
          "Created UI for Doctor list, did some research on scanning, worked on frontend",
          "Reasearch on Scanning Methods using Tessract and Paddle OCR",
          "Changed the UI of Admin Dashboard",
          "Enhanced the Graphs in log vitals section - Data Visualization Enhancements",
          "Added the status coloum in doctor details section in application",
          "Added Edit button for medicine names, Updated Issue Medicines section,Added Total Cost spent",
          "Added unit cost and total cost in campwise inventory section, created doctor report section, UI enhancement of Inventory section",
          "Worked with Gemini Flash3.1 Lite and Qwen Ocr for Scanning Method",
          "Did research on voicebot using exotel and twilio, Implemented testing on the Application",
          "Added Select camp as  default in drop down, added add patients section in doctor consultation log, added autofilling patient name and age in log vitals, added alert message for register patient id in log vitals",
          "Tested edge cases, did UI changes as per client request, added update option in total stock section, did UI changes in campwise stock table with diffrent headings",
          "Added Dropdown for Camp Selection (Select Camp), Added Formulation coloumn in Inventory section, created section in doctor consultation log section called doctor patient list",
          "Adding Old Patients Registration Through OCR Scanning and Implemented add patient features and added medicines with formilation in Inventory section",
          "Did mapping in log vitals where medicine id is mapped with formulation, added a dropdown for category of medicines",
          "Did Data entry of Patients, Researched on voice bot using exotel and sarvam AI and implemented Broadcast Reminders in campwise patient list",
          "Did data Entry of Patients, Researched on Voicebot using Exotel and Sarvam AI, Integrated Fast API in the Backend",
          "Implemented voice bot on remainders for outbound call to patients dor camp remainders, Done Testing of Voice Bot and Implemented call to every Patient Feature",
          "created diabetic voicebot where the patients who are diabetic, created a json file where the STT gets converted to text in a json file, created a database called inventory_diabeticfollowup where it stores the speech to text, created a drop down like all patients tests on click that we get to see only those patients and calls goes to patients"
        ],
        weeklyReviews: [
          { week: 1, review: "Pavithra created the core Patient Vitals logging interface. Excellent attention to user experience.", rating: 4.9 },
          { week: 2, review: "Successfully designed and implemented the Doctor List view. Showed strong command over responsive tables.", rating: 4.8 },
          { week: 3, review: "Reorganized the Admin Dashboard layout to match clients feedback beautifully.", rating: 4.9 },
          { week: 4, review: "Conducted exhaustive comparison of OCR models, analyzing Tesseract vs Paddle OCR performance.", rating: 5.0 },
          { week: 5, review: "Outstanding cohort completion! The SWASTH user interface is highly interactive and polished.", rating: 5.0 }
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Information Technology",
              school: "Swami Vivekananda Institute of Technology",
              year: "2023 - 2027",
              grade: "CGPA: 8.63"
            }
          ],
          projects: [
            {
              title: "SWASTH Medical Camp Management System",
              description: "An integrated healthcare logistics platform with patient registrations, inventory management, OCR document scanning, and voicebot reminders.",
              tech: ["React", "Tailwind CSS", "SQLite"]
            }
          ],
          achievements: [
            "Top Performance in UI Design Hackathon",
            "Gold medalist in College Frontend Coding Sprint",
            "Verified UI/UX delivery certification"
          ]
        }
      },
      {
        id: "sathvika",
        name: "Sathvika Talari",
        role: "Frontend, UI/UX, Voice bot ",
        avatar: "/Sathvika.jpeg",
        cgpa: "9.43/10",
        skills: ["Web Development", "Java", "Python", "JavaScript", "C", "HTML", "CSS", "NodeJS", "Flask", "Django", "React", "tailwind CSS", "Streamlit", "Manual Testing", "Functional Testing", "UI Testing", "Bug Tracking", "MySQL", "SQL lite", "Git", "GitHub", "VS Code", "Artificial Intelligence", "Web3", "Competitive Programming."],
        techUsed: ["React", "Zustand", "Tailwind CSS", "Framer Motion", "Recharts"],
        bio: "Detail-oriented Computer Science student with experience in developing and testing full-stack web applications. Skilled in manual testing, UI validation, and identifying functional issues across dashboards and user workflows. Familiar with Python, Flask, and modern web technologies, with a strong interest in improving software quality and user experience.",
        contributions: "Sathvika made vital contributions across frontend interface design, database schema management, AI-driven document digitizing, and automated voice systems. On the frontend, she designed and optimized core layouts including Admin Login, patient registrations (new and old), doctor listings, and inventory tracking tables. She created and refined relational tables in the database, mapping medicine formulations and integrating camp-wise cost parameters. Sathvika spearheaded extensive research and testing of document scanning pipelines using Tesseract, docTR, PyTorch, OpenCV, Qwen OCR, and Gemini models (Flash and Pro) to enable automated text extraction. Furthermore, she played a key role in integrating outbound follow-up voice bots using Exotel and Sarvam AI, including developing a specialized diabetic patient feedback database loop. Lastly, she assisted in backend FastAPI structuring, comprehensive functional testing, and deploying the system on cloud platforms like Railway.",
        dailyTasks: [
          "Engineered the layout wireframes using React functional components and Tailwind responsive layers.",
          "Wrote visual data telemetry widgets incorporating responsive graphs built on top of Recharts.",
          "Integrated Zustand state management to synchronize user choices across multiple clinical modules.",
          "Implemented semantic HTML5 anchors and keyboard-accessible modal tabs ensuring WCAG AA standard alignment.",
          "Created micro-animations using Framer Motion to make state changes feel smooth and delightful.",
          "Built high-speed WebSocket listeners updating critical hospital alert panels in real time."
        ],
        weeklyReviews: [
          { week: 1, review: "Ananya immediately established UI system foundations. Figma designs match the code perfectly.", rating: 4.7 },
          { week: 2, review: "Delivered stunning telemetry panels. The responsive layout is beautifully executed.", rating: 4.9 },
          { week: 3, review: "Integrated Zustand state management cleanly, keeping client side reactivity fast.", rating: 4.8 },
          { week: 4, review: "Excelled at WCAG AA compliance and keyboard navigation. Outstanding attention to detailing.", rating: 4.9 },
          { week: 5, review: "Fabulous project completion! The dashboard is incredibly intuitive, responsive, and visually phenomenal.", rating: 5.0 }
        ],
        resume: {
          education: [
            {
              degree: "B.E in Computer Science and Engineering",
              school: "",
              year: "2023 - 2027",
              grade: "CGPA: 9.43"
            }
          ],
          projects: [
            {
              title: "Interactive Analytics Dashboard",
              description: "A fast charting and analytics suite with customizable desktop grids and drag-and-drop widget resizing.",
              tech: ["React", "TypeScript", "Tailwind"]
            }
          ],
          achievements: [
            "Winner of Collegiate UI/UX Design Sprint",
            "Active opensource contributor to Tailwind-related libraries"
          ]
        }
      },
      {
        id: "rahul-kumar",
        name: "Rahul Kumar",
        role: "AI Engineer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "9.5/10",
        skills: ["Machine Learning", "NLP / LLMs", "Retrieval-Augmented Generation", "PyTorch", "Model Evaluation"],
        techUsed: ["Python", "PyTorch", "Hugging Face", "Pinecone", "LangChain"],
        bio: "Aspiring AI Researcher with publications in medical text classification and structured prompt optimization strategies.",
        contributions: "Rahul handled the deployment and fine-tuning of embedding models, set up retrieval databases (RAG) with vector indexing, and configured structured validation pipelines for the healthcare recommendations engine.",
        dailyTasks: [
          "Built a RAG pipeline utilizing LangChain routing models to search matching vector embeddings.",
          "Established and populated a Pinecone database cluster using cosine similarity metrics.",
          "Fine-tuned clinical summarization layers using medical NLP models hosted on Hugging Face.",
          "Designed prompt validation templates enforcing valid JSON formats for output safety.",
          "Constructed comparative accuracy benchmark graphs comparing latency vs hallucinations.",
          "Integrated Gemini API layers to dynamically generate triage action summaries."
        ],
        weeklyReviews: [
          { week: 1, review: "Excellent conceptual understanding of our RAG requirements. Pinecone setup completed ahead of schedule.", rating: 4.9 },
          { week: 2, review: "Successfully configured LangChain routing workflows. Showed robust knowledge of embeddings.", rating: 4.8 },
          { week: 3, review: "Fine-tuned medical NLP classifiers. Achieved significant benchmark gains.", rating: 4.9 },
          { week: 4, review: "Implemented prompt output validators flawlessly, reducing hallucination occurrences to near zero.", rating: 5.0 },
          { week: 5, review: "Superb research mindset! Delivered a state-of-the-art clinical agent with peerless engineering maturity.", rating: 5.0 }
        ],
        resume: {
          education: [
            {
              degree: "M.Tech in Artificial Intelligence",
              school: "Swami Vivekananda Institute of Technology",
              year: "2024 - 2026",
              grade: "CGPA: 9.5"
            }
          ],
          projects: [
            {
              title: "Clinical Abstract Summarizer",
              description: "An offline NLP pipeline that turns multi-page doctor transcriptions into structured summaries in under 3 seconds.",
              tech: ["Python", "LlamaIndex", "HuggingFace"]
            }
          ],
          achievements: [
            "Co-authored research paper accepted at AAAI-2026 Workshop",
            "Gold medalist in National Math Olympiad"
          ]
        }
      }
    ],
    mentor: {
      name: "Dr. Angela Roberts",
      designation: "Strategic Product Lead (AI Systems)",
      organization: "Alonzo AI Engineering",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80",
      comment: "Puja, Ananya, and Rahul demonstrated exemplary engineering maturity. They tackled complex clinical privacy requirements with high technical capability."
    },
    reviews: [
      {
        name: "Marcus Vance",
        company: "Vance Health Partners",
        rating: 5,
        comment: "The team delivered exceptional results with professionalism and strong technical execution.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
      }
    ]
  },
  {
    id: "natya-samhita",
    name: "Natya Samhita",
    duration: "5 Weeks",
    domain: "Classical Dance & Cultural AI",
    description: "Natya Samhita is an AI-powered platform dedicated to preserving and promoting the rich heritage of Indian classical dance. It brings together dance knowledge, learning resources, cultural insights, and community-driven discussions in one place. By combining traditional wisdom with modern technology, the platform helps students, dancers, teachers, and researchers explore, learn, and share the art of dance in an interactive and accessible way.",
    image: "/Natya Samhita.jpeg",
    tech: ["Frontend: Next.js 16.2.4 + React 19.2.4 + TypeScript",
      "Admin Portal: Next.js 16.2.6 + React 19.2.4 + TypeScript",
      "Backend: API Python FastAPI + Uvicorn",
      "AI Core: Python (standalone module)",
      "Community: Backend router + PostgreSQL"],
    contributors: [
      {
        id: "vikram-malhotra",
        name: "Vikram Malhotra",
        role: "Fullstack Engineer",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "9.0/10",
        skills: ["Web Performance", "Next.js Architecture", "WebSockets", "Timeseries Data"],
        techUsed: ["React", "FastAPI", "ClickHouse", "Zustand", "Tailwind CSS"],
        bio: "An energetic programmer specializing in financial dashboards, stream-based UI rendering, and clean visual layouts.",
        contributions: "Vikram built the timeseries canvas layer from scratch, designed optimized WebSockets subscribers for ticking data, and linked backend telemetry with modern rendering buffers.",
        dailyTasks: [
          "Designed quantitative charts leveraging high-performance HTML5 Canvas APIs.",
          "Created stock simulation ticking engines feeding React state updates via WebSockets.",
          "Optimized backend telemetry pipelines to query database metrics instantly.",
          "Engineered drag-and-drop terminal layouts backed up by custom local storage structures."
        ],
        weeklyReviews: [
          { week: 1, review: "Vikram initiated canvas rendering trials. High technical potential demonstrated.", rating: 4.8 },
          { week: 2, review: "Completed high-frequency websocket subscribers. Stock ticking updates are extremely fluid.", rating: 4.9 },
          { week: 3, review: "Wrote ScyllaDB timeseries aggregators. Outstanding performance gains on heavy queries.", rating: 4.7 },
          { week: 4, review: "Engineered responsive drag-and-drop dashboard grid customizers with solid local storage backups.", rating: 4.9 },
          { week: 5, review: "Sensational output! Created a top-tier quant dashboard matching institutional terminal layouts.", rating: 5.0 }
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Computer Science",
              school: "Stanley College of Engineering and Technology for Women",
              year: "2023 - 2027",
              grade: "CGPA: 9.0"
            }
          ],
          projects: [
            {
              title: "High Frequency Visualizer",
              description: "A React component rendering 100,000 tick updates per second using custom HTML5 Canvas overlays.",
              tech: ["Canvas API", "Web Workers"]
            }
          ],
          achievements: [
            "HackOut 2025 Best Fintech Hack award",
            "Active contributor to React charting engines"
          ]
        }
      },
      {
        id: "shreya-patel",
        name: "Shreya Patel",
        role: "Data Scientist",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "9.3/10",
        skills: ["Quantitative Finance", "Statistical Modeling", "Pandas & NumPy", "Monte Carlo Simulations"],
        techUsed: ["Python", "NumPy", "Pandas", "Scikit-Learn", "SciPy"],
        bio: "Passionate about applying probability models to asset management and high-throughput forecasting architectures.",
        contributions: "Shreya built mathematical stress models including Value-at-Risk (VaR) matrices and automated historical backtesting routines based on 10 years of stock indexes.",
        dailyTasks: [
          "Developed Value-at-Risk modeling programs using numerical methods in Pandas/NumPy.",
          "Programmed historical simulation scripts processing decades of asset datasets.",
          "Designed Monte Carlo volatility path forecasting systems in SciPy.",
          "Integrated quant reporting pipelines outputting statistical evaluation charts."
        ],
        weeklyReviews: [
          { week: 1, review: "Shreya formulated our portfolio stress mathematics. Solid academic foundation.", rating: 4.9 },
          { week: 2, review: "Completed statistical modeling components on schedule. High code clarity.", rating: 4.8 },
          { week: 3, review: "Delivered Monte Carlo simulations pipeline. Performance metrics were stellar.", rating: 4.9 },
          { week: 4, review: "Integrated automated risk reporting systems. Perfect collaboration with Vikram.", rating: 5.0 },
          { week: 5, review: "Magnificent quantitative deliverables! Her mathematical models are robust, scalable, and beautifully documented.", rating: 5.0 }
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Mathematics & Computing",
              school: "Swami Vivekananda Institute of Technology",
              year: "2023 - 2027",
              grade: "CGPA: 9.3"
            }
          ],
          projects: [
            {
              title: "Monte Carlo Portfolio Risk Modeler",
              description: "An open mathematical engine predicting potential drawdown boundaries using stochastic workflows.",
              tech: ["Python", "SciPy", "Matplotlib"]
            }
          ],
          achievements: [
            "First Prize, QuantChallenge 2025",
            "Published paper on Stock Volatility clustering inside IEEE"
          ]
        }
      },
      {
        id: "meera-reddy",
        name: "Meera Reddy",
        role: "Backend Developer",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "9.1/10",
        skills: ["Timeseries DBs", "Redis Caching", "API Resilience", "Go", "Docker"],
        techUsed: ["Go", "ClickHouse", "Redis", "Kafka", "PostgreSQL"],
        bio: "Specialist in super high-throughput database setups, event-driven logging setups, and data stream pipelines.",
        contributions: "Meera built the fast ingestion pipelines using Apache Kafka and optimized the ClickHouse store to save millions of timeseries ticks per minute.",
        dailyTasks: [
          "Configured ClickHouse distributed dataset schemas for ticking stocks.",
          "Engineered buffer queues utilizing Apache Kafka to handle tick bursts safely.",
          "Built high-speed analytical APIs delivering running data aggregates in under 15ms."
        ],
        weeklyReviews: [
          { week: 1, review: "Meera mapped our data ingestion flows perfectly. Highly focused engineering.", rating: 4.8 },
          { week: 2, review: "Delivered the Apache Kafka buffer setup early. Showed top-tier infrastructure skills.", rating: 4.9 },
          { week: 3, review: "Optimized stock data aggregation queries, slashing read times by 75%.", rating: 5.0 },
          { week: 4, review: "Integrated ScyllaDB persistence layers seamlessly.", rating: 4.8 },
          { week: 5, review: "Superb results! She delivered a production-ready timeseries server model.", rating: 5.0 }
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Computer Science & Engineering",
              school: "Stanley College of Engineering and Technology for Women",
              year: "2023 - 2027",
              grade: "CGPA: 9.1"
            }
          ],
          projects: [
            {
              title: "Log Analytics Engine",
              description: "A secure log parsing agent written in Go that outputs structured insights to timeseries layers.",
              tech: ["Go", "Kafka", "ClickHouse"]
            }
          ],
          achievements: [
            "HackIndia 2025 Infrastructure Gold Award",
            "Top contributor to open-source database connectors"
          ]
        }
      }
    ],
    mentor: {
      name: "Sanjay Chatterjee",
      designation: "VP of Quantitative Engineering",
      organization: "Alonzo AI FinTech Division",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
      comment: "Vikram, Shreya, and Meera operated as a top-tier quantitative squad. Their timeseries execution was phenomenal."
    },
    reviews: [
      {
        name: "Theressa Vance",
        company: "Apex Equity Fund",
        rating: 5,
        comment: "Outstanding technical expertise. They delivered an institutional-grade sandbox.",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80"
      }
    ]
  },
  {
    id: "chps-automation",
    name: "CA Audit Notification & Automation Management System",
    duration: "5 Weeks",
    domain: "LegalTech & Document Intelligence",
    description: "The CA Audit Notification & Automation Management System is a comprehensive role-based web application developed to streamline the management of Income Tax e-Proceedings for Chartered Accountants, tax professionals, and audit firms. The platform centralizes the handling of client assignments, proceedings, notices, responses, adjournments, document management, and compliance tracking, reducing the manual effort required to monitor multiple taxpayer accounts and ensuring timely action on important notices. The system is built around three dedicated user roles: Admin, Staff, and Professional. The Admin Dashboard provides complete control over user management, client onboarding, professional assignments, access control, workflow monitoring, and overall system administration. The Staff Dashboard enables staff members to manage assigned clients, monitor proceedings, track notices and responses, review adjournment requests, access notice orders, and oversee operational activities. The Professional Dashboard allows tax professionals to manage their assigned clients, review notices, update response statuses, track workflow progress, maintain review comments, and monitor compliance deadlines through a structured interface. A major component of the platform is its automation engine, which utilizes browser automation technology to interact directly with the Income Tax e-Filing Portal. The automation securely logs into taxpayer accounts, navigates through e-Proceedings, and automatically extracts proceedings, notices, orders, response details, adjournment details, document reference information, communication metadata, and downloadable PDF documents.",
    image: "/chps.jpeg",
    tech: ["Frontend: React.js, TypeScript, Vite, Tailwind CSS, Axios",
      "Backend: FastAPI, Python, SQLAlchemy, Pydantic",
      "Database: PostgreSQL, pgAdmin",
      "Authentication: JWT, Passlib, Role-Based Access Control (RBAC)",
      "Automation: Playwright, Browser Automation, AsyncIO",
      "API Communication: REST APIs, JSON",
      "File Management: PDF Download Automation, Dynamic PDF Renaming",
      "Version Control: GitHub",
      "Deployment & Runtime: Vercel, Uvicorn, npm"],
    contributors: [
      {
        id: "abhinav",
        name: "Abhinav Medasani",
        role: "Backend Role (Automation)",
        avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "9.1/10",
        skills: ["Python", "Java", "C", "JavaScript", "Machine Learning", "Generative AI", "LLMs", "Prompt Engineering", "NLP", "Computer Vision", "YOLOv8", "DistilBERT", "FastAPI", "Streamlit", "Pandas", "NumPy", "OpenCV", "Scikit-learn", "MERN Stack", "Chrome Extension Development", "REST APIs", "Git", "GitHub", "Google Cloud Platform", "DSA", "OOP", "Problem Solving", "Leadership", "Teamwork."],
        techUsed: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Role-Based Access Control (RBAC)", "Postgre SQL", "Automation Layer", "Playwright", "Chromium Browser Automation", "Web Scraping & Data Extraction", "Playwright Selectors"],
        bio: "Specializing in operational research, heuristics, and low-latency network graph optimization algorithms.",
        contributions: "Arjun designed the fast routing solver in Rust, mapped live vehicle nodes, and integrated real-time congestion models to optimize dispatcher decisions.",
        dailyTasks: [
          "Participated in project architecture discussions, automation workflow planning, and Income Tax portal process analysis.",
          "Researched Income Tax e-Proceedings portal navigation and notice lifecycle workflows.",
          "Designed automation flow covering login, proceedings navigation, notices, responses, and adjournment extraction.",
          "Set up Playwright automation environment and developed an initial browser automation proof of concept.",
          "Implemented automated login flow with session management for the Income Tax portal.",
          "Developed proceedings navigation automation and notice listing extraction workflows.",
          "Implemented notice data extraction and planned structured storage for notice records.",
          "Designed database relationships for proceedings, notices, responses, and adjournments.",
          "Built automation workflows for fetching detailed notice information and metadata extraction.",
          "Worked on response extraction workflows and mapped response data to database fields.",
          "Developed notice PDF download automation and file management logic.",
          "Implemented dynamic PDF naming conventions using assessee name, notice section, and issue date.",
          "Developed adjournment navigation automation and popup handling workflows.",
          "Implemented adjournment table extraction and hyperlink navigation functionality.",
          "Enhanced popup automation logic to extract detailed adjournment reasons and remarks.",
          "Designed parallel automation architecture to support multiple professionals simultaneously.",
          "Implemented client assignment-based automation execution workflows.",
          "Developed automation execution tracking for monitoring status and handling errors.",
          "Implemented notice categorization logic for 'For Your Action' and 'For Your Information' notices.",
          "Researched Exotel WhatsApp integration and communication architecture requirements.",
          "Built workflows for storing notices, responses, adjournments, and proceeding records in the database.",
          "Created professional-client assignment architecture and client retrieval workflows.",
          "Integrated extracted notice and response data with dashboard display requirements.",
          "Worked on dashboard navigation flows and notice detail redirection functionality.",
          "Prepared Smoke Testing and Data Validation Testing documentation.",
          "Implemented filtering and data organization logic for proceedings and notices.",
          "Redesigned professional dashboard workflows based on client requirements."
        ],
        weeklyReviews: [
          { week: 1, review: "Arjun analyzed fleet routing graph models. Excellent initial technical insights.", rating: 4.9 },
          { week: 2, review: "Successfully prototyped the graph routing engine in Rust. Execution speed is incredible.", rating: 5.0 },
          { week: 3, review: "Integrated Leaflet GL map coordinates. Real-time updates operate flawlessly.", rating: 4.8 },
          { week: 4, review: "Connected redis pub-sub layers for live location telemetry broadcasts.", rating: 4.9 },
          { week: 5, review: "Exceptional Rust developer! Reduced path computation times from minutes to milliseconds. Outstanding work.", rating: 5.0 }
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Computer Science",
              school: "Swami Vivekananda Institute of Technology",
              year: "2023 - 2027",
              grade: "CGPA: 9.1"
            }
          ],
          projects: [
            {
              title: "Multi-Agent Grid Pathfinder",
              description: "A visualized 2D pathfinding sandbox utilizing neural heuristic algorithms.",
              tech: ["Rust", "WASM", "Canvas"]
            }
          ],
          achievements: [
            "Best Open Source Logistics Framework (3k GitHub stars)",
            "Inter-University Programming Contest Winner"
          ]
        }
      },
      {
        id: "Puja",
        name: "Midde Puja",
        role: "Backend Developer",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "8.8/10",
        skills: ["Python", "Machine Learning", "Artificial Intelligence", "Generative AI", "FastAPI", "SQL", "MySQL", "JavaScript", "React", "HTML", "CSS", "Java", "C", "Git", "GitHub", "Jupyter Notebook", "Streamlit", "Power BI", "LangChain", "PyTorch", "Natural Language Processing (NLP)", "Data Analysis", "Data Visualization", "Web Development", "Database Management", "API Development", "Full-Stack Development", "Prompt Engineering", "Feature Engineering", "Problem Solving", "Research and Development."],
        techUsed: ["FastAPI", "Uvicorn", "SQLAlchemy", "PostgreSQL", "JWT (python-jose)"],
        bio: "Creative frontend specialist focused on data-dense maps, route visualizations, and live dispatcher interfaces.",
        contributions: "Kriti built the real-time geographic map panel, added customized vector truck icons, and visual tracking pipelines showing route delays dynamically.",
        dailyTasks: [
          "Participated in project initiation activities, repository setup, and backend directory structure planning.",
          "Set up the Python FastAPI development environment, installed dependencies, and configured environment variables.",
          "Designed database schemas for users, assignments, and notice management workflows.",
          "Initialized PostgreSQL database connectivity and configured migration frameworks.",
          "Implemented database models for User and LoginUser entities.",
          "Set up password hashing utilities using Passlib and Bcrypt for secure authentication.",
          "Developed user registration services and verification token workflows.",
          "Configured JWT authentication mechanisms and token validation helpers.",
          "Implemented user login endpoints and authentication response schemas.",
          "Created middleware for request logging and sensitive data masking.",
          "Configured CORS middleware to support frontend integration with Vite.",
          "Implemented health check and root API endpoints for service monitoring.",
          "Designed notices database models and repository service layers.",
          "Developed notice fetching workflows and scraper mock implementations.",
          "Designed background worker architecture for automated notice processing.",
          "Integrated asynchronous task management for backend automation workflows.",
          "Implemented centralized logging and exception handling mechanisms.",
          "Set up PDF notice document storage and download management workflows.",
          "Created database migrations for notices and workflow-related tables.",
          "Implemented client lookup APIs and search repository functionality.",
          "Developed admin dashboard summary services and statistical counters.",
          "Built staff dashboard APIs and recent notices listing functionality.",
          "Created professional dashboard routes for notices and client assignments.",
          "Implemented professional notice workflow status transition APIs.",
          "Designed client assignment database models and registration services."
        ],
        weeklyReviews: [
          { week: 1, review: "Kriti established our Mapbox mapping guidelines cleanly.", rating: 4.7 },
          { week: 2, review: "Delivered stunning route visualization filters. High attention to aesthetic detailing.", rating: 4.8 },
          { week: 3, review: "Integrated custom SVG vehicle tags and delays animations flawlessly.", rating: 4.9 },
          { week: 4, review: "Polished dashboard panel responsiveness on tablet dimensions.", rating: 4.9 },
          { week: 5, review: "Brilliant execution! The map dispatcher UI feels extremely premium and fast.", rating: 5.0 }
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Information Technology",
              school: "Stanley College of Engineering and Technology for Women",
              year: "2023 - 2027",
              grade: "CGPA: 8.8"
            }
          ],
          projects: [
            {
              title: "Geospatial Data Portal",
              description: "A map-based platform depicting local city parameters in high-density canvas layers.",
              tech: ["React", "Leaflet", "TurfJS"]
            }
          ],
          achievements: [
            "SVIT TechFest Design Sprint winner",
            "Contributor to open Leaflet-react adapters"
          ]
        }
      },
      {
        id: "tanusree",
        name: "Jalkam Tanusree",
        role: "Frontend Developer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "9.2/10",
        skills: ["C", "Python", "Java", "MySQL", "HTML", "CSS", "JavaScript", "Artificial Intelligence", "Machine Learning", "FastAPI", "SQL", "MySQL", "React", "Git", "GitHub", "DataScience", "Web Development", "Full Stack Development", "Data Science", "Data Analysis", "Prompt Engineering", "Database Managment", "API Development", "DSA", "Problem Solving"],
        techUsed: ["React", "Vite"],
        bio: "Focused on high-performance message routing, Redis streams telemetry, and persistent state management services.",
        contributions: "Rohan mapped out the background event loop handling locational updates and connected the live Redis pub/sub streams directly with Kriti's map.",
        dailyTasks: [
          "Participated in project setup using React, Vite, and frontend architecture planning.",
          "Configured application routing, reusable layouts, and dashboard navigation structures.",
          "Designed and implemented authentication workflows for Admin, Staff, and Professional portals.",
          "Developed login interfaces and integrated role-based dashboard redirection logic.",
          "Created Staff Dashboard layouts with sidebar navigation and dashboard table components.",
          "Implemented dashboard listings displaying Assessee, PAN, Assessment Year, Assigned Professional, Status, and Proceedings information.",
          "Developed Proceedings module navigation and integration with Notice Orders pages.",
          "Created For Your Action and For Your Information notice categorization interfaces.",
          "Designed Notice Orders pages with proceeding details and reference information display.",
          "Implemented View Submitted Response modal and response detail presentation workflows.",
          "Developed View Adjournment modal with request details and status tracking functionality.",
          "Added search capabilities across Staff Dashboard modules and notice listings.",
          "Implemented filtering options for dashboard records and notice management workflows.",
          "Developed Admin Dashboard layouts and notice management functionality.",
          "Created Admin Dashboard notice tables with proceeding tracking and action controls.",
          "Integrated Notice Orders page workflows within the Admin Dashboard.",
          "Developed PDF viewing functionality for notice documents and attachments.",
          "Implemented proceeding detail navigation and cross-page notice redirection workflows.",
          "Developed Client Management modules with user listing and professional assignment features.",
          "Implemented Transfer Professional functionality and assignment management workflows.",
          "Added Notice Control features with multi-year block and unblock capabilities.",
          "Developed Client Creation pages with form validation and professional assignment selection.",
          "Implemented Professional Dashboard layouts and notice management interfaces.",
          "Added assessment year controls, notice controls, and dashboard action handling within the Professional Portal.",
          "Integrated search and filtering functionality across Admin, Staff, and Professional dashboards."
        ],
        weeklyReviews: [
          { week: 1, review: "Rohan designed the Redis server streams base on schedule.", rating: 4.8 },
          { week: 2, review: "Delivered high-throughput coordinate ingestion APIs safely.", rating: 4.7 },
          { week: 3, review: "Successfully linked ML routing models with frontend sockets triggers.", rating: 4.9 },
          { week: 4, review: "Integrated Docker stack environments with clear compose setups.", rating: 4.8 },
          { week: 5, review: "Stellar final pass! The telemetry ingestion system maintains microsecond limits.", rating: 5.0 }
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Computer Science & Engineering",
              school: "Stanley College of Engineering and Technology for Women",
              year: "2023 - 2027",
              grade: "CGPA: 9.2"
            }
          ],
          projects: [
            {
              title: "Active WebSocket Hub",
              description: "A scalable Python channel server managing thousands of simultaneous messaging connections.",
              tech: ["FastAPI", "Redis", "Docker"]
            }
          ],
          achievements: [
            "Smart City Hackathon 2025 Runner-up",
            "Top score in regional algorithms olympiad"
          ]
        }
      }
    ],
    mentor: {
      name: "Arnaud Dubois",
      designation: "Principal Infrastructure Architect",
      organization: "Alonzo AI Logistics Systems",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
      comment: "Arjun, Kriti, and Rohan delivered an outstanding platform. Arjun's Rust engine coupled with Rohan's streams and Kriti's maps formed a perfect solution."
    },
    reviews: [
      {
        name: "Robert Miller",
        company: "SwiftLogix Inc",
        rating: 5,
        comment: "The route dispatch planner cut fuel margins by 11.2% in our real-world beta tests. Spectacular output.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
      }
    ]
  },
  {
    id: "edu-sim",
    name: "Edu-Sim",
    duration: "5 Weeks",
    domain: "Simulated Interactive Education",
    description: "EduSim is an interactive educational platform designed to make learning science and engineering concepts more engaging through real-time simulations and visualizations. It provides a virtual environment where students can experiment with concepts, manipulate parameters, and observe outcomes instantly, helping bridge the gap between theory and practical understanding. The platform combines dynamic simulations, interactive graphics, and guided learning tools to create an immersive, hands-on educational experience for both students and educators.",
    image: "/EduSim.jpeg",
    tech: ["Frontend: React.js, TypeScript, Vite, Tailwind CSS","Backend: FastAPI, Python, SQLAlchemy","Database: PostgreSQL","Authentication: JWT","AI: OpenRouter, Gemini","Simulation: Matter.js, PixiJS","Version Control: Git, GitHub","Deployment & Runtime: Uvicorn, npm"],
    contributors: [
      {
        id: "rithvik",
        name: "Papatla Rithvik",
        role: "Simulation Engineer, Database Management",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "8.0/10",
        skills: ["Full-Stack Development", "AI and ML", "Data Science & Analytics", "DBMS", "System Architecture and Design"],
        techUsed: ["Matter-js", "pixiJs", "PostgreSQL"],
        bio: "Specialist in timeseries anomaly detection, edge computing configurations, and smart infrastructure AI models.",
        contributions: "Rithvik designed and implemented EduSim's simulation runtime, educational intelligence integration, database infrastructure, and frontend-backend sandbox architecture.",
        dailyTasks: [
          "Explored improvements to the AI-generated simulation architecture for EduSim.",
          "Reviewed DSL structure and identified areas for better modularization.",
          "Refined simulation schema design for physics experiment generation.",
          "Worked on improving backend simulation validation and orchestration flow.",
          "Analyzed runtime limitations and planned a more scalable architecture.",
          "Documented simulation generation workflow and integration requirements.",
          "Researched approaches for creating reusable educational simulation components.",
          "Designed improvements for dynamic object and environment configuration.",
          "Evaluated frontend runtime requirements for rendering interactive simulations.",
          "Planned migration toward a more modular and maintainable simulation system.",
          "Reviewed project architecture and identified backend refactoring opportunities.",
          "Implemented core sandbox backend modules and runtime orchestration foundations.",
          "Finalized the transition from AI-generated simulations to a sandbox-first architecture.",
          "Designed the interactive physics sandbox workflow inspired by Scratch-style learning.",
          "Planned frontend runtime responsibilities including object creation and manipulation tools.",
          "Organized project structure to support educational intelligence and sandbox execution.",
          "Consolidated frontend architecture around a unified sandbox runtime framework.",
          "Worked on integrating sandbox modules with the main frontend application structure.",
          "Defined requirements for drag-and-drop interactions and property editing systems.",
          "Reviewed runtime synchronization and state management strategies for simulations.",
          "Planned implementation of observables and educational overlays for experiments.",
          "Continued frontend sandbox integration and cleanup of legacy runtime components.",
          "Tested project structure changes and prepared branches for collaborative development.",
          "Resolved Git workflow issues related to merging sandbox and frontend branches.",
          "Reviewed overall EduSim progress and planned the next phase of sandbox runtime development."
        ],
        weeklyReviews: [
          { week: 1, review: "Neha drafted the urban sensor schema. Highly robust statistical approach.", rating: 4.8 },
          { week: 2, review: "Delivered queue forecasting models hitting 93% accuracy limits.", rating: 4.9 },
          { week: 3, review: "Optimized inference timings by converting models to tiny TF-Lite templates.", rating: 4.8 },
          { week: 4, review: "Successfully integrated timeseries DB queries with Divya's frontend templates.", rating: 4.9 },
          { week: 5, review: "Fabulous engineering contribution! Outstanding edge AI optimizer.", rating: 5.0 }
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Computer Science and Engineering(Data Science)",
              school: "Swami Vivekananda Institute of Technology",
              year: "2023 - 2027",
              grade: "CGPA: 8.0"
            }
          ],
          projects: [
            {
              title: "Pedestrian Edge Classifier",
              description: "An offline edge computing camera controller detecting active street lanes utilizing mobile neural networks.",
              tech: ["TensorFlow Lite", "Python", "Raspberry Pi"]
            }
          ],
          achievements: [
            "Smart City Challenge 2025 Best AI Model award",
            "Published paper on edge analytics in international journals"
          ]
        }
      },
      {
        id: "mythri",
        name: "Banda Mythri Raj",
        role: "UI/UX Designer,Frontend Developer",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "8.7/10",
        skills: ["Artificial Intelligence & Machine Learning", "Data Science & Analytics", "Full-Stack Web Development", "Database Management & Backend Development", "Software Engineering & Development Tools"],
        techUsed: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "FAST API Integration", "Responsive UI Design", "User Experience Design (UX)"],
        bio: "Frontend engineer specializing in complex dashboard wireframes, fast responsive views, and dynamic sensor telemetry charts.",
        contributions: "Divya built the live traffic dashboard visual layouts, configured dynamic charts plotting signal delay metrics, and maintained perfect mobile responsiveness.",
        dailyTasks: [
          "Planned EduSim project scope, modules, and overall learning workflow.",
          "Researched EdTech platforms, AI tutors, and educational learning systems.",
          "Collected educational resources, syllabus content, and learning materials.",
          "Designed system architecture, module flow, and user journeys.",
          "Created UI wireframes and page layouts for major modules.",
          "Designed AI Tutor user experience and interaction flow.",
          "Built AI Tutor frontend interface and integrated page navigation.",
          "Integrated AI Tutor with Gemini/OpenRouter and researched prompt engineering strategies.",
          "Implemented Retrieval-Augmented Generation (RAG) using educational resources and textbook content.",
          "Improved AI explanation structure, concept extraction, and response formatting.",
          "Designed Formula Lab workflow and developed the Formula Lab user interface.",
          "Implemented formula calculation logic, visualization features, and learning workflows.",
          "Added Formula Lab practice questions, interactive learning support, and UI improvements.",
          "Designed curriculum structure with Subjects, Chapters, and Topics and organized content hierarchies.",
          "Developed curriculum pages and connected educational content to the frontend.",
          "Designed Dashboard pages, learning analytics views, and user navigation structure.",
          "Built sidebar navigation, routing system, and reusable frontend components.",
          "Improved UI/UX design, color consistency, typography, spacing, and accessibility.",
          "Added personalization concepts, settings workflows, and learning history planning.",
          "Improved responsiveness, mobile experience, page layouts, and overall usability.",
          "Fixed routing issues, navigation bugs, blank page errors, and frontend rendering problems.",
          "Designed PostgreSQL database architecture, researched persistence strategies, and simplified schema design.",
          "Created database tables, optimized relationships, and integrated PostgreSQL with the backend.",
          "Implemented authentication system including registration, login, JWT tokens, refresh tokens, and session management.",
          "Integrated database persistence for users, sessions, tutor history, settings, activity tracking, debugging, testing, and overall project stabilization.",
        ],
        weeklyReviews: [
          { week: 1, review: "Divya mapped initial system wireframes. Matches Figma tokens completely.", rating: 4.7 },
          { week: 2, review: "Delivered dynamic charts with beautiful responsive columns.", rating: 4.8 },
          { week: 3, review: "Successfully integrated Zustand hooks updating active layouts cleanly.", rating: 4.9 },
          { week: 4, review: "Optimized mobile view metrics sheets, hitting zero alignment problems.", rating: 4.9 },
          { week: 5, review: "Spectacular dashboard completed! Visually beautiful, smooth, and highly responsive.", rating: 5.0 }
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Information Technology",
              school: "Stanley College of Enginering and Technology for Women",
              year: "2023 - 2027",
              grade: "CGPA: 8.7"
            }
          ],
          projects: [
            {
              title: "Live IoT Metric Tracker",
              description: "A lightweight dashboard visualizer capturing live environmental sensor outputs in real-time.",
              tech: ["React", "Zustand", "CSS Grid"]
            }
          ],
          achievements: [
            "SVIT UI Sprint Winner",
            "Active developer of community template components"
          ]
        }
      },
      {
        id: "satish",
        name: "Thadela Satish",
        role: "Backend Developer, RAG Pipeline,",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "9.0/10",
        skills: ["Artificial Intelligence & Machine Learning", "Backend & API Development", "Data Science & Analytics", "Database Management", "Software Engineering & Development Tools", "RAG"],
        techUsed: ["Python", "JavaScript", "RAG", "LLM Evaluation", "PixiJS", "Matter.js", "SVG Rendering", "FAST API", "React"],
        bio: "Specializing in high-performance datastores, timeseries caching, and robust microservices infrastructure pipelines.",
        contributions: "Aditya programmed the FastAPI backend routes, managed the dual-database setup (InfluxDB + PostgreSQL), and built secure automated backup actions.",
        dailyTasks: [
          "Set up and explored the initial RAG pipeline architecture for the EduSim project.",
          "Worked on document embedding generation and retrieval workflow optimization for the RAG system.",
          "Improved context retrieval and response handling mechanisms in the RAG pipeline.",
          "Tested RAG-based query workflows and validated retrieval accuracy for educational content.",
          "Integrated backend APIs using FastAPI and Python to support RAG-based processing.",
          "Optimized project structure, resolved environment setup issues, and improved backend execution workflows.",
          "Explored simulation generation and rendering approaches for educational physics concepts.",
          "Worked on rendering generated DSL code into interactive functional simulations.",
          "Tested pendulum motion, projectile motion, and collision simulation workflows in the sandbox.",
          "Researched dynamic SVG generation methods for creating scalable simulation assets.",
          "Improved AI prompts for generating accurate simulation objects and educational outputs.",
          "Designed reusable and scalable simulation components for supporting multiple physics concepts.",
          "Planned dynamic rendering workflows to improve educational simulation support inside the sandbox.",
          "Continued optimization of RAG retrieval workflows and educational content response quality.",
          "Improved backend API testing, execution validation, and local development workflows.",
          "Explored image-based simulation generation workflows using Gemini AI models.",
          "Worked on optimizing AI prompts and response generation workflows for simulations.",
          "Improved Gemini simulation generation workflows and tested educational simulation outputs.",
          "Enhanced modular backend workflows and simulation integration systems for EduSim.",
          "Worked on scalable educational asset handling and simulation rendering improvements.",
          "Planned AI analytics, token tracking, and retrieval observability workflows for the platform.",
          "Improved sandbox interaction workflows and optimized educational simulation performance.",
          "Developed benchmarking and evaluation workflows for comparing AI-generated outputs.",
          "Created datasets and reporting workflows for model evaluation, scoring, and analytics tracking.",
          "Reviewed overall EduSim progress and planned upcoming RAG, simulation, and benchmarking improvements."
        ],
        weeklyReviews: [
          { week: 1, review: "Aditya designed the dual-database connection layers.", rating: 4.8 },
          { week: 2, review: "Delivered FastAPI endpoints ahead of schedule with robust verification.", rating: 4.8 },
          { week: 3, review: "Configured InfluxDB aggregation views, accelerating query routines.", rating: 4.9 },
          { week: 4, review: "Completed comprehensive unit test templates with excellent coverage.", rating: 4.7 },
          { week: 5, review: "Superb backend architecture execution! High reliability and excellent documentation.", rating: 5.0 }
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Computer Science & Engineering",
              school: "Swami Vivekananda Institute of Technology",
              year: "2022 - 2026",
              grade: "CGPA: 9.0"
            }
          ],
          projects: [
            {
              title: "Timeseries Ingestion Endpoint",
              description: "High-throughput API microservice saving thousands of sensor metrics per minute into InfluxDB.",
              tech: ["FastAPI", "InfluxDB", "Docker"]
            }
          ],
          achievements: [
            "National Web-Dev Hackathon 3rd Place",
            "Top performance in regional systems audit contest"
          ]
        }
      }
    ],
    mentor: {
      name: "Dr. Elena Rostova",
      designation: "Principal Infrastructure Lead",
      organization: "Alonzo AI Smart Infrastructure Division",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400&q=80",
      comment: "Neha, Divya, and Aditya formed a highly collaborative unit. Their smart city signal optimization dashboard is spectacular."
    },
    reviews: [
      {
        name: "Vikram Sen",
        company: "Metropolitan Traffic Control",
        rating: 5,
        comment: "Excellent technical solution. It solved signal delays inside our test intersection flawlessly.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
      }
    ]
  },
  {
    id: "sustainable-infrastructure",
    name: "Sustainable infrastructure",
    duration: "5 Weeks",
    domain: "Urban Tech & Eco Engineering",
    description: "Sustainable Infra is an intelligent LLM routing system that automatically selects the best AI model for each user query by balancing response quality and API cost. It evaluates each model response using a quality score and normalizes API cost to compute a final reward, ensuring the most cost-efficient model is preferred when quality is equal. The router supports two intelligent strategies — Thompson Sampling and LinUCB — and compares them against a baseline using cumulative regret to measure how close each strategy gets to the best possible routing decision.",
    image: "/Sustainable Infra.png",
    tech: ["Language: Python",
      "Tools: OpenRouter API, FastAPI, Streamlit, Plotly, Git, GitHub, VS Code, Jupyter Notebook",
      "Libraries: NumPy, Pandas, Matplotlib, Scikit-Learn, all-MiniLM-L6-v2, BAAI/bge-small-en-v1.5, sentence-transformers, FAISS, pytest",
      "Datasets: MS MARCO, MMLU, Router Benchmark Dataset",
      "Algorithms: Thompson Sampling (CMAB), LinUCB, Round Robin, Cosine Similarity, Sherman-Morrison, Bayesian Update",
      "Evaluation Metrics: BERTScore, BLEU, ROUGE, F1 Score, Accuracy, Latency, API Cost"],
    contributors: [
      {
        id: "shashank",
        name: "Shashank",
        role: "AI/ML Engineer",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "9.0/10",
        skills: ["Python", "HTML/CSS", "Flask", "FastAPI", "Scikit-Learn", "NumPy", "Pandas", "Matplotlib", "Git", "GitHub", "MySQL", "SQLite3", "Data Preprocessing", "EDA", "LLMs", "RAG", "Generative AI", "ML Algorithms: Logistic Regression, KNN, Decision Tree, XGBoost, Random Forest, SVM"],
        techUsed: ["Python", "XGBoost", "ScyllaDB", "Pandas", "Scikit-Learn"],
        bio: "Specializing in statistical regression models, satellite data normalization algorithms, and AgriTech predictive systems.",
        contributions: "Sneha engineered the predictive XGBoost model forecasting harvest outputs and structured the spatial normalization arrays handling climate datasets.",
        dailyTasks: [
          "Studied the project goal and understood why a single LLM is inefficient.",
          "Defined 10 query categories inspired by MMLU benchmarks.",
          "Gathered dataset covering general knowledge, math, and logical reasoning.",
          "Structured data across difficulty levels for benchmarking.",
          "Set up threshold-based evaluation logic and contributed to CLI interface.",
          "Studied BAAI/bge-small-en-v1.5 model and how it converts text into vectors.",
          "Worked on generating vector embeddings for semantic similarity matching.",
          "Integrated FastAPI for faster communication between routing components and LLM services.",
          "Developed output structures displaying query, model, cost, and token usage.",
          "Selected 2 queries from each of the 5 MS MARCO categories for evaluation.",
          "Evaluated Claude-3.5-Haiku responses and calculated BLEU, ROUGE, F1, latency, and cost.",
          "Documented findings and compared Claude results against other models in combined dataset.",
          "Implemented Bayesian memory update using precision matrix A and reward accumulator b.",
          "Built beta recomputation logic using inverse matrix A_inv to update model weights.",
          "Set up persistent state management saving beta, A, b, and A_inv per model using NumPy.",
          "Prepared workflow diagram, activity diagram, and sequence diagram for client.",
          "Reviewed client feedback on reward function, validity check, matrix inversion, and joint sampling.",
          "Studied LinUCB algorithm and understood how it balances trying new models vs sticking to known good ones.",
          "Set up the LinUCB router by loading the pre-trained model data from warm start.",
          "Implemented exploitation score to measure how well each model is expected to perform.",
          "Implemented exploration bonus to give a chance to lesser tried models.",
          "Built final LinUCB score by combining exploitation and exploration for all 4 models.",
          "Added logging to record whether each routing decision was exploration or exploitation.",
          "Integrated reward computation and updated only the winning model's memory after each query.",
          "Ran LinUCB router on all 50 test queries and saved results to a JSON file.",
          "Calculated regret for each query by comparing chosen model against the best possible model.",
          "Saved exploration vs exploitation log to CSV and checked the distribution across all queries.",
          "Generated scatter plots and spider plots comparing LinUCB performance across all 4 models.",
          "Compared LinUCB regret against Thompson Sampling and Round Robin results.",
          "Reviewed final analysis and prepared LinUCB results for client presentation."
        ],
        weeklyReviews: [
          { week: 1, review: "Sneha formulated the target Agri-model schemas beautifully.", rating: 4.8 },
          { week: 2, review: "Tuned XGBoost learning pipelines, reaching excellent accuracy levels.", rating: 4.9 },
          { week: 3, review: "Connected historical soil datasets with local persistence layers.", rating: 4.8 },
          { week: 4, review: "Collaborated with Tanvi to map crop metrics dynamically.", rating: 4.9 },
          { week: 5, review: "Sensational work! Created a peerless predictive climate model.", rating: 5.0 }
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Artificial Intelligence",
              school: "Swami Vivekananda Institute of Technology",
              year: "2022 - 2026",
              grade: "CGPA: 9.3"
            }
          ],
          projects: [
            {
              title: "Soil Moisture Estimator",
              description: "An ML model parsing local weather records to evaluate relative grid moisture levels.",
              tech: ["Python", "XGBoost", "SciPy"]
            }
          ],
          achievements: [
            "AgriHack 2025 Best ML Solution winner",
            "Top contributor to open climatology libraries"
          ]
        }
      },
      {
        id: "vaishanvi",
        name: "Sai Vaishnavi Kodali",
        role: "Frontend Developer",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "8.9/10",
        skills: ["Java", "Python", "html", "css", "js", "react", "nodejs", "SQL", "AI/ML", "GitHUB", "FastAPI", "DSA"],
        techUsed: ["React", "Tailwind CSS", "Zustand", "Leaflet GL", "TypeScript"],
        bio: "Dedicated to designing elegant map-focused visualizations, clean data tables, and highly intuitive layouts.",
        contributions: "Tanvi crafted the meteorology dashboard structure, set up interactive geographical overlays, and engineered responsive data analytics consoles.",
        dailyTasks: [
          "Studied LLM statistics and performance trends across different model types.",
          "Analyzed model behavior across different query categories.",
          "Supported benchmarking by comparing outputs across multiple models.",
          "Identified patterns in model performance to guide selection decisions.",
          "Contributed to keyword overlap evaluation system and stopword removal logic.",
          "Worked on Weighted Round Robin routing strategy for intelligent router switching.",
          "Studied dynamic model selection techniques based on performance and query handling.",
          "Explored methods for balancing performance and cost while selecting LLMs.",
          "Analyzed routing behavior using benchmark scores and contributed to adaptive router logic.",
          "Selected 2 queries from each MS MARCO category and evaluated Gemini-2.0-Flash responses.",
          "Calculated BLEU, ROUGE, F1, latency, and cost for Gemini and stored in separate CSV.",
          "Coordinated merging of all three members CSV outputs into one combined benchmark dataset.",
          "Implemented evaluation module computing response validity V and financial cost C.",
          "Calculated latency T per query from input and output token pricing.",
          "Integrated dataset loader for ground truth lookup and JSON-based result persistence.",
          "Built Streamlit dashboard with Plotly charts for model selection and category distribution.",
          "Reviewed client feedback and noted changes to validity check and reward function logic.",
          "Set up the warm start pipeline and prepared 200 training queries from MS MARCO dataset.",
          "Started running all 4 models on training queries and collecting responses via OpenRouter API.",
          "Computed BERTScore, cost, latency, and reward for each model response during training.",
          "Updated all 4 models memory on every query so each model learns from the training data.",
          "Completed all 800 API calls (200 queries x 4 models) and saved results to CSV.",
          "Froze the trained model memory and made separate copies for Thompson Sampling, LinUCB, and Oracle.",
          "Set up the oracle by running all 4 models on the same 50 test queries to find the best possible answer for each.",
          "Completed oracle runs and saved full metrics for all 4 models to oracle_results.csv.",
          "Computed the best possible score per query by taking the highest quality and lowest cost model.",
          "Set up Round Robin baseline which rotates through all 4 models in fixed order with no learning.",
          "Looked up BERTScore and cost from oracle results for each Round Robin model assignment.",
          "Saved Round Robin results to CSV and calculated its cumulative regret.",
          "Generated correlation heatmap and output analysis charts for the final report."
        ],
        weeklyReviews: [
          { week: 1, review: "Tanvi created the primary page layout wireframe on schedule.", rating: 4.7 },
          { week: 2, review: "Configured Leaflet GIS coordinates layer flawlessly.", rating: 4.8 },
          { week: 3, review: "Successfully optimized metric loading indicators.", rating: 4.9 },
          { week: 4, review: "Polished dashboard aesthetics across multiple devices.", rating: 4.9 },
          { week: 5, review: "Fabulous project completion! The predictive UI is incredibly fast and stunning.", rating: 5.0 }
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Computer Science",
              school: "Stanley College of Engineering and Technology for Women",
              year: "2023-2027",
              grade: "CGPA: 8.9"
            }
          ],
          projects: [
            {
              title: "GIS Location Mapper",
              description: "A fast map-based React overlay showcasing regional water indexes inside city graphs.",
              tech: ["React", "Leaflet", "TypeScript"]
            }
          ],
          achievements: [
            "Best UI Award, regional AgriHack 2025",
            "Active helper in community visual utilities"
          ]
        }
      },
      {
        id: "Dhanvi",
        name: "Dhanvi Annam",
        role: "Cloud Engineer",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "9.1/10",
        skills: ["Python", "Java", "AI/ML", "GenAI", "LLMs", "RAG", "FastAPI", "SQL", "GitHub"],
        techUsed: ["FastAPI", "ScyllaDB", "Docker", "AWS API", "Python"],
        bio: "Specializing in Docker deployment layers, ScyllaDB cluster configurations, and scalable cloud APIs.",
        contributions: "Priya managed the Docker compose layouts, optimized ScyllaDB to store seasonal agricultural logs, and built the FastAPI backend routes.",
        dailyTasks: [
          "Researched and selected 10 different LLM models for experimentation.",
          "Checked benchmarks and aligned them with defined categories.",
          "Set up multi-model execution to send queries to all models.",
          "Collected and organized responses from different models.",
          "Compared initial responses across models to find performance differences.",
          "Implemented all-MiniLM-L6-v2 embedding model for query understanding.",
          "Studied conversion of text prompts into dense vector embeddings.",
          "Explored cosine similarity to measure closeness between queries.",
          "Integrated FastAPI to improve API response speed between modules.",
          "Loaded MS MARCO dataset and extracted queries from 5 categories.",
          "Evaluated GPT-4.o responses and calculated BLEU, ROUGE, F1, latency, and cost.",
          "Stored results in CSV and assisted in merging all outputs into one benchmark dataset.",
          "Implemented query embedding using all-MiniLM-L6-v2 to generate 384-dimensional vectors.",
          "Built Linear Thompson Sampling model selection using full covariance matrix.",
          "Implemented API dispatch via OpenRouter with latency measurement and token extraction.",
          "Reviewed client feedback and noted changes needed for reward function and validity check.",
          "Tested end-to-end pipeline and verified routing decisions across all 5 models.",
          "Studied Thompson Sampling approach and understood how it selects the best model for each query.",
          "Set up the Thompson Sampling router by loading the pre-trained model data from warm start.",
          "Implemented score computation for each model using Thompson Sampling logic.",
          "Built winner selection logic to pick the highest scoring model for each query.",
          "Sent the query to the winning model via OpenRouter API and collected the response.",
          "Computed BERTScore, cost, latency, and final reward for each model response.",
          "Updated only the winning model's memory after each query using Sherman-Morrison formula.",
          "Ran Thompson Sampling router on all 50 test queries and collected routing results.",
          "Calculated how far each routing decision was from the best possible choice (regret).",
          "Saved all routing results to a JSON file and verified the output structure.",
          "Generated regret plots, box plots, and violin plots to visualize Thompson Sampling performance.",
          "Compared Thompson Sampling performance against the Round Robin baseline.",
          "Reviewed final analysis and prepared Thompson Sampling results for client presentation."
        ],
        weeklyReviews: [
          { week: 1, review: "Priya set up our baseline cloud databases cleanly.", rating: 4.8 },
          { week: 2, review: "Delivered predictive API handlers on schedule.", rating: 4.7 },
          { week: 3, review: "Configured ScyllaDB indexing, dropping query timings by 60%.", rating: 4.9 },
          { week: 4, review: "Hardened API security structures and refined data schemas.", rating: 4.8 },
          { week: 5, review: "Exceptional cloud engineering! Built a bulletproof infrastructure layer.", rating: 5.0 }
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Information Technology",
              school: "Stanley College of Engineering and Technology for Women",
              year: "2023 - 2027",
              grade: "CGPA: 9.1"
            }
          ],
          projects: [
            {
              title: "Timeseries Climatology Server",
              description: "A high-performance FastAPI service saving thousands of local moisture logs.",
              tech: ["FastAPI", "ScyllaDB", "Docker"]
            }
          ],
          achievements: [
            "AWS Certified Solutions Architect",
            "Regional Linux competition winner"
          ]
        }
      }
    ],
    mentor: {
      name: "Dr. Angela Roberts",
      designation: "Strategic Product Lead",
      organization: "Alonzo AI Agritech Solutions",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80",
      comment: "Sneha, Tanvi, and Priya demonstrated peerless technical capability. Their Met-AI prediction server is institutional grade."
    },
    reviews: [
      {
        name: "Marcus Vance",
        company: "GreenFields Corporation",
        rating: 5,
        comment: "Outstanding results. The agricultural predictor helped optimize our regional seasonal seeds distribution.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
      }
    ]
  }
];

export const statisticsData = [
  { label: "Number of Interns", value: 15, suffix: "" },
  { label: "Projects Completed", value: 5, suffix: "" },
  { label: "Industry Mentors", value: 5, suffix: "" },
  { label: "Partner Satisfaction", value: 99.1, suffix: "%" }
];
