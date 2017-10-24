# A Wikipedia Viewer
- Focuse: HTML, CSS, JavaScript, Bootstrap, JQuery

## Summary
- A website to search for articles on Wikipedia by keywords and display a list of search results
- Created under the freecodecamp Front End Development Certificate ciriculum

## Requirements
- Allow users to search Wikipedia entries in a search box and see the resulting Wikipedia entries.
- Allow users to click a button to see a random Wikipedia entry.

## Takeaway
- Use of the Wikipedia's Web API: https://www.mediawiki.org/wiki/API:Main_page.

- How to use Wikipedia API with data query
(1) Read documentation and choose the right format: https://www.mediawiki.org/w/api.php?action=help&modules=query%2Bextracts

- How to use <input> tags
(1) Get its value with .val()
(2) Detect press events of the keyboard
(3) Prevent default settings that clear the inputted text and navigate to a new link with with a global event handler, e.g. <form onsubmit={this.saveAndContinue}>

- How to read Object keys into an array with Object.keys(obj)

- How to optimise JavaScript performance for simple websites by combining all files into one file