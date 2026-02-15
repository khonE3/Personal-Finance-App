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

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Runtime & Package Manager**: [Bun](https://bun.sh/)
- **Containerization**: Docker
- **CI/CD**: Jenkins

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) or [Bun](https://bun.sh/) (v1.0 or higher)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/Personal-Finance-App.git
   cd Personal-Finance-App/my-app
   ```

2. **Install dependencies**

   ```bash
   bun install
   # or
   npm install
   ```

3. **Run the development server**

   ```bash
   bun dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🐳 Docker Support

To build and run the application using Docker:

1. **Build the image**

   ```bash
   docker build -t personal-finance-app .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 personal-finance-app
   ```

## 📂 Project Structure

```bash
Personal-Finance-App/
├── Jenkinsfile          # CI/CD Pipeline definition
├── README.md            # Project documentation
└── my-app/              # Next.js Source Code
    ├── app/             # App Router pages and layouts
    │   ├── components/  # Reusable UI components
    │   ├── page.tsx     # Main dashboard page
    │   └── layout.tsx   # Root layout
    ├── public/          # Static assets (images, fonts)
    └── package.json     # Project dependencies
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
