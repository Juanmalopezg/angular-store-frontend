## angular-store-frontend

The UI and frontend logic for a e-commerce project

## Usage

To run the application, you will need to have Node.js and Angular CLI installed on your machine.

Once you have installed these dependencies, you can run the following commands:

```
npm install
ng serve
```

This will start a local development server at http://localhost:4200/ where you can view the application in your browser.

## Docker

Alternatively, you can run the application in a Docker container.

Then, build the Docker image, run

```
docker build -t store-frontend .
```

Next, to run the Docker container, use:

```
docker run --name store-frontend -d -p 4200:80 store-frontend
```
