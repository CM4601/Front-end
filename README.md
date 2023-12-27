# ThriveSync Web Application
![poster](https://github.com/CM4601/thrive-sync-frontend/assets/93707378/45f34e9a-b81f-4542-b05f-c1efeddbb7bb)


## Technologies
<div style="display:flex; margin: auto;">

  <img style="margin:5px;" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React">
  <img style="margin:5px;" src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" alt="npm">
  <img style="margin:5px;" src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" alt="React">
  <img style="margin:5px;" src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" alt="React">
  <img style="margin:5px;" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="Intellij">
  <img style="margin:5px;" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="Intellij">
  <img style="margin:5px;" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="Intellij">
  <img style="margin:5px;" src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Intellij">
  <img style="margin:5px;" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img style="margin:5px;" src="https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white">
  <img style="margin:5px;" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VSCode">
  <img style="margin:5px;" src="https://img.shields.io/badge/pycharm-143?style=for-the-badge&logo=pycharm&logoColor=black&color=black&labelColor=green">
  <img style="margin:5px;" src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white" alt="Markdown">

</div>

# Overview
ThriveSync is an genetic alorithms based state-of-the-art tool to calculate burn out rates for employees 

## 1. Web Application

TherapAIst is a cutting-edge web application built with **React.js**, designed to visualize real-time video and voice analytics data of patients in clinics. The application visualize different levels of analytical such as emotions, sentiment, suicidal tendencies, and depression levels in patients. The web site presents these analytics in an easy-to-understand format, providing valuable insights for doctors and therapists.

Web application consists of following parts:

- **Landing Page**:
The first page of the web site is a visually appealing and futuristic landing page that captures the attention of users. It provides an overview of the application's features and functionality, encouraging users to explore further.

- **Registration and Login Pages**:
The registration and login pages are user-friendly and straightforward. Doctors can easily create a new account or log in to their existing accounts with their email and password. This helps to ensure that only authorized personnel can access the patient data and analytics.

- **Doctor Profile**:
The doctor profile page displays statistics and experience of the doctor, providing a comprehensive view of their expertise and qualifications. It enables doctors to manage their patient data, track progress, and view analytics.

- **Patient Analysis Dashboard**:
The patient analysis dashboard provides detailed insights into the patient's emotional state, sentiment, suicidal tendencies, and depression levels. It is easy to navigate, allowing doctors to quickly access and view the data they need.

Overall, TherapAIst is an innovative web application that leverages advanced technology to provide valuable insights into patients' emotional state and mental health. It enables doctors and therapists to make informed decisions and provide the best possible care for their patients.

## Web Application Demo

[![](https://markdown-videos.deta.dev/youtube/USL-rW7b9cQ)](https://youtu.be/USL-rW7b9cQ)

## Repository Structure
```
+---therapaist
    +---public
    |       favicon.ico
    |       index.html
    |       logo192.png
    |       logo3.png
    |       logo512.png
    |       manifest.json
    |       robots.txt
    |       
    \---src
        |   App.js
        |   DisableRightClick.jsx
        |   index.css
        |   index.js
        |   
        +---api
        |       loginapi.js
        |       registerapi.js
        |       
        +---assets
        |       bars.png
        |       bg2.jpg
        |       bg2_cover.png
        |       bgdoctor.jpg
        |       bgdoctor_1.png
        |       cover1.png
        |       doctor1.png
        |       doc_uk.jpeg
        |       dr_uk_new.jpg
        |       herobg.mp4
        |       login.png
        |       logo.png
        |       logo2.png
        |       logo3.png
        |       next_session.png
        |       patient1.png
        |       patient2.png
        |       patient3.png
        |       patient_cover.webp
        |       patient_cover_1.png
        |       patient_list.png
        |       patient_profile_photo_uk.jpg
        |       quotes.png
        |       register 1.png
        |       register.png
        |       register_1.png
        |       ukp_avt.jpg
        |       uk_avatar.jpg
        |       up_session1.png
        |       
        +---components
        |   +---cards
        |   |       Cards.css
        |   |       Cards.js
        |   |       
        |   +---Contacts
        |   |       ContactList.css
        |   |       ContactList.jsx
        |   |       Contacts.css
        |   |       Contacts.jsx
        |   |       
        |   +---HomeCards
        |   |       BlobCard.css
        |   |       BlobCard.js
        |   |       
        |   +---navbar
        |   |       Navbar.css
        |   |       Navbar.js
        |   |       
        |   \---Progress
        |           Progress.js
        |           
            +---data
            |       dashboard_table.js
            |       patientData.js
        |       
        \---pages
            +---Dashboard
            |       Dashboard.css
            |       Dashboard.jsx
            |       
            +---Home
            |       Home.css
            |       Home.js
            |       Landing.css
            |       Landing.js
            |       
            +---login
            |       login.css
            |       Login.js
            |       
            +---profile
            |       Profile.css
            |       Profile.js
            |       
            \---register
                    Register.css
                    Register.js
    |   .gitignore
    |   package-lock.json
    |   package.json
    |   README.md
    ```
