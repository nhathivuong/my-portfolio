# My Portfolio
## **Deployment**

The portfolio is currently deployed using Vercel without a responsive design.
https://nhathivuongportfolio.vercel.app/

## **Design**
After exploring multiple design ideas, I decided to settle on a simple, clean design. I challenged myself to go outside the box by choosing an off-white color palette, inspired by the subtle elegance of embossed paper.

I kept the navigation bar at the top left, where it’s commonly found on most web pages. This familiar positioning enhances the user experience, making it easier for first-time visitors to quickly locate the information they need. From my experience navigating multiple startup websites during my previous job, I concluded that a minimalistic design is more effective for conveying information. Users shouldn’t have to wait for excessive animations just to access essential content.

For typography, I chose a sans-serif font due to its readability on screens. I also read that sans-serif fonts can be easier for individuals with reading disabilities, as the letters are clean and consistent.

Since my chosen color palette has relatively low contrast, which reduces accessibility, I implemented a hover effect that darkens the background of text sections to improve readability. Additionally, I added a dark mode option that can be manually toggled, and it automatically detects the user’s system preferences. I plan to integrate more accessibility features in the future to further enhance the inclusivity of the site.

## **Implementation**
This portfolio was built using React for its modular, component-based architecture, allowing for reusable UI elements and better scalability. For styling, I used Tailwind CSS, which provided utility-first classes to streamline development while maintaining flexibility for customization.

To manage dark mode, I leveraged the prefers-color-scheme media query to detect the user’s system preference. I also added a manual toggle that allows users to override the default setting. React’s state management dynamically updates the theme without requiring a page reload.

For navigation, I used React Router to enable seamless client-side routing, ensuring quick page transitions without full reloads. This improves the overall user experience by keeping interactions fast and smooth.

To ensure responsive design, I used Tailwind’s mobile-first approach, which allows the layout to adapt smoothly across different screen sizes. The navigation bar and other key elements adjust dynamically, improving usability on both desktop and mobile devices.

_Note: the landscape images are my own_

