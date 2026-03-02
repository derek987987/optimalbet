# OptimalBet - Advanced Poker Analytics & Equity Calculator

OptimalBet is a high-performance, real-time poker decision support tool built with **React**, **TypeScript**, and **Tailwind CSS v4**. It leverages **Web Workers** for intensive Monte Carlo simulations to provide instant equity, pot odds, and expected value (EV) calculations.

## 🚀 Key Features

- **Hand Equity Calculator**:
  - Uses **Exhaustive Enumeration** for post-flop scenarios (exact win probability).
  - Uses **Monte Carlo Simulations** (10,000+ iterations) for pre-flop scenarios for speed and efficiency.
- **Pot Odds Analyzer**:
  - Automatically converts bets into break-even call percentages.
  - Compares raw equity against pot odds to determine profitability.
- **Expected Value (EV) Engine**:
  - Calculates the long-term profitability of decisions in $ or Big Blinds (BB).
  - Color-coded recommendations (Green: +EV, Red: -EV).
- **Positional Awareness (IP vs. OOP)**:
  - Adjusts raw equity by **Equity Realization (EQR)** factors (1.15 IP, 0.85 OOP).
  - Suggests optimal bet sizes based on position.
- **Dynamic Bet Recommender**:
  - Provides quick-buttons (1/3, 1/2, Full Pot, All-In) and a drag-slider for custom exploration.
- **Mobile-First UX**:
  - Optimized 52-card grid for rapid input under time pressure.
  - Automatic persistence of game state to LocalStorage.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: React Hooks + LocalStorage
- **Computation**: [Comlink](https://github.com/GoogleChromeLabs/comlink) (Web Workers RPC)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: [Vitest](https://vitest.dev/) (Unit) & [Playwright](https://playwright.dev/) (E2E)

## ⚙️ Getting Started

### Prerequisites

- Node.js `v18.0.0` or higher
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
# Build the application
npm run build

# Preview the production build
npm run preview
```

## 🧪 Testing Strategy

- **Unit Tests**: Logic-heavy modules like the evaluator, EV engine, and simulation algorithms are tested using Vitest.
- **E2E Tests**: Critical user flows (card selection, bet exploration) are verified using Playwright to ensure UI responsiveness and accuracy.

## 📄 License

This project is private and for internal use only.
