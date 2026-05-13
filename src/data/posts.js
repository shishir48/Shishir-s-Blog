export const posts = [
  {
    id: 1,
    title: "3 years at Eisenvault — what I actually learned",
    excerpt:
      "Production bugs, an offline-sync desktop app, LLM experiments, and a trip to Kathmandu. Here is what stuck.",
    date: "April 4, 2026",
    category: "Engineering",
    readTime: "5 min read",
    cover:
      "Real production work teaches things no tutorial can — edge cases, user trust, and the cost of a bad deploy.",
    content:
      "I joined Eisenvault in 2021 as a software engineer and spent three years shipping things that real users depended on. The first year was mostly bug fixes — 50+ production issues across the document management app. Unglamorous, but it built a sense for how software breaks in the real world.\n\nThe project I am most proud of is the offline-sync desktop app. Users needed Google Drive-style sync without internet access. I built it with Electron, Node.js, and a queue-based conflict resolution system. Getting the sync logic right without a backend to lean on was the hardest problem I had faced to that point.\n\nI also deployed LLaMA 2 and Mistral AI locally on Ubuntu and Apple M1 hardware, then built an invoice parser that the finance team actually uses. That project made clear that the gap between experimenting with AI and shipping something useful is mostly about prompt design and output parsing — not the model.\n\nThe highlight of the whole stint was flying to Kathmandu to deliver an on-premises deployment for Kumari Bank — Eisenvault's first enterprise on-prem customer. Watching software you built go live in a bank in Nepal is a different feeling from merging a PR.",
  },
  {
    id: 2,
    title: "I opened a gaming café. Here is what happened.",
    excerpt:
      "₹10L in revenue, 2 employees, Tekken 7 tournaments, and more operational chaos than any engineering job prepared me for.",
    date: "March 19, 2026",
    category: "Entrepreneurship",
    readTime: "4 min read",
    cover:
      "Running a physical business teaches you that most problems cannot be fixed with a hotfix and a redeploy.",
    content:
      "In March 2024 I opened Nevermind Gaming Café — a 24x7 gaming café in Noida. I had just left my engineering job and wanted to try something completely different.\n\nThe first month was chaos. Equipment procurement, shift scheduling, vendor negotiations, internet redundancy, and a floor that needed someone on it at 3am on weekdays. None of that is in any software engineering playbook.\n\nWe hit ₹10L in revenue in the first year. I hired two employees, built a shift rotation that actually held, and ran competitive Tekken 7 and FIFA 25 tournaments that brought in 20+ participants and regulars who kept coming back.\n\nWhat surprised me most was how much the business depended on trust and consistency — the same things that make good software. Users return when something works reliably. Customers return when they feel the place is run with care.\n\nI closed it in April 2025 after a year. The economics of a physical space in that location stopped making sense. But the year taught me more about operations, people management, and decision-making under uncertainty than I expected. Worth it.",
  },
]
