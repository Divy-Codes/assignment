## Introduction
- Checkout the deployed app by clicking [here](https://divy-codes.github.io/assignment/)
- This is merely an assignment undertaken as part of a vetting procedure by a company.
- I have not named the company anywhere as people try to cheat by searching the project using company's name and consequently cloning the Github Repo.
- Needless to say (and I said it 🤡), the UI and cards are rendering dynamically using JS instead of being hard-coded into HTML


## Explanation
- It's really a simple setup. Three functions do all the lifting here - one for API Call, another to change the active tab and the last one (`render`) to render the UI based on the active tab.
- I observed two product pictures being sent by the server. Therefore I incorporated a carousel for the pictures. This was not the mandate by I added the feature myself as it made all the sense. (Also in some cases only one image was being sent and consequently the carousel isn't available for them . **IT'S NOT A BUG, IT'S A FEATURE!**
- For indicating the active index in the carousel, I simply used the 'scroll' event listener to toggle the active states.
- Ideally I would have shifted the the two helper functions to another file but refrained from doing it given the constraint of not adding any extra files.

## Key Highlight (Javascript)
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
![assignment](https://github.com/user-attachments/assets/dd6abce0-83e7-48d9-998d-2af8d13a022c)



