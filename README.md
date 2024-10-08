# Box Belt
This application is designed to classify packages into three categories (`STANDARD`, `SPECIAL`, or `REJECTED`) based on their dimensions and mass. The logic is implemented in TypeScript and tested using Jest.

### Criteria:
- A package is **bulky** if its volume (Width x Height x Length) is greater than or equal to 1,000,000 square centimeters or if any single dimension is greater or equal to 150 centimeters.
- A package is **heavy** when its mass is greater or equal to 20 kilograms.
- The classification is as follows:
  - `STANDARD`: Neither bulky nor heavy.
  - `SPECIAL`: Either bulky or heavy.
  - `REJECTED`: Both bulky and heavy.

## Prerequisites
- Node.js 18+.
- `npm`.

## Setup and Run Instructions

1. Clone the repository.

```bash
git clone https://github.com/Sunrostern/box-belt.git
cd box-belt
```

2. Install dependencies.

```
npm install
```

3. Build and run.
```
npm run build && npm run build:frontend
npm run start:frontend
```
Navigate to http://localhost:9000 and play with the app.
