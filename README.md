# Age Calculator - Luxon & Datepicker

A modern, responsive age calculator built with Vite that accurately computes your age in years, months, and days using the Luxon library for precise date calculations and js-datepicker for an intuitive date selection experience.

**Live Demo**: [https://nurf21.github.io/age-calculator](https://nurf21.github.io/age-calculator)  
**Project Source**: [https://roadmap.sh/projects/age-calculator](https://roadmap.sh/projects/age-calculator)

## Features

- **Precise Age Calculation**: Uses Luxon library for accurate date calculations
- **Beautiful Date Picker**: Clean, intuitive date selection interface
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Detailed Age Breakdown**: Shows years, months, and days separately
- **Validation**: Ensures valid dates and prevents future dates
- **Modern UI**: Attractive gradient design with smooth animations
- **Vite-powered**: Fast development and optimized production build

## Technologies Used

- [Vite](https://vite.dev/) - Next generation frontend tooling
- [Luxon](https://moment.github.io/luxon/) - Powerful date/time library
- [js-datepicker](https://www.npmjs.com/package/js-datepicker) - Lightweight date picker
- [Font Awesome](https://fontawesome.com/) - Icon set

## Installation

1. **Clone the repository**:
```bash
git clone https://github.com/nurf21/age-calculator
cd age-calculator
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm run dev
```

4. **Build for production**:
```bash
npm run build
```

5. **Preview production build**:
```bash
npm run preview
```

## How to Use

1. **Development Mode**:
   - Run `npm run dev` to start the development server
   - Open your browser to `http://localhost:5173`
   - The app will automatically reload when you make changes

2. **Using the Calculator**:
   - Select your birth date using the date picker
   - Click "Calculate Your Age"
   - View your exact age in years, months, and days

3. **Production Build**:
   - Run `npm run build` to create an optimized production build
   - The build files will be in the `dist/` directory
   - Deploy the contents of the `dist/` directory to any static hosting service

## Customization

You can easily customize the calculator by modifying the CSS variables in `src/style.css`:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  --result-gradient: linear-gradient(135deg, #74ebd5 0%, #9face6 100%);
  --button-gradient: linear-gradient(to right, #3498db, #2c3e50);
  --text-color: #2c3e50;
}
```

To change the default date format or datepicker behavior, modify the datepicker configuration in `src/datepicker.js`.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Credits

- [Luxon](https://moment.github.io/luxon/) by Moment.js contributors
- [js-datepicker](https://www.npmjs.com/package/js-datepicker) by Aaron Cordova
- [Font Awesome](https://fontawesome.com/) for icons
- [Vite](https://vitejs.dev/) for the build tool
- Gradient backgrounds inspired by [uiGradients](https://uigradients.com/)

---