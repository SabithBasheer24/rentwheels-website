# RentWheels 

A website for a vehicle rental business in Kurunegala, Sri Lanka. Visitors can browse the available fleet and send a booking request straight to WhatsApp — no account, no backend, no database. It's a static site built with React, meaning it compiles down to plain HTML/CSS/JS files that can be hosted anywhere.
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

