// Fictional sample data. Replace with live Lark Base data in step 7.
// Shape: each project matches the Lark Base table fields we'll map later.
window.DASHBOARD_DATA = {
  stages: ["Initiation", "Planning", "Execution", "Testing", "Deployment", "Closure"],
  projects: [
    {
      id: "P-001",
      name: "Project Atlas",
      client: "Client A",
      owner: "M. Reyes",
      status: "On Track",       // On Track | At Risk | Delayed | Completed
      stage: "Execution",
      start: "2026-03-02",
      targetEnd: "2026-10-30",
      percentComplete: 62,
      budget: 450000,
      actual: 281000
    },
    {
      id: "P-002",
      name: "Project Borealis",
      client: "Client B",
      owner: "J. Santos",
      status: "At Risk",
      stage: "Testing",
      start: "2026-01-12",
      targetEnd: "2026-09-25",
      percentComplete: 84,
      budget: 320000,
      actual: 318500
    },
    {
      id: "P-003",
      name: "Project Cirrus",
      client: "Client C",
      owner: "A. Cruz",
      status: "On Track",
      stage: "Planning",
      start: "2026-09-01",
      targetEnd: "2027-02-15",
      percentComplete: 18,
      budget: 610000,
      actual: 74000
    },
    {
      id: "P-004",
      name: "Project Delta",
      client: "Client D",
      owner: "L. Tan",
      status: "Delayed",
      stage: "Execution",
      start: "2026-02-16",
      targetEnd: "2026-11-20",
      percentComplete: 41,
      budget: 275000,
      actual: 196000
    },
    {
      id: "P-005",
      name: "Project Ember",
      client: "Client E",
      owner: "M. Reyes",
      status: "Completed",
      stage: "Closure",
      start: "2026-01-05",
      targetEnd: "2026-07-31",
      percentComplete: 100,
      budget: 150000,
      actual: 142300
    }
  ]
};
