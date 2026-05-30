import { Project } from "./types";

export const projectsData: Project[] = [
  {
    id: "ai-healthcare-assistant",
    name: "AI Healthcare Assistant",
    duration: "4 Months",
    domain: "Healthcare Tech & GenAI",
    description: "An AI-powered healthcare platform designed to provide intelligent clinical recommendations, patient symptom analysis, and healthcare accessibility solutions.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "FastAPI", "Gemini 1.5 Pro", "PostgreSQL", "Docker", "Tailwind CSS"],
    contributors: [
      {
        id: "puja-midde",
        name: "Puja Midde",
        role: "Backend Developer",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "9.2/10",
        skills: ["API Architecture", "Database Optimization", "Server Management", "Python", "Node.js", "SQL"],
        techUsed: ["FastAPI", "PostgreSQL", "Redis", "Docker", "Alembic", "Auth0"],
        bio: "Pre-final year Computer Science student with a strong passion for scalable backends, reliable data pipelines, and microservices architecture.",
        contributions: "Puja was responsible for backend architecture, API development, database optimization, authentication workflows, and cloud-based deployment support throughout the project lifecycle. She reduced query latency by 42% through strategic index design and implemented a multi-tenant OAuth system.",
        resume: {
          education: [
            {
              degree: "B.Tech in Computer Science & Engineering",
              school: "National Institute of Technology",
              year: "2023 - 2027",
              grade: "CGPA: 9.2"
            }
          ],
          projects: [
            {
              title: "Distributed Task Scheduler",
              description: "A fault-tolerant task queue developed in Go that handles up to 5,000 tasks/second utilizing Redis streams.",
              tech: ["Go", "Redis", "gRPC"]
            },
            {
              title: "Secure Health Gateway API",
              description: "High-performance API layer mapping to FHIR datasets with end-to-end payload encryption and rate-limiting.",
              tech: ["FastAPI", "PostgreSQL", "JWT"]
            }
          ],
          achievements: [
            "Smart India Hackathon 2025 Runner-up",
            "Dean's Honor List (6 consecutive semesters)",
            "Top 5% in LeetCode Global Contest"
          ]
        }
      },
      {
        id: "ananya-sharma",
        name: "Ananya Sharma",
        role: "Frontend Developer",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "8.9/10",
        skills: ["UI/UX Design", "React & Next.js", "Web Performance", "State Management", "Framer Motion"],
        techUsed: ["React", "Zustand", "Tailwind CSS", "Framer Motion", "Recharts"],
        bio: "Frontend engineer dedicated to building smooth user experiences, pixel-perfect layouts, and highly interactive charts.",
        contributions: "Ananya crafted the user interface, managed local interactive states with Zustand, built beautiful telemetry dashboards, and ensured WCAG AA accessibility compliance across all healthcare screens.",
        resume: {
          education: [
            {
              degree: "B.Tech in Information Technology",
              school: "State Engineering College",
              year: "2023 - 2027",
              grade: "CGPA: 8.9"
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
        resume: {
          education: [
            {
              degree: "M.Tech in Artificial Intelligence",
              school: "Indian Institute of Technology",
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
      comment: "Puja, Ananya, and Rahul demonstrated exemplary engineering maturity. They tackled complex clinical privacy requirements with high technical capability, demonstrating strong problem-solving, clean code practices, and an excellent ownership mindset."
    },
    reviews: [
      {
        name: "Marcus Vance",
        company: "Vance Health Partners",
        rating: 5,
        comment: "The team delivered exceptional results with professionalism and strong technical execution. The symptom triage system scored higher accuracy than our pre-existing system with a far cleaner modern interface.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Sarah Jenkins",
        company: "MedTech Globals",
        rating: 5,
        comment: "Their responsiveness and capacity to turn complex medical standards into seamless API workflows was highly commendable.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
      }
    ]
  },
  {
    id: "fintech-sandbox-analytics",
    name: "Fintech Analytics Sandbox",
    duration: "3 Months",
    domain: "Quantitative Finance AI",
    description: "A sandbox playground designed to model stock trajectories, evaluate portfolio stress metrics, and serve instant simulation backtests.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    tech: ["Next.js", "FastAPI", "ClickHouse", "Recharts", "ScyllaDB"],
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
        resume: {
          education: [
            {
              degree: "B.Tech in Engineering Physics",
              school: "Delhi Technological University",
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
            "Contributor to React high-charts adapters"
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
        resume: {
          education: [
            {
              degree: "B.Tech in Mathematics & Computing",
              school: "Indian Institute of Science",
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
      }
    ],
    mentor: {
      name: "Sanjay Chatterjee",
      designation: "VP of Quantitative Engineering",
      organization: "Alonzo AI FinTech Division",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
      comment: "Vikram and Shreya operated as full-fledged quantitative engineers. Their ability to deliver microsecond-level simulations directly in a web environment was truly exceptional."
    },
    reviews: [
      {
        name: "Theressa Vance",
        company: "Apex Equity Fund",
        rating: 5,
        comment: "Outstanding technical expertise. They delivered a stress backtesting simulator that outperformed our enterprise SaaS solution in speed and aesthetic layout.",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80"
      }
    ]
  },
  {
    id: "autonomous-fleet-dispatcher",
    name: "Autonomous Fleet Dispatcher",
    duration: "5 Months",
    domain: "Logistics ML & Operations",
    description: "An optimization platform generating real-time multi-agent pathways, resource dispatch alerts, and predictive delivery windows.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    tech: ["TypeScript", "Rust Router", "Redis", "Leaflet GL", "GraphQL"],
    contributors: [
      {
        id: "arjun-joshi",
        name: "Arjun Joshi",
        role: "ML Developer",
        avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "9.1/10",
        skills: ["Reinforcement Learning", "Linear Optimization", "Map Integrations", "Python", "Rust"],
        techUsed: ["Rust", "Python", "PyTorch", "NetworkX", "Docker"],
        bio: "Specializing in operational research, heuristics, and low-latency network graph optimization algorithms.",
        contributions: "Arjun designed the fast routing solver in Rust, mapped live vehicle nodes, and integrated real-time congestion models to optimize dispatcher decisions.",
        resume: {
          education: [
            {
              degree: "B.Tech in Computer Science",
              school: "Birla Institute of Technology and Science",
              year: "2022 - 2026",
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
      }
    ],
    mentor: {
      name: "Arnaud Dubois",
      designation: "Principal Infrastructure Architect",
      organization: "Alonzo AI Logistics Systems",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
      comment: "Arjun showed remarkable initiative by developing our route engine core in Rust. He decreased computation times from several minutes down to 18 milliseconds."
    },
    reviews: [
      {
        name: "Robert Miller",
        company: "SwiftLogix Inc",
        rating: 5,
        comment: "An excellent piece of technology. The route dispatch planner cut fuel margins by 11.2% in our initial real-world beta tests.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
      }
    ]
  }
];

export const statisticsData = [
  { label: "Number of Interns", value: 150, suffix: "+" },
  { label: "Projects Completed", value: 45, suffix: "+" },
  { label: "Industry Mentors", value: 24, suffix: "" },
  { label: "Client Satisfaction", value: 98.7, suffix: "%" }
];
