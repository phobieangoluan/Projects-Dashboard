// Fictional sample data, aligned to the Delivery Team / PMO scoping document.
// Replace with live Lark Base data in the connection step.
window.DASHBOARD_DATA = {
  // End-to-end delivery process, in order (scoping doc, section 3)
  stages: [
    "Project Request",
    "Initial Review",
    "Clarification / Discovery",
    "Scoping",
    "Architecture and Technical Design",
    "Security, Privacy and Compliance Checklist",
    "Team Formation Planning",
    "Costing",
    "Approval",
    "Execution and Sprint Planning",
    "Test Strategy and Quality Control",
    "UAT",
    "Business Acceptance and Sign Off",
    "Release and Rollback",
    "Deployment",
    "Handoff / Hypercare",
    "Monitoring & Continuous Improvement",
    "Project Closure"
  ],

  // Project status values (scoping doc, "Project Status Breakdown")
  // Order matches the team's Lark Base dashboard. "Pending Assessment" = projects that need review.
  states: ["In progress", "Pending Assessment", "Closed", "Deferred / Rejected", "Cancelled", "On hold"],

  // Project overview and ownership fields (scoping doc, section 3)
  projects: [
    {
      id: "P-001",
      name: "Project Atlas",
      owner: "Ana Villanueva",
      requestDate: "2026-03-02",
      requestingDepartment: "Finance",
      projectType: "New development",
      deliveryTeam: "Delivery Team / PMO",
      stage: "Execution and Sprint Planning",
      state: "In progress",
      coordinator: "A. Cruz",
      deliveryLead: "M. Reyes",
      techLead: "J. Santos",
      developers: ["L. Tan", "K. Lim"],
      progress: 62,
      developmentCost: 450000
    },
    {
      id: "P-002",
      name: "Project Borealis",
      owner: "Carlo Mendoza",
      requestDate: "2026-01-12",
      requestingDepartment: "Operations",
      projectType: "Enhancement",
      deliveryTeam: "Delivery Team / PMO",
      stage: "Test Strategy and Quality Control",
      state: "In progress",
      coordinator: "A. Cruz",
      deliveryLead: "M. Reyes",
      techLead: "R. Dela Cruz",
      developers: ["L. Tan"],
      progress: 84,
      developmentCost: 320000
    },
    {
      id: "P-003",
      name: "Project Cirrus",
      owner: "Grace Lim",
      requestDate: "2026-09-01",
      requestingDepartment: "Sales",
      projectType: "New development",
      deliveryTeam: "Delivery Team / PMO",
      stage: "Clarification / Discovery",
      state: "In progress",
      coordinator: "P. Garcia",
      deliveryLead: null,
      techLead: null,
      developers: [],
      progress: 10,
      developmentCost: 0
    },
    {
      id: "P-004",
      name: "Project Delta",
      owner: "Ramon Aquino",
      requestDate: "2026-02-16",
      requestingDepartment: "HR",
      projectType: "Integration",
      deliveryTeam: "Delivery Team / PMO",
      stage: "Architecture and Technical Design",
      state: "On hold",
      coordinator: "A. Cruz",
      deliveryLead: "M. Reyes",
      techLead: "K. Lim",
      developers: ["R. Dela Cruz"],
      progress: 30,
      developmentCost: 275000
    },
    {
      id: "P-005",
      name: "Project Ember",
      owner: "Ana Villanueva",
      requestDate: "2026-01-05",
      requestingDepartment: "Finance",
      projectType: "Enhancement",
      deliveryTeam: "Delivery Team / PMO",
      stage: "Project Closure",
      state: "Closed",
      coordinator: "A. Cruz",
      deliveryLead: "M. Reyes",
      techLead: "J. Santos",
      developers: ["K. Lim"],
      progress: 100,
      developmentCost: 142300
    },
    {
      id: "P-006",
      name: "Project Fathom",
      owner: "Liza Navarro",
      requestDate: "2026-10-05",
      requestingDepartment: "Legal",
      projectType: "New development",
      deliveryTeam: "Delivery Team / PMO",
      stage: "Project Request",
      state: "Pending Assessment",
      coordinator: null,
      deliveryLead: null,
      techLead: null,
      developers: [],
      progress: 0,
      developmentCost: 0
    }
  ],

  // PMO action items (scoping doc, "PMO Action Items").
  // "Overdue" is calculated from dueDate, so it isn't stored here.
  actionItems: [
    { id: "A-01", projectId: "P-002", description: "Confirm UAT sign-off schedule with business", owner: "A. Cruz", dueDate: "2026-10-08", status: "In Progress" },
    { id: "A-02", projectId: "P-001", description: "Submit sprint 4 capacity plan", owner: "M. Reyes", dueDate: "2026-10-15", status: "In Progress" },
    { id: "A-03", projectId: "P-003", description: "Assign delivery lead and tech lead", owner: "A. Cruz", dueDate: "2026-10-09", status: "Pending" },
    { id: "A-04", projectId: "P-004", description: "Decide whether to lift architecture hold", owner: "M. Reyes", dueDate: "2026-10-20", status: "Pending" },
    { id: "A-05", projectId: "P-005", description: "Archive project documents", owner: "A. Cruz", dueDate: "2026-09-30", status: "Completed" }
  ]
};
