# Hack4Impact Drexel University Website

This is the official website for the Hack4Impact Drexel University chapter.

## Setup Instructions

Follow these steps to run the website locally:

1. Clone the repository
2. Install dependencies
3. Run the development server

See the detailed instructions below.

Install dependencies:

```shellscript
npm install
# or
yarn install
```
Run the development server:

```shellscript
npm run dev
# or
yarn dev
```


4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.


### Building for Production

```shellscript
npm run build
# or
yarn build
```

To start the production server:

```shellscript
npm run start
# or
yarn start
```

## Project Structure

```plaintext
hack4impact-drexel/
├── app/                    # Next.js App Router pages
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── join/               # Join/Apply page
│   ├── nonprofits/         # Nonprofit partners page
│   ├── projects/           # Projects showcase
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # Reusable components
│   ├── ui/                 # shadcn/ui components
│   ├── header.tsx          # Site header/navigation
│   ├── footer.tsx          # Site footer
│   ├── hero-section.tsx    # Hero section component
│   └── ...                 # Other components
├── public/                 # Static assets
│   ├── logo.svg            # Site logo
│   ├── globe-icon.svg      # Globe icon
│   └── ...                 # Other assets
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── styles/                 # Additional styles
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project dependencies
└── README.md               # Project documentation
```
