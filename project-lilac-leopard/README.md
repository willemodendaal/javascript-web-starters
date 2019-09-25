# Project-Lilac-Leopard

A starter project that uses the following technologies:

✅ TypeScript
✅ Webpack v4.40
✅ Babel v7.6
✅ SCSS 4.12
✅ React 16.9
✅ Redux 4.0

Updated: September 2019

## Running

To run the project locally:

- npm install
- webpack-dev-server

## Building

To build a development mode package, use:

- npm run dev

To build a production mode package, use:

- npm run build

## Notes

- Uses TypeScript instead of ES2018.
- The React app is split into three main components, just for illustrative purposes: 
  - Items, 
  - Settings 
  - and App (which contains the above two).
- Redux state is also split in two, to illustrate how we manage state for different parts of the application (a.k.a. "Reducer Composition")
- Html 'cache busting' is done using the HtmlWebPackPlugin.