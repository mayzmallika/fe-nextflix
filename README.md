<img src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460" width="240" alt="Logo" />

<br>

# Nextflix Web Application
```md
Nextflix is a responsive web application built with Next.js and Tailwind CSS. It provides a seamless movie browsing experience with features like movie details, search functionality, and responsive design for various devices.
```

## Features

### Front-end
- Built with **Next.js**.
- Styled using **Tailwind CSS**.
- Fully responsive design for **Desktop**, **Tablet**, and **Mobile**.
- Communicates with a custom **Backend API** for fetching movie data.

### Key Functionalities
- **Home Page**: Displays popular movies in a swiper.
- **Movie Details Page**: Shows detailed information about a selected movie.
- **Search Page**: Allows users to search for movies by keywords.
- **State Management**: Handles loading, error, empty, and success states effectively.


## Technical Requirements

### Architecture
- Follows **Clean Architecture** principles.
- Code is divided into the following layers:
  - **Presentation Layer**: Handles UI components and user interactions.
  - **Domain Layer**: Contains business logic and use cases.
  - **Data Layer**: Manages API calls and data fetching.

### State Management
- Implements state management for:
  - **Loading State**
  - **Empty State**
  - **Error State**
  - **Success State**


## Project Structure
```tree
.
├── next-env.d.ts
├── next.config.ts
├── package.json
├── public
│   └── assets
│       ├── css
│       ├── fonts
│       └── images
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── movie
│   │   │   ├── [id]
│   │   │   │   └── page.tsx
│   │   │   └── search
│   │   │       └── page.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── ErrorComponent.tsx
│   │   ├── HeroBanner.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── MovieCard.tsx
│   │   └── Navbar.tsx
│   └── features
│       └── movies
│           ├── components
│           │   └── PopularSwiper.tsx
│           ├── hooks
│           │   └── useMovieService.ts
│           ├── services
│           │   └── movieService.ts
│           └── types.ts
├── tailwind.config.js
└── tsconfig.json
```

## Deployment
This project is production-ready and deployed on platforms  Render. The current production version is available at: [Nextflix Front-end.](https://fe-nextflix.onrender.com/)

> Note : This application is currently hosted on Render's free plan, which is designed for testing and development purposes. As per Render's policy, free web services automatically "spin down" after 15 minutes of inactivity. This means that if the application doesn't receive any incoming requests within this period, it temporarily shuts down to conserve resources. which can take up to a minute. During this startup time, users may experience a delay in loading the application.


## Design Reference
The UI design for this project is available on Figma:
[Figma Design](https://www.figma.com/design/TUTxIs6xZpIiOzf8KjtIYz/🍿-Nextflix-App?node-id=2302-106&p=f&t=KJVSt9OD15iYAqQ4-0)

