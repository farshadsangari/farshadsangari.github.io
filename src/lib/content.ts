export const profile = {
  name: "Farshad Sangari Abiz",
  shortName: "Farshad Sangari",
  initials: "FS",
  role: "AI Software Engineer · Generative AI Researcher",
  location: "Tehran, Iran",
  availability: "Open to PhD & senior AI software engineering roles",
  email: "farshads7778@gmail.com",
  cv: "/Farshad_Sangari_CV.pdf",
  github: "https://github.com/farshadsangari",
  linkedin: "https://www.linkedin.com/in/farshad-sangari/",
  scholar: "https://scholar.google.com/citations?hl=en&user=tfelgV8AAAAJ",
  youtube: "https://www.youtube.com/channel/UCCV6kbjBZje3LPxRp0NHfxg",
  tagline: [
    { text: "AI software engineering" },
    { text: " · ", accent: true },
    { text: "generative AI research" },
  ] as { text: string; accent?: boolean }[],
  intro:
    "AI Engineer and Team Lead for Computer Vision and Generative AI at ModAI, where I design and ship production LLM/VLM services, multimodal retrieval and ranking, and the distributed infrastructure behind them. Previously a researcher at the University of Tehran on interpretable representation learning. Open to PhD & senior AI software engineering roles.",
  focus: [
    "Software architecture for AI systems",
    "LLM / VLM services in production",
    "Retrieval, ranking & recommendation",
    "Interpretable representation learning",
  ] as string[],
  snapshot: [
    { label: "Now", value: "AI Engineer & Team Lead — ModAI (Oct 2023 → present)" },
    { label: "Engineering", value: "4.5+ years building Python services, APIs & MLOps" },
    { label: "Research", value: "MSc AI, University of Tehran — 3.89/4, ranked 3rd in cohort" },
    { label: "Publication", value: "arXiv 2026 — interpretable sparse latent representations" },
  ] as { label: string; value: string }[],
} as const;

export const sections = [
  { id: "index", index: "00", label: "Index" },
  { id: "about", index: "01", label: "About" },
  { id: "skills", index: "02", label: "Capabilities" },
  { id: "experience", index: "03", label: "Experience" },
  { id: "research", index: "04", label: "Research" },
  { id: "projects", index: "05", label: "Projects" },
  { id: "background", index: "06", label: "Background" },
  { id: "contact", index: "07", label: "Contact" },
] as const;


export const marquee = [
  "LLM / VLM systems",
  "Multimodal retrieval",
  "Agentic workflows",
  "Diffusion models",
  "Hybrid search",
  "Interpretability",
  "Kubernetes",
  "Continuous evaluation",
  "Representation learning",
  "Observability",
] as const;

export const about = {
  kicker: "Research rigor, engineering discipline, product judgment.",
  paragraphs: [
    "I work at the intersection of generative AI research and scalable software systems. My background spans interpretable representation learning, multimodal retrieval, computer vision, recommendation, and trustworthy AI.",
    "In industry I turn those foundations into services that are measurable, observable, and resilient — from embedding pipelines and hybrid search to routing, re-ranking, continuous evaluation, and model deployment.",
    "I care about clean interfaces between models, data, and product logic; evaluation that reflects real user journeys; and systems that remain understandable as models and requirements evolve.",
  ],
  principles: [
    {
      title: "Evaluation first",
      body: "Offline and online metrics that mirror the actual user journey, not the convenient benchmark.",
    },
    {
      title: "Legible systems",
      body: "Clean seams between model, data, and product logic so the stack stays readable as it grows.",
    },
    {
      title: "Ship to production",
      body: "Research only counts once it survives autoscaling, peak load, and continuous release.",
    },
  ],
} as const;

export const skills = [
  {
    index: "01",
    title: "Generative & multimodal AI",
    body: "Production LLM/VLM services, CLIP-style alignment, diffusion models, VAEs, multimodal understanding, image editing, and virtual try-on.",
    tags: [
      "Python",
      "PyTorch",
      "PyTorch Lightning",
      "TensorFlow",
      "VLMs",
      "CLIP",
      "Diffusion",
      "Representation learning",
    ],
  },
  {
    index: "02",
    title: "Agentic AI systems",
    body: "Tool-using agents, workflow orchestration, routing, RAG, memory, tracing, and evaluation for multi-step user journeys.",
    tags: ["LangGraph", "LangChain", "CrewAI", "Langfuse", "Memori"],
  },
  {
    index: "03",
    title: "Retrieval, search & ranking",
    body: "Embedding pipelines, ANN/HNSW tuning, hybrid BM25 + vector retrieval, re-ranking, preference fine-tuning, and offline/online evaluation.",
    tags: [
      "Qdrant",
      "Elasticsearch",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "QuestDB",
      "MinIO",
      "Redis",
    ],
  },
  {
    index: "04",
    title: "MLOps & distributed systems",
    body: "Containerized deployment, autoscaling, event-driven data planes, CI/CD, model versioning, continuous evaluation, and infrastructure automation.",
    tags: [
      "Docker",
      "Kubernetes",
      "Kafka",
      "NATS",
      "Airflow",
      "MLflow",
      "Argo CD",
      "Terraform",
      "Ansible",
    ],
  },
  {
    index: "05",
    title: "Reliability & observability",
    body: "SLIs/SLOs, tracing, metrics, logs, alerting, load testing, chaos testing, backpressure, and idempotent processing.",
    tags: [
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
      "SigNoz",
      "Sentry",
      "Whylogs",
      "RabbitMQ",
      "gRPC",
    ],
  },
  {
    index: "06",
    title: "Trustworthy AI research",
    body: "Interpretable and sparse latent spaces, disentanglement, contrastive objectives, robustness, explainability, and out-of-distribution behavior.",
    tags: ["Interpretability", "Metric learning", "OOD", "LIME", "SHAP"],
  },
] as const;

export const experience = [
  {
    from: "Oct 2023",
    to: "Present",
    kind: "Software engineering",
    org: "ModAI",
    orgNote: "AI super-app · multimodal fashion discovery",
    title: "AI Engineer & Team Lead — Computer Vision & Generative AI",
    place: "Tehran, Iran · Hybrid",
    summary:
      "Own the end-to-end software architecture of the AI platform: service design, APIs, data planes, deployment, and evaluation — while leading a small CV/GenAI team.",
    bullets: [
      "Designed and shipped production LLM/VLM services in Python (FastAPI, gRPC) with clean module boundaries, typed contracts, versioned APIs, and automated test suites.",
      "Built retrieval, routing and re-ranking microservices on Docker/Kubernetes with CI/CD, model versioning, blue/green releases and continuous offline+online evaluation.",
      "Engineered batch and real-time embedding pipelines with hybrid BM25 + vector search, ANN/HNSW tuning, caching and autoscaling for peak traffic.",
      "Built event-driven infrastructure (Kafka/NATS) with idempotent consumers, backpressure and effectively-once processing, plus full tracing, metrics and alerting.",
      "Raised ranking quality through preference fine-tuning and improved evaluation loops, and mentored engineers on code review, system design and MLOps practice.",
    ],
    stack: ["Python", "FastAPI", "PyTorch", "Docker", "Kubernetes", "Kafka", "Qdrant", "Postgres"],
  },
  {
    from: "Sep 2023",
    to: "Feb 2025",
    kind: "Teaching",
    org: "University of Tehran",
    orgNote: "School of ECE",
    title: "Chief Teaching Assistant — Deep Generative Models, Trustworthy AI, Deep Learning",
    place: "Tehran, Iran",
    summary:
      "Led TA teams across four graduate courses with Dr. M. Tavassolipour, Dr. M. A. Sadeghi and Dr. R. Hosseini — designing assignments, code frameworks and evaluation.",
    bullets: [],
    stack: [],
  },
  {
    from: "Feb 2022",
    to: "Sep 2024",
    kind: "Research",
    org: "Machine Learning & Computational Modeling Lab",
    orgNote: "University of Tehran",
    title: "Research Assistant — Interpretable Representation Learning",
    place: "Tehran, Iran",
    summary:
      "MSc research on interpretable and disentangled latent representations in VAEs, diffusion models and GANs, including contrastive objectives such as angular and circle loss. Implemented all experiment tooling and reproducible training pipelines in PyTorch.",
    bullets: [],
    stack: [],
  },
  {
    from: "Dec 2022",
    to: "Sep 2023",
    kind: "Research",
    org: "NBIC",
    orgNote: "School of ECE, University of Tehran",
    title: "Research Assistant — Multimodal Emotion Detection",
    place: "Tehran, Iran",
    summary:
      "Built a CLIP-based emotion detection system aligning image and text representations, and collected and processed a 120-subject multimodal dataset.",
    bullets: [],
    stack: [],
  },
] as const;


export const research = {
  lede: "My MSc research investigates structure in sparse latent spaces — connecting class-consistent active dimensions with global and class-specific factors.",
  paper: {
    badge: "Selected publication",
    venue: "arXiv · Jan 2026",
    title: "Enhancing Interpretability of Sparse Latent Representations with Class Information",
    authors: "Farshad Sangari Abiz · Reshad Hosseini · Babak N. Araabi",
    abstract:
      "The work introduces a class-informed objective that encourages samples from the same class to share patterns of active latent dimensions, producing more structured and interpretable sparse representations.",
    url: "https://arxiv.org/abs/2505.14476",
  },
  thesis: {
    badge: "MSc thesis",
    title: "Interpretable Representation Learning via Deep Generative Models",
    detail: "University of Tehran · Advisers: Prof. Babak N. Araabi and Dr. Reshad Hosseini",
  },
  themes: [
    "Sparse representations",
    "VAEs",
    "Diffusion models",
    "Disentanglement",
    "Contrastive learning",
    "Trustworthy AI",
  ],
} as const;

export const projects = [
  {
    index: "01",
    field: "Trustworthy AI",
    title: "Robust Classifier",
    body: "Investigating robust representations and classifiers under corrupted data using metric-learning objectives.",
    tags: ["Jupyter", "Metric learning", "Robustness"],
    url: "https://github.com/farshadsangari/robust_classifier",
  },
  {
    index: "02",
    field: "Generative modeling",
    title: "VAE Variations",
    body: "Implementations and experiments across variational autoencoder formulations.",
    tags: ["VAE", "PyTorch", "Latent space"],
    url: "https://github.com/farshadsangari/vae_variations",
  },
  {
    index: "03",
    field: "Computer vision",
    title: "Inverting Visual Representations",
    body: "Reconstructing images from intermediate CNN feature representations.",
    tags: ["CNN", "Optimization", "Feature inversion"],
    url: "https://github.com/farshadsangari/inverting_visual_representation",
  },
  {
    index: "04",
    field: "Visual attention",
    title: "Saliency Map Prediction",
    body: "Predicting human visual attention using deep neural networks.",
    tags: ["Python", "Deep learning", "Saliency"],
    url: "https://github.com/farshadsangari/saliency_map_prediction",
  },
  {
    index: "05",
    field: "Medical imaging",
    title: "Brain MRI Segmentation",
    body: "U-Net-based semantic segmentation for medical image analysis.",
    tags: ["U-Net", "Segmentation", "PyTorch"],
    url: "https://github.com/farshadsangari/brain_mri_segmentation",
  },
  {
    index: "06",
    field: "Education",
    title: "PyTorch Tutorial",
    body: "Hands-on teaching material for practical deep learning workflows.",
    tags: ["Jupyter", "PyTorch", "Tutorial"],
    url: "https://github.com/farshadsangari/pytorch_tutorial",
  },
] as const;

export const education = [
  {
    period: "2021–2024",
    title: "MSc, Computer Engineering — Artificial Intelligence",
    detail: "University of Tehran · GPA 18.73/20 (3.89/4)",
  },
  {
    period: "2017–2021",
    title: "BSc, Electrical Engineering — Telecommunication",
    detail: "K.N. Toosi University of Technology · GPA 17.00/20 (3.64/4)",
  },
] as const;

export const honors = [
  {
    badge: "Top 3",
    title: "Ranked 3rd in MSc Artificial Intelligence cohort",
    detail: "University of Tehran",
  },
  {
    badge: "30 / 25k+",
    title: "National Master Entrance Exam",
    detail: "Ranked 30th among more than 25,000 candidates",
  },
  {
    badge: "Top 1%",
    title: "Iran Universities Entrance Exam",
    detail: "National academic distinction",
  },
] as const;

export const teaching = [
  {
    role: "Lead TA",
    title: "Probabilistic Graphical Models & Deep Generative Models",
    detail: "Dr. M. Tavassolipour · Sep 2024",
  },
  { role: "Lead TA", title: "Trustworthy AI", detail: "Dr. M. Tavassolipour · Jan 2024" },
  {
    role: "Lead TA",
    title: "Probabilistic Graphical Models & Deep Generative Models",
    detail: "Dr. M. Tavassolipour, Dr. M.A. Sadeghi · Sep 2023",
  },
  {
    role: "Lead TA",
    title: "Deep Learning with Applications",
    detail: "Dr. R. Hosseini · Jan 2023",
  },
  { role: "TA", title: "Machine Learning", detail: "Dr. S. Haratizadeh · Sep 2023" },
  { role: "TA", title: "Statistical Inference", detail: "Dr. M.-R. A. Dehaqani · Sep 2023" },
] as const;
