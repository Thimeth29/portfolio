# Portfolio Overview & Technical Architecture Guide

Welcome to the comprehensive guide for **L.P. Thimeth Chathnuka's Developer Portfolio**. This document explains both **what you do** (your skills, background, and projects) and **how all the technologies in this website work together** behind the scenes.

---

## Part 1: What You Do (Developer Profile & Capabilities)

### 👤 Profile Summary
- **Name**: L.P. Thimeth Chathnuka
- **Role**: Cloud Computing Undergraduate | AI Enthusiast | Cloud Security Specialist
- **Location**: Sri Lanka
- **Core Mission**: Building scalable cloud infrastructure, high-performance web & mobile applications, and automated DevOps pipelines.

---

### 💻 Technology Stack & Competencies

| Domain | Technologies |
| :--- | :--- |
| **Cloud & DevOps** | AWS (S3, Lambda, API Gateway, DynamoDB), Azure, Docker, Terraform, GitHub Actions, Linux |
| **Backend Development** | Python, Java, Node.js, Express, C++, REST APIs, Serverless Functions |
| **Frontend & Mobile** | Next.js 16, React 19, TypeScript, Flutter, Tailwind CSS v4, HTML5/CSS3 |
| **Databases & Storage** | MongoDB, PostgreSQL, AWS DynamoDB, AWS S3, Firebase |

---

### 🚀 Key Projects Featured

1. **CloudWeather Serverless App**
   - *Tech*: Python, AWS Lambda, AWS S3, API Gateway, DynamoDB, Vanilla JS
   - *Description*: Fully serverless weather application built with Python backend microservices and automated AWS API Gateway routing.

2. **Cloud File Sharing Service**
   - *Tech*: Flask, Python, AWS S3, MongoDB, Docker
   - *Description*: Secure cloud file storage and sharing platform featuring automated file encryption and Docker containerization.

3. **Cargills FoodCity E-Commerce Web App**
   - *Tech*: Next.js, React, Tailwind CSS, Node.js
   - *Description*: Modern online grocery shopping platform with responsive cart management and dynamic catalog filtering.

4. **Blue Whale Migration Tracker Mobile App**
   - *Tech*: Flutter, Dart, Firebase, Google Maps API
   - *Description*: Interactive mobile application tracking marine whale migration routes in real time.

5. **DevOps Automation CI/CD Pipeline**
   - *Tech*: GitHub Actions, Docker, Terraform, AWS EC2
   - *Description*: Automated continuous integration and deployment pipeline deploying containerized microservices to cloud servers.

---

### 📜 Certifications
- **AWS Cloud Technical Essentials** (Amazon Web Services · Coursera)
  - Issued: July 2025
  - Credential ID: `ZDDQVO1S0521`
  - Verified Credential Link: [Coursera Verification](https://www.coursera.org/account/accomplishments/verify/ZDDQVO1S0521)

---

## Part 2: How the Website Technologies Work Together

This portfolio is engineered using a modern **Next.js 16 App Router** architecture built on top of **React 19** and **TypeScript**. Below is the detailed system diagram and layer breakdown:

```
                  +-------------------------------------------------------+
                  |                  User Browser Entry                   |
                  +-------------------------------------------------------+
                                              |
                                              v
                  +-------------------------------------------------------+
                  |         Next.js App Router (src/app/page.tsx)        |
                  +-------------------------------------------------------+
                                              |
     +-------------------+--------------------+--------------------+
     |                   |                    |                    |
     v                   v                    v                    v
+---------------+  +---------------+  +---------------+  +------------------+
| Dynamic Load  |  | State & Scroll|  | Motion & UI   |  | Glassmorphism    |
| Component SSR |  | Progress      |  | Animation Engine | Static Styling |
| (next/dynamic)|  | (Framer/Spring|  | (Framer Motion|  | (Tailwind CSS v4)|
+---------------+  +---------------+  +---------------+  +------------------+
     |                   |                    |                    |
     +-------------------+--------------------+--------------------+
                                              |
                                              v
                  +-------------------------------------------------------+
                  |               Rendered Web UI Components              |
                  |  - IntroLoader  - BackgroundEffects - Cursor          |
                  |  - Navbar       - Hero              - About         |
                  |  - Skills       - Projects          - Education     |
                  |  - Certificates - GithubStats       - Footer        |
                  +-------------------------------------------------------+
```

---

### 🛠️ Layer-by-Layer Architecture

#### 1. Core Framework & Routing (`Next.js 16` + `React 19` + `TypeScript`)
- **Single Page Architecture ([`page.tsx`](file:///c:/Users/thime/OneDrive/Desktop/My%20projects/portfolio/src/app/page.tsx))**: Assembles all portfolio sections into a single seamless, scrolling single-page application (SPA).
- **TypeScript**: Ensures type safety across props, data arrays (e.g. project lists, certificate items), and animation state handlers.
- **Dynamic Imports (`next/dynamic`)**: Canvas-heavy components (`Cursor`, `BackgroundEffects`, `GithubStats`, `IntroLoader`) are dynamically imported with `ssr: false` to ensure zero server-side rendering mismatch errors for window/DOM dependencies.

#### 2. Animation & Interaction System (`Framer Motion` + `Lenis`)
- **Scroll Tracking**: `useScroll()` and `useSpring()` measure real-time vertical scroll progress and render a gradient progress bar at the top of the screen (`z-[9999]`).
- **Viewport Scroll Triggers**: Each component (e.g., [`Certificates.tsx`](file:///c:/Users/thime/OneDrive/Desktop/My%20projects/portfolio/src/components/Certificates.tsx), [`Projects.tsx`](file:///c:/Users/thime/OneDrive/Desktop/My%20projects/portfolio/src/components/Projects.tsx), [`Hero.tsx`](file:///c:/Users/thime/OneDrive/Desktop/My%20projects/portfolio/src/components/Hero.tsx)) uses `whileInView={{ opacity: 1, y: 0 }}` to animate items cleanly into view as the user scrolls.
- **Interactive Lightbox Modal**: `AnimatePresence` manages smooth enter and exit transitions for the full-screen certificate image modal viewer when clicking on certificate previews.
- **Parallax Mouse Movement**: `useMotionValue` and `useSpring` calculate mouse positions in `Hero.tsx` to gently tilt floating tech icon badges.

#### 3. Styling & Aesthetics (`Tailwind CSS v4`)
- **Glassmorphism Design System**: Custom glassmorphism utilities (`glass-card`, `backdrop-blur-md`, `border-white/10`) provide a sleek dark-mode background matching modern design standards.
- **Color Palette**: Deep dark background (`#050505`), neon blue accents (`#3B82F6` / `#60A5FA`), and AWS orange accents (`#FF9900`).

#### 4. Asset & Image Management (`Next.js Image`)
- **Optimized Image Component (`<Image />`)**: Serves optimized, responsive certificate thumbnails (`/aws_certificate.png`) and project mockups (`/weather.png`, `/cloud_file_share.png`).

---

## 📌 Summary Checklist of Code Files

- ⚛️ [page.tsx](file:///c:/Users/thime/OneDrive/Desktop/My%20projects/portfolio/src/app/page.tsx) (Main layout composition and scroll engine)
- 🏆 [Certificates.tsx](file:///c:/Users/thime/OneDrive/Desktop/My%20projects/portfolio/src/components/Certificates.tsx) (Certificate card & full-screen lightbox modal)
- 🚀 [Projects.tsx](file:///c:/Users/thime/OneDrive/Desktop/My%20projects/portfolio/src/components/Projects.tsx) (Projects gallery & technology badges)
- 🎯 [Hero.tsx](file:///c:/Users/thime/OneDrive/Desktop/My%20projects/portfolio/src/components/Hero.tsx) (Header banner with dynamic role switcher & floating badges)
