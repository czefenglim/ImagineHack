# 🧠 FactBridge: An AI-Powered Crowdsourced Verification Platform

*FactBridge* is a fact-checking and misinformation evaluation platform designed to assist organisations in reviewing potentially false or misleading content. It combines a well-trained Artificial Intelligence (AI) model with a network of experts from various industries and regions to ensure the most accurate and reliable verification outcomes. All data flows are securely logged. Every evaluation—from AI and human—is version-controlled and traceable. This makes FactBridge not just a tool for detection, but a trusted verification authority.

---

## 👥 Team Members

- [Lim Cze Feng]🌈🌻
- [Loh Jin Qian]🪼✨
- [May Phoo Thet] 🌸🍓
- [Fatma Saad] 👾🍬
- [Luo Wantong] 🐹🥑






---

## 💻 Technologies Used

- **Frontend**        : JavaScript (**React**), HTML, CSS
- **Backend**         : Python (**Flask**)
- **Database**        : MongoDB
- **AI Integration**  : JamAI Base
- **Version Control** : Git & GitHub

---

## 🔍 Challenge and Approach

### 🧩 Challenge

The internet is flooded with misinformation and fake news, especially on social media platforms. While users may recognize suspicious content, there is often no accessible and credible channel for them to report it and have it verified. Additionally, expert reviewers face challenges in handling large volumes of reports efficiently.





### 💡 Our Approach

To address the growing challenge of misinformation, we built FactBridge — a platform that:

- Receives reports of potentially false content from major social media platforms (e.g., Instagram, X, Facebook).

- Utilizes open-source AI models to perform an initial evaluation, generating summaries and preliminary assessments to accelerate the verification process.

- Connects with a network of experts from diverse industries and regions for manual review of reported content.

- Provides a streamlined interface for expert reviewers to assess reports and classify them as real or fake.

- Requires multiple expert evaluations per report, reducing individual bias and enhancing reliability.

- Uses AI to summarize the consensus from expert reviews and delivers a final verified outcome back to the reporting platform (e.g., the social media platform).

This hybrid approach — combining AI, crowdsourced expert review, and platform integration — ensures a scalable, transparent, and accurate solution for combating misinformation from start to finish.

---

## 📸 Usage Instructions

### 1. Report to be Evaluated by Experts
![Report List](./fb96486b-7b61-4de0-9572-b23e0e5f9c6b.png)

### 2. Evaluation & Evidence Upload
![Evaluation Form](./28139136-0047-4d6a-bafd-97572e03d2c8.png)


---

## Setup
1. Run command `pip install -r requirements.txt` at terminal.
2. Request owner (`lightningjq123456@gmail.com`) for access to MongoDB database.
3. Change MongoDB Client URI.
4. Install Node.js and npm.
> node -v
> 
> npm -v
5. Install dependencies and start the React dev server:
> npm install
>
> npm start
6. Available Scripts
> npm start       # Runs the app in development mode
>
> npm run dev     # Builds the app for development
7. React code and Python code should be run at different terminal.




