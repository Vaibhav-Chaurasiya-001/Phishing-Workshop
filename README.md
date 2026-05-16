# 🛡️ CyberAware: Phishing Awareness Workshop

> **Think Before You Click** — An immersive, high-tech phishing awareness workshop landing page

![TypeScript](https://img.shields.io/badge/TypeScript-94.8%25-3178c6?style=flat-square)
![CSS](https://img.shields.io/badge/CSS-4.6%25-1572b6?style=flat-square)
![HTML](https://img.shields.io/badge/HTML-0.6%25-e34c26?style=flat-square)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Development](#development)
  - [Build](#build)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**CyberAware: Phishing Awareness Workshop** is an interactive educational platform designed to raise awareness about phishing attacks and cybersecurity threats. This immersive, modern landing page leverages cutting-edge technologies to engage users and educate them about online security best practices.

The application is powered by Google Gemini AI, Firebase backend services, and a beautiful React frontend to create an engaging user experience.

**Live Demo:** [https://phishing-workshop.vercel.app](https://phishing-workshop.vercel.app)

---

## ✨ Features

- 🎨 **Modern, Responsive Design** — Beautifully crafted UI with smooth animations
- 🤖 **AI-Powered Interactions** — Integrated Google Gemini AI for intelligent responses
- 📱 **Mobile Optimized** — Fully responsive design for all devices
- 🔐 **Secure Backend** — Firebase integration with security rules
- ⚡ **High Performance** — Vite for fast development and optimized production builds
- 🎭 **Smooth Animations** — Lenis scroll and Motion library for fluid interactions
- 🎯 **Interactive Components** — Lucide React icons and dynamic UI elements
- 🌍 **Real-time Database** — Firestore integration for data persistence

---

## 🛠 Tech Stack

### Frontend
- **React** (v19.0.1) — UI library
- **TypeScript** (v5.8.2) — Type-safe JavaScript
- **Vite** (v6.2.3) — Build tool and dev server
- **Tailwind CSS** (v4.1.14) — Utility-first CSS framework
- **Tailwind CSS Vite** (v4.1.14) — Vite integration for Tailwind

### UI & Animations
- **Lucide React** (v0.546.0) — Icon library
- **Motion** (v12.23.24) — Animation library
- **Lenis** (v1.3.23) — Smooth scroll library

### Backend & Services
- **Firebase** (v12.13.0) — Authentication, Firestore, and real-time features
- **Google Generative AI** (@google/genai v1.29.0) — Gemini AI integration
- **Express** (v4.21.2) — Node.js server framework

### Developer Tools
- **TypeScript** — Type checking
- **Autoprefixer** (v10.4.21) — CSS vendor prefixes
- **esbuild** (v0.25.0) — JavaScript bundler
- **tsx** (v4.21.0) — TypeScript execution for Node.js

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- A **Google Gemini API key** (from [Google AI Studio](https://aistudio.google.com))
- A **Firebase project** (for backend services)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vaibhav-Chaurasiya-001/Phishing-Workshop.git
   cd Phishing-Workshop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Configuration

1. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

2. **Add your credentials to `.env.local`**
   ```env
   VITE_GEMINI_API_KEY=your_google_gemini_api_key_here
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

3. **Configure Firebase**
   - Update `firebase-applet-config.json` with your Firebase configuration
   - Update `firestore.rules` with appropriate security rules
   - Update `firebase-blueprint.json` with your Firebase setup

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

**Features:**
- Hot Module Replacement (HMR) for instant updates
- TypeScript support with real-time type checking
- Fast refresh on file changes

### Build

Create an optimized production build:
```bash
npm run build
```

The compiled files will be in the `dist/` directory.

Preview the production build locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```
Phishing-Workshop/
├── src/
│   ├── main.tsx                 # Application entry point
│   ├── App.tsx                  # Root component
│   └── components/              # Reusable UI components
├── index.html                   # HTML template
├── package.json                 # Project dependencies
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── firestore.rules              # Firebase Firestore security rules
├── firebase-applet-config.json  # Firebase configuration
├── firebase-blueprint.json      # Firebase project blueprint
├── metadata.json                # Project metadata
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
└── README.md                    # This file
```

---

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run clean` | Remove dist folder and server.js |
| `npm run lint` | Run TypeScript type checking |

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Google Gemini API
VITE_GEMINI_API_KEY=your_api_key_here

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Development Settings (Optional)
DISABLE_HMR=false
```

> ⚠️ **Security Note:** Never commit `.env.local` to version control. Always use `.env.example` for template values.

---

## 🌐 Deployment

This project is deployed on **Vercel**. To deploy your own instance:

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub Integration
1. Push your code to GitHub
2. Connect your repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

**Deployment URL:** [https://phishing-workshop.vercel.app](https://phishing-workshop.vercel.app)

---

## 🔧 Technologies Used

### Core Technologies
- **React 19** — Modern UI framework with hooks
- **TypeScript** — Type-safe development
- **Vite** — Lightning-fast build tool
- **Tailwind CSS** — Utility-first styling

### Key Libraries
| Library | Purpose | Version |
|---------|---------|---------|
| Firebase | Backend & Auth | 12.13.0 |
| @google/genai | Gemini AI Integration | 1.29.0 |
| Motion | Animations | 12.23.24 |
| Lenis | Smooth Scroll | 1.3.23 |
| Lucide React | Icons | 0.546.0 |
| Express | Server | 4.21.2 |

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Commit your changes** (`git commit -m 'Add amazing feature'`)
5. **Push to the branch** (`git push origin feature/amazing-feature`)
6. **Open a Pull Request**

Please ensure your code:
- Follows the existing code style
- Passes TypeScript type checking (`npm run lint`)
- Includes appropriate comments
- Updates this README if needed

---

## 📄 License

This project is open source and available under the MIT License. See the LICENSE file for more details.

---

## 📧 Contact

**Created by:** Vaibhav Chaurasiya  
**GitHub:** [@Vaibhav-Chaurasiya-001](https://github.com/Vaibhav-Chaurasiya-001)

---

## 🙏 Acknowledgments

- Google for the Gemini AI API
- Firebase for the backend infrastructure
- The React and TypeScript communities
- All contributors and testers

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Google Gemini API](https://ai.google.dev)

---

**Last Updated:** 2026-05-16  
**Tagline:** Think Before You Click! 🛡️
