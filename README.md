# Pizzashop

Dashboard for establishment management and iFood-style order control.

## Requirements

Before starting, make sure you have installed on your machine:
- [Node.js](https://nodejs.org/) (recommended version: LTS)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

## Cloning the Repository

To clone the repository, run the following command:

```sh
$ git clone https://github.com/Alexsandrogms/pizzashop.git

$ cd pizzashop
```

## Installing Dependencies

Install the project dependencies with:

### Using Yarn
```sh
$ yarn install
```

### Using npm
```sh
$ npm install
```

## Running the Project

To start the development server, run:

### Using Yarn
```sh
$ yarn dev
```

### Using npm
```sh
$ npm run dev
```

The project will be available at: [http://localhost:3000](http://localhost:3000)

## Building for Production

To generate optimized production files, run:

```sh
$ yarn build # or npm run build
```

To test the production version locally, use:

```sh
$ yarn start # or npm run start
```

## Environment Variables Configuration

Create a `.env.local` file in the project root and add the necessary variables:

```sh
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_OTHER_KEY=value
```

## Project Structure

```
/ -
  |-- /src             # Project root
  |-- /public          # Static files
  |-- /test            # Test files
  |-- src/pages        # Next.js pages
  |-- src/components   # Reusable components
  |-- src/utils        # Utility functions
  |-- src/lib          # Configuration libs
  |-- src/api          # Files for http requests
  |-- package.json     # Project configuration
```

## Contribution

If you want to contribute, follow these steps:
1. Fork the repository
2. Create a branch for your feature (`git checkout -b my-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin my-feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).

