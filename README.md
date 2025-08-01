# Multi-Step Form

A responsive multi-step form built with HTML, CSS, and JavaScript. This project is based on the Frontend Mentor challenge.

## Features

- ✅ **5-step form flow** with step navigation
- ✅ **Form validation** with real-time error messages
- ✅ **Plan selection** with monthly/yearly billing toggle
- ✅ **Add-on selection** with checkboxes
- ✅ **Summary page** with total calculation
- ✅ **Responsive design** for mobile and desktop
- ✅ **Smooth transitions** and hover effects
- ✅ **Accessible** form elements

## Project Structure

```
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css      # All styles organized by component
│   ├── js/
│   │   └── app.js          # JavaScript functionality
│   └── images/             # Required images (see below)
├── README.md               # This file
└── demo.html              # Demo version with placeholder images
```

## Required Assets

To make this project fully functional, you'll need these images from the Frontend Mentor assets:

### Desktop Images
- `bg-sidebar-desktop.svg` - Sidebar background
- `icon-arcade.svg` - Arcade plan icon
- `icon-advanced.svg` - Advanced plan icon  
- `icon-pro.svg` - Pro plan icon
- `icon-thank-you.svg` - Thank you page icon

### Mobile Images
- `bg-sidebar-mobile.svg` - Mobile sidebar background

### Optional
- `favicon-32x32.png` - Page favicon

## Setup Instructions

1. **Clone or download** this project
2. **Add the required images** to the `assets/images/` folder
3. **Open `index.html`** in your browser

Or you can use `demo.html` which has placeholder styles for missing images.

## How It Works

### Step 1: Personal Info
- Validates name, email, and phone fields
- Real-time validation with error messages
- Required fields must be filled to proceed

### Step 2: Plan Selection
- Choose between 3 plans: Arcade, Advanced, Pro
- Toggle between monthly and yearly billing
- Yearly plans show "2 months free" bonus

### Step 3: Add-ons
- Optional add-ons: Online service, Larger storage, Customizable profile
- Prices adjust based on billing period
- Visual feedback for selected items

### Step 4: Summary
- Review all selections
- Shows total cost calculation
- "Change" link to go back to plan selection

### Step 5: Thank You
- Confirmation page after form submission

## Customization

### Colors
All colors are defined as CSS custom properties in `:root`:
```css
:root {
    --blue-950: hsl(213, 96%, 18%);
    --purple-600: hsl(243, 100%, 62%);
    /* ... more colors */
}
```

### Breakpoints
Responsive design with mobile-first approach:
- Mobile: < 768px
- Desktop: 768px+

### Form Data
Access form data via JavaScript:
```javascript
const form = new MultiStepForm();
const data = form.collectFormData();
console.log(data);
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- ES6+ JavaScript features used

## Credits

- Challenge by [Frontend Mentor](https://www.frontendmentor.io)
- Built with vanilla HTML, CSS, and JavaScript
- Ubuntu font from Google Fonts

## License

This project is for educational purposes. Please check Frontend Mentor's terms for commercial usage.