<!--
Sync Impact Report:
- Version change: 1.0.0 → 1.1.0
- List of modified principles:
  - II. Real-Time Performance → II. Extreme Performance & Offline Capability
- Added sections:
  - III. Mobile-Optimized UX (One-handed use, zero clutter)
  - IV. Architectural Separation of Concerns (UI vs. Math Engine)
  - V. Rigorous Modularity & Testing (Unit-tested probability logic)
- Removed sections: None
- Templates requiring updates:
  - .specify/templates/plan-template.md: ✅ No changes needed.
  - .specify/templates/spec-template.md: ✅ No changes needed.
  - .specify/templates/tasks-template.md: ✅ No changes needed.
- Follow-up TODOs: Ensure existing specs and plans (if any) are audited against the new 100ms performance gate and architectural separation.
-->

# OptimalBet Constitution

## Core Principles

### I. Mathematical Accuracy
OptimalBet MUST provide exact equity and Expected Value (EV) calculations based on Game Theory Optimal (GTO) principles where applicable. All calculations must be exact or within a 0.1% error margin compared to industry-standard solvers.
Rationale: Mathematical precision is the core value proposition; any deviation compromises the player's edge and the utility of the tool.

### II. Extreme Performance & Offline Capability
The calculator MUST deliver results in less than 100ms for all math functions. The application MUST be fully functional offline to ensure reliability in gaming environments with poor connectivity.
Rationale: Real-time decision-making requires instantaneous feedback, and offline capability prevents data loss or delay during critical play moments.

### III. Mobile-Optimized UX
The UI MUST be intuitive for one-handed use on mobile devices and remain entirely clutter-free. Only essential data and controls should be visible to the user at any time.
Rationale: Poker players often use the app under pressure and in varied environments; extreme simplicity and physical accessibility are non-negotiable.

### IV. Architectural Separation of Concerns
There MUST be a strict decoupling between the User Interface (React/Frontend) and the mathematical calculation engine. The engine should be able to run independently of the UI layer.
Rationale: This ensures the core logic is reusable, portable, and independently verifiable without UI side effects.

### V. Rigorous Modularity & Testing
Code MUST be highly modular, with the poker probability logic and calculation engine reaching 100% unit test coverage.
Rationale: The complexity of probability math requires granular testing to prevent regressions in accuracy and to support long-term maintainability.

### VI. Heuristic Intelligence
The system SHOULD use robust heuristics and Bayesian inference to model opponent ranges when information is incomplete.
Rationale: Poker is a game of incomplete information; the tool's effectiveness depends on its ability to intelligently estimate uncertainty.

### VII. Actionable Clarity
Output MUST be unambiguous betting advice (Check, Fold, Call, Raise) derived from the highest EV path.
Rationale: Players need quick, actionable advice under high pressure, not just raw statistical data.

### VIII. Privacy and Integrity
OptimalBet MUST prioritize local processing of hand data and avoid logging sensitive player strategies.
Rationale: Player trust and data security are paramount in competitive gaming environments.

## Technical Constraints

- **Math Engine Response**: Math functions must return values in <100ms.
- **Offline Readiness**: Use of service workers or local-first architecture to ensure offline availability.
- **React Frontend**: UI must be built with React, adhering to strict functional component patterns.
- **Cross-Platform Support**: Optimized specifically for mobile web environments.

## Development Workflow

- **Performance Benchmarking**: Every math-critical feature must include an automated benchmark to ensure the 100ms limit is maintained.
- **100% Logic Coverage**: Mandatory unit testing for all probability and EV calculation modules.
- **Architectural Audits**: Regular reviews to ensure no leakage between UI and Engine layers.

## Governance

- The Constitution is the foundational document for project direction and decision-making.
- **Amendments**: Amendments require an update to this document and a version bump.
- **Versioning**:
  - MAJOR: Removal or fundamental redefinition of a core principle.
  - MINOR: New principle/section added or materially expanded guidance.
  - PATCH: Clarifications, wording, typo fixes, non-semantic refinements.

**Version**: 1.1.0 | **Ratified**: 2026-02-26 | **Last Amended**: 2026-02-26
