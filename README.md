# Company System

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)

## Overview

The Company System is a web-based platform designed to facilitate various Human Resource (HR)
and project management processes within an organization.
It allows employees to log in, record attendance, manage tasks, and track interview cycles,
promoting efficiency and transparency across departments.

## Features

- **Department Management:** Supports multiple departments, each with a manager and employees.
- **Employee Roles:** All company members are employees, with different roles including Fresh, Mid-l**evel, Senior, Team
  Leads, and Managers.
- **Training Management:** Employees can enroll in training sessions outside of working hours.
- **Task and Sprint Management:** Product Owners (POs) can create tasks and manage sprints, while Team Leads assign
  tasks to their members.
- **Duty Recording:** Employees can record various duties and submit them for approval.
- **Managers:** Managers can approve/refuse duties.
- **Interview Cycle Tracking:** HR can manage the entire interview process, from candidate addition to assignment.

## Technologies Used

- **Frontend:** Angular, HTML, CSS, TypeScript
- **Backend:** Spring Boot, Java
- **Database:** MySQL
- **Others:** Maven, Liquibase

## Installation

**Prerequisites**

- JDK 11 or higher
- Node.js and npm
- MySQL Server

**Project Setup**

1. Clone the repository:
   ``` git clone git@github.com:okaabb/company-system.git```

**Backend Setup**

1. Navigate to the backend directory:
   ```cd backend```
2. Install dependencies:
   ```mvn install```
3. Configure your database connection in `src/main/resources/application.properties`
4. Run the application:
   ```mvn spring-boot:run```

**Frontend Setup**

1. Navigate to the frontend directory:
   ```cd frontend```
2. Install dependencies:
   ```npm install```
3. Start the Angular application:
   ```npm start```
4. By default, it should be on port 4200. Open your browser and go to http://localhost:4200

## Usage

- **Login:**
  After running the application an admin should be created by default in the employee table with username: admin and
  password: admin.
  Access the application through the login page using the admin credentials. Then, you can add other employees where
  they can log in using their credentials.
  Only Admins can add new employees to the system.
- **Employee Functions:** Employees can record their duties, view assigned tasks, view applicants, and enroll in
  training sessions.
- **Manager Functions:** Managers can approve/refuse duties and manage employee records.
- **HR Functions:** HR personnel can manage interview cycles and update candidate statuses.

## Database Schema

The schema is included in a `.png` file in the project. [Database Schema](system-schema.png)