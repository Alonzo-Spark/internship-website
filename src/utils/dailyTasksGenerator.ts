export interface TaskItem {
  day: number;
  title: string;
  detail: string;
  status: "completed" | "in-progress" | "planned";
}

export function get30DaysTasks(role: string, name: string): TaskItem[] {
  const isBackend = role.toLowerCase().includes("backend");
  const isFrontend = role.toLowerCase().includes("frontend");
  const isAi = role.toLowerCase().includes("ai") || role.toLowerCase().includes("ml") || role.toLowerCase().includes("data");

  if (isBackend) {
    return [
      { day: 1, title: "Repo Setup", detail: "Forked repository, configured local dev environment, and resolved dependency issues.", status: "completed" },
      { day: 2, title: "ERD Modeling", detail: "Drafted database entity relationship diagrams for multi-tenant clinical storage.", status: "completed" },
      { day: 3, title: "Postgres Config", detail: "Created local PostgreSQL Docker container and initialized baseline schema tables.", status: "completed" },
      { day: 4, title: "ORM Mappings", detail: "Configured SQLAlchemy entities and established active foreign key constraints.", status: "completed" },
      { day: 5, title: "Initial Routing", detail: "Structured API routes and configured FastAPI framework startup hooks.", status: "completed" },
      { day: 6, title: "Review #1", detail: "Presented database structure and backend folder organization to team mentor.", status: "completed" },
      { day: 7, title: "FHIR Compliance", detail: "Mapped clinical data storage models to comply with international HL7/FHIR guidelines.", status: "completed" },
      { day: 8, title: "Symptom Lookup", detail: "Programmed high-speed GET queries for patient symptom databases.", status: "completed" },
      { day: 9, title: "Auth0 JWT Integration", detail: "Implemented secure middleware using JWKS decoding for validation checks.", status: "completed" },
      { day: 10, title: "Logging Setup", detail: "Configured standard system logging with contextual request correlation IDs.", status: "completed" },
      { day: 11, title: "Pydantic Schemas", detail: "Drafted strict input payload validator schemas for clinical metrics.", status: "completed" },
      { day: 12, title: "Review #2", detail: "Audited authorization gateway filters and conducted negative path tests.", status: "completed" },
      { day: 13, title: "Redis Integration", detail: "Configured local Redis broker container for active in-memory state tracking.", status: "completed" },
      { day: 14, title: "Token Bucket Limiter", detail: "Programmed rate-limiting algorithm filters on patient symptom endpoints.", status: "completed" },
      { day: 15, title: "Redis Cache Layer", detail: "Implemented caching logic on directory lookups, reducing DB read calls by 60%.", status: "completed" },
      { day: 16, title: "Unit Testing Core", detail: "Wrote unit test cases using PyTest testing mock backend dependencies.", status: "completed" },
      { day: 17, title: "Integration Suite", detail: "Established database clean-teardown flows for end-to-end integration workflows.", status: "completed" },
      { day: 18, title: "Review #3", detail: "Verified rate limiting thresholds and caching invalidation routines under load.", status: "completed" },
      { day: 19, title: "Index Optimization", detail: "Analyzed EXPLAIN output and constructed indices for rapid query operations.", status: "completed" },
      { day: 20, title: "Connection Pool", detail: "Optimized connection pool parameters to prevent connection starvation.", status: "completed" },
      { day: 21, title: "AWS S3 Upload Mock", detail: "Built secure pre-signed URL generators for doctor attachment uploads.", status: "completed" },
      { day: 22, title: "Exception Handler", detail: "Wrote global exception handlers to clean up operational system error leaks.", status: "completed" },
      { day: 23, title: "Health Check API", detail: "Created health probes evaluating DB, Redis, and disk memory constraints.", status: "completed" },
      { day: 24, title: "Review #4", detail: "Verified microservice uptime patterns and handled node failure simulations.", status: "completed" },
      { day: 25, title: "Swagger Mapping", detail: "Drafted interactive Swagger/OpenAPI routes with comprehensive schema lists.", status: "completed" },
      { day: 26, title: "CORS Constraints", detail: "Hardened CORS allowances and implemented secure HTTP headers.", status: "completed" },
      { day: 27, title: "Multi-stage Dockerfile", detail: "Crafted minimal alpine docker configurations, lowering size from 1.2GB to 140MB.", status: "completed" },
      { day: 28, title: "Backup Automation", detail: "Scripted automated database backups scheduled daily via cron processes.", status: "completed" },
      { day: 29, title: "Codebase Linting", detail: "Completed final formatting audits, fixed lint alerts, and updated documentation.", status: "completed" },
      { day: 30, title: "Final Review", detail: "Presented production-ready codebase to principal mentor and signed off.", status: "completed" }
    ];
  }

  if (isFrontend) {
    return [
      { day: 1, title: "Figma Setup", detail: "Reviewed system UI components in Figma and created token structures.", status: "completed" },
      { day: 2, title: "Vite Initializer", detail: "Configured fresh Vite project template and aligned styling guidelines.", status: "completed" },
      { day: 3, title: "Base Layout", detail: "Constructed persistent navigation shell and visual branding headers.", status: "completed" },
      { day: 4, title: "Tailwind Classes", detail: "Created utility tokens for colors, shadows, and smooth font layouts.", status: "completed" },
      { day: 5, title: "Framer Motion", detail: "Configured baseline transition templates for clean page changes.", status: "completed" },
      { day: 6, title: "Review #1", detail: "Evaluated design systems and baseline layouts with senior designer.", status: "completed" },
      { day: 7, title: "Dashboard Wireframe", detail: "Constructed layout slots for metrics blocks and dynamic graphs.", status: "completed" },
      { day: 8, title: "Recharts Telemetry", detail: "Integrated line charts visualizing real-time patient heartrate variables.", status: "completed" },
      { day: 9, title: "Zustand Setup", detail: "Programmed core client-side state store supporting UI toggle updates.", status: "completed" },
      { day: 10, title: "Dynamic Modal Tabs", detail: "Created accessible modal cards listing historical symptom updates.", status: "completed" },
      { day: 11, title: "Inputs Validation", detail: "Built dynamic client validation filters preventing invalid input types.", status: "completed" },
      { day: 12, title: "Review #2", detail: "Audited dashboard responsiveness across mobile, tablet, and widescreen views.", status: "completed" },
      { day: 13, title: "WebSocket Hook", detail: "Programmed custom React hook subscribing to live broadcast updates.", status: "completed" },
      { day: 14, title: "Alert Panels", detail: "Built real-time alert panels presenting glowing urgent indicators.", status: "completed" },
      { day: 15, title: "Recharts Tuning", detail: "Tuned rendering configurations to keep updates smooth and artifact-free.", status: "completed" },
      { day: 16, title: "Component Tests", detail: "Wrote unit tests utilizing Vitest verifying component lifecycle triggers.", status: "completed" },
      { day: 17, title: "Mock Service Worker", detail: "Configured API mock listeners to support local interface prototyping.", status: "completed" },
      { day: 18, title: "Review #3", detail: "Evaluated state-synchronization performance on dynamic graph interactions.", status: "completed" },
      { day: 19, title: "WCAG Accessibility", detail: "Added semantic tags and keyboard navigation to modal cards.", status: "completed" },
      { day: 20, title: "Aria Roles", detail: "Polished focus management and validated interface screen-reader tags.", status: "completed" },
      { day: 21, title: "Framer Micro-interactions", detail: "Configured smooth hover transitions on metrics cards.", status: "completed" },
      { day: 22, title: "Lazy Loading", detail: "Implemented route splitting and component lazy loading parameters.", status: "completed" },
      { day: 23, title: "Static Analysis pass", detail: "Resolved compiler alerts and cleanups in TypeScript definitions.", status: "completed" },
      { day: 24, title: "Review #4", detail: "Audited page performance scores using Lighthouse browser utilities.", status: "completed" },
      { day: 25, title: "Assets Optimization", detail: "Compressed visuals and optimized svg assets for speedy delivery.", status: "completed" },
      { day: 26, title: "Faux Print styling", detail: "Wrote customized print styles for professional resume exports.", status: "completed" },
      { day: 27, title: "Webpack Adjustments", detail: "Streamlined bundler configurations to minimize output file sizes.", status: "completed" },
      { day: 28, title: "Multi-browser audits", detail: "Tested page consistency on Chrome, Safari, Firefox, and Edge engines.", status: "completed" },
      { day: 29, title: "Formatting Audits", detail: "Run automated styling formatters and polished file documentation.", status: "completed" },
      { day: 30, title: "Final Review", detail: "Completed final layout presentation and signed off with product advisor.", status: "completed" }
    ];
  }

  // AI & ML Developer & Data Science Custom Tasks
  return [
    { day: 1, title: "Model Research", detail: "Evaluated appropriate baseline models for text embedding pipelines.", status: "completed" },
    { day: 2, title: "Python Config", detail: "Created virtual environment, aligning dependency suites in Conda.", status: "completed" },
    { day: 3, title: "Pinecone Setup", detail: "Initialized vector database index using cosine similarity benchmarks.", status: "completed" },
    { day: 4, title: "Text Extraction", detail: "Wrote parser tools for clinical PDF transcripts using PyPDF2.", status: "completed" },
    { day: 5, title: "LangChain Setup", detail: "Configured baseline prompt templates and chain invocation parameters.", status: "completed" },
    { day: 6, title: "Review #1", detail: "Presented vector indexing concept and retrieval pipeline architecture.", status: "completed" },
    { day: 7, title: "Embedding Audits", detail: "Audited dense vs sparse embeddings to maximize retrieval score metrics.", status: "completed" },
    { day: 8, title: "Hugging Face integration", detail: "Configured offline models to produce document embeddings.", status: "completed" },
    { day: 9, title: "RAG Pipeline", detail: "Wrote semantic search retriever parsing context to LLM nodes.", status: "completed" },
    { day: 10, title: "Semantic Routing", detail: "Constructed smart classifiers directing query flows dynamically.", status: "completed" },
    { day: 11, title: "JSON Schema Constraints", detail: "Configured structured model formats for programmatic safety.", status: "completed" },
    { day: 12, title: "Review #2", detail: "Audited system hallucination rates on negative clinical inputs.", status: "completed" },
    { day: 13, title: "Gemini Integration", detail: "Connected Gemini model endpoints with dynamic temperature variables.", status: "completed" },
    { day: 14, title: "Accuracy Analytics", detail: "Created statistical models checking prediction reliability scores.", status: "completed" },
    { day: 15, title: "Monte Carlo risk setup", detail: "Programmed mathematical simulations checking probability metrics.", status: "completed" },
    { day: 16, title: "Latencies Analysis", detail: "Analyzed vector fetch timings, implementing key cache layers.", status: "completed" },
    { day: 17, title: "Prompt Tuning", detail: "Polished instructions to keep responses objective and hallucination-free.", status: "completed" },
    { day: 18, title: "Review #3", detail: "Reviewed system output latency and configured retrieval optimizations.", status: "completed" },
    { day: 19, title: "Graph Indexing", detail: "Created pathway networks using graph structures for data lookup.", status: "completed" },
    { day: 20, title: "ScyllaDB connection", detail: "Configured persistence layers caching processed document embeddings.", status: "completed" },
    { day: 21, title: "Batch summarization", detail: "Engineered parallel queue pathways handling bulk batch summaries.", status: "completed" },
    { day: 22, title: "System Stress tests", detail: "Tested system throughput with simultaneous concurrent search feeds.", status: "completed" },
    { day: 23, title: "WASM integrations", detail: "Compiled mathematical scoring scripts to run directly in web clients.", status: "completed" },
    { day: 24, title: "Review #4", detail: "Signed off on research benchmarks verifying system stability.", status: "completed" },
    { day: 25, title: "Security filters", detail: "Wrote strict prompt filters blocking indirect prompt injections.", status: "completed" },
    { day: 26, title: "Model Metrics graphs", detail: "Programmed visual evaluation reports plotting model telemetry.", status: "completed" },
    { day: 27, title: "Container Deployment", detail: "Configured deployment assets using multi-stage lightweight builds.", status: "completed" },
    { day: 28, title: "Benchmarking metrics", detail: "Wrote automated tests evaluating retrieval scores on updates.", status: "completed" },
    { day: 29, title: "Refactoring & cleanup", detail: "Standardized code styles and completed detailed documentation comments.", status: "completed" },
    { day: 30, title: "Final Review", detail: "Successfully presented RAG medical recommendation engine to senior lead.", status: "completed" }
  ];
}
