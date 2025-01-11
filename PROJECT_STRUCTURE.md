# Project Structure Documentation

## Overview
This document explains the structure of the GameHub project and how to make modifications to different components.

## Key Components

### Navbar (`src/components/layout/Navbar.tsx`)
- Contains the main navigation header
- Includes user information, balance, deposit/withdraw buttons
- Features links to Bonuses, Divisions, and Online Users count
- Has a theme toggle button
- Fully responsive with mobile menu

To modify:
- User information: Update the user object in the component
- Navigation links: Modify the links in both desktop and mobile sections
- Styling: Adjust the Tailwind classes for visual changes

### Games Sidebar (`src/components/layout/GamesSidebar.tsx`)
- Reusable sidebar component for game navigation
- Includes search functionality
- Responsive design that adapts to different screen sizes

To modify:
- Game list: Update the `games` array in the component
- Search behavior: Modify the filtering logic
- Layout: Adjust the Tailwind classes for sizing and positioning

### Pages

#### Home (`src/pages/Home.tsx`)
- Features a slideshow section (to be implemented)
- Displays platform statistics
- Shows featured games
- Includes the games sidebar

To modify:
- Slideshow: Implement in the designated section
- Stats: Update the numbers in the statistics section
- Featured games: Modify the games array in the grid section

#### Game Pages (e.g., `src/pages/games/Plinko.tsx`)
- All game pages follow the same layout structure
- Include the games sidebar
- Maintain consistent header and footer

To modify:
- Game content: Update the main content area
- Layout: Adjust the flex container classes for different layouts

#### Profile (`src/pages/Profile.tsx`)
- Displays user information and settings
- Does not include the games sidebar

To modify:
- User information: Update the profile content
- Layout: Modify the container and grid classes

## Responsive Design
- All components use Tailwind's responsive classes
- Mobile-first approach with breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

## Theme Customization
- Dark/light mode toggle in the navbar
- Theme colors defined in `src/index.css`
- Uses CSS variables for consistent theming

## Adding New Features
1. Create new components in appropriate directories
2. Update routing in `App.tsx` if needed
3. Maintain consistent styling using Tailwind classes
4. Ensure responsive design across all screen sizes
5. Test on multiple devices and browsers

## Best Practices
- Keep components small and focused
- Reuse components when possible
- Maintain consistent naming conventions
- Follow the existing responsive design patterns
- Use Tailwind's utility classes for styling