# Database Setup for Student Information System

This document provides instructions on how to set up the PostgreSQL database and the necessary tables for this project.

## 1. Create the Database

First, you need to create a new database in PostgreSQL. The application is configured to use a database named `studentdetails`.

You can create the database using the `createdb` command-line utility or through a graphical tool like pgAdmin.

```bash
createdb studentdetails
```

## 2. Create the `students_informations` Table

Once the database is created, connect to it and execute the following SQL command to create the `students_informations` table.

```sql
CREATE TABLE students_informations (
    sno SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    admission_number VARCHAR(50) UNIQUE NOT NULL,
    date DATE,
    mailid VARCHAR(100),
    type_of_admission VARCHAR(50),
    gender VARCHAR(10),
    dept VARCHAR(100),
    dob DATE,
    community VARCHAR(50),
    phone_number VARCHAR(20),
    medium VARCHAR(50),
    board_of_study VARCHAR(100),
    father_name VARCHAR(100),
    father_occupation VARCHAR(100),
    mother_name VARCHAR(100),
    mother_occupation VARCHAR(100),
    hostel BOOLEAN,
    college_bus BOOLEAN,
    address1 VARCHAR(255),
    address2 VARCHAR(255),
    address3 VARCHAR(255),
    district VARCHAR(100),
    state VARCHAR(100),
    pincode VARCHAR(10),
    ten_school VARCHAR(255),
    ten_mark NUMERIC(5, 2),
    twelth_scholl VARCHAR(255),
    twelth_mark NUMERIC(5, 2),
    maths NUMERIC(5, 2),
    physics NUMERIC(5, 2),
    chemistry NUMERIC(5, 2),
    cut_off NUMERIC(5, 2)
);
```

## 3. Insert Sample Data (Optional)

To test the application, you can insert some sample data into the `students_informations` table.

```sql
INSERT INTO students_informations (name, admission_number, date, mailid, type_of_admission, gender, dept, dob, community, phone_number, medium, board_of_study, father_name, father_occupation, mother_name, mother_occupation, hostel, college_bus, address1, address2, address3, district, state, pincode, ten_school, ten_mark, twelth_scholl, twelth_mark, maths, physics, chemistry, cut_off)
VALUES
('John Doe', 'A001', '2023-08-15', 'john.doe@example.com', 'Regular', 'Male', 'Computer Science', '2005-04-23', 'General', '123-456-7890', 'English', 'State Board', 'Richard Doe', 'Engineer', 'Jane Doe', 'Doctor', true, false, '123 Main St', 'Apt 4B', 'Near Park', 'Metropolis', 'StateA', '12345', 'City High School', 95.5, 'State Senior Secondary', 92.0, 95, 90, 88, 185.0),
('Jane Smith', 'A002', '2023-08-16', 'jane.smith@example.com', 'Lateral Entry', 'Female', 'Electronics and Communication', '2004-11-12', 'OBC', '987-654-3210', 'English', 'CBSE', 'Robert Smith', 'Businessman', 'Mary Smith', 'Homemaker', false, true, '456 Oak Ave', 'Unit 3', '', 'Townsville', 'StateB', '54321', 'Central School', 98.0, 'National Public School', 96.5, 98, 95, 92, 191.5);
```
