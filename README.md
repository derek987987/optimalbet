# OptimalBet - Advanced Poker Analytics & Equity Calculator

OptimalBet is a high-performance, real-time poker decision support tool built with **React**, **TypeScript**, and **Tailwind CSS v4**. It leverages **Web Workers** for intensive Monte Carlo simulations to provide instant equity, pot odds, and expected value (EV) calculations.

## 🚀 Key Features

- **Advanced Simulation Engine**:
  - Uses **Exhaustive Enumeration** for post-flop heads-up scenarios (exact win probability).
  - Uses **Monte Carlo Simulations** (10,000+ iterations) for multi-way or pre-flop scenarios.
- **Strategic Decision Support**:
  - **Decision Rationale**: Visual comparison of Equity vs. Pot Odds with clear mathematical justification.
  - **Texture-Aware EQR**: Equity Realization (EQR) adjustments based on board texture (Monotone, Coordinated, Paired).
  - **Bayesian Range Weighting**: Opponent ranges automatically narrow as the facing bet increases relative to the pot.
- **Interactive Betting Interface**:
  - **Relative Betting Ratios**: Quick-bet buttons (1/4, 1/3, 1/2, 2/3, 3/4, Pot) that scale dynamically as the pot size changes.
  - **Custom Exploration**: Integrated drag-slider for precise bet sizing and "what-if" analysis.
- **Educational System**:
  - **Interactive Glossary**: In-context information triggers (ⓘ) for technical terms like EV, Equity, Pot Odds, SPR, and MDF.
  - **Mobile-Friendly Learning**: Focused pop-up definitions to help players improve their strategy while playing.
- **High-Performance UX**:
  - **Rapid Entry**: Modal-based 52-card grid with **duplicate card prevention** for fast, error-free input.
  - **Dark Mode Native**: High-contrast theme optimized for low-light casino environments.
  - **Offline Capability**: PWA support ensuring functionality even with poor connectivity.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: React Hooks + LocalStorage Persistence
- **Computation**: [Comlink](https://github.com/GoogleChromeLabs/comlink) (Web Workers RPC)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: [Vitest](https://vitest.dev/) (Unit) & [Playwright](https://playwright.dev/) (E2E)

## ⚙️ Getting Started

### Prerequisites

- Node.js `v20.0.0` or higher
- npm `v9.0.0` or higher

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd optimalbet

# Install dependencies
npm install
```

### Development

```bash
# Start development server with HMR
npm run dev

# Run unit tests
npm run test:unit

# Run E2E tests
npx playwright install # First time setup
npm run test:e2e
```

### Production

```bash
# Build the application (runs type checking and bundling)
npm run build

# Preview the production build
npm run preview
```

## 🧪 Testing Strategy

- **Unit Tests**: Logic-heavy modules like the evaluator, EV engine, and simulation algorithms are tested using Vitest to ensure mathematical accuracy within a 0.1% margin.
- **E2E Tests**: Critical user journeys (entry loop, dynamic betting, glossary interaction) are verified using Playwright.

## 📄 License

This project is private and for internal use only.
