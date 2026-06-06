import { Project } from "./types";

export const projectsData: Project[] = [
  {
    id: "medical-camp-management",
    name: "CCC Medical Camp Management System",
    duration: "5 Weeks",
    domain: "Healthcare Tech & Operations",
    description: "This project focuses on enhancing an existing static web-based medical camp system by adding missing functionalities, fixing existing issues, and integrating intelligent automation features. The system supports full-lifecycle patient registration and vastly improves medical inventory management by introducing advanced Vision AI (OCR) models. This OCR integration allows clinical staff to instantly digitize complex, handwritten medicine stock sheets by simply snapping a photo, eliminating manual data entry errors. Additionally, an automated, regional-language voice bot is deeply integrated into the backend to handle patient follow-ups. The AI autonomously dials patients to provide medication reminders, check health statuses, and schedule revisits, instantly syncing their responses back into the database. Ultimately, the overall goal is to transform semi-manual, paper-heavy workflows into a reliable, structured, and fully automated digital healthcare system.",
    image: "/ProjectLogo.jpeg",
    tech: [
      "Frontend: React, Javascript, Tailwind CSS, React Router DOM, Axios, Chart.js, Lucide React",
      "Backend: Python, Django, Django REST framework, django-cors-headers",
      "Database: SQLite3",
      "AI & Multimodal Models: Google Gemini 3.1 Flash-Lite (OCR & Voicebot Classification)",
      "Voice & Speech AI: Sarvam AI",
      "Image Processing & Computer Vision: OpenCV, Pillow",
      "Telephony & Tunneling: Exotel, Ngrok"
    ],
    contributors: [
      {
        id: "Pavithra",
        name: "Y.Pavithra Philomena",
        role: "Frontend, UI/UX, Voice bot ",
        avatar: "/Pavithra.jpeg",
        github: "https://github.com/pavithraphilo-ops",
        linkedin: "linkedin.com/in/pavithra-philomena-3ba501364",
        resumePdf: "/Pavithra_Resume.pdf",
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
          { week: 1, review: "Understood the project structure well and contributed effectively to frontend development and documentation activities. Collaborated efficiently with the team and researched OCR models and frontend usability enhancements." },
          { week: 2, review: "Improved project contribution and ownership compared to Week 1, delivering UI and reporting enhancements on schedule. Contributed to dashboard improvements and actively researched OCR tools and analytics features." },
          { week: 3, review: "Contributed to OCR latency optimization and frontend analytics visualization improvements. Supported OCR testing, UI integration, documentation, and reporting enhancements effectively." },
          { week: 4, review: " Supported Voice Bot workflow implementation, user interface improvements, and final testing activities. Contributed to reporting, documentation, and usability refinements during project completion." },
          { week: 5, review: "" }
        ],
        skillsLearntInInternship: [
          "Prompt Engineering",
          "Full Stack Web Development",
          "HTML, CSS, Tailwind CSS",
          "Database: SQLite",
          "Frameworks: React, Django",
          "Tools: Git, GitHub",
          "OCR models (how handwritten text gets extracted into digital form)",
          "Voice bot (Exotel and Sarvam AI integration)",
          "IDE tools like Antigravity"
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Artificial Intelligence and Data Science",
              school: "Swami Vivekananda Institute of Technology",
              year: "2023 - 2027",
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
        github: "https://github.com/SathvikaTalari",
        linkedin: "www.linkedin.com/in/sathvika-talari-033093308",
        resumePdf: "/SathvikaTalari_Resume.pdf",
        techUsed: ["React", "Zustand", "Tailwind CSS", "Framer Motion", "Recharts"],
        bio: "Detail-oriented Computer Science student with experience in developing and testing full-stack web applications. Skilled in manual testing, UI validation, and identifying functional issues across dashboards and user workflows. Familiar with Python, Flask, and modern web technologies, with a strong interest in improving software quality and user experience.",
        contributions: "Sathvika made vital contributions across frontend interface design, database schema management, AI-driven document digitizing, and automated voice systems. On the frontend, she designed and optimized core layouts including Admin Login, patient registrations (new and old), doctor listings, and inventory tracking tables. She created and refined relational tables in the database, mapping medicine formulations and integrating camp-wise cost parameters. Sathvika spearheaded extensive research and testing of document scanning pipelines using Tesseract, docTR, PyTorch, OpenCV, Qwen OCR, and Gemini models (Flash and Pro) to enable automated text extraction. Furthermore, she played a key role in integrating outbound follow-up voice bots using Exotel and Sarvam AI, including developing a specialized diabetic patient feedback database loop. Lastly, she assisted in backend FastAPI structuring, comprehensive functional testing, and deploying the system on cloud platforms like Railway.",
        dailyTasks: [
          "Patient Registration",
          "Admin Page Login UI, Frontend Working",
          "Created database tables with data",
          "Issue Medicines section and Existing User & New Patient Registration",
          "Camp Patient Registration Sectiona and camp selection dropdown",
          "added Old Patients option in dashboard and Registration form",
          "Did testing on scanning mechanism and tried scanning using pytorch",
          "Reasearch on Scanning Methods using docTR, Pytorch and OpenCV",
          "UI changes and Optimizing the Scanning method",
          "Created Readme and Requirements files - system configuration and project structure",
          "Updated the Database table of doctor details",
          "Updated Old Patients section and Added Edit button for Medicines",
          "Worked on doctor report section, UI enhancement of inventory section and Research on Voice Bot",
          "Worked with Gemini Flash 1.5 and Gemini Pro 2.5 for Scanning",
          "Did research on voice bot throughgithub projects, Implemented testing and found bugs",
          "In patient profile section Issue medicines removed days UI, added total number of tests card in camp reports, enhanced the UI of Edit and delete button, fixed auto filling of Dr. ID and Dr. Name",
          "Fixed UI functionality bugs, Arranged the UI of Patient registration section (Old patient registration and new patient registration) properly, Researched on diffrent voice bot approaches",
          "Enhanced Proper UI of Inventory Section, checked the edge cases of each feature of the application, searched different voice bot approaches",
          "Added Medicines with formulation in Inventory section and Data Entry",
          "Researched on voice bot - Exotel and Sarvam AI, replaced the old medicine data with the new medicine data and integrated with the db",
          "Did Data entry of Patients, Researched on voice bot using Sarvam AI and worked on Deployment methods of Application",
          "Did data Entry of Patients, Researched on Voice Bot, Researched on various deployment Platforms like AWS, MongoDB, Render, Railway etc.",
          "Implemented Testing for Application Features, Tested on Deploying the Application using Railway deploying service",
          "Implemented Overall Functional Testing and Data Testing of all the features in the Application and worked on voice bot for Diabetic Patients"
        ],
        weeklyReviews: [
          { week: 1, review: "adapted quickly and delivered frontend modules consistently. Contributed to frontend enhancements, bug fixes, and researched OCR and authentication-related technologies." },
          { week: 2, review: "Showed noticeable improvement in technical understanding and execution, particularly in frontend visualization tasks. Contributed to registration workflow improvements, bug fixing, and research on OCR and Voice Bot technologies." },
          { week: 3, review: "Identified and analyzed OCR latency issues while contributing to frontend enhancements and testing activities. Explored Voice Bot and authentication concepts and actively participated in implementation discussions." },
          { week: 4, review: "Assisted in Voice Bot integration, frontend workflow enhancements, and system validation. Maintained consistent contribution through testing, research, and implementation support." },
          { week: 5, review: "" }
        ],
        skillsLearntInInternship: [
          "Full stack web development using Frontend React, Vite and Backend Django and Database SQL lite",
          "Version Control tools like Git and Github",
          "Text Extraction from Image using OCR method",
          "Voice Bot Integration using Exotel and Sarvam AI",
          "IDE tools like Antigravity"
        ],
        resume: {
          education: [
            {
              degree: "B.E in Computer Science and Engineering",
              school: "Stanley College of Engineering and Technology",
              year: "2023 - 2027",
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
        id: "Neeraj",
        name: "Neeraj Gangavarapu",
        role: "Backend Developer , OCR Integration , VoiceBot",
        avatar: "",
        github: "https://github.com/NEERAJGANGAVARAPU",
        linkedin: "https://www.linkedin.com/in/neeraj-gangavarapu-b59379274/",
        resumePdf: "/Neeraj_Resume.pdf",
        techUsed: ["Python", "Django", "React", "SQLite", "Exotel", "Sarvam AI", "EasyOCR", "GLM OCR", "Git", "GitHub"],
        bio: "AI & ML undergraduate student seeking opportunities to apply my technical skills in software development and data-driven problem solving. Motivated to contribute to innovative projects while continuously enhancing my expertise in full-stack development and emerging technologies. Possess foundational knowledge in web development and machine learning, with hands-on experience through academic projects.",
        contributions: "Neeraj made substantial contributions to the backend architecture, database integration, OCR text-extraction pipelines, and automated telephonic systems. He designed the SQLite database schema, mapping relationships for patient vitals, camp-wise medicine inventory, doctor consultation registries, and automated follow-up responses. Neeraj successfully implemented OCR scanning mechanisms using GLM and EasyOCR to automatically capture and parse patient files. In addition, he integrated the application's core telephony notification features, developing both inbound and outbound voice reminders using Exotel and Sarvam AI TTS (Text-to-Speech), complete with interactive follow-up response loops for test-issued patients.",
        dailyTasks: [
          "Admin Login",
          "Admin Login Table and conversion to React",
          "Total stock entry page and tables in db",
          "multiple-camp-wise-stock, re-adding the left over stock",
          "Test Isuue table and checkboxes and alert symbol",
          "Role based Accesing , add new medicine feature and edit patient feature , medicine details tab",
          "tried chandra ocr , easy ocr and glm ocr and glm ocr is working",
          "Mapped the lab tests and connectd with database for doctor's list and adding new doctors and registering and doctor-wise patients",
          "did databases changes and uploading from folder feature",
          "Camp Report section is created which has total camp summary and download option for the camp report",
          "Added edit feature for patient vitals in Patient Profile section",
          "Reviewed and Checked the Tables in Database",
          "Role based access credentials, created manualpatiententry table in database, Connected medicine number and name with database",
          "Implemented Campwise Total Cost summation in Camp reports and database linking foe Old patients and New patients registration",
          "Fixed bug in total stock entry page for unit cost, Researched on voice bot approaches with rule based technique",
          "Fixed bug on medical fulfillment quantity, added returned stock and available stock coloumns, quantity updation issue, Non registered patients should logging isuue, created alternative coloumn in campwise stock table",
          "Fixed bug of alternate name feature for medicines, modified camp date in old patient registration, Updated role based access, did some database changes",
          "Integration of Doctor Consultation and Doctor List with database, created Test Issue Tracker page, Medical Details page connected with backend and database",
          "Added Feature of Log Patient Vitals without Patient Registration, Adding Old Patients Registration through OCR and Data Entry of Patient Registration details",
          "Replaced the old and new medicine data, Implemented Category wise medicine classification, mapped medicine details with Medicine ID and Medicine Formulation, added an dialogue box which show the newly added medicines and the already existed medicines",
          "Implmplemented TTS using Sarvam AI for voicebot, Integrated Voice Bot with Exotel and Sarvam AI",
          "Created Category Management Feature for Medicine Stock, Tested integration of Voice Bot with Exotel and tested inbound call to the exotel test number and extraction of Camp Remainder Audio from URL",
          "Implemented outbound call for patients for camp remainder and tweaked pronounciation and pace of speech, tested with multiple numbers and Audio generation is accurately being done and Downloaded by exotel",
          "created an test issued patients follow up voicebot which it asks the questions for the particular patients for whom the tests are issued and stores the responses from the user"
        ],
        weeklyReviews: [
          { week: 1, review: " Quickly adapted to the project requirements and technology stack, successfully completing backend integration and database connectivity tasks. Demonstrated strong ownership and collaboration by supporting frontend integration and exploring backend workflow improvements." },
          { week: 2, review: "Demonstrated significant improvement in technical execution and ownership while successfully delivering backend workflows and integrations. Played a key role in inventory and reporting modules while contributing automation and scalability enhancements." },
          { week: 3, review: " Successfully implemented OCR model integration and backend enhancements with strong analytical and problem-solving capabilities. Took ownership of system integration, workflow mapping, and automation improvements across the application." },
          { week: 4, review: "Contributed significantly to Voice Bot integration for reminder calls and test verification workflows. Assisted in backend communication workflows, integration testing, and final system optimization." },
          { week: 5, review: "" }
        ],
        skillsLearntInInternship: [
          "Full Stack Web Development using React frontend, Django backend, and SQLite database",
          "Database Schema Design, Relationship Mapping, and Query Optimization",
          "Advanced Document Digitization using Computer Vision & OCR Models (Chandra OCR, EasyOCR, GLM OCR)",
          "Telephony and Voice AI Integration (Inbound/Outbound automated follow-up voice bots using Exotel and Sarvam AI TTS)",
          "Version Control and Collaboration tools like Git and GitHub",
          "Modern Development & IDE Environments like Antigravity"
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Artificial Intelligence & Machine Learning",
              school: "Swami Vivekananda Institute of Technology",
              year: "2022 - 2026",
            }
          ],
          projects: [
            {
              title: "Medical Camp Management System (Swasth)",
              description: "An integrated healthcare logistics platform with patient registrations, inventory management, OCR document scanning, and voicebot reminders.",
              tech: ["React", "Django", "SQLite", "Exotel", "Sarvam AI"]
            }
          ],
          achievements: [
            "Integrated Exotel and Sarvam AI voice reminders for outpatient compliance tracking.",
            "Optimized medical text extraction pipelines utilizing GLM and docTR OCR models."
          ]
        }
      }
    ],
    mentor: {
      name: "Mr.Suman",
      designation: "",
      organization: "Alonzo AI Engineering",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80",
      comment: "Pavithra, Sathvika, and Neeraj demonstrated exemplary engineering maturity. They tackled complex clinical requirements with high technical capability."
    },
    reviews: [
      {
        week: 1,
        name: "Marcus Vance",
        company: "Vance Health Partners",
        comment: "I really liked the Old Patient Registration functionality, Inventory Medicine Details module, and role-based dashboard access. The workflow feels much simpler now, and the role-specific navigation makes the system easier to use."
      },
      {
        week: 2,
        name: "Marcus Vance",
        company: "Vance Health Partners",
        comment: "I am very satisfied with the Inventory Management, Camp Reports, Log Vitals, Patient Profile Editing, and Doctor Management features. The suggested improvements for patient registration, medicine access, inventory handling, and cost calculations have made the system more practical and efficient."
      },
      {
        week: 3,
        name: "Marcus Vance",
        company: "Vance Health Partners",
        comment: "I really liked the OCR integration and the overall UI improvements, as they made the application more user-friendly and efficient. The enhancements to access control, duplicate prevention, and Test Details organization have improved the overall workflow."
      },
      {
        week: 4,
        name: "Marcus Vance",
        company: "Vance Health Partners",
        comment: "I am very happy with the final application and the way all requested improvements were incorporated. The OCR enhancements, workflow optimizations, access controls, and Voice Bot integration have made the system reliable and well-suited for our medical camp operations."
      },
      {
        week: 5,
        name: "Marcus Vance",
        company: "Vance Health Partners",
        comment: ""
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
        id: "Sirisilla Shivani",
        name: "Sirisilla Shivani",
        role: "Full-Stack Developer & UI/UX Lead",
        github: "https://github.com/Shivani2524",
        linkedin: "https://www.linkedin.com/in/shivani-sirisilla-67034929b/",
        resumePdf: "/Shivani_Resume.pdf",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
        techUsed: ["React", "Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "Supabase", "PostgreSQL", "TensorFlow", "OpenCV"],
        bio: "CSE student specializing in AI/ML and full-stack development. Proven track record building production-grade RAG systems,AI-native hackathon projects, and scalable web applications across multiple internships. Experienced in computer visionpipelines for cultural preservation and intelligent developer tooling.",
        contributions: "Designed and developed the complete frontend application using Next.js and React. Created the platform's visual identity using Sacred Glassmorphism and manuscript-inspired UI design. Built reusable components, search interfaces, shloka viewing pages, and responsive layouts. Implemented Devanagari-to-IAST transliteration and script-switching functionality. Integrated frontend with backend APIs, SSE streaming, and PDF export features. Optimized application performance, accessibility, and cross-device compatibility. Led UI testing, bug fixing, and user experience enhancements.",
        dailyTasks: [
          "Analyzed user requirements and application goals",
          "Created wireframes and user journey flows",
          "Designed high-fidelity UI mockups",
          "Set up Next.js frontend architecture",
          "Configured Tailwind CSS and design system",
          "Developed landing page and homepage layouts",
          "Built reusable UI components",
          "Created dashboard and navigation interfaces",
          "Developed responsive layouts for multiple devices",
          "Implemented frontend page structures",
          "Designed and developed chat interfaces",
          "Integrated frontend with backend APIs",
          "Enhanced user interactions and chat experience",
          "Implemented loading states and feedback indicators",
          "Developed real-time streaming chat UI",
          "Optimized mobile responsiveness",
          "Built citation and reference display components",
          "Developed Sanskrit shloka display sections",
          "Implemented Devanagari-to-IAST transliteration features",
          "Applied Sacred Glassmorphism design and branding",
          "Added animations and interactive effects",
          "Optimized frontend performance",
          "Resolved UI bottlenecks and rendering issues",
          "Developed authentication and login screens",
          "Built profile and user management interfaces",
          "Designed and implemented community discussion modules"
        ],
        weeklyReviews: [
          { week: 1, review: "Shivani Contributed effectively in researching OCR, embeddings, and document extraction workflows while supporting frontend improvements. Proactively learned new technologies and contributed well during presentations and coordination tasks." },
          { week: 2, review: "Shivani Enhanced the frontend experience significantly through improved UI/UX, animations, authentication flows, and reusable components. Coordinated effectively with the team and contributed to improving the overall product presentation and visual quality." },
          { week: 3, review: "Shivani Contributed strongly to frontend stability, authentication upgrades, and UI improvements during the migration phase. Work on visual consistency and user experience enhancements significantly improved overall product quality." },
          { week: 4, review: "" },
          { week: 5, review: "" }
        ],
        skillsLearntInInternship: [
          "frontend development", "UI/UX designing", "animation and visual effect", "AI model integration", "deployment"
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Computer Science",
              school: "Swami Vivekananda Institute of Technology",
              year: "2023 - 2027",
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
        id: "Keerthana",
        name: "A. Keerthana",
        role: "AI Feature Engineer & Full-Stack Developer",
        github: "https://github.com/keerthanareddyyy",
        linkedin: "https://www.linkedin.com/in/a-keerthana-reddy-b4107835a/",
        resumePdf: "/Keerthana_Resume.pdf",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80",
        techUsed: ["Python", "NumPy", "Pandas", "Scikit-Learn", "SciPy"],
        bio: "Aspiring IT student with hands-on experience in frontend development, AI/LLM integration, and software development, seeking to apply technical skills and grow in a challenging tech environment.",
        contributions: "Developed and integrated AI-powered platform features. Engineered prompt workflows and optimized LLM response quality. Assisted in embedding generation, retrieval evaluation, and AI testing. Implemented role-based access control (RBAC) and authentication workflows. Developed community discussion and user interaction modules. Enhanced Sanskrit-aware AI responses and language support features. Conducted AI validation, edge-case testing, and feature optimization.",
        dailyTasks: [
          "Analyzed AI requirements and feature scope",
          "Planned AI integration workflows",
          "Set up AI development environment",
          "Designed AI module architecture",
          "Researched prompt engineering techniques",
          "Created initial prompt templates",
          "Designed AI testing scenarios",
          "Collected and organized Sanskrit datasets",
          "Preprocessed documents and content",
          "Generated embeddings and indexing data",
          "Assisted in vector search integration",
          "Evaluated retrieval quality and relevance",
          "Optimized prompts and response generation",
          "Improved LLM output quality",
          "Validated AI-generated responses",
          "Refined prompt workflows and execution logic",
          "Analyzed retrieval and generation performance",
          "Implemented Sanskrit-aware AI responses",
          "Enhanced transliteration and language support",
          "Tested AI feature integrations",
          "Optimized AI workflows and prompt execution",
          "Designed Role-Based Access Control (RBAC) architecture",
          "Implemented RBAC functionality",
          "Tested authentication and authorization workflows",
          "Validated user permissions and access control",
          "Developed community interaction features"
        ],
        weeklyReviews: [
          { week: 1, review: "Keerthana Worked consistently on OCR workflows, parsing tools, and automation scripts. Showed strong interest in exploring new AI tools and research areas beyond assigned responsibilities." },
          { week: 2, review: "Keerthana Handled frontend usability improvements, streaming chat integration, and dashboard-related tasks effectively. Demonstrated strong learning ability while working on state management, integrations, and Sanskrit content workflows." },
          { week: 3, review: "Keerthana Contributed effectively to AI response improvements, frontend refactoring, dashboard modernization, and prompt engineering tasks. Demonstrated strong ownership in improving usability, maintainability, and frontend consistency across the platform." },
          { week: 4, review: "" },
          { week: 5, review: "" }
        ],
        skillsLearntInInternship: [
          "Backend Development", "Real-Time Response Streaming", "Performance Optimization", "deployment"
        ],
        resume: {
          education: [
            {
              degree: "B.E in Information Technology",
              school: "Stanley College of Engineering and Technology for Women",
              year: "2023 - 2027",
            }
          ],
          projects: [
            {
              title: "AI-Powered Cultural Search Engine",
              description: "An intelligent search interface parsing classical manuscripts using semantic embeddings and custom prompts.",
              tech: ["Python", "FastAPI", "React", "Next.js"]
            }
          ],
          achievements: [
            "Successfully integrated Role-Based Access Control (RBAC) schemas on PostgreSQL",
            "Engineered high-accuracy prompt workflows for cultural text transliteration"
          ]
        }
      },
      {
        id: "umesh",
        name: "Bitla Umesh Kumar",
        role: "Chief Architect & Backend/DevOps Lead",
        github: "https://github.com/BitlaUmesh",
        linkedin: "https://www.linkedin.com/in/bitla-umesh-kumar-272b2b344/",
        resumePdf: "/Umesh Resume.pdf",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80",
        techUsed: ["Go", "ClickHouse", "Redis", "Kafka", "PostgreSQL"],
        bio: "CSE student specializing in AI/ML and full-stack development. Proven track record building production-grade RAG systems, AI-native hackathon projects, and scalable web applications across multiple internships. Founder of SVIT’s LEGION Club.",
        contributions: "Designed the complete system architecture and backend workflow. Developed and optimized FastAPI backend services. Built the RAG pipeline, document indexing, and retrieval infrastructure. Integrated vector databases and semantic search capabilities. Implemented caching, security middleware, and performance optimizations. Managed Dockerization, deployment workflows, and production infrastructure. Established testing frameworks and backend quality assurance processes.",
        dailyTasks: [
          "Gathered project requirements and defined system objectives",
          "Designed overall system architecture and workflow",
          "Established repository structure and development practices",
          "Initialized FastAPI backend environment",
          "Configured backend services and database connections",
          "Designed API architecture and endpoint structure",
          "Created database schema and entity relationships",
          "Integrated PostgreSQL and Supabase",
          "Developed backend models and service layers",
          "Implemented CRUD operations and core APIs",
          "Configured pgvector and vector search infrastructure",
          "Developed semantic retrieval pipelines",
          "Implemented RAG architecture and indexing workflows",
          "Integrated LLM services with backend APIs",
          "Conducted backend integration testing",
          "Optimized API performance and response times",
          "Implemented reranking and search optimization",
          "Developed Sanskrit content APIs",
          "Built transliteration support services",
          "Designed caching architecture",
          "Implemented Redis/Upstash caching",
          "Added security middleware and request validation",
          "Optimized database queries and indexing",
          "Implemented authentication services",
          "Developed role and permission management APIs",
          "Built backend services for community modules"
        ],
        weeklyReviews: [
          { week: 1, review: "Umesh quickly understood the RAG requirements and built the base pipeline properly with strong backend integration support. Demonstrated good ownership in backend tasks while independently exploring privacy-first approaches and integrations." },
          { week: 2, review: "Umesh Contributed strongly to backend architecture, caching, authentication, and retrieval optimization with stable implementations. Took solid ownership of the backend system while proactively improving performance and prompt engineering quality." },
          { week: 3, review: "Umesh Delivered excellent contributions in AI optimization, caching, deployment improvements, and backend scalability. Played an important role in improving platform speed, response quality, and overall production readiness." },
          { week: 4, review: "" },
          { week: 5, review: "" }
        ],
        skillsLearntInInternship: [
          "Vector Database Management", "Semantic Search Implementation", "Docker Containerization", "Deployment & Server Management"
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Computer Science & Engineering",
              school: "Swami Vivekananda Institute of Technology",
              year: "2023 - 2027",
            }
          ],
          projects: [
            {
              title: "Scalable RAG Classical Literature Backend",
              description: "An enterprise FastAPI microservice managing semantic search, vector indexing with pgvector, and Upstash caching.",
              tech: ["FastAPI", "PostgreSQL", "pgvector", "Redis", "Docker"]
            }
          ],
          achievements: [
            "Founder of SVIT's LEGION Club developer community",
            "Optimized API latency by 60% using distributed Redis caching pipelines"
          ]
        }
      }
    ],
    mentor: {
      name: "Mr.Zaheer",
      designation: "",
      organization: "Alonzo AI FinTech Division",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
      comment: "Vikram, Shreya, and Meera operated as a top-tier quantitative squad. Their timeseries execution was phenomenal."
    },
    reviews: [
      {
        week: 1,
        name: "Theressa Vance",
        company: "Apex Equity Fund",
        comment: "I was happy to see the team set up a system to fetch answers directly from the Natya Shastra text. The UI looked much better with the new fonts and colors, and I liked that users can now ask follow-up questions naturally. The addition of original Sanskrit shlokas in the responses was a great touch."
      },
      {
        week: 2,
        name: "Theressa Vance",
        company: "Apex Equity Fund",
        comment: "I reviewed and was satisfied with the features shown — chat, login, shloka retrieval, bookmarks, and PDF export all looked good. I suggested adding a Sanskrit glossary and translations to make it more accessible. I also shared my vision for a full UI redesign with traditional fonts, richer colors, and a dedicated Natya Samhita logo."
      },
      {
        week: 3,
        name: "Theressa Vance",
        company: "Apex Equity Fund",
        comment: "I was happy with how the system selects the best responses based on quality and cost. The team showed me detailed charts comparing performance, which gave me a clear picture of how the platform is doing. I look forward to seeing further improvements in accuracy and reliability."
      },
      {
        week: 4,
        name: "Theressa Vance",
        company: "Apex Equity Fund",
        comment: "I really liked how the overall look and feel of the app has come together — it looks beautiful and fits the theme well. The way the shlokas are shown is nice and I am happy with it. I would like more shlokas from the Natyashastra to be added. I have also shared what I have in mind for the logo and I hope it captures the true spirit of Natya Samhita."
      },
      {
        week: 5,
        name: "Theressa Vance",
        company: "Apex Equity Fund",
        comment: ""
      }
    ]
  },
  {
    id: "chps-automation",
    name: "Appellate Automation",
    duration: "5 Weeks",
    domain: "LegalTech & Document Intelligence",
    description: "The Appellate Automation System is a comprehensive role-based web application developed to streamline the management of Income Tax e-Proceedings for Chartered Accountants, tax professionals, and audit firms. The platform centralizes the handling of client assignments, proceedings, notices, responses, adjournments, document management, and compliance tracking, reducing the manual effort required to monitor multiple taxpayer accounts and ensuring timely action on important notices. The system is built around three dedicated user roles: Admin, Staff, and Professional. The Admin Dashboard provides complete control over user management, client onboarding, professional assignments, access control, workflow monitoring, and overall system administration. The Staff Dashboard enables staff members to manage assigned clients, monitor proceedings, track notices and responses, review adjournment requests, access notice orders, and oversee operational activities. The Professional Dashboard allows tax professionals to manage their assigned clients, review notices, update response statuses, track workflow progress, maintain review comments, and monitor compliance deadlines through a structured interface. A major component of the platform is its automation engine, which utilizes browser automation technology to interact directly with the Income Tax e-Filing Portal. The automation securely logs into taxpayer accounts, navigates through e-Proceedings, and automatically extracts proceedings, notices, orders, response details, adjournment details, document reference information, communication metadata, and downloadable PDF documents. The automation framework is designed to handle multiple professionals and multiple clients simultaneously through parallel execution, significantly improving processing speed and operational efficiency. All extracted information is stored in a centralized PostgreSQL database, ensuring data consistency and easy accessibility across dashboards. The platform maintains detailed records of proceedings, notices, responses, adjournments, assignments, automation activities, and document repositories. Notices are categorized into “For Your Action” and “For Your Information” sections, allowing users to quickly identify items that require immediate attention. Downloaded PDF documents are automatically renamed using meaningful business information such as assessee name, notice section, and issue date, making document management more organized and searchable. The application also includes workflow tracking features that allow professionals to update notice statuses, record review comments, track filing information, and maintain activity history for each notice. Advanced filtering, searching, client assignment management, role-based access control, and dashboard analytics provide users with a clear view of ongoing compliance activities and pending actions. Overall, the Appellate Automation System serves as a centralized compliance and audit management solution that automates the collection of Income Tax proceeding data, improves operational efficiency, enhances visibility across teams, reduces manual monitoring efforts, and enables Chartered Accountant firms to manage large volumes of client proceedings in a structured, scalable, and efficient manner.",
    image: "/CA.jpeg",
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
        github: "https://github.com/Abhinav1619",
        linkedin: "https://www.linkedin.com/in/abhinav-medasani-18a032300/",
        resumePdf: "/ABHINAV RESUME.pdf",
        avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=400&h=400&q=80",
        techUsed: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Role-Based Access Control (RBAC)", "Postgre SQL", "Automation Layer", "Playwright", "Chromium Browser Automation", "Web Scraping & Data Extraction", "Playwright Selectors"],
        bio: "Motivated B.Tech Computer Science student and aspiring Software Engineer with a strong passion for building intelligent and impactful technology solutions. Skilled in Python, Java, C, and Full Stack Web Development with hands-on experience in Artificial Intelligence, Machine Learning, and real-time application development. Developed multiple innovative projects including AI-powered object detection systems, voice-based AI assistants, phishing detection tools using transformer models, and real-time satellite tracking dashboards with machine learning analytics . Seeking opportunities to collaborate on challenging projects, and grow as a future AI driven software engineer.",
        contributions: "Throughout the internship, Abhinav played a significant role in designing, developing, testing, and automating the Appellate Automation System. He contributed to the development of a complete role-based platform consisting of Admin, Staff, and Professional dashboards for managing Income Tax e-Proceedings, notices, responses, adjournments, client assignments, and workflow tracking. Abhinav actively worked on database schema design, API integration, frontend dashboard development, authentication workflows, and notice management modules. He was heavily involved in building the browser automation engine that logs into the Income Tax e-Filing portal, navigates through client proceedings, extracts notices, responses, adjournments, and downloads notice PDFs automatically. He also contributed to implementing parallel automation workflows, dynamic PDF naming conventions, client management features, notice categorization, assignment tracking, and dashboard-level reporting. Additionally, he participated in functional testing, smoke testing, data validation testing, workflow redesign discussions with clients, documentation preparation, and research activities involving WhatsApp notification integration using Exotel APIs. His contributions helped streamline compliance tracking, reduce manual effort, centralize audit operations, and improve the overall efficiency of tax notice management for Chartered Accountants and audit firms.",
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
          { week: 1, review: "Abhinav successfully researched and implemented Playwright-based automation for the Income Tax portal. He demonstrated strong problem-solving skills and took ownership of the automation architecture." },
          { week: 2, review: "Abhinav enhanced the automation framework by improving PDF downloads, proceeding extraction, and database integration. His work improved the reliability and efficiency of the automation process." },
          { week: 3, review: "Abhinav implemented scalable automation solutions with concurrent processing and automation tracking. His contributions significantly improved the system's scalability and performance." },
          { week: 4, review: "" },
          { week: 5, review: "" }
        ],
        skillsLearntInInternship: [
          "Role-Based Access Control (RBAC) implementation with Admin, Staff, and Professional Dashboards",
          "Database Design, Schema Modeling, Relationships, Migrations, and Query Optimization using PostgreSQL",
          "Browser Automation & Web Scraping using Playwright for Income Tax e-Filing Portal Automation",
          "Automated Data Extraction of e-Proceedings, Notices, Responses, Adjournments, and PDF Documents",
          "PDF Management, File Storage, Dynamic File Renaming, and Document Tracking Systems",
          "WhatsApp Notification Integration using Exotel APIs and Template-Based Messaging",
          "Parallel Processing and Multi-Client Automation Execution Strategies",
          "Functional Testing, Smoke Testing, Data Validation Testing, and End-to-End System Testing",
          "Version Control and Collaborative Development using Git and GitHub",
          "AI-Assisted Development using Antigravity, Gemini, and Modern Developer Productivity Tools"
        ],

        resume: {
          education: [
            {
              degree: "B.Tech in Computer Science",
              school: "Swami Vivekananda Institute of Technology",
              year: "2023 - 2027",
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
        github: "https://github.com/pujareddy2",
        linkedin: "https://www.linkedin.com/in/puja-midde3/",
        resumePdf: "/Midde_Puja_Resume.pdf",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400&q=80",
        techUsed: ["FastAPI", "Uvicorn", "SQLAlchemy", "PostgreSQL", "JWT (python-jose)"],
        bio: "Applied AI / ML Engineer and third-year Computer Science student with hands-on experience building Machine Learning, Generative AI, and LLM-powered applications using Python, FastAPI, LangChain, OpenAI API, and Gemini API. Experienced in model training, feature engineering, data preprocessing, model evaluation, prompt engineering, RAG pipelines, REST API development, and AI solution deployment. Delivered AI, ML, analytics, and full-stack projects through industry internships, hackathons, and research-driven initiatives.",
        contributions: "Puja made significant contributions to the development of the notice management and automation platform by working extensively on backend APIs, database management, workflow automation, and dashboard functionalities. She played a key role in designing and implementing Admin, Professional, and Client Dashboard features, including notice management, proceeding tracking, activity timelines, status monitoring, and workflow controls. She contributed to database schema updates, API integrations, role-based access management, notice blocking mechanisms, and automation control features. Puja was actively involved in debugging backend issues, optimizing business logic, validating data flows, and ensuring seamless integration between dashboards and the automation engine. Additionally, she supported system testing, requirement analysis, and dashboard enhancements to improve overall platform performance, usability, and maintainability.",
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
          { week: 1, review: "Puja contributed effectively to the backend authentication module by implementing user registration, email verification, and JWT-based login functionality. She showed good collaboration and quickly adapted to FastAPI development." },
          { week: 2, review: "Puja resolved multiple backend challenges related to database relationships and API integration. She contributed significantly to dashboard, notice, and proceeding management APIs." },
          { week: 3, review: "Puja successfully restructured the backend architecture by implementing role-based workflows and assignment management. She showed strong ownership and technical maturity in handling complex backend requirements." },
          { week: 4, review: "" },
          { week: 5, review: "" }
        ],
        skillsLearntInInternship: [
          "Backend API Development and Integration",
          "PostgreSQL Database Design and Management",
          "Workflow Automation and Process Tracking",
          "Role-Based Access Control (RBAC) Implementation",
          "Debugging, Testing, and System Optimization"
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Information Technology",
              school: "Stanley College of Engineering and Technology for Women",
              year: "2023 - 2027",
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
        github: "https://github.com/JalkamTanusree16",
        linkedin: "www.linkedin.com/in/tanusreejalkam16072005",
        resumePdf: "/Tanusree Final Resume.pdf",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
        techUsed: ["React", "Vite"],
        bio: "I'm Jalkam Tanusree, a Computer Engineering student passionate about technology, innovation, and solving real-world problems through software development and Artificial Intelligence. My interests span Web Development, Artificial Intelligence, Machine Learning, Data Science, and Software Engineering, where I enjoy transforming ideas into impactful digital solutions. Through academic projects, internships, and hackathons, I have gained hands-on experience in building responsive web applications, developing AI-driven solutions, and creating data-driven systems that enhance user experiences. I have worked on projects such as an Air Quality Visualizer & Forecast Application, an AI-powered Hypertension Risk Prediction System, and a Skill Advisor Application, showcasing my ability to combine technical expertise with practical problem-solving. I am driven by a vision to leverage emerging technologies to create meaningful solutions that positively impact society. As an aspiring software engineer and AI enthusiast, I am constantly exploring new technologies, expanding my knowledge, and seeking opportunities to contribute to innovative and transformative projects.",
        contributions: "Tanusree played a key role in developing and enhancing the frontend of the web application using React and Vite, focusing on delivering a clean, responsive, and professional user interface.She designed and implemented multiple UI components, ensuring seamless navigation and an intuitive user experience across the platform.She successfully integrated backend APIs into the frontend, enabling dynamic data fetching and real-time updates in the UI.Her work ensured that data was displayed accurately and efficiently, contributing to a smooth and error - free user experience.Tanusree actively identified and resolved frontend issues, debugging errors and optimizing performance to maintain application stability.She ensured the website functioned reliably across different scenarios while maintaining a visually appealing design.Additionally, she contributed to initial AI feature integrations within the frontend, exploring ways to connect intelligent functionalities into the system.She also participated in QA testing, validating features, tracking bugs, and maintaining code quality using Git and GitHub.Her contributions significantly improved the usability, reliability, and overall presentation of the web application, making it more polished and production- ready.",
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
          { week: 1, review: "Tanusree established the frontend foundation by developing authentication screens and dashboard layouts. She showed good learning ability and worked closely with the backend team for integration." },
          { week: 2, review: "Tanusree developed major dashboard and client management modules while ensuring responsive UI implementation. She effectively coordinated with backend and automation teams." },
          { week: 3, review: "Tanusree improved dashboard usability through enhanced filtering, navigation, and dynamic data rendering features. Her focus on user experience strengthened the overall application quality" },
          { week: 4, review: "" },
          { week: 5, review: "" }
        ],

        skillsLearntInInternship: [
          "Full-stack web development with a focus on Frontend using React + Vite",
          "Building responsive and user-friendly interfaces with clean UI/UX design",
          "Integration of REST APIs and handling dynamic data rendering in UI",
          "Version control using Git & GitHub for collaboration and code management",
          "Debugging, error handling, and performance optimization in frontend applications",
          "QA testing, bug tracking, and ensuring smooth application functionality",
          "Development using modern IDE tools like VS Code & Antigravity"
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Computer Science & Engineering",
              school: "Stanley College of Engineering and Technology for Women",
              year: "2023 - 2027",
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
        week: 1,
        name: "Robert Miller",
        company: "SwiftLogix Inc",
        comment: "We are pleased with the proposed project architecture and automation approach. We recommend implementing role-based dashboards and a user-friendly interface to ensure better accessibility and efficient system management."
      },
      {
        week: 2,
        name: "Robert Miller",
        company: "SwiftLogix Inc",
        comment: "We are pleased with the dashboard progress and workflow implementation. We would like to see improved notice categorization, enhanced filtering options, and smoother navigation between modules to further improve the user experience."
      },
      {
        week: 3,
        name: "Robert Miller",
        company: "SwiftLogix Inc",
        comment: "We highly appreciate the development speed and the quality of the features delivered so far. We would like to see advanced notice filtering, response tracking capabilities, and additional automation scalability enhancements to further improve the system's efficiency and performance."
      },
      {
        week: 4,
        name: "Robert Miller",
        company: "SwiftLogix Inc",
        comment: ""
      },
      {
        week: 5,
        name: "Robert Miller",
        company: "SwiftLogix Inc",
        comment: ""
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
    tech: ["Frontend: React.js, TypeScript, Vite, Tailwind CSS", "Backend: FastAPI, Python, SQLAlchemy", "Database: PostgreSQL", "Authentication: JWT", "AI: OpenRouter, Gemini", "Simulation: Matter.js, PixiJS", "Version Control: Git, GitHub", "Deployment & Runtime: Uvicorn, npm"],
    contributors: [
      {
        id: "rithvik",
        name: "Papatla Rithvik",
        role: "Simulation Engineer, Database Management",
        github: "https://github.com/Rith439",
        linkedin: "https://www.linkedin.com/in/rithvik-benny",
        resumePdf: "/Rithvik_Resume.pdf",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
        techUsed: ["Matter-js", "pixiJs", "PostgreSQL"],
        bio: "Computer Science undergraduate specializing in Data Science with hands-on experience in machine learning, web development, and system design. Developed real-world applications including energy consumption prediction and expense tracking systems. Strong foundation in algorithms, problem-solving, and scalable application development.",
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
          { week: 1, review: "Rithvik showed a solid understanding of backend requirements from the outset and contributed meaningfully to core system development. Approached problem-solving in a structured and efficient manner." },
          { week: 2, review: "Rithvik handled backend responsibilities with confidence and consistently took ownership of key development tasks. Focused on improving system scalability and maintainability through thoughtful implementation." },
          { week: 3, review: "Rithvik established himself as a reliable contributor by effectively managing critical backend tasks and supporting the team during key development activities. Maintained a consistent level of performance throughout the project." },
          { week: 4, review: "Rithvik showed strong ownership in frontend and backend integration efforts by reviewing runtime architectures, validating database connectivity, and ensuring smooth collaboration across development branches. Contributed to system stability through effective merge management, integration testing, and thoughtful planning of upcoming simulation features." },
          { week: 5, review: "Rithvik demonstrated a structured approach to frontend development by supporting repository cleanup, merge planning, and architecture refinement activities. Contributed to improving educational content delivery and user experience through thoughtful UI enhancements and instructional system design." }
        ],
        skillsLearntInInternship: [
          "Full-Stack Application Development using React, TypeScript, FastAPI, and Modern Web Technologies",
          "System Architecture Design, Modular Software Development, and Scalable Runtime Engineering",
          "AI Integration, Prompt Engineering, Retrieval-Augmented Generation (RAG), and Educational Intelligence Systems",
          "Database Design, Schema Modeling, Relationships, Authentication, and Data Management using PostgreSQL",
          "Interactive Physics Simulation Development using Matter.js, PixiJS, and Sandbox Runtime Architectures",
          "Version Control, Branch Management, Merge Conflict Resolution, and Collaborative Development using Git and GitHub"
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Computer Science and Engineering(Data Science)",
              school: "Swami Vivekananda Institute of Technology",
              year: "2023 - 2027",
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
        github: "https://github.com/mythribanda",
        linkedin: "https://www.linkedin.com/in/mythri-banda",
        resumePdf: "/Mythri_Resume.docx.pdf",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
        techUsed: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "FAST API Integration", "Responsive UI Design", "User Experience Design (UX)"],
        bio: "Motivated and detail-oriented AI and Data Science student (2027 graduate, CGPA 7.5) with hands-on experience in software engineering, machine learning, data analysis, and full-stack development. Proficient in Python, Java, JavaScript, and SQL with demonstrated ability to design, build, test, and deploy production-ready applications end-to-end. Built PillTalk, an AI-powered healthcare application integrating NLP, computer vision, and Google Gemini LLM, deployed on cloud (Hugging Face Spaces). Experienced in REST API integration, data pipelines, Power BI dashboards, and agile development workflows. Holds Oracle Certified Data Science Professional, Oracle AI Foundations Associate, and IBM and Cisco AI Fundamentals certifications. Seeking internship and entry-level opportunities in software engineering, AI/ML, data science, or data analytics.",
        contributions: "Mythri has contributed to the end-to-end development of EduSim by integrating AI-powered personalized learning, intelligent tutoring, and interactive educational simulations to enhance student engagement and learning outcomes.",
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
          { week: 1, review: "Mythri adapted well to the frontend development requirements and consistently delivered assigned tasks. Displayed a positive attitude toward feedback and continuously worked on improving implementation quality." },
          { week: 2, review: "Mythri continued to enhance her frontend development skills while maintaining a strong focus on usability and functionality. Proactively addressed issues and contributed to overall interface improvements." },
          { week: 3, review: "Mythri displayed a high level of commitment and professionalism in delivering frontend features and enhancements. Contributed significantly to improving overall usability and the end-user experience." },
          { week: 4, review: "Mythri displayed a high level of attention to quality assurance by developing comprehensive test cases and performing end-to-end validation across UI, API, and database layers. Contributed significantly to project documentation, workflow analysis, database verification, and overall platform reliability while continuously expanding technical knowledge across multiple domains." },
          { week: 5, review: "Mythri continued to strengthen platform quality through extensive integration testing and end-to-end validation of key EduSim modules. Played an important role in maintaining system reliability by verifying workflows, supporting test automation initiatives, resolving merge conflicts, and validating backend and database integrations." }
        ],
        skillsLearntInInternship: [
          "React.js", "TypeScript", "Vite", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "FAST API Integration", "Responsive UI Design", "User Experience Design (UX)"
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Information Technology",
              school: "Stanley College of Enginering and Technology for Women",
              year: "2023 - 2027",
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
        github: "https://github.com/satishx9",
        linkedin: "https://www.linkedin.com/in/satishthadela/",
        resumePdf: "/Satish__Resume.pdf",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=400&q=80",
        techUsed: ["Python", "JavaScript", "RAG", "LLM Evaluation", "PixiJS", "Matter.js", "SVG Rendering", "FAST API", "React"],
        bio: "Motivated Computer Science student specializing in AI and ML with strong programming, DSA, and problem-solving skills. Experienced in building scalable web interfaces and implementing machine learning models using Python and modern frameworks. Passionate about creating efficient, user-focused solutions and continuously improving through hands-on projects and competitive coding.",
        contributions: "Satish contributed significantly to the development of the EduSim platform by working on AI-powered educational features, RAG pipeline optimization, backend development using Python/FastAPI, and interactive physics simulation integration. He also contributed to model evaluation systems, API development, and enhancing overall application performance and user experience.",
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
          { week: 1, review: "Satish demonstrated a strong learning attitude and adapted quickly to the project's AI requirements. Actively explored multiple approaches and contributed effectively to addressing technical challenges." },
          { week: 2, review: "Satish demonstrated significant progress in understanding AI workflows and worked with increasing independence. Contributed to improving the quality, accuracy, and effectiveness of the overall solution." },
          { week: 3, review: "Satish demonstrated strong ownership and accountability in assigned responsibilities. Consistently delivered quality work and contributed to continuous improvement efforts across the project" },
          { week: 4, review: "Satish demonstrated continued growth in AI engineering concepts and contributed effectively to improving EduSim’s AI Tutor capabilities. Worked on prompt refinement, benchmarking strategies, documentation enhancements, and UI/UX planning while actively supporting frontend integration and deployment-related activities." },
          { week: 5, review: "Satish made impactful contributions to the EduSim platform by enhancing the Physics Sandbox, AI Tutor, and Formula Lab experiences. Focused on improving responsiveness, usability, telemetry tracking, and interactive learning features while consistently driving improvements in overall user engagement and platform functionality." }
        ],
        skillsLearntInInternship: [
          "Python", "JavaScript", "RAG", "LLM Evaluation", "PixiJS", "Matter.js", "SVG Rendering", "FAST API", "React"
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Computer Science & Engineering",
              school: "Swami Vivekananda Institute of Technology",
              year: "2022 - 2026",
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
      name: "Mr.Pavan",
      designation: "",
      organization: "Alonzo AI Smart Infrastructure Division",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400&q=80",
      comment: "Neha, Divya, and Aditya formed a highly collaborative unit. Their smart city signal optimization dashboard is spectacular."
    },
    reviews: [
      {
        week: 1,
        name: "Mr. Ganesh K",
        company: "Alonzo AI",
        comment: "I felt the simulations would be more effective if students were guided step by step rather than exploring everything at once. I also suggested organizing the content into concepts, formulas, and real-world scenarios, while tracking student interactions to better understand their learning progress."
      },
      {
        week: 2,
        name: "Mr. Ganesh K",
        company: "Alonzo AI",
        comment: "I recommended creating a clear learning flow that takes students from a prompt and AI explanation through formulas, calculations, Q&A, and finally the simulation. I also shared ideas for improving usability, such as search, learning resources, theme options, and guided navigation, while ensuring the overall experience remains smooth and intuitive."
      },
      {
        week: 3,
        name: "Mr. Ganesh K",
        company: "Alonzo AI",
        comment: "I suggested refining the UI/UX and evaluating the AI responses to make learning more engaging and effective. I also encouraged building NCERT-aligned Physics simulations and adding adjustable, scenario-based experiments so students can actively explore concepts and learn through observation"
      },
      {
        week: 4,
        name: "Mr. Ganesh K",
        company: "Alonzo AI",
        comment: ""
      },
      {
        week: 5,
        name: "Mr. Ganesh K",
        company: "Alonzo AI",
        comment: ""
      }
    ]
  },
  {
    id: "AdaptiveGenAIRouter",
    name: "Adaptive GenAI Router",
    duration: "5 Weeks",
    domain: "Urban Tech & Eco Engineering",
    description: "Adaptive GenAI Router is an intelligent LLM routing system that automatically selects the best AI model for each user query by balancing response quality and API cost. It evaluates each model response using a quality score and normalizes API cost to compute a final reward, ensuring the most cost-efficient model is preferred when quality is equal. The router supports two intelligent strategies — Thompson Sampling and LinUCB — and compares them against a baseline using cumulative regret to measure how close each strategy gets to the best possible routing decision.",
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
        role: "LLM Performance Engineer",
        github: "https://github.com/GoduguShashank26",
        linkedin: "https://www.linkedin.com/in/godugu-shashank-004b7829a/",
        resumePdf: "/GODUGU_SHASHANK_RESUME.pdf",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80",
        techUsed: ["Python", "XGBoost", "ScyllaDB", "Pandas", "Scikit-Learn"],
        bio: "Computer Science graduate (B.Tech, AI & ML) with hands-on experience building ML-powered early prediction heartdisease systems and bot detection systems. Proficient in Python, Flask, and Scikit-Learn with a strong foundation inmachine learning, data analysis, and backend development. Passionate about applying AI to solve real-world problemsand ready to contribute in a full-time role",
        contributions: "Implemented a LinUCB-based routing system using exploration and exploitation strategies. Developed Bayesian memory updates and persistent state management for model learning. Built routing logic, logging mechanisms, and reward-based model updates. Evaluated routing decisions using regret analysis and exploration-exploitation metrics. Generated comparative analyses and visualizations against Thompson Sampling and Round Robin approaches.",
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
          { week: 1, review: "1. Initially required time to understand the complete project workflow, but gradually developed a clear understanding of the routing and benchmarking process. 2. Contributed effectively to dataset preparation, query categorization and benchmarking activities while maintaining good communication and ownership" },
          { week: 2, review: "1. Able to understand embedding based routing workflow quickly and contributed well in vector similarity and semantic search implementation. 2. Worked actively on embedding generation, query matching and routing related implementation with good ownership." },
          { week: 3, review: "1. Able to understand Thompson Sampling workflow, embedding pipeline and persistent memory management concepts clearly. 2. Contributed well in routing workflow implementation, state management and workflow documentation with active communication." },
          { week: 4, review: "" },
          { week: 5, review: "" }
        ],
        skillsLearntInInternship: [
          "Machine Learning and Online Learning Algorithms", "Natural Language Processing and Vector Embeddings", "Backend Development and API Integration", "Statistical Analysis and Decision-Making Algorithms", "Data Visualization and Performance Analysis."
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Artificial Intelligence",
              school: "Swami Vivekananda Institute of Technology",
              year: "2022 - 2026",
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
        role: "Model Routing Engineer",
        github: "github.com/SaiVaishnavi236",
        linkedin: "linkedin.com/in/SaiVaishnaviKodali",
        resumePdf: "/Vaishnavi.pdf",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80",
        techUsed: ["React", "Tailwind CSS", "Zustand", "Leaflet GL", "TypeScript"],
        bio: "Aspiring Computer Science student with strong foundation in programming, problem-solving. Seeking opportunities to contribute to impactful software development or data-driven projects.",
        contributions: "Contributed to building a comprehensive LLM benchmarking and evaluation framework using the MS MARCO dataset by evaluating multiple models across quality, cost, latency, and reward metrics. Developed modules for validity, cost, latency, and reward calculation, supported the implementation and analysis of dynamic routing strategies, and automated large-scale model evaluations through OpenRouter API integration. Assisted in creating training, testing, and oracle benchmark datasets, performed performance and cost analysis for model selection, and developed interactive dashboards and analytical reports, including correlation heatmaps and cumulative regret analysis.",
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
          { week: 1, review: "1. Took time to understand the research workflow and benchmarking concepts, but gradually adapted to model analysis and comparison activities. 2. Showed consistent interest in exploring LLM statistics, benchmarking methodologies and research-oriented approaches." },
          { week: 2, review: "1. Able to explore related methodologies and research papers for adaptive routing and benchmark validation workflows. 2. Worked well on routing strategy analysis, adaptive switching logic and performance aware model selection approaches." },
          { week: 3, review: "1. Able to understand dashboard requirements and worked well on routing visualization and dispatcher testing workflows. 2. Contributed actively in dashboard integration, routing analytics and end-to-end workflow testing with good collaboration." },
          { week: 4, review: "" },
          { week: 5, review: "" }
        ],
        skillsLearntInInternship: [
          "Gained hands-on experience in LLM evaluation and benchmarking", "Dynamic model routing techniques such as Thompson Sampling", "LinUCB", "Round Robin", "NLP evaluation metrics including BERTScore, BLEU, ROUGE, and F1 Score", "Developed proficiency in Python", "OpenRouter API integration", "Data processing using CSV and JSON", "statistical performance analysis, cost and latency optimization", "dashboard development using Streamlit and Plotly for visualization and monitoring."
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Computer Science",
              school: "Stanley College of Engineering and Technology for Women",
              year: "2023-2027",
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
        role: "AI Infrastructure Engineer",
        github: "https://github.com/Dhanvi0206",
        linkedin: "https://www.linkedin.com/in/dhanvi-annam/",
        resumePdf: "/Resume Dhanvi.pdf",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
        techUsed: ["FastAPI", "ScyllaDB", "Docker", "AWS API", "Python"],
        bio: "Computer Science Engineering student with a strong foundation in programming and machine learning, supported by significant project experience. Skilled in applying analytical thinking to solve real-world problems, particularly in Artificial Intelligence, Natural Language Processing and optimization techniques, with a focus on developing efficient and interpretable solutions.",
        contributions: "Implemented a Thompson Sampling-based LLM routing system for adaptive model selection. Developed semantic query embedding and similarity matching using all-MiniLM-L6-v2. Integrated OpenRouter and FastAPI for efficient model routing and response collection. Evaluated model performance using quality, latency, cost, and reward metrics. Performed regret analysis, generated visualizations, and compared routing performance with baseline methods.",
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
          { week: 1, review: "1. Initially faced challenges in understanding the project structure, but later gained a clear understanding of model benchmarking and comparison workflows. 2. Contributed effectively to multi-model experimentation, response organization and benchmarking setup with active collaboration." },
          { week: 2, review: "1. Quickly understood research papers and routing concepts, able to implement embedding workflows and router switching logic effectively. 2. Contributed actively in semantic search, FAISS indexing and FastAPI integration with good execution and communication." },
          { week: 3, review: "1. Able to design and implement the complete adaptive routing workflow using Thompson Sampling and Bayesian learning logic effectively. 2. Took strong ownership in complete routing pipeline implementation and coordinated well during integration discussions." },
          { week: 4, review: "" },
          { week: 5, review: "" }
        ],
        skillsLearntInInternship: [
          "Machine Learning and Contextual Bandits", " Natural Language Processing and Semantic Embeddings", " API Integration and Backend Development", " Performance Evaluation and Benchmarking", "Data Analysis and Visualization."
        ],
        resume: {
          education: [
            {
              degree: "B.Tech in Information Technology",
              school: "Stanley College of Engineering and Technology for Women",
              year: "2023 - 2027",
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
        week: 1,
        name: "Marcus Vance",
        company: "GreenFields Corporation",
        comment: "The team showed good understanding of the project objectives and contributed effectively to benchmarking, model evaluation and dataset organization activities. They collaborated well, actively participated in discussions and completed assigned tasks within the expected timelines."
      },
      {
        week: 2,
        name: "Marcus Vance",
        company: "GreenFields Corporation",
        comment: "The team made good progress in embedding-based semantic routing, similarity search and adaptive routing implementation. They effectively utilized technologies such as FAISS, FastAPI and vector embeddings, while contributing well to benchmarking, performance analysis and overall teamwork."
      },
      {
        week: 3,
        name: "Marcus Vance",
        company: "GreenFields Corporation",
        comment: "The team successfully implemented the Thompson Sampling–based adaptive routing pipeline and demonstrated strong technical execution throughout the development phase. They contributed effectively to model selection, evaluation and memory update mechanisms, while presenting the workflow and architecture clearly and responding positively to feedback for further improvements."
      },
      {
        week: 4,
        name: "Marcus Vance",
        company: "GreenFields Corporation",
        comment: ""
      },
      {
        week: 5,
        name: "Marcus Vance",
        company: "GreenFields Corporation",
        comment: ""
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
