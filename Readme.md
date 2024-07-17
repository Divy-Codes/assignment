## Introduction
- Checkout the deployed app by clicking [here](https://divy-codes.github.io/assignment/)
- This is merely an assignment undertaken as part of a vetting procedure by a company.
- I have not named the company anywhere as people try to cheat by cloning the Github Repo and submitting as their work.

## Key Highlight Javascipt
- I have maintained a global state where the `activeCategory` is maintained which helps in changing the UI. All The magic happens in the `render` function to which the `activeCategory` is passed. All that remained to be done was to add and remove the active class to changed the rendered UI.
- This is a simple yet powerful idea in certain ways. This paradigm aids in scaling the project with ease. It would be very easy now to add another feature. All that remains to be done is to update the feature in the `render` function and the rest of the app behaves as expected. 
- Here's the render function:-
```
function render(renderCategory, section) {
  if (section) {
    Array.from(section.children).forEach((category) => {
      category.dataset.value == renderCategory
        ? category.classList.add('activeCategory')
        : category.classList.remove('activeCategory');
    });
  }
}
```

## Key Highlight CSS
- Used a fixed aspect ratio (similar to original images) in order to fix the dimensions of image. This made it really simple to adjust the container for responsiveness. All that had to be done was to change the width and the rest of elements followed suit. Again a simple idea but is a solid alternative to using hacks and `object-fit:contain`
```
.card {
  width: 14rem;
  aspect-ratio: 3/4;
  border-radius: inherit;
}
```

## Take a sneak peek into the assignment
![assignment](https://github.com/user-attachments/assets/044dd13e-ed7a-4a10-a742-29a77ba4af58)


