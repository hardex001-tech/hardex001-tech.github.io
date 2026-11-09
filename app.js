"use strict";

/* ==========================================================================
   Project Catalog Data (All 9 Discovered Projects with Verified Credibility)
   ========================================================================== */

const PROJECTS = [
  {
    id: "fallline",
    title: "FallLine (v3.5.0)",
    category: "cyber",
    badge: "Flagship Engine",
    badgeCls: "tag-cyan",
    statusBadge: "Verified & Tested",
    statusCls: "tag-success",
    shortDesc: "Multi-vector attack-path analysis and choke-point verification platform. Models shortest Time-to-Compromise (TTC), audits domain email spoofability, ingests Active Directory paths, and auto-generates Ansible & Terraform remediations.",
    tags: ["Python 3.11+", "FastAPI", "NetworkX", "BloodHound AD", "Ansible & Terraform", "MITRE ATT&CK", "SARIF 2.1.0"],
    githubUrl: "https://github.com/hardex001-tech/FallLine",
    caseStudy: {
      problem: "Traditional vulnerability scanners dump hundreds of disconnected alerts without showing how an external attacker connects them into a critical breach, while SecOps teams spend hours writing manual remediation scripts.",
      solution: "Engineered a graph-theoretic attack simulator that correlates network exposure, email spoofing (SPF/DMARC), and Active Directory escalation paths into a unified Dijkstra graph—pinpointing the exact choke point and auto-generating Ansible and Terraform code to neutralize it.",
      highlights: [
        "Graph-Theoretic Attack Modeling: NetworkX Dijkstra implementation calculating realistic Time-to-Compromise (TTC).",
        "Multi-Vector Ingestion: Audits network exposure, live RFC 7208/7489 SPF/DMARC domain records, and BloodHound AD escalation paths.",
        "Automated IaC Remediation: Generates production-ready Ansible playbooks and Terraform policies for identified choke points.",
        "Zero-Trust Socket Re-Probe: Re-verifies remediations over the wire (TCP SYN/RST check) rather than trusting ticket status.",
        "85 automated unit and integration tests passing cleanly under pytest in CI."
      ],
      limitations: "Active Directory ingestion currently operates on exported BloodHound JSON files rather than live LDAP stream queries."
    }
  },
  {
    id: "s3-shield",
    title: "S3-Shield Protocol Defense",
    category: "cyber",
    badge: "Protocol Reverse Proxy",
    badgeCls: "tag-success",
    statusBadge: "Lab Prototype",
    statusCls: "tag-amber",
    shortDesc: "Protocol-level reverse proxy and attack simulation lab neutralizing HTTP Range image amplification and aggressive TCP connection exhaustion on the wire.",
    tags: ["Python", "Socket Programming", "TCP/IP", "SSRF Defense", "Reverse Proxy"],
    githubUrl: "https://github.com/hardex001-tech/S3-Shield-Protocol-Defense-Lab",
    caseStudy: {
      problem: "Automated adversaries exploit HTTP byte-range amplification and TCP socket exhaustion against microservices without triggering simple layer-7 rate limits, while SSRF attempts probe cloud metadata services.",
      solution: "Constructed an inline protocol defense proxy that inspects TCP packet boundaries, normalizes malicious HTTP headers, and prevents SSRF pivot attempts against cloud metadata endpoints (169.254.169.254).",
      highlights: [
        "Engineered safe attack reproducer script benchmarked against unprotected socket targets.",
        "Configured mitigation rules for AWS S3 Block Public Access policies and metadata reflection bypasses.",
        "Measured wire-level mitigation proof under simulated high concurrent connection loads."
      ],
      limitations: "Benchmarked primarily in local containerized environments; enterprise multi-region TLS offloading is pending."
    }
  },
  {
    id: "canary-poison",
    title: "Canary-Poison Deception Trap",
    category: "cyber",
    badge: "Active Deception",
    badgeCls: "tag-amber",
    statusBadge: "Lab Prototype",
    statusCls: "tag-amber",
    shortDesc: "Active deception trap dynamically serving poisoned AWS honeytokens and robots.txt lures to automated botnet scanners probing for .env and backup files.",
    tags: ["Active Defense", "Honeytokens", "Python", "Threat Deception", "C2 Attribution"],
    githubUrl: "https://github.com/hardex001-tech/Canary-Poison-Deception-Trap",
    caseStudy: {
      problem: "Malicious crawlers continuously sweep web servers for leaked configuration files (.env, .git, backup.sql) hiding behind proxy networks, making attribution difficult.",
      solution: "Engineered an active honeytoken deception trap that generates poisoned API keys when probed. When the adversary attempts to use the token, webhook alerts trigger and unmask their infrastructure.",
      highlights: [
        "Dynamically generates realistic honeytoken credentials on forbidden path requests.",
        "Instant webhook alerting fires the second a honeytoken is exercised in the wild.",
        "Zero performance overhead on legitimate web application routing."
      ],
      limitations: "Attribution relies on public cloud provider audit logs (AWS CloudTrail) to capture the unmasked IP."
    }
  },
  {
    id: "netguard",
    title: "NetGuard Network Scanner",
    category: "cyber",
    badge: "Recon & Exposure",
    badgeCls: "tag-cyan",
    statusBadge: "Recon Tooling",
    statusCls: "tag-cyan",
    shortDesc: "Automated network reconnaissance and perimeter monitoring engine scanning open services, banners, and certificate metadata.",
    tags: ["Python", "Nmap Automation", "Port Scanning", "Network Security", "Perimeter Recon"],
    githubUrl: "https://github.com/hardex001-tech/netguard-scanner",
    caseStudy: {
      problem: "Cloud assets and on-premise perimeter servers often drift out of compliance, exposing unmanaged services to public scanning.",
      solution: "Built a scheduled asset discovery crawler that profiles listening TCP/UDP services, verifies banner authenticity, and flags anomalous exposures.",
      highlights: [
        "Multi-threaded socket and Nmap scan pipelines for rapid subnet sweeps.",
        "Audits SSL/TLS certificates and identifies weak cipher configurations.",
        "Emits clean structured JSON and CSV reports for security analysis."
      ],
      limitations: "Optimized for scheduled perimeter auditing rather than continuous SYN packet flooding."
    }
  },
  {
    id: "armorllm",
    title: "ArmorLLM AI Firewall",
    category: "ai",
    badge: "AI & LLM Security",
    badgeCls: "tag-success",
    statusBadge: "Research Prototype",
    statusCls: "tag-amber",
    shortDesc: "Defensive AI firewall and LLM auditor protecting inference endpoints (Ollama, vLLM) against prompt injection and API credential leakage.",
    tags: ["AI Security", "LLM Defense", "Prompt Injection", "Ollama", "Python", "FastAPI"],
    githubUrl: null,
    caseStudy: {
      problem: "Organizations deploying generative AI frequently leave internal inference endpoints open without authentication or guardrails against jailbreaks and prompt injection.",
      solution: "Engineered an inline inspection proxy that sanitizes prompts before reaching the model, detects delimiter manipulation, and blocks systemic extraction attacks.",
      highlights: [
        "Audits for unauthenticated Ollama (port 11434) and vLLM (port 8000) exposures.",
        "Detects indirect prompt injection payloads hidden inside retrieved context.",
        "Maps defenses directly to the OWASP Top 10 for Large Language Models."
      ],
      limitations: "Rule-based delimiter isolation evaluated against local models; high-concurrency token streaming requires additional tuning."
    }
  },
  {
    id: "sentinel-x",
    title: "Sentinel-X Threat Intelligence",
    category: "ai",
    badge: "Threat Intelligence",
    badgeCls: "tag-cyan",
    statusBadge: "Research Pipeline",
    statusCls: "tag-cyan",
    shortDesc: "Autonomous threat intelligence aggregation and correlation engine monitoring emerging CVEs, AlienVault OTX pulses, and active zero-days.",
    tags: ["Threat Intel", "OTX API", "CVE Feeds", "Kill-Chain Analysis", "Python"],
    githubUrl: null,
    caseStudy: {
      problem: "Security analysts drown in thousands of raw threat indicators (IOCs) without knowing which ones correlate to their specific infrastructure.",
      solution: "Created an automated intel pipeline that ingests live OTX pulses and CISA advisories, deduplicating hashes and mapping them to MITRE ATT&CK techniques.",
      highlights: [
        "Automated SHA-256 and IP threat pulse correlation.",
        "Generates actionable defensive blocklists for firewalls and proxies.",
        "Maintains historical database of weaponized exploitation trends."
      ],
      limitations: "Ingestion is currently batch-scheduled rather than utilizing a commercial real-time STIX/TAXII feed."
    }
  },
  {
    id: "lead-pulse",
    title: "Lead-Pulse (Lead+ Engine)",
    category: "saas",
    badge: "Automation Platform",
    badgeCls: "tag-amber",
    statusBadge: "Workflow Automation",
    statusCls: "tag-cyan",
    shortDesc: "Autonomous high-intent lead generation and web intelligence engine with domain profiling, scoring algorithms, and CRM synchronization.",
    tags: ["Python", "FastAPI", "Web Crawling", "Enrichment", "CRM Automation"],
    githubUrl: "https://github.com/hardex001-tech/lead-pulse",
    caseStudy: {
      problem: "Manual B2B prospecting across global markets is slow, inaccurate, and lacks verified domain intent signals.",
      solution: "Built an autonomous crawling and scoring engine that searches across target regions, validates tech stacks, and formats outbound pipelines.",
      highlights: [
        "Concurrent asynchronous HTTP crawlers with rate-limit evasion.",
        "Scoring model ranking leads by hiring signals and technology adoption.",
        "Integration with Notion CRM and webhook pipelines."
      ],
      limitations: "Subject to public search engine rate-limiting and anti-bot challenges."
    }
  },
  {
    id: "chronos",
    title: "Chronos Opportunity Tracker",
    category: "saas",
    badge: "Productivity Platform",
    badgeCls: "tag-cyan",
    statusBadge: "Internal Tool",
    statusCls: "tag-cyan",
    shortDesc: "Full-stack career pipeline and application intelligence platform tracking technical interviews, follow-ups, and recruiter metrics.",
    tags: ["Python", "FastAPI", "SQLite", "Analytics", "Workflow"],
    githubUrl: "https://github.com/hardex001-tech/chronos",
    caseStudy: {
      problem: "Managing dozens of enterprise technical applications across platforms leads to missed follow-ups and unmeasured conversion rates.",
      solution: "Engineered a centralized dashboard with stage-based funnel analytics, automated status reminders, and response time metrics.",
      highlights: [
        "Relational SQLite storage with audit trail logging.",
        "REST API supporting external automation webhooks.",
        "Responsive, dark-mode dashboard with timeline visualizations."
      ],
      limitations: "Single-tenant architecture designed for individual engineering candidate tracking."
    }
  },
  {
    id: "adex-group",
    title: "AdEx Group Infrastructure",
    category: "saas",
    badge: "Enterprise Platform",
    badgeCls: "tag-success",
    statusBadge: "Operational Infrastructure",
    statusCls: "tag-cyan",
    shortDesc: "Enterprise agency operations platform managing client service lifecycles, automated deployment environments, and client deliverables.",
    tags: ["Full-Stack", "Docker", "DevOps", "API Gateway", "Python"],
    githubUrl: "https://github.com/hardex001-tech/adxgroup",
    caseStudy: {
      problem: "Fragmented digital agency operations result in delayed technical deliverables and unmonitored client environments.",
      solution: "Constructed a unified delivery and client portal that automates staging deployments and client milestone verification.",
      highlights: [
        "Containerized multi-service deployment architecture.",
        "Integrated monitoring hooks for uptime and error budgets.",
        "Role-based access control (RBAC) across client projects."
      ],
      limitations: "Built specifically around internal agency service delivery workflows."
    }
  }
];

/* ==========================================================================
   Project Cards Rendering & Filtering
   ========================================================================== */

function renderProjects(filter = "all") {
  const container = document.getElementById("projects-grid");
  if (!container) return;
  container.innerHTML = "";

  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  filtered.forEach((p) => {
    const card = document.createElement("div");
    card.className = "project-card";

    const tagBadges = p.tags.map((t) => `<span class="tag">${t}</span>`).join("");
    const statusTag = p.statusBadge
      ? `<span class="tag ${p.statusCls || ""}">${p.statusBadge}</span>`
      : "";

    const repoLink = p.githubUrl
      ? `<a href="${p.githubUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost">GitHub &rarr;</a>`
      : `<button class="btn btn-sm btn-ghost" onclick="openCaseStudy('${p.id}')">Lab Specs &rarr;</button>`;

    card.innerHTML = `
      <div class="project-top">
        <div class="project-category">
          <span class="tag ${p.badgeCls || ""}">${p.badge}</span>
          ${statusTag}
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.shortDesc}</p>
        <div class="project-tags">${tagBadges}</div>
      </div>
      <div class="project-bottom">
        <button class="btn btn-sm btn-secondary" onclick="openCaseStudy('${p.id}')">Case Study</button>
        ${repoLink}
      </div>
    `;
    container.appendChild(card);
  });
}

function initFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    });
  });
}

/* ==========================================================================
   Case Study Modal (With Focus & Keyboard Trap Support)
   ========================================================================== */

function openCaseStudy(id) {
  const proj = PROJECTS.find((p) => p.id === id);
  if (!proj) return;

  const overlay = document.getElementById("modal-overlay");
  const title = document.getElementById("modal-title");
  const body = document.getElementById("modal-body");

  title.textContent = proj.title + " — Technical Case Study";

  const highlightsHtml = proj.caseStudy.highlights.map((h) => `<li>${h}</li>`).join("");
  const limitationsHtml = proj.caseStudy.limitations
    ? `<h4>Verified Limitations</h4><p class="text-muted" style="font-size:0.875rem;">${proj.caseStudy.limitations}</p>`
    : "";

  const repoAction = proj.githubUrl
    ? `<a href="${proj.githubUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-primary">View GitHub Repository</a>`
    : `<span class="tag tag-amber" style="align-self: center;">Lab Prototype (Source in Private Lab)</span>`;

  body.innerHTML = `
    <div style="margin-bottom: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <span class="tag ${proj.badgeCls || ""}">${proj.badge}</span>
      ${proj.statusBadge ? `<span class="tag ${proj.statusCls || ""}">${proj.statusBadge}</span>` : ""}
    </div>
    <h4>The Problem</h4>
    <p>${proj.caseStudy.problem}</p>
    <h4>The Engineered Solution</h4>
    <p>${proj.caseStudy.solution}</p>
    <h4>Key Technical Highlights</h4>
    <ul>${highlightsHtml}</ul>
    ${limitationsHtml}
    <div style="margin-top: 1.5rem; display: flex; gap: 0.75rem; flex-wrap: wrap;">
      ${repoAction}
      <button class="btn btn-sm btn-secondary" onclick="closeModal()">Close</button>
    </div>
  `;

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(event) {
  if (event && event.target !== event.currentTarget) return;
  const overlay = document.getElementById("modal-overlay");
  if (overlay) {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Close modal on Escape key press
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

/* ==========================================================================
   Architecture & Verification Workbench Tabs
   ========================================================================== */

function switchWorkbenchTab(tabId) {
  const buttons = document.querySelectorAll(".workbench-tab-btn");
  const panes = document.querySelectorAll(".workbench-pane");

  buttons.forEach((btn) => {
    const isTarget = btn.getAttribute("data-tab") === tabId;
    btn.classList.toggle("active", isTarget);
    btn.setAttribute("aria-selected", isTarget ? "true" : "false");
  });

  panes.forEach((pane) => {
    pane.classList.toggle("active", pane.id === tabId);
  });
}

// Make switchWorkbenchTab available globally
window.switchWorkbenchTab = switchWorkbenchTab;
window.openCaseStudy = openCaseStudy;
window.closeModal = closeModal;

/* ==========================================================================
   Email Copy & Anti-Scraping Protection Utility
   ========================================================================== */

function getObfuscatedEmail() {
  // Encoded in base64: hardexmarley340@gmail.com
  const part1 = "aGFyZGV4bWFybGV5";
  const part2 = "MzQwQGdtYWlsLmNvbQ==";
  try {
    return atob(part1 + part2);
  } catch (e) {
    return "";
  }
}

function revealContactEmail() {
  const email = getObfuscatedEmail();
  const link = document.getElementById("contact-email-link");
  if (link && email) {
    link.href = `mailto:${email}`;
    link.textContent = email;
  }
}

function copyContactEmail() {
  const email = getObfuscatedEmail();
  const feedback = document.getElementById("copy-feedback");

  if (!email) return;

  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(() => {
      if (feedback) {
        feedback.textContent = `Copied to clipboard!`;
        setTimeout(() => { feedback.textContent = ""; }, 2500);
      }
    }).catch(() => {
      prompt("Copy email address:", email);
    });
  } else {
    prompt("Copy email address:", email);
  }
}

window.copyContactEmail = copyContactEmail;

/* ==========================================================================
   Mobile Nav Toggle (With Click-Outside and Auto-Close on Navigation)
   ========================================================================== */

function initNavToggle() {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isActive = links.classList.toggle("active");
    toggle.setAttribute("aria-expanded", isActive ? "true" : "false");
  });

  // Auto-close menu when a link inside is clicked
  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!toggle.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

/* ==========================================================================
   Single Consolidated Initialization
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  renderProjects("all");
  initFilters();
  initNavToggle();
  revealContactEmail();
});