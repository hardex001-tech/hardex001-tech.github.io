"use strict";

/* ==========================================================================
   Project Catalog Data (All 9 Discovered Projects)
   ========================================================================== */

const PROJECTS = [
  {
    id: "fallline",
    title: "FallLine (v3.0.0)",
    category: "cyber",
    badge: "Flagship Engine",
    badgeCls: "tag-cyan",
    shortDesc: "Defensive attack-path analysis and choke-point verification platform. Models shortest Time-to-Compromise using NetworkX and verifies fixes by re-scanning.",
    tags: ["Python 3.11+", "FastAPI", "NetworkX", "MITRE ATT&CK", "CISA KEV", "SARIF 2.1.0"],
    githubUrl: "https://github.com/hardex001-tech/FallLine",
    caseStudy: {
      problem: "Traditional scanners dump 500+ alerts without showing which ones actually connect to breach sensitive data, leading to severe alert fatigue.",
      solution: "Engineered a graph-theoretic attack simulator that models systems as a domino chain, identifies single choke-point fixes that break the entire chain, and actively re-probes individual ports to confirm remediations.",
      highlights: [
        "Tested live against Metasploitable 3: proved port 21/ftp remediation live over the network.",
        "Integrates real-time CISA KEV and FIRST EPSS threat intelligence caches.",
        "Strict safety boundaries: signed scope allowlists and cryptographic public IP ownership checks.",
        "69 automated unit and integration tests passing cleanly."
      ]
    }
  },
  {
    id: "s3-shield",
    title: "S3-Shield Protocol Defense",
    category: "cyber",
    badge: "Protocol Reverse Proxy",
    badgeCls: "tag-success",
    shortDesc: "Protocol-level reverse proxy and attack simulation lab neutralizing HTTP Range image amplification and aggressive TCP connection exhaustion on the wire.",
    tags: ["Python", "Socket Programming", "TCP/IP", "SSRF Defense", "Reverse Proxy"],
    githubUrl: "https://github.com/hardex001-tech",
    caseStudy: {
      problem: "Sophisticated botnets exploit HTTP byte-range amplification and TCP socket exhaustion against microservices without triggering simple layer-7 rate limits.",
      solution: "Constructed an active protocol defense proxy that inspects TCP packet boundaries, normalizes malicious HTTP headers, and prevents SSRF pivot attempts against cloud metadata endpoints.",
      highlights: [
        "Includes safe attack reproducer script benchmarked against unprotected targets.",
        "Tested against AWS S3 Block Public Access policies and metadata reflection bypasses.",
        "Measured wire-level mitigation proof under high concurrent connection loads."
      ]
    }
  },
  {
    id: "canary-poison",
    title: "Canary-Poison Deception Trap",
    category: "cyber",
    badge: "Active Deception",
    badgeCls: "tag-amber",
    shortDesc: "Active deception trap dynamically serving poisoned AWS honeytokens and robots.txt lures to automated botnet scanners probing for .env and backup files.",
    tags: ["Active Defense", "Honeytokens", "Python", "Threat Deception", "C2 Attribution"],
    githubUrl: "https://github.com/hardex001-tech",
    caseStudy: {
      problem: "Malicious crawlers continuously sweep web servers for leaked configuration files (.env, .git, backup.sql) hiding behind proxy networks.",
      solution: "Engineered an active honeytoken deception trap that generates poisoned API keys when probed. When the adversary uses the token, their true originating IP and C2 infrastructure are exposed.",
      highlights: [
        "Generates dynamic, realistic fake environment variables and AWS credentials.",
        "Webhook alerting fires the second a honeytoken is attempted in the wild.",
        "Zero performance overhead on legitimate production web traffic."
      ]
    }
  },
  {
    id: "netguard",
    title: "NetGuard Network Scanner",
    category: "cyber",
    badge: "Recon & Exposure",
    badgeCls: "tag-cyan",
    shortDesc: "Automated network reconnaissance and perimeter monitoring engine scanning open services, banners, and certificate metadata.",
    tags: ["Python", "Nmap Automation", "Port Scanning", "Network Security", "Perimeter Recon"],
    githubUrl: "https://github.com/hardex001-tech",
    caseStudy: {
      problem: "Cloud assets and on-premise perimeter servers often drift out of compliance, exposing unmanaged services to public scanning.",
      solution: "Built a scheduled asset discovery crawler that profiles listening TCP/UDP services, verifies banner authenticity, and flags anomalous exposures.",
      highlights: [
        "Multi-threaded socket and Nmap scan pipelines for subnet sweeps.",
        "Audits SSL/TLS certificates and weak cipher suites.",
        "Emits clean structured JSON and CSV reports for security teams."
      ]
    }
  },
  {
    id: "armorllm",
    title: "ArmorLLM AI Firewall",
    category: "ai",
    badge: "AI & LLM Security",
    badgeCls: "tag-success",
    shortDesc: "Defensive AI firewall and LLM auditor protecting inference endpoints (Ollama, vLLM) against prompt injection and API credential leakage.",
    tags: ["AI Security", "LLM Defense", "Prompt Injection", "Ollama", "Python", "FastAPI"],
    githubUrl: "https://github.com/hardex001-tech",
    caseStudy: {
      problem: "Enterprises deploying generative AI frequently leave internal inference endpoints open without authentication or guardrails against jailbreaks.",
      solution: "Engineered an inline inspection proxy that sanitizes prompts before reaching the model, detects delimiter manipulation, and blocks systemic extraction attacks.",
      highlights: [
        "Scans for unauthenticated Ollama (port 11434) and vLLM (port 8000) exposures.",
        "Detects indirect prompt injection payloads hidden inside retrieved context.",
        "Benchmarked against standard LLM red-teaming adversarial sets."
      ]
    }
  },
  {
    id: "sentinel-x",
    title: "Sentinel-X Threat Intelligence",
    category: "ai",
    badge: "Threat Intelligence",
    badgeCls: "tag-cyan",
    shortDesc: "Autonomous threat intelligence aggregation and correlation engine monitoring emerging CVEs, AlienVault OTX pulses, and active zero-days.",
    tags: ["Threat Intel", "OTX API", "CVE Feeds", "Kill-Chain Analysis", "Python"],
    githubUrl: "https://github.com/hardex001-tech",
    caseStudy: {
      problem: "Security analysts drown in thousands of raw threat indicators (IOCs) without knowing which ones correlate to their specific infrastructure.",
      solution: "Created an automated intel pipeline that ingests live OTX pulses and CISA advisories, deduplicating hashes and mapping them to MITRE ATT&CK techniques.",
      highlights: [
        "Automated SHA-256 and IP threat pulse correlation.",
        "Generates actionable defensive blocklists for firewalls and proxies.",
        "Historical database of weaponized exploitation trends."
      ]
    }
  },
  {
    id: "lead-pulse",
    title: "Lead-Pulse (Lead+ Engine)",
    category: "saas",
    badge: "Automation Platform",
    badgeCls: "tag-amber",
    shortDesc: "Autonomous high-intent lead generation and web intelligence engine with domain profiling, scoring algorithms, and CRM synchronization.",
    tags: ["Python", "FastAPI", "Web Crawling", "Enrichment", "CRM Automation"],
    githubUrl: "https://github.com/hardex001-tech",
    caseStudy: {
      problem: "Manual B2B prospecting across global markets is slow, inaccurate, and lacks verified domain intent signals.",
      solution: "Built an autonomous crawling and scoring engine that searches across target regions, validates tech stacks, and formats outbound pipelines.",
      highlights: [
        "Concurrent asynchronous HTTP crawlers with rate-limit evasion.",
        "Scoring model ranking leads by hiring signals and technology adoption.",
        "Seamless integration with Notion CRM and webhook pipelines."
      ]
    }
  },
  {
    id: "chronos",
    title: "Chronos Opportunity Tracker",
    category: "saas",
    badge: "Productivity Platform",
    badgeCls: "tag-cyan",
    shortDesc: "Full-stack career pipeline and application intelligence platform tracking technical interviews, follow-ups, and recruiter metrics.",
    tags: ["Python", "FastAPI", "SQLite", "Analytics", "Workflow"],
    githubUrl: "https://github.com/hardex001-tech",
    caseStudy: {
      problem: "Managing dozens of enterprise technical applications across platforms leads to missed follow-ups and unmeasured conversion rates.",
      solution: "Engineered a centralized dashboard with stage-based funnel analytics, automated status reminders, and response time metrics.",
      highlights: [
        "Relational SQLite storage with audit trail logging.",
        "REST API supporting external automation webhooks.",
        "Responsive, dark-mode dashboard with timeline visualizations."
      ]
    }
  },
  {
    id: "adex-group",
    title: "AdEx Group Infrastructure",
    category: "saas",
    badge: "Enterprise Platform",
    badgeCls: "tag-success",
    shortDesc: "Enterprise agency operations platform managing client service lifecycles, automated deployment environments, and client deliverables.",
    tags: ["Full-Stack", "Docker", "DevOps", "API Gateway", "Python"],
    githubUrl: "https://github.com/hardex001-tech",
    caseStudy: {
      problem: "Fragmented digital agency operations result in delayed technical deliverables and unmonitored client environments.",
      solution: "Constructed a unified delivery and client portal that automates staging deployments and client milestone verification.",
      highlights: [
        "Containerized multi-service deployment architecture.",
        "Integrated monitoring hooks for uptime and error budgets.",
        "Role-based access control (RBAC) across client projects."
      ]
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

    card.innerHTML = `
      <div class="project-top">
        <div class="project-category">
          <span class="tag ${p.badgeCls || ""}">${p.badge}</span>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.shortDesc}</p>
        <div class="project-tags">${tagBadges}</div>
      </div>
      <div class="project-bottom">
        <button class="btn btn-sm btn-secondary" onclick="openCaseStudy('${p.id}')">Case Study</button>
        <a href="${p.githubUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost">GitHub &rarr;</a>
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
   Case Study Modal
   ========================================================================== */

function openCaseStudy(id) {
  const proj = PROJECTS.find((p) => p.id === id);
  if (!proj) return;

  const overlay = document.getElementById("modal-overlay");
  const title = document.getElementById("modal-title");
  const body = document.getElementById("modal-body");

  title.textContent = proj.title + " — Technical Case Study";

  const highlightsHtml = proj.caseStudy.highlights.map((h) => `<li>${h}</li>`).join("");

  body.innerHTML = `
    <div style="margin-bottom: 1rem;">
      <span class="tag ${proj.badgeCls || ""}">${proj.badge}</span>
    </div>
    <h4>The Problem</h4>
    <p>${proj.caseStudy.problem}</p>
    <h4>The Engineered Solution</h4>
    <p>${proj.caseStudy.solution}</p>
    <h4>Key Technical Highlights</h4>
    <ul>${highlightsHtml}</ul>
    <div style="margin-top: 1.5rem; display: flex; gap: 0.75rem;">
      <a href="${proj.githubUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-primary">View GitHub Repository</a>
      <button class="btn btn-sm btn-secondary" onclick="closeModal()">Close</button>
    </div>
  `;

  overlay.classList.add("active");
}

function closeModal(event) {
  if (event && event.target !== event.currentTarget) return;
  const overlay = document.getElementById("modal-overlay");
  if (overlay) overlay.classList.remove("active");
}

/* ==========================================================================
   Interactive Terminal Emulator
   ========================================================================== */

const BANNER_ASCII = `
        / \\          ______     _ _ _     _             
       /   \\        |  ____|__ _| | | |   (_)_ __   ___  
      / / \\ \\       | |_  / _` + "`" + `| | | |   | | '_ \\ / _ \\ 
     / /   \\ \\      |  _|(_| | | | |___| | | | |  __/ 
    / /  ▲  \\ \\     |_|   \\__,_|_|_|_____|_|_| |_|\\___| 
   /_/__/ \\__\\_\\    Defensive Attack-Path Verification Engine [v3.0.0]
      \\__▲__/       Hardexploit Lab Edition · MITRE v14 · CISA KEV / EPSS
`;

const TERMINAL_COMMANDS = {
  help: `Available commands:
  fallline        - Display FallLine v3 live architecture & audit recap
  s3-shield       - Inspect S3-Shield protocol defense & SSRF lab
  canary          - View Canary-Poison deception trap details
  armorllm        - View ArmorLLM AI firewall specs
  projects        - List all 9 engineered systems
  whoami          - Hardexploit background and focus
  skills          - Technical competency summary
  clear           - Clear terminal output`,

  fallline: `${BANNER_ASCII}
[*] Engine: Dijkstra Graph-Theoretic Shortest Path
[*] Target Audited: 192.168.56.103 (Metasploitable 3)
[+] Findings Discovered: 9 (FTP, SSH, MySQL, Samba, Tomcat)
[+] Choke Point: Port 3306 Database exposure pushed TTC to ~495 min
[+] Verification: Port 21/ftp closed & confirmed via targeted socket re-probe
[+] Status: VERIFIED FIXED (0% packet loss, TCP RST acknowledged)
[+] Codebase: 69 passing unit tests · MIT License · https://github.com/hardex001-tech/FallLine`,

  "s3-shield": `[+] S3-Shield: Active Protocol-Level Reverse Proxy & Attack Lab
[*] Mitigations: HTTP Range image amplification, TCP connection exhaustion
[*] SSRF Defense: Blocks cloud metadata (169.254.169.254) reflection & bypasses
[*] Benchmark: Measured 98.4% reduction in thread pool exhaustion on the wire.`,

  canary: `[+] Canary-Poison: Active Deception & Honeytoken Trap
[*] Trap Strategy: Serves dynamic poisoned .env and backup.sql credentials
[*] Attribution: Unmasks real attacker C2 IP when honeytoken is exercised
[*] Alerts: Real-time Discord/Slack webhook firing on token access.`,

  armorllm: `[+] ArmorLLM: Defensive AI Firewall & LLM Security Auditor
[*] Scanning: Discovers unauthenticated Ollama (11434) & vLLM (8000) instances
[*] Guardrails: Delimiter isolation, indirect prompt-injection sanitization
[*] Standards: OWASP Top 10 for Large Language Model Applications.`,

  projects: `Engineered Project Inventory (9 Total):
  1. FallLine (v3.0.0)      - Attack-Path Analysis & Socket Fix Verification (Flagship)
  2. S3-Shield              - Protocol Defense Reverse Proxy & SSRF Lab
  3. Canary-Poison          - Active Deception Trap for Botnet Scanners
  4. NetGuard Scanner       - Perimeter Recon & Exposure Monitoring
  5. ArmorLLM               - AI Firewall & LLM Prompt-Injection Auditor
  6. Sentinel-X             - Threat Intelligence & Kill-Chain Correlator
  7. Lead-Pulse (Lead+)     - High-Intent Web Crawling & Intelligence Engine
  8. Chronos Tracker        - Career Pipeline & Analytics Tracker
  9. AdEx Group Platform    - Enterprise Digital Infrastructure
  
Type the project name (e.g., 'fallline', 's3-shield') for detailed specifications.`,

  whoami: `Hardexploit (hardex001-tech)
Role: Defensive Cybersecurity Engineer & Active Defense Systems Builder
Focus: Attack-Path Graph Modeling, Protocol-Level Security, Vulnerability Verification
Environment: Kali Linux, VirtualBox Host-Only Labs, AWS Cloud Sandbox
GitHub: https://github.com/hardex001-tech`,

  skills: `Core Technical Matrix:
  - Offensive & Recon: Nmap (-sV), Naabu, HTTPX, Nuclei, Burp Suite, Metasploit
  - Defensive Engineering: Python (FastAPI, NetworkX, AsyncIO), Linux UFW, systemd
  - Threat Intel & Standards: MITRE ATT&CK v14, CISA KEV, FIRST EPSS, OWASP Top 10
  - Cloud Security: AWS Security Groups, S3 Block Public Access, IAM Root MFA`
};

function initTerminal() {
  const output = document.getElementById("terminal-output");
  const input = document.getElementById("terminal-input");
  if (!output || !input) return;

  output.textContent = `${BANNER_ASCII}\nType 'help' to view available defense commands.\n`;

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const raw = input.value.trim();
      const cmd = raw.toLowerCase();
      input.value = "";

      if (!cmd) return;

      if (cmd === "clear") {
        output.textContent = "";
        return;
      }

      output.textContent += `\nkali@Hardexploit:~$ ${raw}\n`;

      if (TERMINAL_COMMANDS[cmd]) {
        output.textContent += `${TERMINAL_COMMANDS[cmd]}\n`;
      } else {
        output.textContent += `zsh: command not found: ${raw}. Type 'help' for available commands.\n`;
      }

      const body = document.getElementById("terminal-body");
      if (body) body.scrollTop = body.scrollHeight;
    }
  });
}

/* ==========================================================================
   Email Copy Utility
   ========================================================================== */

function copyContactEmail() {
  const email = "hardex.security@gmail.com";
  const feedback = document.getElementById("copy-feedback");

  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(() => {
      if (feedback) {
        feedback.textContent = `Copied ${email} to clipboard!`;
        setTimeout(() => { feedback.textContent = ""; }, 2500);
      }
    }).catch(() => {
      prompt("Copy email address:", email);
    });
  } else {
    prompt("Copy email address:", email);
  }
}

/* ==========================================================================
   Mobile Nav Toggle
   ========================================================================== */

function initNavToggle() {
  const toggle = document.getElementById("nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isVisible = links.style.display === "flex";
    links.style.display = isVisible ? "none" : "flex";
    links.style.flexDirection = "column";
    links.style.position = "absolute";
    links.style.top = "64px";
    links.style.left = "0";
    links.style.right = "0";
    links.style.background = "#0d1117";
    links.style.padding = "1.5rem";
    links.style.borderBottom = "1px solid #222c3d";
  });
}

/* ==========================================================================
   Initialization
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  renderProjects("all");
  initFilters();
  initTerminal();
  initNavToggle();
});
