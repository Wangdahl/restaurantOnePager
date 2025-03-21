# Restaurant One Pager

A modern, responsive one-page website for a restaurant, built using semantic HTML, modular SCSS, and vanilla JavaScript. Designed with accessibility, responsiveness, and simplicity in mind. Includes interactive menu-building, reservation logic, and dark/light mode toggle.

---

## 🌐 Live Features
- Responsive layout with Flex/Grid
- Customizable lunch buffet with toggling details
- Interactive menu builder with dynamic cost calculation
- Light/Dark mode toggle
- JS reservation form with validation & live time restrictions
- Mobile-friendly collapsible navigation

---

## 📁 Folder Structure

```
assets/
└── images/               # All project images

css/
├── main.css              # Compiled CSS from SCSS
└── main.css.map          # Source map

js/
├── buffet.js             # Toggle lunch buffet cards
├── buildMenu.js          # Dynamic menu planner & calculator
├── darkmod.js            # Theme toggle logic
├── navigation.js         # Mobile menu toggle behavior
└── reservation.js        # Reservation form validation + time constraints

node_modules/             # Node dependencies incl. Sass (via npm)

scss/
├── components/
│   ├── _components_index.scss
│   ├── button.scss
│   ├── card.scss
│   ├── darkmode-toggle.scss
│   ├── modal.scss
│   └── navbar.scss
│
├── globals/
│   ├── _globals_index.scss
│   ├── colors.scss
│   ├── reset.scss
│   └── typography.scss
│
├── layout/
│   ├── _layout_index.scss
│   ├── about.scss
│   ├── banner.scss
│   ├── buffet.scss
│   ├── footer.scss
│   ├── header.scss
│   ├── menu.scss
│   ├── reservation.scss
│   ├── section.scss
│   └── visit.scss
│
├── utils/
│   ├── _utils_index.scss
│   ├── breakpoints.scss
│   ├── mixins.scss
│   └── variables.scss
│
└── main.scss             # Master SCSS file

index.html                # The one-pager HTML entry point
package.json              # Node config (includes Sass script)
package-lock.json         # Locked dependency tree
```

---

## ⚙️ Installation & Build Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/restaurant-one-pager.git
cd restaurant-one-pager
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Compile SCSS (One-Time Build)
```bash
npx sass scss/main.scss css/main.css --no-source-map --style=expanded
```

### Optional: Watch for SCSS Changes
```bash
npm run watch:css
```
(You must have a script defined in `package.json` for this.)

---

## 🧠 JavaScript Functionality Overview

### `navigation.js`
- Mobile nav toggle with hamburger
- `.main-nav` class toggling + sticky behavior
- Icon transition + accessibility updates

### `darkmod.js`
- Theme toggle via radio buttons
- Dark/light mode CSS variables:
  - `--background`, `--text`, `--primary`, etc.
- Icon + toggle bar animation

### `reservation.js`
- Sets `min` attribute on date = today
- Adds 1 hour to current time for `min` time
- Max date = today + 1 year
- Validates inputs for name, email, guests, etc.
- Inline placeholder + red border for errors
- Modal confirmation on submit with dynamic text

### `buffet.js`
- Clicking `.rotate` heading toggles `.buffet__card` elements
- Uses `max-height`, `opacity`, `transform` for smooth rollout
- Icon rotates with `.open` class

### `buildMenu.js`
- Each `fa-plus` icon adds menu item to custom list
- Adds item price to total, updates `<span id="total">`
- Duplicated item icon becomes rotated "X"
- Clicking X removes item and subtracts from total
- Clear button removes all items from list

---

## 🎨 SCSS & Design Philosophy

- SCSS is structured for scalability and clarity
- Modular folder structure: components, layout, utils, globals
- Uses `@use` + `@forward` to manage scope and structure
- Responsive breakpoints via mixins:
  - `xsmall: 480px`, `small: 768px`, `medium: 1024px`, `large: 1200px`
- Ratio-based layout:
  - Banner = 2:1
  - Menu grids = 3:2
  - Image boxes = 2:3
- Mixins:
  - `breakpoint($size)`
  - `ratio-box($width, $ratio)` for responsive boxes

---

## 🔧 SCSS Architecture

- **Modular** and **BEM‑friendly** naming
- Uses `@use` for imports
- Utilities include:
  - `variables.scss`: Colors, spacing, font stacks
  - `breakpoints.scss`: Common sizes (xsmall, small, medium, large)
  - `mixins.scss`: `ratio-box`, `breakpoint`, and reusable patterns

---

## 🌙 Dark / Light Mode
- Controlled via radio toggle (`#dark`, `#light`)
- Theme variables switch dynamically:
  - `--background`
  - `--text`
  - `--primary`, etc.
- Icon reacts and slider animates

---

## 🧪 Form Validation

- No backend, so we simulate submission
- Form fields are validated on submit
- If fields are invalid:
  - `.error` class added
  - Placeholder shows user prompt
  - Value is cleared to make placeholder visible
- Date/time inputs handled separately with real-time logic
- Confirmation modal displays:
  `Thanks for your reservation. See you on [date] at [time].`

---

## 📄 License
This project is built as a mock assignment. Use freely for learning or personal project inspiration.

