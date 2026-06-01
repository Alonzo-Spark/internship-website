export interface TaskItem {
  day: number;
  title: string;
  detail: string;
  status: "completed" | "in-progress" | "planned";
}

function getBackendDefaults(): Omit<TaskItem, "day">[] {
  return [
    { title: "Repo Setup", detail: "Forked repository, configured local dev environment, and resolved dependency issues.", status: "completed" },
    { title: "ERD Modeling", detail: "Drafted database entity relationship diagrams for multi-tenant clinical storage.", status: "completed" },
    { title: "Postgres Config", detail: "Created local PostgreSQL Docker container and initialized baseline schema tables.", status: "completed" },
    { title: "ORM Mappings", detail: "Configured SQLAlchemy entities and established active foreign key constraints.", status: "completed" },
    { title: "Initial Routing", detail: "Structured API routes and configured FastAPI framework startup hooks.", status: "completed" },
    { title: "Review #1", detail: "Presented database structure and backend folder organization to team mentor.", status: "completed" },
    { title: "FHIR Compliance", detail: "Mapped clinical data storage models to comply with international HL7/FHIR guidelines.", status: "completed" },
    { title: "Symptom Lookup", detail: "Programmed high-speed GET queries for patient symptom databases.", status: "completed" },
    { title: "Auth0 JWT Integration", detail: "Implemented secure middleware using JWKS decoding for validation checks.", status: "completed" },
    { title: "Logging Setup", detail: "Configured standard system logging with contextual request correlation IDs.", status: "completed" },
    { title: "Pydantic Schemas", detail: "Drafted strict input payload validator schemas for clinical metrics.", status: "completed" },
    { title: "Review #2", detail: "Audited authorization gateway filters and conducted negative path tests.", status: "completed" },
    { title: "Redis Integration", detail: "Configured local Redis broker container for active in-memory state tracking.", status: "completed" },
    { title: "Token Bucket Limiter", detail: "Programmed rate-limiting algorithm filters on patient symptom endpoints.", status: "completed" },
    { title: "Redis Cache Layer", detail: "Implemented caching logic on directory lookups, reducing DB read calls by 60%.", status: "completed" },
    { title: "Unit Testing Core", detail: "Wrote unit test cases using PyTest testing mock backend dependencies.", status: "completed" },
    { title: "Integration Suite", detail: "Established database clean-teardown flows for end-to-end integration workflows.", status: "completed" },
    { title: "Review #3", detail: "Verified rate limiting thresholds and caching invalidation routines under load.", status: "completed" },
    { title: "Index Optimization", detail: "Analyzed EXPLAIN output and constructed indices for rapid query operations.", status: "completed" },
    { title: "Connection Pool", detail: "Optimized connection pool parameters to prevent connection starvation.", status: "completed" },
    { title: "AWS S3 Upload Mock", detail: "Built secure pre-signed URL generators for doctor attachment uploads.", status: "completed" },
    { title: "Exception Handler", detail: "Wrote global exception handlers to clean up operational system error leaks.", status: "completed" },
    { title: "Health Check API", detail: "Created health probes evaluating DB, Redis, and disk memory constraints.", status: "completed" },
    { title: "Review #4", detail: "Verified microservice uptime patterns and handled node failure simulations.", status: "completed" },
    { title: "Swagger Mapping", detail: "Drafted interactive Swagger/OpenAPI routes with comprehensive schema lists.", status: "completed" },
    { title: "CORS Constraints", detail: "Hardened CORS allowances and implemented secure HTTP headers.", status: "completed" },
    { title: "Multi-stage Dockerfile", detail: "Crafted minimal alpine docker configurations, lowering size from 1.2GB to 140MB.", status: "completed" },
    { title: "Backup Automation", detail: "Scripted automated database backups scheduled daily via cron processes.", status: "completed" },
    { title: "Codebase Linting", detail: "Completed final formatting audits, fixed lint alerts, and updated documentation.", status: "completed" },
    { title: "Final Review", detail: "Presented production-ready codebase to principal mentor and signed off.", status: "completed" }
  ];
}

function getFrontendDefaults(): Omit<TaskItem, "day">[] {
  return [
    { title: "Figma Setup", detail: "Reviewed system UI components in Figma and created token structures.", status: "completed" },
    { title: "Vite Initializer", detail: "Configured fresh Vite project template and aligned styling guidelines.", status: "completed" },
    { title: "Base Layout", detail: "Constructed persistent navigation shell and visual branding headers.", status: "completed" },
    { title: "Tailwind Classes", detail: "Created utility tokens for colors, shadows, and smooth font layouts.", status: "completed" },
    { title: "Framer Motion", detail: "Configured baseline transition templates for clean page changes.", status: "completed" },
    { title: "Review #1", detail: "Evaluated design systems and baseline layouts with senior designer.", status: "completed" },
    { title: "Dashboard Wireframe", detail: "Constructed layout slots for metrics blocks and dynamic graphs.", status: "completed" },
    { title: "Recharts Telemetry", detail: "Integrated line charts visualizing real-time patient heartrate variables.", status: "completed" },
    { title: "Zustand Setup", detail: "Programmed core client-side state store supporting UI toggle updates.", status: "completed" },
    { title: "Dynamic Modal Tabs", detail: "Created accessible modal cards listing historical symptom updates.", status: "completed" },
    { title: "Inputs Validation", detail: "Built dynamic client validation filters preventing invalid input types.", status: "completed" },
    { title: "Review #2", detail: "Audited dashboard responsiveness across mobile, tablet, and widescreen views.", status: "completed" },
    { title: "WebSocket Hook", detail: "Programmed custom React hook subscribing to live broadcast updates.", status: "completed" },
    { title: "Alert Panels", detail: "Built real-time alert panels presenting glowing urgent indicators.", status: "completed" },
    { title: "Recharts Tuning", detail: "Tuned rendering configurations to keep updates smooth and artifact-free.", status: "completed" },
    { title: "Component Tests", detail: "Wrote unit tests utilizing Vitest verifying component lifecycle triggers.", status: "completed" },
    { title: "Mock Service Worker", detail: "Configured API mock listeners to support local interface prototyping.", status: "completed" },
    { title: "Review #3", detail: "Evaluated state-synchronization performance on dynamic graph interactions.", status: "completed" },
    { title: "WCAG Accessibility", detail: "Added semantic tags and keyboard navigation to modal cards.", status: "completed" },
    { title: "Aria Roles", detail: "Polished focus management and validated interface screen-reader tags.", status: "completed" },
    { title: "Framer Micro-interactions", detail: "Configured hover transitions on metrics cards.", status: "completed" },
    { title: "Lazy Loading", detail: "Implemented route splitting and component lazy loading parameters.", status: "completed" },
    { title: "Static Analysis pass", detail: "Resolved compiler alerts and cleanups in TypeScript definitions.", status: "completed" },
    { title: "Review #4", detail: "Audited page performance scores using Lighthouse browser utilities.", status: "completed" },
    { title: "Assets Optimization", detail: "Compressed visuals and optimized svg assets for speedy delivery.", status: "completed" },
    { title: "Faux Print styling", detail: "Wrote customized print styles for professional resume exports.", status: "completed" },
    { title: "Webpack Adjustments", detail: "Streamlined bundler configurations to minimize output file sizes.", status: "completed" },
    { title: "Multi-browser audits", detail: "Tested page consistency on Chrome, Safari, Firefox, and Edge engines.", status: "completed" },
    { title: "Formatting Audits", detail: "Run automated styling formatters and polished file documentation.", status: "completed" },
    { title: "Final Review", detail: "Completed final layout presentation and signed off with product advisor.", status: "completed" }
  ];
}

function getAIDefaults(): Omit<TaskItem, "day">[] {
  return [
    { title: "Model Research", detail: "Evaluated appropriate baseline models for text embedding pipelines.", status: "completed" },
    { title: "Python Config", detail: "Created virtual environment, aligning dependency suites in Conda.", status: "completed" },
    { title: "Pinecone Setup", detail: "Initialized vector database index using cosine similarity benchmarks.", status: "completed" },
    { title: "Text Extraction", detail: "Wrote parser tools for clinical PDF transcripts using PyPDF2.", status: "completed" },
    { title: "LangChain Setup", detail: "Configured baseline prompt templates and chain invocation parameters.", status: "completed" },
    { title: "Review #1", detail: "Presented vector indexing concept and retrieval pipeline architecture.", status: "completed" },
    { title: "Embedding Audits", detail: "Audited dense vs sparse embeddings to maximize retrieval score metrics.", status: "completed" },
    { title: "Hugging Face integration", detail: "Configured offline models to produce document embeddings.", status: "completed" },
    { title: "RAG Pipeline", detail: "Wrote semantic search retriever parsing context to LLM nodes.", status: "completed" },
    { title: "Semantic Routing", detail: "Constructed smart classifiers directing query flows dynamically.", status: "completed" },
    { title: "JSON Schema Constraints", detail: "Configured structured model formats for programmatic safety.", status: "completed" },
    { title: "Review #2", detail: "Audited system hallucination rates on negative clinical inputs.", status: "completed" },
    { title: "Gemini Integration", detail: "Connected Gemini model endpoints with dynamic temperature variables.", status: "completed" },
    { title: "Accuracy Analytics", detail: "Created statistical models checking prediction reliability scores.", status: "completed" },
    { title: "Monte Carlo risk setup", detail: "Programmed mathematical simulations checking probability metrics.", status: "completed" },
    { title: "Latencies Analysis", detail: "Analyzed vector fetch timings, implementing key cache layers.", status: "completed" },
    { title: "Prompt Tuning", detail: "Polished instructions to keep responses objective and hallucination-free.", status: "completed" },
    { title: "Review #3", detail: "Reviewed system output latency and configured retrieval optimizations.", status: "completed" },
    { title: "Graph Indexing", detail: "Created pathway networks using graph structures for data lookup.", status: "completed" },
    { title: "ScyllaDB connection", detail: "Configured persistence layers caching processed document embeddings.", status: "completed" },
    { title: "Batch summarization", detail: "Engineered parallel queue pathways handling bulk batch summaries.", status: "completed" },
    { title: "System Stress tests", detail: "Tested system throughput with simultaneous concurrent search feeds.", status: "completed" },
    { title: "WASM integrations", detail: "Compiled mathematical scoring scripts to run directly in web clients.", status: "completed" },
    { title: "Review #4", detail: "Signed off on research benchmarks verifying system stability.", status: "completed" },
    { title: "Security filters", detail: "Wrote strict prompt filters blocking indirect prompt injections.", status: "completed" },
    { title: "Model Metrics graphs", detail: "Programmed visual evaluation reports plotting model telemetry.", status: "completed" },
    { title: "Container Deployment", detail: "Configured deployment assets using multi-stage lightweight builds.", status: "completed" },
    { title: "Benchmarking metrics", detail: "Wrote automated tests evaluating retrieval scores on updates.", status: "completed" },
    { title: "Refactoring & cleanup", detail: "Standardized code styles and completed detailed documentation comments.", status: "completed" },
    { title: "Final Review", detail: "Successfully presented RAG medical recommendation engine to senior lead.", status: "completed" }
  ];
}

function parseTaskText(text: string, day: number): { title: string; detail: string } {
  if (!text) {
    return { title: `Day ${day} Task`, detail: `Completed day ${day} task deliverables.` };
  }
  
  if (text.length <= 40) {
    return { title: text, detail: text };
  }
  
  const punctuationIndex = text.search(/[,;.-]/);
  let titleCandidate = "";
  if (punctuationIndex > 5 && punctuationIndex < 50) {
    titleCandidate = text.substring(0, punctuationIndex).trim();
  } else {
    const words = text.split(/\s+/);
    titleCandidate = words.slice(0, 5).join(" ");
    if (words.length > 5) titleCandidate += "...";
  }
  
  return {
    title: titleCandidate,
    detail: text
  };
}

export function get30DaysTasks(role: string, name: string, dailyTasks: string[]): TaskItem[] {
  const isBackend = role.toLowerCase().includes("backend");
  const isFrontend = role.toLowerCase().includes("frontend");

  // Map each item in dailyTasks (from data.ts)
  const mapped: TaskItem[] = (dailyTasks || []).map((taskText, idx) => {
    const { title, detail } = parseTaskText(taskText, idx + 1);
    return {
      day: idx + 1,
      title: title,
      detail: detail,
      status: "completed"
    };
  });

  // Pad up to 30 tasks using default lists for roles if needed
  if (mapped.length < 30) {
    const defaults = isBackend
      ? getBackendDefaults()
      : isFrontend
        ? getFrontendDefaults()
        : getAIDefaults();

    for (let i = mapped.length; i < 30; i++) {
      mapped.push({
        day: i + 1,
        title: defaults[i]?.title || "Upcoming Task",
        detail: defaults[i]?.detail || "Next phase of deliverables and final evaluation reviews.",
        status: "planned"
      });
    }
  }

  return mapped;
}
