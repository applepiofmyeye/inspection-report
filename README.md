# Inspection Report Dashboard
This project was made to learn how to deploy a frontend and backend (monolithic project) on AWS EC2. 
The backend of this project is [here](https://github.com/applepiofmyeye/express-server-inspection-report). 

This is a dashboard as a recreation of the first Inspection Report Dashboard I made for Vucar. The main aim of this project is to focus on how to build an API server and how to display it in a dashboard. Both the API server and the dashboard are deployed by Nginx, hosted on an AWS EC2 instance. The website can be found at (joey.vucar.vn)[http://joey.vucar.vn].

The dashboard is built with React, Typescript, and Tailwind and the API server is built with SQLite, Sequelize, and Express Node.js.

## Dashboard

It's a simple dashboard that shows the status of the inspection report, the car details and the date of the inspection. It is meant for easy jotting down of inspection reports, to easily add and edit inspections of any car.

![Dashboard](https://github.com/applepiofmyeye/inspection-report/blob/main/public/docs/dashboard_all.png)

It also allows for filtering based on the status of inspection, done through augmenting the API calls with the `?status=` query parameter.

![Dashboard Filter](https://github.com/applepiofmyeye/inspection-report/blob/main/public/docs/dashboard_approved.png)

It also has a form to quickly add a new inspection report.

![Dashboard Form](https://github.com/applepiofmyeye/inspection-report/blob/main/public/docs/add_inspection_dialog.png)

Finally, it also has a sheet to edit and score cars on an existing inspection report.

![Dashboard Form](https://github.com/applepiofmyeye/inspection-report/blob/main/public/docs/inspection_sheet.png)
