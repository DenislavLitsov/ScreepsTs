# ScreepsTs

My TypeScript project for the Screeps MMO RTS programming game.

## Features
- Written in TypeScript for type safety and maintainability
- Modular creep roles and engine structure
- Memory management utilities
- Easy to extend for new strategies and automation
- Includes scripts for codebase maintenance (e.g., flattening folders and fixing imports)

### Prerequisites
- Node.js (v16 or newer recommended)
- npm
- Screeps account

### Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/DenislavLitsov/ScreepsTs.git
   cd ScreepsTs
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Setup package.json:
   ```sh
   In package.json change the line of deploy at the end with the path to your screeps deploy folder
   ```
4. Build the project:
   ```sh
   npm run build
   ```
5. Deploy to Screeps:
   ```sh
   npm run deploy
   ```

## Scripts
- `scripts/flatten-and-fix-imports.js`: Flattens folder structure and fixes import/require paths in TypeScript/JavaScript files.

## Contributing
Pull requests and suggestions are welcome! Please open an issue for major changes.

## License
MIT

## Author
Denislav Litsov
