# RentWheels — React version

Built with Vite + React. Same idea as the plain HTML version, rebuilt as
reusable components with a new theme: charcoal background, electric blue
accent, and a fixed vertical navigation rail instead of a hamburger menu.

## Project structure
```
src/
  data.js              <- EDIT: business info, vehicle list, services, FAQs
  whatsapp.js          <- builds the wa.me links (the "connect to WhatsApp" trick)
  App.jsx              <- page layout, composes all sections
  index.css            <- theme + all styling
  components/
    Header.jsx          <- logo + nav links (left), hotline (right), always visible
    Hero.jsx, Fleet.jsx, Services.jsx, Booking.jsx, FAQ.jsx, Contact.jsx
    FloatingWhatsApp.jsx <- bottom-right WhatsApp button
    ScrollToTop.jsx      <- "back to top" button, appears after scrolling down
```

## Run it locally
You need [Node.js](https://nodejs.org) installed (v18+).

```bash
npm install
npm run dev
```
Then open the local URL it prints (usually http://localhost:5173).

## Build for deployment
```bash
npm run build
```
This creates a `dist/` folder — that's what you upload/deploy. More on
deployment in the chat.

## What to edit first
Open `src/data.js`:
```js
export const BUSINESS = {
  name: "RentWheels",
  whatsappNumber: "94779297273", // country code + number, no + no spaces
  displayPhone: "077 929 7273",
};
```
Update this, then edit the `VEHICLES` array to match the real fleet.

## How the scroll-to-top button works
`ScrollToTop.jsx` listens to the window's scroll position with a `scroll`
event listener. Once you've scrolled past 400px it renders a small round
button in the bottom-right corner (stacked above the WhatsApp button);
clicking it scrolls smoothly back to the top. No extra libraries needed.

## Navigation
The header now has plain in-page links (`#fleet`, `#book`, etc.) next to
the logo — no hamburger, no side rail. On narrow screens the link row
scrolls horizontally instead of wrapping or collapsing into a menu.
