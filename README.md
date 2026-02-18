# Nong Bua Lamphu Finance 🌾💸

A modern, aesthetic, and simple personal finance application inspired by the serenity of nature and the "Nong Bua Lamphu" theme. Track your income and expenses with ease, visualized in a clean and responsive interface.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## ✨ Features

- **Dashboard Overview**: Instantly view your total balance, total income, and total expenses.
- **Transaction Management**: Easily add and delete income/expense transactions.
- **Data Persistence**: Transactions are saved automatically to your browser's LocalStorage, so you never lose your data.
- **Dark/Light Mode**: Toggle between a crisp day theme and a soothing night theme.
- **Responsive Design**: Fully functional on desktop, tablet, and mobile devices.
- **Modern Aesthetic**: Built with a custom design system featuring glassmorphism and smooth animations.

## 🛠️ Tech Stack

| Technology | Version | Description |
| --- | --- | --- |
| [Next.js](https://nextjs.org/) | 16.1.6 | React framework with App Router |
| [React](https://react.dev/) | 19.2.3 | UI library |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first CSS framework |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type-safe JavaScript |
| [Bun](https://bun.sh/) | 1.x | Runtime & package manager |
| [Docker](https://www.docker.com/) | - | Containerization (multi-stage build) |
| [Jenkins](https://www.jenkins.io/) | - | CI/CD pipeline |
| [ESLint](https://eslint.org/) | 9 | Code linting |

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- [Bun](https://bun.sh/) (v1.0 or higher) or [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/khonE3/Personal-Finance-App.git
   cd Personal-Finance-App/my-app
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Run the development server**

   ```bash
   bun dev
   ```

4. **Build for production**

   ```bash
   bun run build
   bun start
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🐳 Docker Support

The project uses a **multi-stage Dockerfile** with `oven/bun:1` base image and Next.js `standalone` output for optimized production builds.

### Option 1: Docker Compose (Recommended)

```bash
# From the project root
docker-compose up --build
```

### Option 2: Docker CLI

1. **Build the image**

   ```bash
   cd my-app
   docker build -t personal-finance-app .
   ```

2. **Run the container**

   ```bash
   docker run -p 3000:3000 personal-finance-app
   ```

### Option 3: From project root

```bash
docker build -t personal-finance-app ./my-app
docker run -p 3000:3000 personal-finance-app
```

## 🔄 CI/CD Pipeline (Jenkins)

The project includes a `Jenkinsfile` that automates the build and deployment process.

### Pipeline Stages

```text
Checkout → Install Dependencies → Lint → Build Docker Image → Push to Docker Hub → Cleanup
```

| Stage | Description |
| --- | --- |
| **Checkout** | Clone repository from SCM |
| **Install Dependencies** | Install Bun and project dependencies |
| **Lint** | Run ESLint to check code quality |
| **Build Docker Image** | Build production Docker image |
| **Push to Docker Hub** | Push image to `gotjitag/personal-finance-app` |
| **Cleanup** | Remove local Docker images |

### Jenkins Setup

1. Add Docker Hub credentials in Jenkins with ID: `docker-hub-credentials`
2. Create a Pipeline job pointing to this repository
3. Jenkins will automatically detect the `Jenkinsfile`

## 📂 Project Structure

```text
Personal-Finance-App/
├── .gitignore               # Root git ignore rules
├── docker-compose.yml       # Docker Compose configuration
├── Jenkinsfile              # CI/CD Pipeline definition
├── README.md                # Project documentation
└── my-app/                  # Next.js application
    ├── .dockerignore        # Docker build ignore rules
    ├── Dockerfile           # Multi-stage Docker build
    ├── bun.lock             # Bun lockfile
    ├── package.json         # Project dependencies & scripts
    ├── next.config.ts       # Next.js configuration (standalone output)
    ├── tsconfig.json        # TypeScript configuration
    ├── eslint.config.mjs    # ESLint configuration
    ├── postcss.config.mjs   # PostCSS / Tailwind CSS configuration
    ├── public/              # Static assets
    │   ├── file.svg
    │   ├── globe.svg
    │   ├── next.svg
    │   ├── vercel.svg
    │   └── window.svg
    └── app/                 # Next.js App Router
        ├── layout.tsx       # Root layout
        ├── page.tsx         # Main dashboard page
        ├── globals.css      # Global styles & Tailwind
        └── components/      # Reusable UI components
            ├── AnimatedLogo.tsx      # Animated lotus SVG logo
            ├── Dashboard.tsx         # Balance / Income / Expense cards
            ├── ThemeToggle.tsx       # Dark / Light mode toggle
            ├── TransactionForm.tsx   # Add transaction form
            └── TransactionList.tsx   # Transaction history list
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
