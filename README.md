# Inspection Report Dashboard

This project was made to learn how to deploy a frontend and backend (monolithic project) on AWS EC2.
The backend of this project is [here](https://github.com/applepiofmyeye/express-server-inspection-report).

This is a dashboard as a recreation of the first Inspection Report Dashboard I made for Vucar. The main aim of this project is to focus on how to build an API server and how to display it in a dashboard. Both the API server and the dashboard are deployed by Nginx, hosted on an AWS EC2 instance.

The dashboard is built with React, Typescript, and Tailwind and the API server is built with SQLite, Sequelize, and Express Node.js.

## Getting Started

To get started, you need to have Node.js and pnpm installed on your machine.

> ---
>
> [!NOTE]
> These steps will create a file structure like this:
>
> ```
> root directory
> ├── express-server-inspection-report
> ├── inspection-report
>     └── database.sqlite // database file
> ```
>
> ---

1. Clone the repository:

```bash
    git clone https://github.com/applepiofmyeye/inspection-report.git`
```

2. Install dependencies:

```bash
    cd inspection-report
    pnpm install
```

3. Clone the backend repository:

```bash
    cd ..
    git clone https://github.com/applepiofmyeye/express-server-inspection-report.git
```

4. Install dependencies for the backend:

```bash
    cd express-server-inspection-report
    pnpm install
```

5. Start the backend server (in `express-server-inspection-report` directory):

```bash
    pnpm start
```

6. Start the development server (in `inspection-report` directory):

```bash
    cd ../inspection-report
    pnpm start
```

7. Open your browser and navigate to `http://localhost:3000/` to view the dashboard.

## Advanced Usage

### How to use a different port?

To use a different port for your frontend, you can modify the `express-server-inspection-report/index.js` file in the backend directory. In line 8:

```javascript
const frontend_port = 3000; // This should be the port used by the frontend
```

To use a different port for the backend, you can modify the `express-server-inspection-report/index.js` file in the backend directory. In line 7:

```javascript
const frontend_port = 3001; // This should be the port used by the backend
```

### How to use a different database?

By default, the backend uses a SQLite database. If you want to use a different database, you can modify the `express-server-inspection-report/index.js` file in the backend directory.

In line 17:

```javascript
//Create Sequelize instance
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});
```

Change the `dialect` to the dialect of your database (e.g., 'mysql', 'postgres', 'mariadb', etc.), and change the `storage` to the path to your database file.

For example, if you want to use MySQL, you can change the `dialect` to 'mysql' and the `storage` to the path to your database file.

## Dashboard

This is a simple dashboard that shows the status of the inspection report, the car details and the date of the inspection. It is meant for easy jotting down of inspection reports, to easily add and edit inspections of any car.

![Dashboard](https://github.com/applepiofmyeye/inspection-report/blob/main/public/docs/dashboard_all.png)

It also allows for filtering based on the status of inspection, done through augmenting the API calls with the `?status=` query parameter.

![Dashboard Filter](https://github.com/applepiofmyeye/inspection-report/blob/main/public/docs/dashboard_approved.png)

It also has a form to quickly add a new inspection report.

![Dashboard Form](https://github.com/applepiofmyeye/inspection-report/blob/main/public/docs/add_inspection_dialog.png)

Finally, it also has a sheet to edit and score cars on an existing inspection report.

![Dashboard Form](https://github.com/applepiofmyeye/inspection-report/blob/main/public/docs/inspection_sheet.png)
