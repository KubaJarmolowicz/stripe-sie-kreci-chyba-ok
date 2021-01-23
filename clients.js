const clients = [
  {
    clientName: "Slack",
    imgURL: "https://stripe.com/img/v3/payments/overview/photos/slack.jpg",
    clientSVG: `  <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 239 120"
              >
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M63.75 75.24l2.5-5.93c2.7 2.05 6.3 3.13 9.85 3.13 2.61 0 4.27-1.03 4.27-2.6-.04-4.37-15.7-.95-15.82-11.9-.04-5.58 4.8-9.86 11.66-9.86 4.08 0 8.16 1.03 11.06 3.38l-2.34 6.05c-2.66-1.73-5.97-2.97-9.12-2.97-2.13 0-3.55 1.03-3.55 2.36.04 4.28 15.82 1.94 15.98 12.4 0 5.7-4.72 9.69-11.5 9.69-4.96 0-9.52-1.2-12.99-3.75zm96.01-8.08a7.16 7.16 0 0 1-8.11 3.5 7.35 7.35 0 0 1-5.38-7.13c0-3.34 2.2-6.27 5.38-7.12 3.16-.85 6.5.58 8.11 3.5l6.9-3.93a15.02 15.02 0 0 0-17.03-7.42 15.42 15.42 0 0 0-11.33 14.97c0 7.04 4.66 13.2 11.33 14.97a15.02 15.02 0 0 0 17.04-7.43l-6.9-3.9zM91.71 35.25h8.64v43.16h-8.64V35.25zm78.34 0v43.16h8.65V65.48l10.25 12.93H200l-13.03-15.37 12.06-14.34h-10.58l-9.76 11.9V35.25h-8.64zm-43.82 31.1a8.14 8.14 0 0 1-6.83 3.56 7.24 7.24 0 0 1-7.33-7.16 7.24 7.24 0 0 1 7.33-7.15 8.1 8.1 0 0 1 6.83 3.67v7.08zm0-18v3.4c-1.43-2.36-5-4-8.72-4-7.7 0-13.76 6.64-13.76 14.96 0 8.33 6.07 15.04 13.76 15.04 3.73 0 7.3-1.63 8.72-4v3.4H135v-28.8h-8.77zM10.53 66.4A5.32 5.32 0 0 1 5.3 71.8 5.32 5.32 0 0 1 .04 66.4a5.32 5.32 0 0 1 5.25-5.38h5.25v5.38zm2.63 0a5.32 5.32 0 0 1 5.25-5.38c2.9 0 5.25 2.4 5.25 5.38v13.46a5.32 5.32 0 0 1-5.25 5.39 5.32 5.32 0 0 1-5.25-5.39V66.4zm5.26-21.63a5.32 5.32 0 0 1-5.25-5.38A5.32 5.32 0 0 1 18.42 34c2.9 0 5.25 2.41 5.25 5.39v5.38h-5.25zm0 2.74c2.9 0 5.25 2.41 5.25 5.39a5.32 5.32 0 0 1-5.25 5.38H5.25A5.32 5.32 0 0 1 0 52.9a5.32 5.32 0 0 1 5.25-5.39h13.17zm21.03 5.39a5.32 5.32 0 0 1 5.25-5.39c2.9 0 5.25 2.41 5.25 5.39a5.32 5.32 0 0 1-5.25 5.38h-5.25V52.9zm-2.62 0a5.32 5.32 0 0 1-5.25 5.38 5.32 5.32 0 0 1-5.25-5.38V39.39A5.32 5.32 0 0 1 31.58 34c2.9 0 5.25 2.41 5.25 5.39v13.5zm-5.25 21.58c2.9 0 5.25 2.41 5.25 5.38a5.32 5.32 0 0 1-5.25 5.39 5.32 5.32 0 0 1-5.25-5.39v-5.38h5.25zm0-2.7a5.32 5.32 0 0 1-5.25-5.38 5.32 5.32 0 0 1 5.25-5.38h13.17c2.9 0 5.25 2.4 5.25 5.38a5.32 5.32 0 0 1-5.25 5.39H31.58z"
                ></path>
              </svg>`,
    clientMsg:
      "As Slack grows rapidly, using Stripe helps them scale payments easily—supporting everything from getting paid by users around the world to enabling ACH payments for corporate customers.",
    colors: {
      primaryClr: "#32325d",
      secondaryClr: "#5a67d8"
    },
    navSvgURL: "https://stripe.com/img/v3/payments/overview/logos/slack.svg"
  },
  {
    clientName: "Glossier’s",
    imgURL: "https://stripe.com/img/v3/payments/overview/photos/glossier.jpg",
    clientSVG: `<svg
              xmlns="http://www.w3.org/2000/svg"
              width="242"
              height="120"
              viewBox="0 0 242 120"
            >
              <path
                d="M45.59 47.15C44 39 38.54 33.09 28.69 33h-.43c-11.24.07-19.58 5.71-24 14.15A33 33 0 0 0 .63 62.56c0 10.83 6 17.65 13.69 19.56a18.67 18.67 0 0 0 4.56.55 20.86 20.86 0 0 0 5-.55 13.77 13.77 0 0 0 7.69-4.79v4.3a1.06 1.06 0 0 0 0 .19.51.51 0 0 0 .43.3h6.65a.62.62 0 0 0 .23-.07.5.5 0 0 0 .22-.31l4.59-23.48a.59.59 0 0 0 0-.13.5.5 0 0 0-.5-.5H26.5a.5.5 0 0 0-.5.37l-1.26 6.36v.09a.65.65 0 0 0 0 .2.49.49 0 0 0 .46.3h8.42c-1.81 5-6 9.37-12.7 9.37S10 69.49 10 61.24a22.24 22.24 0 0 1 4.72-14.09 15.37 15.37 0 0 1 12.07-5.82c4.67 0 7.39 2.13 9.21 5.82a21.88 21.88 0 0 1 1.19 3 .5.5 0 0 0 .46.31h.14l7.55-2a.35.35 0 0 0 .14-.06.5.5 0 0 0 .24-.43v-.08c0-.24-.09-.49-.14-.73m18.5-13.66a.5.5 0 0 0-.5-.5h-7.66a.5.5 0 0 0-.49.42l-2.66 13.73-6.65 34.36v.11a.41.41 0 0 0 0 .19.5.5 0 0 0 .46.31h7.65a.49.49 0 0 0 .49-.37l6.69-34.6 2.63-13.57v-.08M88 47.15a18.24 18.24 0 0 0-4.55-.55 24.45 24.45 0 0 0-5.46.55 18.36 18.36 0 0 0-8.83 5c-4.16 4-6 9.16-6 15.75 0 6.84 3.95 12.48 10.71 14.22a18.26 18.26 0 0 0 4.56.55 24 24 0 0 0 5.57-.55 18.3 18.3 0 0 0 8.82-5c4.16-4 6-9.15 6-15.74 0-6.85-4-12.5-10.71-14.23m-1.17 24.42a9.18 9.18 0 0 1-7.7 3.75c-4.09 0-6.8-3.33-6.8-8.74 0-3.75.83-6.66 2.57-8.88a9.18 9.18 0 0 1 7.7-3.7c4.09 0 6.8 3.33 6.8 8.74 0 3.75-.84 6.66-2.57 8.88m40.55-19.44c-1.17-2.28-3.81-4.14-6.87-5a13.71 13.71 0 0 0-3.84-.55 17.08 17.08 0 0 0-4.44.55 9.88 9.88 0 0 0-7.77 10.13c0 4.65 3.06 7.36 7.15 9.3s6 3.12 6 5.13c0 2.5-2.09 3.61-4.44 3.61-3.31 0-5.67-2-6.66-5.45a.52.52 0 0 0-.48-.34.65.65 0 0 0-.19 0l-6.44 2.68a.5.5 0 0 0-.31.46v.08a12.86 12.86 0 0 0 8.94 9.33 15.21 15.21 0 0 0 4.15.55 20.69 20.69 0 0 0 4.91-.55c5.3-1.31 8.83-5 8.83-11.59 0-4.85-3.61-7.21-7.21-8.88-2.36-1.11-6-2.15-6-4.58a3.1 3.1 0 0 1 3.4-3.12 6.21 6.21 0 0 1 5.08 2.64.51.51 0 0 0 .4.2.59.59 0 0 0 .26-.07l5.39-3.88a.47.47 0 0 0 .13-.61m21.72-5.07a13.82 13.82 0 0 0-3.84-.55 17.16 17.16 0 0 0-4.45.55 9.88 9.88 0 0 0-7.76 10.13c0 4.65 3 7.36 7.15 9.3 3.95 1.87 6 3.12 6 5.13 0 2.5-2.08 3.61-4.44 3.61-3.31 0-5.68-2-6.67-5.47a.49.49 0 0 0-.46-.32.46.46 0 0 0-.2 0l-6.43 2.67a.49.49 0 0 0-.3.46.38.38 0 0 0 0 .1 12.86 12.86 0 0 0 8.93 9.31 15.34 15.34 0 0 0 4.16.55 20.54 20.54 0 0 0 4.9-.55c5.3-1.31 8.84-5 8.84-11.59 0-4.85-3.61-7.21-7.22-8.88-2.36-1.11-6-2.15-6-4.58a3.1 3.1 0 0 1 3.4-3.12 6.21 6.21 0 0 1 5.07 2.63.49.49 0 0 0 .41.21.59.59 0 0 0 .26-.07l5.45-3.88a.54.54 0 0 0 .17-.39.51.51 0 0 0-.05-.22c-1.17-2.29-3.81-4.15-6.87-5m22.37-.03H164a.51.51 0 0 0-.48.36l-6.6 34a.36.36 0 0 0 0 .11.58.58 0 0 0 0 .19.51.51 0 0 0 .46.31H165a.59.59 0 0 0 .26-.07.48.48 0 0 0 .22-.3l6.62-34.06a.51.51 0 0 0-.5-.5m27.01-.04a17.06 17.06 0 0 0-4.43-.55 22.61 22.61 0 0 0-5 .55 20.25 20.25 0 0 0-15.74 20.05c0 8 4.28 13.28 10.55 14.92a17.18 17.18 0 0 0 4.43.55 22.71 22.71 0 0 0 5.19-.55c4.87-1.13 8.42-4 11.72-8.79a.5.5 0 0 0-.17-.68l-6-3.11a.46.46 0 0 0-.2-.05.5.5 0 0 0-.38.19c-2.51 3.61-5.38 5.64-9.35 5.64-4.58 0-7.08-3.19-7.08-6.8v-1.11h24.74a.59.59 0 0 0 .26-.07.52.52 0 0 0 .22-.28 24.8 24.8 0 0 0 .87-6.45c0-6.46-3.3-11.78-9.59-13.46m-14.88 13.46a10.29 10.29 0 0 1 9.3-6.66c4.37 0 6.38 2.29 6.66 6.66zM236.2 55a.48.48 0 0 0 .24.06.48.48 0 0 0 .26-.07.52.52 0 0 0 .2-.24l2.55-6.75a.65.65 0 0 0 0-.2.51.51 0 0 0-.31-.46l-.47-.17a9.71 9.71 0 0 0-3.59-.55 12.6 12.6 0 0 0-3.74.55 14.75 14.75 0 0 0-7.22 5.21l.91-4.59a.48.48 0 0 0-.48-.62h-7.65a.5.5 0 0 0-.49.41l-6.61 34a.19.19 0 0 0 0 .08.41.41 0 0 0 0 .19.5.5 0 0 0 .46.31H218a.59.59 0 0 0 .26-.07.5.5 0 0 0 .22-.31l2.36-12c2.08-11 8-15.4 12.35-15.4a6.57 6.57 0 0 1 3 .66m-66.85-21.5a4.93 4.93 0 1 0 4.93 4.93 4.83 4.83 0 0 0-4.93-4.93m67.31 39.4a4.95 4.95 0 0 0-2.55 9.18 5.17 5.17 0 0 0 5.09 0 4.95 4.95 0 0 0-2.54-9.18"
                fill="#fff"
              ></path>
            </svg>`,
    clientMsg:
      "With Stripe’s reliable and developer-friendly tools, Glossier’s engineering team is freed up to focus on product and customer experiences.",
    colors: {
      primaryClr: "#ff8284"
    },
    navSvgURL: "https://stripe.com/img/v3/payments/overview/logos/glossier.svg"
  },
  {
    clientName: "charity: water",
    imgURL:
      "https://stripe.com/img/v3/payments/overview/photos/charity_water.jpg",
    clientSVG: `<svg
              xmlns="http://www.w3.org/2000/svg"
              width="398"
              height="120"
              viewBox="0 0 398 120"
            >
              <path
                d="M67 66.82h1q-1.64 5.42-8 5.42a9.31 9.31 0 0 1-6.85-2.77 9.87 9.87 0 0 1-2.79-7.33 10.1 10.1 0 0 1 3-7.59 9.88 9.88 0 0 1 7.1-2.91A9.66 9.66 0 0 1 65 52.72c1.38.73 2.08 1.61 2.08 2.64a1.78 1.78 0 0 1-.39 1.1 1.3 1.3 0 0 1-1.1.51c-1 0-1.66-.6-1.89-1.79a3.54 3.54 0 0 0-.86-1.89 3.76 3.76 0 0 0-2.35-.53 5.41 5.41 0 0 0-4.69 2.16q-1.57 2.17-1.57 6.52a12.56 12.56 0 0 0 1.69 7A5.73 5.73 0 0 0 61.07 71q4.62 0 5.93-4.18zm16-11.27a9.8 9.8 0 0 1 3.13-2.93 7.64 7.64 0 0 1 3.81-1 7.17 7.17 0 0 1 3.89 1 4.52 4.52 0 0 1 2 2.41 16.52 16.52 0 0 1 .46 4.64v5.26a36.38 36.38 0 0 0 .12 4.07 1.41 1.41 0 0 0 .76 1.06 5.38 5.38 0 0 0 2.33.34v1.07h-9.85V70.4h.44a3.33 3.33 0 0 0 2.2-.49 1.83 1.83 0 0 0 .58-1.15c.06-.44.08-1.72.08-3.83v-5.72a16.64 16.64 0 0 0-.27-3.52 3.22 3.22 0 0 0-1.32-1.88 4.29 4.29 0 0 0-2.59-.75 5.35 5.35 0 0 0-3.26 1.06A8.83 8.83 0 0 0 83 57.3v7.63c0 2.14 0 3.46.1 4a1.55 1.55 0 0 0 .69 1.07 4.53 4.53 0 0 0 2.21.4v1.07h-9.68V70.4h.48a3.35 3.35 0 0 0 2.2-.48 1.83 1.83 0 0 0 .58-1.14c.06-.44.08-1.72.08-3.85v-19c0-1.93-.18-3.14-.54-3.65s-1.24-.77-2.62-.77v-1.06a16 16 0 0 0 6-1h.5zM128.2 68h.85q-.21 4-3.9 4a3.57 3.57 0 0 1-2.5-.84 4.18 4.18 0 0 1-1.19-2.49 24.47 24.47 0 0 1-4.25 2.49 8.82 8.82 0 0 1-3.45.84 5.14 5.14 0 0 1-3.33-1.12 3.59 3.59 0 0 1-1.4-3 5.19 5.19 0 0 1 2.34-4.19 28.44 28.44 0 0 1 6.48-3.49l3.61-1.47v-.93a11.32 11.32 0 0 0-.26-2.8 2.94 2.94 0 0 0-1.33-1.59 5.14 5.14 0 0 0-2.82-.7c-2.34 0-3.63.78-3.9 2.33s-.9 2.38-2 2.38-1.41-.45-1.41-1.35.62-1.84 1.88-2.85 3.21-1.53 5.86-1.53a9.34 9.34 0 0 1 4.59.93 4.77 4.77 0 0 1 2.15 2.12 9.44 9.44 0 0 1 .53 3.63V66a12.86 12.86 0 0 0 .28 3.47 1.15 1.15 0 0 0 1.21.76q1.59.03 1.96-2.23zm-6.74-8.15l-2.55 1q-6 2.45-6 6.14a3.49 3.49 0 0 0 .77 2.36 2.54 2.54 0 0 0 2 .9 5.91 5.91 0 0 0 2.55-.72 18.88 18.88 0 0 0 3.24-2.16zm22.66-3.34a8 8 0 0 1 2.57-3.51 5.71 5.71 0 0 1 3.49-1.4 3.1 3.1 0 0 1 2.41 1 2.86 2.86 0 0 1 .89 1.95 1.64 1.64 0 0 1-.45 1.16 1.47 1.47 0 0 1-1.11.49c-.78 0-1.37-.57-1.77-1.72-.28-.78-.7-1.16-1.26-1.16a3.83 3.83 0 0 0-2.39 1.36 6.34 6.34 0 0 0-1.8 2.83 16.35 16.35 0 0 0-.39 4v3.4c0 2 0 3.31.08 3.84a1.63 1.63 0 0 0 .67 1.21 3.74 3.74 0 0 0 2.08.42h.66v1.07h-10.13V70.4h.49a3.86 3.86 0 0 0 2-.38 1.56 1.56 0 0 0 .72-1.08c.07-.47.11-1.8.11-4v-5.39c0-2 0-3.33-.08-3.85a1.69 1.69 0 0 0-.66-1.21 3.64 3.64 0 0 0-2.08-.43h-.49V53a32 32 0 0 0 5.71-1.37 15.35 15.35 0 0 1 .73 4.88zM168 51.64v13.29q0 3 .09 3.84a1.64 1.64 0 0 0 .68 1.21 3.68 3.68 0 0 0 2.07.42h.48v1.07H161V70.4h.79a3.34 3.34 0 0 0 2.16-.48 1.88 1.88 0 0 0 .58-1.14c.05-.44.08-1.72.08-3.85v-5.77a15.5 15.5 0 0 0-.31-4.1 1.6 1.6 0 0 0-.84-.93 6.37 6.37 0 0 0-1.83-.18H161v-1.07a28.18 28.18 0 0 0 6.43-1.24zm-4.49-9.73a2.35 2.35 0 0 1 .71-1.72 2.38 2.38 0 0 1 3.41 0 2.53 2.53 0 0 1 0 3.47 2.38 2.38 0 0 1-3.41 0 2.37 2.37 0 0 1-.76-1.75zm28.43 11.55h-5.75V65a18 18 0 0 0 .23 3.57 2.62 2.62 0 0 0 1 1.48 2.7 2.7 0 0 0 1.62.56 3.5 3.5 0 0 0 2.91-1.91l.74.44a5 5 0 0 1-2.13 2.32 5.83 5.83 0 0 1-2.85.78 4.62 4.62 0 0 1-2.94-1 4.12 4.12 0 0 1-1.59-2.32 24.07 24.07 0 0 1-.31-4.65V53.46h-2.77V52.4a4.83 4.83 0 0 0 3.42-1.61 7.73 7.73 0 0 0 1.92-4.38h.75v6h5.75zm19.83 14.4l4.45-10.58a16.8 16.8 0 0 0 .95-2.59c0-.77-.86-1.18-2.59-1.21v-1.07h6.7v1.07a3.22 3.22 0 0 0-2.28.83 12 12 0 0 0-1.79 3.34l-8.52 20.49a15.39 15.39 0 0 1-2.14 4 2.69 2.69 0 0 1-2.05 1.06c-1 0-1.51-.46-1.51-1.37 0-1.06.8-2 2.41-2.69a7.77 7.77 0 0 0 1.9-1.07 4.7 4.7 0 0 0 .94-1.61l1.82-4.52-7.15-15.36a8.28 8.28 0 0 0-1.58-2.58 3.28 3.28 0 0 0-2.14-.54v-1.05h8.75v1.07c-1.53.05-2.3.37-2.3 1a9.83 9.83 0 0 0 .91 2.29zm19.69-14.26a2.46 2.46 0 0 1 .72-1.76 2.31 2.31 0 0 1 1.78-.76 2.49 2.49 0 0 1 2.51 2.52 2.37 2.37 0 0 1-.74 1.75 2.45 2.45 0 0 1-1.77.74 2.36 2.36 0 0 1-1.77-.75 2.43 2.43 0 0 1-.73-1.74zm0 16.13a2.53 2.53 0 0 1 2.5-2.5 2.42 2.42 0 0 1 1.78.74 2.39 2.39 0 0 1 .73 1.76 2.51 2.51 0 0 1-2.47 2.51 2.33 2.33 0 0 1-1.77-.76 2.47 2.47 0 0 1-.77-1.75zM288 72.24h-1l-5.7-15.13-5.82 15.13h-1l-5.86-15.15a12.74 12.74 0 0 0-1.49-3.1 2.76 2.76 0 0 0-2-.51v-1.07h8.71v1.07a5.08 5.08 0 0 0-2 .27 1 1 0 0 0-.53.92 12.23 12.23 0 0 0 .91 2.73l3.88 10.23 5.91-15.22h.99l5.73 15.22 4.2-10.84a9.6 9.6 0 0 0 .67-2.07c0-.77-.78-1.18-2.35-1.24v-1.07h6.19v1.07a3.42 3.42 0 0 0-1.75.43 3.66 3.66 0 0 0-1.18 1.83l-.51 1.35zM325.09 68h.85q-.21 4-3.9 4a3.54 3.54 0 0 1-2.49-.84 4.19 4.19 0 0 1-1.2-2.49 24.47 24.47 0 0 1-4.25 2.49 8.78 8.78 0 0 1-3.44.84 5.16 5.16 0 0 1-3.34-1.12 3.59 3.59 0 0 1-1.4-3 5.2 5.2 0 0 1 2.35-4.19 28.56 28.56 0 0 1 6.47-3.49l3.61-1.47v-.93a11.43 11.43 0 0 0-.25-2.8 3 3 0 0 0-1.33-1.59 5.18 5.18 0 0 0-2.83-.7q-3.49 0-3.9 2.33c-.24 1.59-.9 2.38-2 2.38s-1.42-.45-1.42-1.35.63-1.84 1.88-2.85 3.21-1.53 5.87-1.53a9.36 9.36 0 0 1 4.59.93 4.87 4.87 0 0 1 2.15 2.12 9.47 9.47 0 0 1 .52 3.63V66a12.86 12.86 0 0 0 .37 3.5 1.15 1.15 0 0 0 1.21.76q1.5 0 1.88-2.26zm-6.74-8.15l-2.54 1q-6 2.45-6 6.14a3.44 3.44 0 0 0 .77 2.36 2.5 2.5 0 0 0 2 .9 5.88 5.88 0 0 0 2.55-.72 18.88 18.88 0 0 0 3.24-2.16zm27.37-6.39H340V65a18 18 0 0 0 .23 3.57 2.62 2.62 0 0 0 1 1.48 2.7 2.7 0 0 0 1.62.56 3.52 3.52 0 0 0 2.91-1.91l.74.44a5 5 0 0 1-2.13 2.32 5.83 5.83 0 0 1-2.85.78 4.62 4.62 0 0 1-2.94-1 4.17 4.17 0 0 1-1.58-2.33 24.07 24.07 0 0 1-.31-4.65v-10.8h-2.76V52.4a4.83 4.83 0 0 0 3.42-1.61 7.73 7.73 0 0 0 1.92-4.38h.73v6h5.75zm26.52 5.42h-13.31q-.09 1.36-.09 2 0 5 1.57 7.54a5.19 5.19 0 0 0 4.7 2.52 6.15 6.15 0 0 0 6-3.79h1.11a6.5 6.5 0 0 1-3 3.71 9.27 9.27 0 0 1-9.4.12 9.74 9.74 0 0 1-3.53-3.46 10.13 10.13 0 0 1-1.29-5.38 10.91 10.91 0 0 1 2.66-7.51 8.53 8.53 0 0 1 6.64-3 7.39 7.39 0 0 1 5.8 2.29 7.79 7.79 0 0 1 2.14 4.96zm-4.07-1a7 7 0 0 0 .07-1 4 4 0 0 0-4.16-4.31c-2.83 0-4.51 1.76-5.06 5.27zm20.47-1.37a7.9 7.9 0 0 1 2.58-3.51 5.66 5.66 0 0 1 3.48-1.4 3.13 3.13 0 0 1 2.42 1 2.84 2.84 0 0 1 .88 1.95 1.64 1.64 0 0 1-.45 1.16 1.45 1.45 0 0 1-1.11.49c-.77 0-1.36-.57-1.77-1.72-.28-.78-.69-1.16-1.25-1.16a3.83 3.83 0 0 0-2.4 1.36 6.23 6.23 0 0 0-1.79 2.83 15.81 15.81 0 0 0-.4 4v3.4c0 2 0 3.31.08 3.84a1.63 1.63 0 0 0 .67 1.21 3.75 3.75 0 0 0 2.09.42h.65v1.07H382.2V70.4h.49a3.84 3.84 0 0 0 2-.38 1.56 1.56 0 0 0 .72-1.08c.07-.47.11-1.8.11-4v-5.39c0-2 0-3.33-.08-3.85a1.63 1.63 0 0 0-.66-1.21 3.62 3.62 0 0 0-2.07-.43h-.49V53a31.92 31.92 0 0 0 5.7-1.37 15.35 15.35 0 0 1 .72 4.88zm-368.11 2.1h-7.14a1.14 1.14 0 0 0-1.15 1.14v3.1A1.14 1.14 0 0 0 13.39 64h7.14a1.14 1.14 0 0 0 1.14-1.14v-3.1a1.14 1.14 0 0 0-1.14-1.15zm11.67-16l-1.6-3.17s.53-.31.77-.43.41-.27.09-.88-.69-.47-.69-.47-.46.26-1 .52a3 3 0 0 0-2.4-1.38h-1.75a1.08 1.08 0 0 0-.83.24 1.13 1.13 0 0 1-.88.35H11.84c-.12 0-.14-.07-.22-.12a1.72 1.72 0 0 0-1.89.21c-.19.21-1 1.14-1.4 1.65a2.25 2.25 0 0 1-1.16.71.45.45 0 0 0 0-.49L7 39l.25-.68.22-.12-.13-.31-.4.19c-.26.13-.26.25-.26.25-.12.43-.43.45-.43.45s-.69-1.3-.79-1.47-.28-.69-2.59.55-1.76 1.71-1.76 1.71l.78 1.52-.24.2.58 1.14a6.69 6.69 0 0 0-.65.4 1.76 1.76 0 0 0-1.01 1.56v33.25c0 2.5.72 3.64 3.51 3.64h25.43c1.64 0 3.21-.86 3.21-3.71V44.7c0-1.64-.31-1.7-.52-2.09zm-18.27-2.76h8.48a1.31 1.31 0 1 1 0 2.61h-8.48a1.31 1.31 0 1 1 0-2.61zM24.67 66s2.84 5 3.43 6.09c.79 1.5-.28 2.15-.28 2.15a1.61 1.61 0 0 1-2.15-.57c-.6-1.1-2.58-4.59-3.28-5.66-.91-1.39-1.29-1.86-2.5-1.86h-6c-1.22 0-1.61.47-2.52 1.86-.71 1.07-2.7 4.56-3.31 5.66a1.62 1.62 0 0 1-2.16.57s-1.08-.65-.29-2.15L9.08 66a4.51 4.51 0 0 0 .72-2v-5.53a4.51 4.51 0 0 0-.72-2s-2.85-4.94-3.45-6.08c-.79-1.5.29-2.14.29-2.14a1.64 1.64 0 0 1 2.16.57c.61 1.1 2.6 4.57 3.31 5.65.91 1.38 1.3 1.85 2.52 1.85h6c1.21 0 1.59-.47 2.5-1.85.7-1.08 2.68-4.55 3.28-5.65a1.62 1.62 0 0 1 2.15-.57s1.07.64.28 2.14c-.59 1.14-3.43 6.08-3.43 6.08a4.55 4.55 0 0 0-.71 2V64a4.55 4.55 0 0 0 .69 2z"
                fill="#fff"
              ></path>
            </svg>`,
    clientMsg:
      "charity: water optimized their mobile and web donation flows with Stripe so they can focus on what really matters: bringing clean water to every person on the planet. Using Stripe, they also built a new monthly  giving program, which makes it even easier for subscribers to donate throughout the&nbsp;year.",
    colors: {
      primaryClr: "#0a2540"
    },
    navSvgURL:
      "https://stripe.com/img/v3/payments/overview/logos/charity_water.svg"
  },
  {
    clientName: "Missguided",
    imgURL: "https://stripe.com/img/v3/payments/overview/photos/missguided.jpg",
    clientSVG: `<svg
              xmlns="http://www.w3.org/2000/svg"
              width="239"
              height="120"
              viewBox="0 0 239 120"
            >
              <path
                d="M4.21 86.4V33.31h8.94l4 28.85.86 9.52.87-9.52 4-28.85h9.02V86.4h-5.19V42.83l-.87 7.22-5.19 36.35h-5.19l-5.2-36.93-.57-6.64V86.4zm35.79 0h6V33.31h-6zm114.24 0h6.06V33.31h-6.06zm46.16-24h5.48v-6.01h-5.48v-17h9.23v-6.08h-15.31V86.4h15.29v-6.06h-9.23zm-60-29.14v44.19a2.89 2.89 0 1 1-5.77 0V33.31h-6.34v44.14a9.23 9.23 0 1 0 18.46 0V33.31zm40.11 44.14V42.55a2.9 2.9 0 0 0-2.89-2.89h-2.88v41h2.88a3.68 3.68 0 0 0 2.89-3.18zm-3.21-44.09a9.12 9.12 0 0 1 9.23 9.24v34.9a9.12 9.12 0 0 1-9.23 9.24h-9.23V33.31h9.23m51.64 44.14v-34.9a2.89 2.89 0 0 0-2.88-2.89h-2.89v41h2.89a3.67 3.67 0 0 0 2.88-3.18zm-2.88-44.14a9.06 9.06 0 0 1 8.94 9.24v34.9a9.12 9.12 0 0 1-9.23 9.24h-9.23V33.31h9.52M89.31 57.55c-2.88-2.6-5.19-4.91-5.19-9.23v-5.77A2.89 2.89 0 0 1 87 39.66a3.1 3.1 0 0 1 2.89 2.89v6.05H96v-6.05a9.24 9.24 0 1 0-18.47 0v6.05c.58 6.93 4.62 10.68 7.5 13.56 2.89 2.6 5.2 4.91 5.2 9.24v6a2.89 2.89 0 1 1-5.77 0v-8.89h-6.11v8.94a9.23 9.23 0 1 0 18.46 0v-6c-.57-7.22-4.32-10.68-7.5-13.85m-25.1 0C61.33 55 59 52.64 59 48.32v-5.77a2.89 2.89 0 1 1 5.77 0v6.05h6.06v-6.05a9.24 9.24 0 1 0-18.47 0v6.05c0 6.93 4 10.68 6.93 13.56 2.88 2.6 5.19 4.91 5.19 9.24v6a2.89 2.89 0 0 1-2.88 2.89 3.1 3.1 0 0 1-2.89-2.89v-8.89h-5.46v8.94a9.23 9.23 0 1 0 18.46 0v-6c-.28-7.22-4.32-10.68-7.5-13.85m56.84-9.23v-5.82a9.24 9.24 0 1 0-18.47 0v34.9a9.45 9.45 0 0 0 9 9.24 6.63 6.63 0 0 0 6.34-4l2.89 4V62.45h-9.23v6.06h2.88v8.94a2.73 2.73 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89v-34.9a2.9 2.9 0 0 1 2.89-2.89 3.1 3.1 0 0 1 2.88 2.89v6.05h6.64z"
                fill="#fff"
              ></path>
            </svg>`,
    clientMsg:
      "Missguided is a UK-based fashion retailer that has nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating&nbsp;fraud.",
    colors: {
      primaryClr: "#ffe9e5",
      secondaryClr: "#ff9886"
    },
    navSvgURL:
      "https://stripe.com/img/v3/payments/overview/logos/missguided.svg"
  }
];

export { clients };
