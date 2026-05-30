# LAND Survey

One page marketing site for the LAND Survey UK relaunch. Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS. The logo wordmark uses the Viga font, loaded locally through `@fontsource/viga` so there is no Google Fonts dependency.

## Run it locally

You need Node 18.18 or newer.

1. `cd land-survey`
2. `npm install`
3. `npm run dev`
4. Open http://localhost:3000

To test a production build: `npm run build` then `npm start`.

## Project structure

```
src/
  app/
    layout.tsx        Root layout, loads Viga and global styles
    page.tsx          Assembles all sections in order
    globals.css       Tailwind plus a few utilities
  components/
    Navbar, Hero, TrustStrip, About, Services, Sectors,
    Capabilities, Approach, TrackRecord, Technology,
    Standards, Contact, Footer
    reactbits/        Animated, swappable building blocks
```

## About the animated components

The files in `src/components/reactbits/` are local implementations of the React Bits effects (Aurora, SplitText, CountUp, SpotlightCard, GradientText, ShinyText, ScrollVelocity, FadeContent). They have no external dependency and the site runs on them as is.

You have a React Bits Pro licence, so you can replace any of these with the official Pro component on your own machine, where the React Bits registry is reachable.

### Swapping in an official React Bits Pro component

1. Copy `.env.local.example` to `.env.local` and paste your Pro key into it. The file is gitignored, so the key never gets committed. Rotate the key if it has ever been shared.
2. From the project root, run the install command shown on the component's page in your React Bits Pro account, for example:
   `npx shadcn@latest add @react-bits/Aurora-TS-TW`
   Pro components include an authentication token in that command, which the React Bits dashboard generates for you.
3. Update the import in the section that uses it. For example, in `src/components/Hero.tsx`, point the `Aurora` import at the newly added file, then delete the old `src/components/reactbits/Aurora.tsx` if you no longer need it.
4. React Bits components are client side. Any file that uses one must have `"use client"` as its first line. All the section files here already do.

You can swap one component at a time. The site keeps working throughout.

## Before launch

- Confirm the UK registered office address, phone number, and the company number, then update `Contact.tsx` and `Footer.tsx`.
- Verify or replace the email `info@landsurvey-intl.com`.
- Connect the contact form to a real service. The form in `Contact.tsx` currently shows a success state without sending. Wire `handleSubmit` to Formspree, Resend, or a Next.js route handler.
- Confirm which client names from your project history you want shown publicly, then add them to the project list in `TrackRecord.tsx`.

## Deploy to Vercel

1. Push the repo to GitHub (see the steps your team already has).
2. Go to vercel.com, sign in with GitHub, click New Project, and import the `land-survey` repo.
3. Accept the defaults and click Deploy. Vercel detects Next.js automatically and gives you a live URL.

## Notes

- `next` is pinned to a patched 15.5 release to avoid a known security advisory in earlier 15.1 builds.
- Animations respect `prefers-reduced-motion`.
