# Users app practice assessment

## Running the app
1. Fork and clone this repo
2. run `npm install` to install, then `npm start` to start.

## What the app does
This users-app displays a list of ten users: 
- the full name, age, company, country, an image and a short about them.
- The user can search through the list of users by name, coountry or company.
- The user can toggle to display the about section on each user one at a time - by clicking on the show more/less button; or expand or collapse all at the same time by using the expandall /collapse buttons next to the input text box.
- The loading state displays while the API call is in progress by showing the loading component.
- An error state is displayed if the API call returns an error response, or if any other error occurs while fetching data - 
- On loading the app displays the list of all ten users as cards stacked in rows. Each row displays the users image to the left; next to the image with a gap of 20px using an unordered list  - the full name of the user starting with capital for first and last name is shown in x-large 900 font weight, the next three line items are shown as Age:__  , Country:__   and Company: __.
- the toggle button to show more or less to show or hide the `about` paragraph- is on the top right of the card.
- if there are no matches for the input - the noResults component will display - `No results for {input}` in the center following the same format as the loading and error states.
button that shows / hides the `about` paragraph for a user.
- The `Expand All` button when clicked, expands all the cards regardless of their current state.
- The `Collapse All` button, when clicked, collapses all the cards regardless of their current state.
- I used a Media query with a max width of 570, below which the app has a breakpoint that will stack the elements of the search input andthe expand all and collapse all buttons in one column.
 - at this breakpoint the grid columns will shrink the 2nd column to take up fewer fractions, i.e  3 instead of 5 and the imag will be automatically adjusted to size in the first column.

## other notes
- There could be other ways to do the queries, that will require more research on my part.
- Special thanks to Wisdom for helping me comb through the props so I did not miss any!. Truly appreciate his time and support.

