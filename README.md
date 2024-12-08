# Test Visualization

This project is a data visualization application built with React. It visualizes test results for different components of a system across multiple instances (dev, test, and prod) and compares them to a specified norm.

## Features

- **Visualizes test data** for three components: front, back, and db.
- **Displays data** for three instances: dev, test, and prod.
- **Shows a comparison** with a specified norm.
- **Uses styled-components** for styling.
- **Fetches data** from a remote server using Axios.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/endjoyer/test-visualization.git
   cd test-visualization
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

To start the application in development mode, run:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

To create a production build, run:

```bash
npm run build
```

This will create a `build` folder with all the optimized files.

## Project Structure

- `src/components`: Contains React components for the application.
- `src/styles`: Contains global styles using styled-components.
- `src/utils`: Contains utility functions, such as data fetching.
- `public`: Contains static files and the HTML template.

## Data Sources

The application fetches data from the following URLs:

- [https://rcslabs.ru/ttrp1.json](https://rcslabs.ru/ttrp1.json)
- [https://rcslabs.ru/ttrp2.json](https://rcslabs.ru/ttrp2.json)
- [https://rcslabs.ru/ttrp3.json](https://rcslabs.ru/ttrp3.json)
- [https://rcslabs.ru/ttrp4.json](https://rcslabs.ru/ttrp4.json)
- [https://rcslabs.ru/ttrp5.json](https://rcslabs.ru/ttrp5.json)

## Technologies Used

- **React**
- **Styled-components**
- **Axios**

## Contributing

If you wish to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

This project was bootstrapped with Create React App.
