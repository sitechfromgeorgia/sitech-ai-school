# Spec: SiTech AI School ChatBot

## 🎯 Goal
Implement an interactive, AI-powered chatbot widget for `school.sitech.ge` to assist students and potential leads.

## ✨ Features
1. **Floating UI:** A modern, bubble-style button in the bottom-right corner.
2. **Interactive Chat window:** Expandable window with message history.
3. **AI Persona:** "SiTech Assistant" - helpful, technical, and friendly.
4. **Mobile Responsive:** Adapts to screen sizes.
5. **Animation:** Smooth transitions using Framer Motion.
6. **Pre-defined Questions:** Quick buttons for "Course Info", "Pricing", "Contact Support".

## 🛠 Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Persona:** Built-in system prompt for the chat.

## 🎨 Design
- **Theme:** Matches the main site (Blue/Deep Primary).
- **Glassmorphism:** Use backdrop-blur for the chat window.
- **Typography:** Inter.

## 🚀 Implementation Plan
1. Create `ChatBot.tsx` component.
2. Define the UI states (collapsed/expanded).
3. Implement the message rendering loop.
4. Add quick-action buttons.
5. Integrate with a mock or real backend for AI responses.
6. Include in `layout.tsx` for site-wide availability.
