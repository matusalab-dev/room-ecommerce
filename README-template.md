# Frontend Mentor - room-homepage-master solution

This is a solution to the [room-homepage-master](add-actual-frontend-mentor-challenge-link). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

#### Challenges added beyond Frontend Mentor

- Navigate the shopping button to a dedicated shop page
- see categories of products and a list of available products
- add their desired products to the shopping cart
- adjust the quantity of the shopping cart items

### Screenshot

![desktop-version](<Screenshot 2023-08-19 at 21-25-09 Frontend Mentor Room homepage.png>)
![tablet-version](./Screenshot%202023-08-19%20at%2021-25-33%20Frontend%20Mentor%20Room%20homepage.png)
![mobile-version](./Screenshot%202023-08-19%20at%2021-25-48%20Frontend%20Mentor%20Room%20homepage.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- BEM CSS Methodologies for Landing page
- Flex-box
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library
- use React ContextAPI instead of Redux for UI State
- [TailwindCSS](tailwindcss.URL) - For styles
<!-- - [Next.js](https://nextjs.org/) - React framework -->

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<picture className=" ">
  <source
    srcset="{slidesDetail[slideIndex].imgUrl.mobile}"
    media="(max-width: 28.125em)"
  />
  <source
    srcset="{slidesDetail[slideIndex].imgUrl.desktop}"
    media="(min-width: 28.125em)"
  />
  <img
    src="{slidesDetail[slideIndex].imgUrl.desktop}"
    alt="{slidesDetail[slideIndex].description}"
    className="w-full h-full object-cover"
  />
</picture>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Developer_Mati](https://www.Matusalab.dev)
- Frontend Mentor - [@Developer_Mati](https://www.frontendmentor.io/profile/Developer_Mati)
- Twitter - [@Developer_Mati](https://www.twitter.com/Developer_Mati)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
