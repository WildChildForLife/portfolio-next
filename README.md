# Portfolio-Next: Advanced Frontend Architecture

## Introduction
This repository showcases a frontend project built with Next.js, meticulously designed and architected to adhere to the principles of clean frontend architecture and modern frontend practices.
The live version of the portfolio can be accessed at [yousstack.com](https://yousstack.com).

## Design & User Experience
- **Figma Design**: The entire project has been meticulously designed using Figma and has undergone a review by one of the leading UI/UX designers, [Habib Moussadik](https://www.behance.net/habibm).
- **Avatar Animation**: The avatar has been artistically drawn on Figma, with path animations crafted using Framer Motion.
- **Dynamic Icon Component**: A versatile Icon component has been developed that dynamically pulls any required icon from the "react-icons" library. An optimization thread related to this component is open on [StackOverflow](https://stackoverflow.com/questions/76876776/implement-dynamic-import-for-react-icons-in-nextjs-app).
- **Medium SDK API**: It's noteworthy that the Medium SDK API has been deprecated, with no updates since January 2023 [Medium API](https://github.com/Medium/medium-api-docs).

## Styling & Animation
- **Tailwind CSS**: The project utilizes Tailwind in SOC separated CSS files, leveraging the `@apply` directive for a cleaner and more readable DOM.
- **CSS-Driven Animations**: The architecture emphasizes leveraging CSS for animations and user interactions, minimizing the reliance on JavaScript for such tasks.

## Code Quality & Best Practices
- **Linting**: The project enforces code quality and styling conventions using `stylelint` and `eslint`.
- **Reusable Components**: Emphasis has been placed on building small, reusable components to promote the DRY (Don't Repeat Yourself) principle.
- **TypeScript**: The codebase leverages ES6/7 features and has full TypeScript support with enforced typing.
- **Performance**: Care has been taken to avoid importing unnecessary external libraries, ensuring the bundle size remains optimal for performance.
- **Dynamic Assets**: The project uses auto-generated assets like dynamic favicons, opengraph images, and Twitter images, all based on reusable components.

## Testing & Quality Assurance
- **Testing**: Both unit and E2E tests are currently in progress, ensuring the robustness and reliability of the application.

## Conclusion
This repository embodies a blend of design and coding best practices, ensuring a clean, maintainable, and high-performance frontend architecture.
