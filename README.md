# AI Doctor - Medical Report Assistant
[![Follow me on GitHub](https://img.shields.io/github/followers/akshaysinhaaa?label=Follow%20Me&style=social)](https://github.com/akshaysinhaaa)
[![Twitter Follow](https://img.shields.io/twitter/follow/0xakshayyy?style=social)](https://x.com/0xakshayyy)

This project is built with the goal of assisting users in **understanding their medical lab reports** using modern AI technologies — by combining OCR, LLMs, and vector databases for accurate, interactive explanations.

<div align="center">
  <a href="https://www.youtube.com/watch?v=KYCtHzIJP7o">
    <img src="https://img.youtube.com/vi/KYCtHzIJP7o/maxresdefault.jpg" width="800" height="450" alt="AI Doctor Demo">
  </a>
</div>
😉 YouTube Video Demo, Click the image

## ✅ Features
- [x] **Upload PDF/Image**: Upload lab reports in PDF or image format
- [x] **Handwriting Extraction**: Converts handwritten doctor notes into readable text
- [x] **Query Your Report**: Ask health-related questions based on your specific report
- [x] **Powered by Google Gemini**: Uses Gemini 1.5 Pro for medical QA
- [x] **Contextual Answers with Pinecone**: Uses Pinecone DB for semantic search on Henry's Lab Manual (1800+ pages)

📑 [Suggest More](https://github.com/akshaysinhaaa/ai-doctor/issues/new)

## 📚 Tech Stack
- **Next.js 15** - The React framework for production
- **TypeScript** - For type safety and better code quality
- **Tailwind CSS** - Utility-first CSS framework
- **Google Gemini** - AI model for intelligent responses via `@ai-sdk/google`
- **Pinecone** - Vector database for contextual search

## 🤔 FAQ
- Is this a real medical diagnostic tool?
  - No, AI Doctor is designed to help understand lab reports, not to replace professional medical advice.
- Can I contribute?
  - Yeah sure why not! Just open an issue, create a pull request.
- How does it handle my medical data?
  - Your data is processed locally and securely. We don't store any of your medical information.

## 📦 Installation
```bash
git clone https://github.com/akshaysinhaaa/ai-doctor.git
cd ai-doctor
npm install
npm run dev
```
[![Hosted on Vercel](https://images.ctfassets.net/e5382hct74si/78Olo8EZRdUlcDUFQvnzG7/fa4cdb6dc04c40fceac194134788a0e2/1618983297-powered-by-vercel.svg)](https://ai-doctor-zeta.vercel.app/)
