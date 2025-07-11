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

- **Frontend**        : JavaScript (**React**), HTML, CSS (**Tailwind**)
- **Backend**         : Python (**Flask**)
- **Database**        : MongoDB
- **AI Integration**  : JamAI Base
- **Version Control** : Git & GitHub

---

## 🔍 Challenge and Approach

### 🧩 Challenge

The internet is flooded with misinformation and fake news, especially on social media platforms. Although AI has the potential to help, it alone lacks the contextual understanding and credibility required for reliable verification. On the other hand, solely relying on experts for evaluation potentially enhances accuracy but lacks of efficiency. Additionally, expert reviewers may also face challenges in handling large volumes of reports efficiently.


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

### 1. Register page
![Register](./fb96486b-7b61-4de0-9572-b23e0e5f9c6b.png)

- This is o page for users who do not have an account and need to register an account

### 2. Login page
![Login](./28139136-0047-4d6a-bafd-97572e03d2c8.png)

- This is a poge for users who have accounts and need to log in to their accounts.

### 3. Evaluation page
![Evaluation](./28139136-0047-4d6a-bafd-97572e03d2c8.png)

- This is to help users complete fact-checking work in a systematic manner and retain a complete chain of evidence.

### 4. Evaluation History page
![Evaluation History](./28139136-0047-4d6a-bafd-97572e03d2c8.png)

-Through clear visuel date dashboards and intellígent workflow design, It helps users efficlently manage the entire lífe cycle of assessment projects.

### 5. Pending Reports page
![Pending Reports](./28139136-0047-4d6a-bafd-97572e03d2c8.png)

- Help users efficiently manage and prioritize content to be verified.

---

## Setup
1. Ensure Node.js and npm are installed.
> node -v
> 
> npm -v
2. Install dependencies and start the React dev server:
> npm install
>
> npm run dev
3. View the website in web browser through localhost url provided. (Do not move to other page yet)
4. Create a seperate terminal.
5. Run command `pip install -r requirements.txt` at terminal.
6. Request owner (`lightningjq123456@gmail.com`) for access to MongoDB database.
7. Change MongoDB Client URI.
8. Run command `python app.py`
9. Refresh the browser ad start explore the website.




