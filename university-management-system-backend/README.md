# Data Model

1. User:

   - \_id
   - email
   - firstName
   - lastName
   - password
   - role
   - status
   - isDeleted
   - createdAt
   - updatedAt

2. Student:

   - \_id
   - StudentId (generated)
   - gender
   - dateOfBirth
   - email
   - contactNo
   - presentAddress
   - permanentAddress
   - guardian
     - fatherName
     - motherName
     - contactNo
   - profileImage
   - admissionSemester
   - isDeleted
   - createdAt
   - updatedAt

3. Admin:

   - \_id
   - designation
   - gender
   - dateOfBirth
   - email
   - contactNo
   - emergencyContactNo
   - presentAddress
   - permanentAddress
   - profileImage
   - managementDepartment
   - isDeleted
   - createdAt
   - updatedAt

4. Semester:

   - \_id
   - name
   - year
   - createdAt
   - updatedAt

5. Faculty:
   - \_id
   - name
6. Department:
   - \_id
   - name
   - Faculty
   - createdAt
   - updatedAt
