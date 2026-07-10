"use strict";

const STORAGE_KEY = "andrea-law-ai-account-plan-tool-v1";
const REFERENCE_DATE = new Date("2026-07-10T00:00:00");

const sampleCSVs = {
  accounts: `account_id,account_name,segment,industry,region,owner,renewal_date,stage,health_score,arr_band
A100,Company A,Enterprise,Healthcare,US East,Andrea Law,2026-09-22,Onboarding,62,$500k-$1M
A200,Company B,Enterprise,Financial Services,Australia,Andrea Law,2026-08-19,Expansion,54,$1M-$2M
A300,Company C,Mid-market,Retail,US West,Andrea Law,2027-01-30,Adopted,83,$250k-$500k
A400,Company D,Startup,AI Research,US Central,Andrea Law,2026-10-05,Pilot,71,$100k-$250k
A500,Company E,Enterprise,Manufacturing,Australia,Andrea Law,2026-07-28,Stabilization,48,$500k-$1M`,
  stakeholders: `account_id,name,role,influence,sentiment,last_contact_date
A100,Maya Chen,VP Platform Engineering,High,Supportive,2026-07-03
A100,David Patel,Security Lead,Medium,Cautious,2026-06-28
A100,Grace Wilson,ML Operations Manager,Medium,Neutral,2026-06-22
A200,Oliver Brown,Head of Infrastructure,High,Cautious,2026-07-01
A200,Sofia Ahmed,FinOps Lead,High,Concerned,2026-06-18
A200,Noah Smith,AI Platform Lead,Medium,Supportive,2026-07-05
A300,Ethan Martinez,Director of Data Platforms,High,Supportive,2026-07-07
A300,Chloe Nguyen,Product Analytics Lead,Medium,Supportive,2026-06-30
A400,Priya Kapoor,Founder and CTO,High,Supportive,2026-07-04
A400,James Lee,Research Engineering Manager,Medium,Neutral,2026-06-26
A500,Amelia Taylor,Group CIO,High,Concerned,2026-06-21
A500,Liam Walker,Platform Operations Lead,High,Cautious,2026-07-02`,
  tickets: `account_id,ticket_id,severity,status,age_days,theme,customer_impact
A100,SUP-1842,P1,Open,5,RBAC onboarding,"Delayed production readiness for regulated data teams"
A100,SUP-1760,P2,In Progress,14,Training,"Admins unsure how to delegate access safely"
A200,SUP-1888,P1,Open,9,Cost visibility,"Customer cannot explain idle infrastructure cost to finance"
A200,SUP-1810,P2,Open,21,Performance,"Provisioning times spike during ML experiment bursts"
A300,SUP-1501,P3,Resolved,3,Documentation,"Minor confusion in internal onboarding guide"
A400,SUP-1870,P2,Open,6,Quota management,"Research teams need clearer guardrails before pilot expansion"
A500,SUP-1902,P0,Open,2,Service reliability,"Executive sponsor paused rollout after repeated environment failures"
A500,SUP-1822,P1,In Progress,18,Change management,"Site teams need a safer migration and rollback plan"`,
  usage: `account_id,tenant_envs,active_users,provisioning_time_minutes,weekly_active_projects,gpu_or_ai_workload_signal
A100,12,68,18,9,Yes
A200,16,94,42,13,Yes
A300,7,42,12,6,No
A400,4,18,25,5,Yes
A500,9,55,58,7,No`,
  notes: `account_id,date,meeting_type,summary,commitments,risks
A100,2026-07-03,Onboarding review,"Security and ML teams aligned on pilot scope but need RBAC decision before go-live","TAM to provide readiness checklist; customer to nominate admin owners","Access model unclear for regulated workloads"
A100,2026-04-08,Executive check-in,"Sponsor wants measurable reduction in platform onboarding time","Prepare value baseline before QBR","Executive value narrative not yet quantified"
A200,2026-07-05,Technical review,"AI platform team is growing usage but finance is challenging idle cost","Create cost/adoption narrative and review right-sizing options","Renewal risk if FinOps concern is not resolved"
A200,2026-03-18,QBR,"Customer saw adoption growth but requested stronger cost visibility","Follow up with finance dashboard proposal","Expansion blocked by budget scrutiny"
A300,2026-06-30,QBR,"Customer is satisfied and wants to onboard two additional product teams","Prepare expansion success plan","Need training capacity for new teams"
A400,2026-07-04,Pilot review,"Founder wants a simple path from pilot to repeatable self-service environments","Define pilot exit criteria","Small team needs lightweight governance"
A500,2026-07-02,Incident review,"Rollout confidence dropped after repeated environment failures","Create stabilization plan and executive recovery update","Renewal at risk if reliability story does not improve"`
};

const accountProfiles = {
  A100: {
    objective: "Launch isolated environments for regulated ML and analytics teams without slowing security review.",
    technicalEnvironment: "Shared Kubernetes platform, healthcare data controls, strict RBAC, audit-ready access reviews.",
    successKpis: ["Reduce environment onboarding from 10 days to 2 days", "Complete RBAC model before production launch", "Train 12 platform admins"],
    trainingNeeds: ["Admin access model", "Tenant onboarding checklist", "Security review workflow"],
    milestones: ["Confirm admin ownership", "Complete RBAC design", "Run production readiness review", "Prepare executive adoption baseline"]
  },
  A200: {
    objective: "Scale internal AI platform adoption while keeping cost, performance, and tenant isolation understandable to finance and risk teams.",
    technicalEnvironment: "Hybrid cloud platform, bursty ML experimentation, FinOps scrutiny, production reliability expectations.",
    successKpis: ["Cut provisioning time under 20 minutes", "Create monthly cost/adoption review", "Resolve P1 FinOps and performance tickets"],
    trainingNeeds: ["Cost reporting workflow", "Performance triage", "Executive QBR storytelling"],
    milestones: ["Build cost visibility story", "Review performance bottlenecks", "Prepare renewal risk recovery plan", "Identify expansion path after finance sign-off"]
  },
  A300: {
    objective: "Expand self-service analytics environments to more retail product teams.",
    technicalEnvironment: "Maturing internal developer platform, moderate governance, strong product analytics demand.",
    successKpis: ["Onboard 2 new teams", "Keep provisioning under 15 minutes", "Maintain health score above 80"],
    trainingNeeds: ["Team onboarding playbook", "Usage dashboard literacy", "Internal champion enablement"],
    milestones: ["Confirm expansion teams", "Run enablement session", "Publish account success story", "Schedule next QBR"]
  },
  A400: {
    objective: "Turn a research pilot into a repeatable, lightweight platform operating model.",
    technicalEnvironment: "Small AI research team, limited operations capacity, strong GPU experimentation signal.",
    successKpis: ["Define pilot exit criteria", "Keep admin effort below 4 hours per week", "Document quota and guardrail model"],
    trainingNeeds: ["Quota management", "Pilot success criteria", "Lightweight incident process"],
    milestones: ["Agree pilot exit criteria", "Create quota template", "Review security basics", "Decide scale-up plan"]
  },
  A500: {
    objective: "Recover rollout confidence and stabilize platform operations before renewal.",
    technicalEnvironment: "Distributed manufacturing sites, reliability concerns, change-management complexity, executive sponsor pressure.",
    successKpis: ["Resolve P0 reliability issue", "Publish rollback plan", "Complete executive recovery review", "Increase health score above 65"],
    trainingNeeds: ["Operational readiness", "Incident communication", "Rollback and migration planning"],
    milestones: ["Close reliability escalation", "Run recovery workshop", "Confirm migration sequence", "Prepare renewal confidence narrative"]
  }
};

const csvConfigs = [
  { key: "accounts", label: "accounts.csv" },
  { key: "stakeholders", label: "stakeholders.csv" },
  { key: "tickets", label: "tickets.csv" },
  { key: "usage", label: "usage.csv" },
  { key: "notes", label: "notes.csv" }
];

let state = loadState();
let selectedAccountId = state.accounts[0]?.account_id || "";
let currentView = "dashboard";

const el = {
  navButtons: document.querySelectorAll(".nav-button"),
  views: {
    dashboard: document.getElementById("dashboardView"),
    account: document.getElementById("accountView"),
    plan: document.getElementById("planView"),
    workbench: document.getElementById("workbenchView"),
    import: document.getElementById("importView")
  },
  accountSearch: document.getElementById("accountSearch"),
  metricGrid: document.getElementById("metricGrid"),
  accountCards: document.getElementById("accountCards"),
  accountCount: document.getElementById("accountCount"),
  nextActions: document.getElementById("nextActions"),
  accountSelect: document.getElementById("accountSelect"),
  accountDetail: document.getElementById("accountDetail"),
  successPlan: document.getElementById("successPlan"),
  promptType: document.getElementById("promptType"),
  promptOutput: document.getElementById("promptOutput"),
  csvImporters: document.getElementById("csvImporters"),
  toast: document.getElementById("toast")
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  bindEvents();
  renderImporters();
  ensureSelectedAccount();
  render();
}

function bindEvents() {
  el.navButtons.forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  el.accountSearch.addEventListener("input", renderDashboard);
  el.accountSelect.addEventListener("change", () => {
    selectedAccountId = el.accountSelect.value;
    renderAccountDetail();
    renderSuccessPlan();
    renderPrompt();
  });

  document.getElementById("loadSampleBtn").addEventListener("click", () => {
    state = getSampleState();
    persist();
    selectedAccountId = state.accounts[0]?.account_id || "";
    render();
    notify("Sample data loaded.");
  });

  document.getElementById("resetSampleBtn").addEventListener("click", () => {
    state = getSampleState();
    persist();
    selectedAccountId = state.accounts[0]?.account_id || "";
    render();
    notify("Sample data reset.");
  });

  document.getElementById("clearDataBtn").addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    state = emptyState();
    selectedAccountId = "";
    render();
    notify("Local data cleared.");
  });

  document.getElementById("exportJsonBtn").addEventListener("click", () => {
    downloadText("tam-account-workspace.json", JSON.stringify(state, null, 2), "application/json");
  });

  document.getElementById("jsonImport").addEventListener("change", handleJsonImport);
  document.getElementById("downloadTemplatesBtn").addEventListener("click", downloadTemplates);
  document.getElementById("downloadMarkdownBtn").addEventListener("click", () => {
    const account = getSelectedAccount();
    if (!account) return notify("Select an account first.");
    downloadText(`${slugify(account.account_name)}-success-plan.md`, buildMarkdown(account), "text/markdown");
  });

  document.getElementById("generatePromptBtn").addEventListener("click", renderPrompt);
  document.getElementById("copyPromptBtn").addEventListener("click", async () => {
    await copyToClipboard(el.promptOutput.value);
    notify("Prompt copied.");
  });
}

function switchView(view) {
  currentView = view;
  el.navButtons.forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  Object.entries(el.views).forEach(([key, viewEl]) => viewEl.classList.toggle("active", key === view));
}

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (stored && Array.isArray(stored.accounts)) return stored;
  } catch (error) {
    console.warn("Could not load stored state", error);
  }
  return getSampleState();
}

function emptyState() {
  return { accounts: [], stakeholders: [], tickets: [], usage: [], notes: [] };
}

function getSampleState() {
  return Object.fromEntries(Object.entries(sampleCSVs).map(([key, csv]) => [key, parseCSV(csv)]));
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function render() {
  ensureSelectedAccount();
  renderAccountSelect();
  renderDashboard();
  renderAccountDetail();
  renderSuccessPlan();
  renderPrompt();
}

function ensureSelectedAccount() {
  if (!state.accounts.length) {
    selectedAccountId = "";
    return;
  }
  if (!state.accounts.some((account) => account.account_id === selectedAccountId)) {
    selectedAccountId = state.accounts[0].account_id;
  }
}

function getSelectedAccount() {
  return state.accounts.find((account) => account.account_id === selectedAccountId) || null;
}

function renderDashboard() {
  const query = el.accountSearch.value.trim().toLowerCase();
  const accounts = enrichAccounts().filter((account) => {
    const haystack = `${account.account_name} ${account.region} ${account.owner} ${account.industry} ${account.stage}`.toLowerCase();
    return haystack.includes(query);
  });
  const allAccounts = enrichAccounts();

  const metrics = [
    ["Accounts at risk", allAccounts.filter((account) => account.signals.renewalRisk || account.signals.onboardingBlocker).length],
    ["Due for QBR", allAccounts.filter((account) => account.signals.qbrDue).length],
    ["Onboarding blockers", allAccounts.filter((account) => account.signals.onboardingBlocker).length],
    ["Renewal < 90d", allAccounts.filter((account) => account.signals.renewalWithin90).length],
    ["Expansion signals", allAccounts.filter((account) => account.signals.expansion).length]
  ];

  el.metricGrid.innerHTML = metrics.map(([label, value]) => `
    <article class="metric-card">
      <span>${escapeHtml(label)}</span>
      <strong>${value}</strong>
    </article>
  `).join("");

  el.accountCount.textContent = `${accounts.length} visible of ${state.accounts.length}`;
  el.accountCards.innerHTML = accounts.length ? accounts.map(renderAccountCard).join("") : `<div class="empty-state">No accounts match the current search.</div>`;
  el.accountCards.querySelectorAll(".account-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedAccountId = card.dataset.accountId;
      render();
      switchView("account");
    });
  });

  const actions = allAccounts
    .map((account) => ({ account, action: getNextAction(account) }))
    .sort((a, b) => b.action.priority - a.action.priority)
    .slice(0, 6);

  el.nextActions.innerHTML = actions.map(({ account, action }) => `
    <article class="action-item">
      <strong>${escapeHtml(account.account_name)}</strong>
      <p>${escapeHtml(action.label)}</p>
    </article>
  `).join("");
}

function renderAccountCard(account) {
  const badges = [
    account.signals.renewalRisk ? badge("Renewal risk", "red") : null,
    account.signals.onboardingBlocker ? badge("Blocker", "amber") : null,
    account.signals.expansion ? badge("Expansion", "green") : null,
    account.signals.qbrDue ? badge("QBR due", "blue") : null
  ].filter(Boolean).join("");

  return `
    <article class="account-card ${account.account_id === selectedAccountId ? "selected" : ""}" data-account-id="${escapeHtml(account.account_id)}">
      <div class="account-card-header">
        <div>
          <h3>${escapeHtml(account.account_name)}</h3>
          <div class="meta-row">
            <span>${escapeHtml(account.segment)}</span>
            <span>${escapeHtml(account.industry)}</span>
            <span>${escapeHtml(account.region)}</span>
          </div>
        </div>
        ${healthRing(account.health_score)}
      </div>
      <div class="signal-row">
        ${badge(account.stage, "violet")}
        ${badge(`${account.daysToRenewal}d renewal`, account.daysToRenewal <= 45 ? "red" : "blue")}
        ${badges}
      </div>
    </article>
  `;
}

function renderAccountSelect() {
  el.accountSelect.innerHTML = state.accounts.map((account) => `
    <option value="${escapeHtml(account.account_id)}" ${account.account_id === selectedAccountId ? "selected" : ""}>
      ${escapeHtml(account.account_name)}
    </option>
  `).join("");
}

function renderAccountDetail() {
  const account = enrichAccount(getSelectedAccount());
  if (!account) {
    el.accountDetail.innerHTML = `<div class="empty-state">Load or import account data to begin.</div>`;
    return;
  }

  el.accountDetail.innerHTML = `
    <article class="detail-card">
      <h3>Account snapshot</h3>
      <div class="kv-list">
        ${kv("Owner", account.owner)}
        ${kv("Stage", account.stage)}
        ${kv("ARR band", account.arr_band)}
        ${kv("Renewal", `${account.renewal_date} (${account.daysToRenewal} days)`)}
        ${kv("Health", `${account.health_score}/100`)}
      </div>
    </article>
    <article class="detail-card">
      <h3>Customer objective</h3>
      <p>${escapeHtml(account.profile.objective)}</p>
    </article>
    <article class="detail-card">
      <h3>Technical environment</h3>
      <p>${escapeHtml(account.profile.technicalEnvironment)}</p>
    </article>
    <article class="detail-card">
      <h3>Stakeholders</h3>
      <ul>${account.stakeholders.map((person) => `<li><strong>${escapeHtml(person.name)}</strong>, ${escapeHtml(person.role)}<br><span class="section-note">${escapeHtml(person.influence)} influence, ${escapeHtml(person.sentiment)} sentiment</span></li>`).join("") || "<li>No stakeholders imported.</li>"}</ul>
    </article>
    <article class="detail-card">
      <h3>Usage</h3>
      <div class="kv-list">
        ${kv("Tenant envs", account.usage?.tenant_envs || "n/a")}
        ${kv("Active users", account.usage?.active_users || "n/a")}
        ${kv("Provisioning", `${account.usage?.provisioning_time_minutes || "n/a"} min`)}
        ${kv("Weekly projects", account.usage?.weekly_active_projects || "n/a")}
        ${kv("AI/GPU signal", account.usage?.gpu_or_ai_workload_signal || "n/a")}
      </div>
    </article>
    <article class="detail-card">
      <h3>Open issues</h3>
      <ul>${account.openTickets.map((ticket) => `<li><strong>${escapeHtml(ticket.ticket_id)} ${escapeHtml(ticket.severity)}</strong>: ${escapeHtml(ticket.theme)}<br><span class="section-note">${escapeHtml(ticket.customer_impact)}</span></li>`).join("") || "<li>No open issues.</li>"}</ul>
    </article>
    <article class="detail-card wide">
      <h3>Recent notes</h3>
      <ul>${account.notes.map((note) => `<li><strong>${escapeHtml(note.date)} ${escapeHtml(note.meeting_type)}</strong>: ${escapeHtml(note.summary)}<br><span class="section-note">Commitment: ${escapeHtml(note.commitments)} Risk: ${escapeHtml(note.risks)}</span></li>`).join("") || "<li>No notes imported.</li>"}</ul>
    </article>
  `;
}

function renderSuccessPlan() {
  const account = enrichAccount(getSelectedAccount());
  if (!account) {
    el.successPlan.innerHTML = `<div class="empty-state">Select an account to generate a success plan.</div>`;
    return;
  }

  const action = getNextAction(account);
  el.successPlan.innerHTML = `
    <article class="plan-card">
      <p class="eyebrow">Priority</p>
      <h3>${escapeHtml(action.label)}</h3>
    </article>
    <div class="plan-grid">
      <article class="plan-card">
        <h3>Business goals</h3>
        <ul>
          <li>${escapeHtml(account.profile.objective)}</li>
          <li>Make adoption, value, and risks visible before the next customer review.</li>
          <li>Align customer sponsor, platform team, and product feedback into one operating rhythm.</li>
        </ul>
      </article>
      <article class="plan-card">
        <h3>Success KPIs</h3>
        <ul>${account.profile.successKpis.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </article>
      <article class="plan-card">
        <h3>Training needs</h3>
        <ul>${account.profile.trainingNeeds.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </article>
      <article class="plan-card">
        <h3>Risk signals</h3>
        <ul>${getRiskSignals(account).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </article>
    </div>
    <article class="plan-card">
      <h3>30 / 60 / 90 day plan</h3>
      <table class="milestone-table">
        <thead><tr><th>Window</th><th>Milestone</th><th>Owner</th><th>Proof of progress</th></tr></thead>
        <tbody>
          ${buildMilestones(account).map((row) => `<tr><td>${escapeHtml(row.window)}</td><td>${escapeHtml(row.milestone)}</td><td>${escapeHtml(row.owner)}</td><td>${escapeHtml(row.proof)}</td></tr>`).join("")}
        </tbody>
      </table>
    </article>
    <article class="plan-card">
      <h3>QBR talking points</h3>
      <ul>${buildQbrTalkingPoints(account).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </article>
  `;
}

function renderPrompt() {
  const account = enrichAccount(getSelectedAccount());
  if (!account) {
    el.promptOutput.value = "";
    return;
  }
  el.promptOutput.value = buildPrompt(account, el.promptType.value);
}

function renderImporters() {
  el.csvImporters.innerHTML = csvConfigs.map((config) => `
    <div class="file-row">
      <label for="${config.key}Import">${config.label}</label>
      <input id="${config.key}Import" type="file" accept=".csv,text/csv" data-csv-key="${config.key}">
    </div>
  `).join("");

  el.csvImporters.querySelectorAll("input[type='file']").forEach((input) => {
    input.addEventListener("change", handleCsvImport);
  });
}

function handleCsvImport(event) {
  const input = event.currentTarget;
  const file = input.files[0];
  if (!file) return;
  const key = input.dataset.csvKey;
  const reader = new FileReader();
  reader.onload = () => {
    state[key] = parseCSV(String(reader.result || ""));
    persist();
    ensureSelectedAccount();
    render();
    notify(`${file.name} imported.`);
    input.value = "";
  };
  reader.readAsText(file);
}

function handleJsonImport(event) {
  const file = event.currentTarget.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(String(reader.result || ""));
      state = { ...emptyState(), ...imported };
      persist();
      ensureSelectedAccount();
      render();
      notify("Workspace imported.");
    } catch (error) {
      notify("Could not import JSON.");
    }
    event.currentTarget.value = "";
  };
  reader.readAsText(file);
}

function enrichAccounts() {
  return state.accounts.map(enrichAccount).filter(Boolean);
}

function enrichAccount(account) {
  if (!account) return null;
  const stakeholders = state.stakeholders.filter((item) => item.account_id === account.account_id);
  const tickets = state.tickets.filter((item) => item.account_id === account.account_id);
  const notes = state.notes
    .filter((item) => item.account_id === account.account_id)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  const usage = state.usage.find((item) => item.account_id === account.account_id) || {};
  const openTickets = tickets.filter((ticket) => !/resolved|closed/i.test(ticket.status || ""));
  const daysToRenewal = daysBetween(REFERENCE_DATE, new Date(`${account.renewal_date}T00:00:00`));
  const lastQbr = notes.find((note) => /qbr|ebr|executive/i.test(note.meeting_type || ""));
  const daysSinceQbr = lastQbr ? daysBetween(new Date(`${lastQbr.date}T00:00:00`), REFERENCE_DATE) : Infinity;
  const highSeverityOpen = openTickets.some((ticket) => /p0|p1|critical|high/i.test(ticket.severity || ""));
  const health = Number(account.health_score || 0);
  const weeklyProjects = Number(usage.weekly_active_projects || 0);
  const tenantEnvs = Number(usage.tenant_envs || 0);
  const activeUsers = Number(usage.active_users || 0);

  const signals = {
    renewalWithin90: daysToRenewal >= 0 && daysToRenewal <= 90,
    renewalRisk: daysToRenewal >= 0 && daysToRenewal <= 90 && health < 70,
    onboardingBlocker: highSeverityOpen || (/onboarding|pilot|stabilization/i.test(account.stage || "") && health < 60),
    expansion: /yes|true|high/i.test(usage.gpu_or_ai_workload_signal || "") || weeklyProjects >= 8 || tenantEnvs >= 10 || activeUsers >= 60,
    qbrDue: daysSinceQbr > 90
  };

  return {
    ...account,
    profile: accountProfiles[account.account_id] || genericProfile(account),
    stakeholders,
    tickets,
    openTickets,
    usage,
    notes,
    daysToRenewal,
    daysSinceQbr,
    signals
  };
}

function genericProfile(account) {
  return {
    objective: `Improve adoption and measurable value for ${account.industry || "the customer"} teams while managing risk and operational readiness.`,
    technicalEnvironment: "Imported account without detailed technical environment notes.",
    successKpis: ["Define customer success metrics", "Review adoption and risk weekly", "Prepare next customer review"],
    trainingNeeds: ["Product onboarding", "Operational readiness", "Stakeholder review cadence"],
    milestones: ["Confirm customer goals", "Map stakeholders", "Review open risks", "Prepare account plan"]
  };
}

function getNextAction(account) {
  if (account.signals.renewalRisk) {
    return { priority: 5, label: "Prepare renewal risk recovery plan with customer sponsor and internal owner." };
  }
  if (account.signals.onboardingBlocker) {
    return { priority: 4, label: "Resolve onboarding blocker and confirm readiness criteria before expanding rollout." };
  }
  if (account.signals.qbrDue) {
    return { priority: 3, label: "Schedule QBR and turn adoption data into an executive value narrative." };
  }
  if (account.signals.expansion) {
    return { priority: 2, label: "Validate expansion signal and identify the next team or workload to onboard." };
  }
  return { priority: 1, label: "Maintain cadence, document progress, and keep stakeholders aligned." };
}

function getRiskSignals(account) {
  const risks = [];
  if (account.signals.renewalRisk) risks.push(`Renewal in ${account.daysToRenewal} days with health score ${account.health_score}.`);
  if (account.signals.onboardingBlocker) risks.push("Open high-severity issue or readiness blocker exists.");
  if (account.signals.qbrDue) risks.push("No recent QBR/EBR found in imported notes.");
  if (account.openTickets.length) risks.push(`${account.openTickets.length} open support/project issue(s) need active ownership.`);
  account.notes.slice(0, 2).forEach((note) => risks.push(note.risks));
  return [...new Set(risks)].filter(Boolean).slice(0, 6);
}

function buildMilestones(account) {
  const base = account.profile.milestones;
  return [
    { window: "30 days", milestone: base[0] || "Confirm account goals", owner: "TAM + customer owner", proof: "Written success plan and next-action list" },
    { window: "30 days", milestone: base[1] || "Resolve top readiness risk", owner: "Platform owner", proof: "Risk closed or accepted with mitigation" },
    { window: "60 days", milestone: base[2] || "Run operational readiness review", owner: "TAM + technical lead", proof: "Checklist complete and blockers visible" },
    { window: "90 days", milestone: base[3] || "Hold QBR and agree next value milestone", owner: "TAM + sponsor", proof: "QBR notes, KPI trend, expansion or recovery decision" }
  ];
}

function buildQbrTalkingPoints(account) {
  const usage = account.usage || {};
  return [
    `Business objective: ${account.profile.objective}`,
    `Adoption snapshot: ${usage.active_users || "n/a"} active users, ${usage.tenant_envs || "n/a"} tenant environments, ${usage.weekly_active_projects || "n/a"} weekly active projects.`,
    `Risk story: ${getRiskSignals(account)[0] || "No urgent risk signal in imported data."}`,
    `Next action: ${getNextAction(account).label}`,
    "Ask customer sponsor which outcome should be visible before the next review."
  ];
}

function buildMarkdown(account) {
  const enriched = enrichAccount(account);
  return `# Account Success Plan: ${enriched.account_name}

Generated locally by Andrea Law AI Account Plan Tool.

## Snapshot
- Owner: ${enriched.owner}
- Stage: ${enriched.stage}
- Health: ${enriched.health_score}/100
- Renewal: ${enriched.renewal_date} (${enriched.daysToRenewal} days)
- ARR band: ${enriched.arr_band}

## Customer Objective
${enriched.profile.objective}

## Technical Environment
${enriched.profile.technicalEnvironment}

## Success KPIs
${enriched.profile.successKpis.map((item) => `- ${item}`).join("\n")}

## Stakeholders
${enriched.stakeholders.map((person) => `- ${person.name}, ${person.role}; influence: ${person.influence}; sentiment: ${person.sentiment}`).join("\n") || "- No stakeholders imported"}

## Risk Signals
${getRiskSignals(enriched).map((item) => `- ${item}`).join("\n") || "- No major risk signals"}

## 30 / 60 / 90 Day Plan
${buildMilestones(enriched).map((row) => `- ${row.window}: ${row.milestone} (${row.owner}); proof: ${row.proof}`).join("\n")}

## QBR Talking Points
${buildQbrTalkingPoints(enriched).map((item) => `- ${item}`).join("\n")}

## Next Best Action
${getNextAction(enriched).label}
`;
}

function buildPrompt(account, type) {
  const markdown = buildMarkdown(account);
  const guardrail = "Use only the fictional account data below. Do not invent customer commitments, dates, or commercial claims. If something is missing, call it out as an assumption.";

  const prompts = {
    "account-plan": `You are helping a Technical Account Manager prepare a customer success plan. ${guardrail}

Create a concise account plan with:
- customer objective
- current health
- technical risks
- onboarding or adoption milestones
- stakeholder plan
- 30/60/90 day actions
- QBR talking points

Account data:
${markdown}`,
    qbr: `You are helping a Technical Account Manager prepare an executive QBR brief. ${guardrail}

Create a QBR outline with:
- executive summary
- adoption progress
- value delivered
- risk and mitigation
- decisions needed
- next-quarter success metrics

Account data:
${markdown}`,
    "exec-email": `You are helping a Technical Account Manager write a customer-facing executive follow-up email. ${guardrail}

Write a warm, concise email that:
- thanks the customer
- confirms the business objective
- acknowledges risks without panic
- proposes clear next steps
- avoids overpromising

Account data:
${markdown}`,
    "risk-review": `You are helping a Technical Account Manager prepare an internal risk review. ${guardrail}

Create an internal risk memo with:
- risk summary
- customer impact
- owner
- escalation path
- mitigation plan
- decision needed this week

Account data:
${markdown}`
  };

  return prompts[type] || prompts["account-plan"];
}

function downloadTemplates() {
  Object.entries(sampleCSVs).forEach(([key, csv]) => {
    downloadText(`${key}.csv`, csv, "text/csv");
  });
  notify("CSV templates downloaded.");
}

function parseCSV(text) {
  const rows = [];
  let row = [];
  let value = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && inQuotes && next === '"') {
      value += '"';
      i += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(value);
      value = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(value);
      if (row.some((cell) => cell.trim() !== "")) rows.push(row);
      row = [];
      value = "";
    } else {
      value += char;
    }
  }

  row.push(value);
  if (row.some((cell) => cell.trim() !== "")) rows.push(row);
  if (!rows.length) return [];

  const headers = rows.shift().map((header) => header.trim());
  return rows.map((cells) => Object.fromEntries(headers.map((header, index) => [header, (cells[index] || "").trim()])));
}

function downloadText(filename, text, mimeType) {
  const blob = new Blob([text], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function copyToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch (error) {
      console.warn("Clipboard API failed, using fallback.", error);
    }
  }

  const helper = document.createElement("textarea");
  helper.value = text;
  helper.setAttribute("readonly", "");
  helper.style.position = "fixed";
  helper.style.opacity = "0";
  document.body.appendChild(helper);
  helper.select();
  document.execCommand("copy");
  helper.remove();
}

function daysBetween(from, to) {
  return Math.ceil((to - from) / (1000 * 60 * 60 * 24));
}

function healthRing(score) {
  const numericScore = Number(score || 0);
  const color = numericScore >= 75 ? "var(--green)" : numericScore >= 60 ? "var(--amber)" : "var(--red)";
  return `<div class="health-ring" style="--score:${numericScore}; --ring-color:${color};"><span>${numericScore}</span></div>`;
}

function badge(text, color) {
  return `<span class="badge ${color}">${escapeHtml(text)}</span>`;
}

function kv(label, value) {
  return `<div class="kv-row"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function slugify(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function notify(message) {
  el.toast.textContent = message;
  el.toast.classList.add("show");
  window.setTimeout(() => el.toast.classList.remove("show"), 2200);
}
