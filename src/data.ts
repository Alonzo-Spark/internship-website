import { Project } from "./types";

export const projectsData: Project[] = [
  {
    id: "medical-camp-management",
    name: "Medical camp management system",
    duration: "5 Weeks",
    domain: "Healthcare Tech & Operations",
    description: "An integrated healthcare logistics platform designed to coordinate remote medical camps, manage drug inventories, and deploy real-time doctor scheduling.",
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
        dailyTasks: [
          "Configured PostgreSQL database mappings and established FHIR schema compliance models.",
          "Implemented rate limiting algorithms using Redis Token Bucket strategy on high-frequency triage endpoints.",
          "Designed multi-tenant secure login API controllers integrated with JWT verification filters.",
          "Created continuous integration pipeline automation scripts for linting and Docker container build validation.",
          "Optimized relational search indices, reducing search querying latency from 450ms down to 18ms.",
          "Authored automated Swagger/OpenAPI documentation routes with strict visual payload schema outlines."
        ],
        weeklyReviews: [
          { week: 1, review: "Puja quickly grasped the system architecture. Excellent start on mapping clinical FHIR schemas.", rating: 4.8 },
          { week: 2, review: "Successfully designed and delivered the PostgreSQL migration scripts. Showed strong command over SQL optimization.", rating: 4.9 },
          { week: 3, review: "Implemented OAuth authentication flawlessly. Her secure gateway API is highly reliable.", rating: 4.7 },
          { week: 4, review: "Integrated Redis cache successfully, hitting performance targets early. Great communication with the frontend team.", rating: 5.0 },
          { week: 5, review: "Outstanding cohort completion! Delivered a rock-solid production-ready backend framework with clean documentation.", rating: 5.0 }
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
              degree: "B.Tech in Information Technology",
              school: "Swami Vivekananda Institute of Technology",
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
    description: "An Indology research system generating statistical motion charts, tracking classical performance metrics, and simulating ancient Sanskrit drama scripts.",
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
    id: "appellate-automation",
    name: "Appellate Automation",
    duration: "5 Weeks",
    domain: "LegalTech & Document Intelligence",
    description: "An optimization platform generating real-time judicial filing paths, document extraction alerts, and predictive hearing timelines.",
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
        dailyTasks: [
          "Programmed operational routing algorithms in low-latency Rust structures.",
          "Built pathfinding simulators displaying route nodes on Leaflet GL layouts.",
          "Integrated real-time location streaming feeds inside Redis structures.",
          "Designed multi-agent delivery window path evaluators mapped on network graphs."
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
              school: "Stanley College of Engineering and Technology for Women",
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
        id: "kriti-sen",
        name: "Kriti Sen",
        role: "Frontend Developer",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "8.8/10",
        skills: ["Leaflet & Mapbox", "Vector Map Overlays", "React Hooks", "CSS Transitions"],
        techUsed: ["React", "Leaflet GL", "Zustand", "Tailwind CSS", "TypeScript"],
        bio: "Creative frontend specialist focused on data-dense maps, route visualizations, and live dispatcher interfaces.",
        contributions: "Kriti built the real-time geographic map panel, added customized vector truck icons, and visual tracking pipelines showing route delays dynamically.",
        dailyTasks: [
          "Configured customized geocoding lookups using local Leaflet wrappers.",
          "Engineered real-time visual routes displaying live progress trackers.",
          "Built delay alert boxes with responsive alert micro-animations."
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
              school: "Swami Vivekananda Institute of Technology",
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
        id: "rohan-mehta",
        name: "Rohan Mehta",
        role: "Backend Developer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "9.2/10",
        skills: ["FastAPI Servers", "Docker & Compose", "gRPC Systems", "Redis Streams", "SQLAlchemy"],
        techUsed: ["Python", "FastAPI", "Redis", "Docker", "PostgreSQL"],
        bio: "Focused on high-performance message routing, Redis streams telemetry, and persistent state management services.",
        contributions: "Rohan mapped out the background event loop handling locational updates and connected the live Redis pub/sub streams directly with Kriti's map.",
        dailyTasks: [
          "Developed background worker processes parsing coordinate telemetry feeds.",
          "Configured Redis active broker pools supporting heavy pub-sub operations.",
          "Authored robust database entity connections ensuring safe transaction limits."
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
              school: "Swami Vivekananda Institute of Technology",
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
    description: "An immersive simulation environment displaying physics models, tracking learning curve indices, and configuring dynamic student interaction layouts.",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "FastAPI", "TensorFlow Lite", "InfluxDB", "Grafana Panels"],
    contributors: [
      {
        id: "neha-gupta",
        name: "Neha Gupta",
        role: "AI Engineer",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "9.4/10",
        skills: ["Timeseries Forecasting", "Edge AI / TF Lite", "Traffic flow math", "Python", "Keras"],
        techUsed: ["Python", "TensorFlow", "InfluxDB", "Pandas", "Scikit-Learn"],
        bio: "Specialist in timeseries anomaly detection, edge computing configurations, and smart infrastructure AI models.",
        contributions: "Neha built the LSTM model predicting traffic queue lengths and programmed the edge-facing inference pipeline converting sensor counts into optimized green-time splits.",
        dailyTasks: [
          "Developed queue-length prediction architectures using LSTM recurrent layers in TensorFlow.",
          "Configured local InfluxDB metrics pools checking live telemetry feeds.",
          "Programmed numerical green-time optimizations dynamically correcting signal delays."
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
              degree: "B.Tech in Artificial Intelligence",
              school: "Stanley College of Engineering and Technology for Women",
              year: "2023 - 2027",
              grade: "CGPA: 9.4"
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
        id: "divya-rao",
        name: "Divya Rao",
        role: "Frontend Developer",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "8.7/10",
        skills: ["Responsive Dashboards", "Web Telemetry Layouts", "React & TypeScript", "Tailwind styling"],
        techUsed: ["React", "Tailwind CSS", "Zustand", "Recharts", "TypeScript"],
        bio: "Frontend engineer specializing in complex dashboard wireframes, fast responsive views, and dynamic sensor telemetry charts.",
        contributions: "Divya built the live traffic dashboard visual layouts, configured dynamic charts plotting signal delay metrics, and maintained perfect mobile responsiveness.",
        dailyTasks: [
          "Constructed dashboard layout wireframes using customized Tailwind grid models.",
          "Designed ticking charts visualizing live junction delay statistics.",
          "Configured active toggle layouts switching telemetry panels cleanly."
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
              school: "Swami Vivekananda Institute of Technology",
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
        id: "aditya-sharma",
        name: "Aditya Sharma",
        role: "Backend Developer",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "9.0/10",
        skills: ["FastAPI routing", "PostgreSQL", "InfluxDB queries", "Docker Stack", "SQLAlchemy"],
        techUsed: ["Python", "FastAPI", "InfluxDB", "PostgreSQL", "Alembic"],
        bio: "Specializing in high-performance datastores, timeseries caching, and robust microservices infrastructure pipelines.",
        contributions: "Aditya programmed the FastAPI backend routes, managed the dual-database setup (InfluxDB + PostgreSQL), and built secure automated backup actions.",
        dailyTasks: [
          "Developed REST API router slots mapping sensor metadata pipelines.",
          "Configured InfluxDB integration scripts tracking high-frequency traffic logs.",
          "Authored Docker configurations for streamlined local deployment workflows."
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
              year: "2023 - 2027",
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
    description: "A planning environment analyzing soil parameters, local building materials, and historical weather data to design durable, eco-friendly infrastructure models.",
    image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "FastAPI", "XGBoost", "ScyllaDB", "Leaflet GL"],
    contributors: [
      {
        id: "sneha-reddy",
        name: "Sneha Reddy",
        role: "AI/ML Engineer",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "9.3/10",
        skills: ["XGBoost Regression", "Climatology modeling", "Numerical Analysis", "Python", "Scikit-Learn"],
        techUsed: ["Python", "XGBoost", "ScyllaDB", "Pandas", "Scikit-Learn"],
        bio: "Specializing in statistical regression models, satellite data normalization algorithms, and AgriTech predictive systems.",
        contributions: "Sneha engineered the predictive XGBoost model forecasting harvest outputs and structured the spatial normalization arrays handling climate datasets.",
        dailyTasks: [
          "Developed statistical yield estimators utilizing XGBoost regressor pipelines.",
          "Configured data-parsing scripts loading multi-spectral meteorological feeds.",
          "Analyzed model weights to ensure objective predictions on historical variables."
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
              school: "Stanley College of Engineering and Technology for Women",
              year: "2023 - 2027",
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
        id: "tanvi-shah",
        name: "Tanvi Shah",
        role: "Frontend Developer",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "8.9/10",
        skills: ["Web Map interfaces", "UI telemetry components", "Tailwind CSS styling", "React"],
        techUsed: ["React", "Tailwind CSS", "Zustand", "Leaflet GL", "TypeScript"],
        bio: "Dedicated to designing elegant map-focused visualizations, clean data tables, and highly intuitive layouts.",
        contributions: "Tanvi crafted the meteorology dashboard structure, set up interactive geographical overlays, and engineered responsive data analytics consoles.",
        dailyTasks: [
          "Designed map interface panels incorporating dynamic Leaflet GL coordinates.",
          "Constructed responsive stats sheets matching modern token frameworks.",
          "Integrated Zustand state management to keep metric filters running fast."
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
              year: "2023 - 2027",
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
        id: "priya-rao",
        name: "Priya Rao",
        role: "Cloud Engineer",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
        cgpa: "9.1/10",
        skills: ["Cloud Architecture", "Docker setups", "FastAPI backends", "ScyllaDB optimization", "Linux"],
        techUsed: ["FastAPI", "ScyllaDB", "Docker", "AWS API", "Python"],
        bio: "Specializing in Docker deployment layers, ScyllaDB cluster configurations, and scalable cloud APIs.",
        contributions: "Priya managed the Docker compose layouts, optimized ScyllaDB to store seasonal agricultural logs, and built the FastAPI backend routes.",
        dailyTasks: [
          "Developed server endpoints delivering predictive model predictions.",
          "Configured ScyllaDB local keyspaces saving meteorological summaries.",
          "Constructed Docker production scripts for streamlined pipeline integration."
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
              school: "Swami Vivekananda Institute of Technology",
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
  { label: "Client Satisfaction", value: 99.1, suffix: "%" }
];
