# Spotify Song Request Form: Beginner's Guide 🎵

Welcome to the **Spotify Song Request Form** project! This guide will walk you through exactly how this application was built, how the code works, and what each part does. We have structured this guide so that it's easy to follow, even if you are just starting your coding journey.

---

## 📂 Project Structure (The Files)

This project is split into three main parts:
1. **HTML (`index.html`)**: The **bones/structure** of the website. It lists the buttons, inputs, and text fields.
2. **CSS (`styles.css` / `reset.css`)**: The **clothes/presentation** of the website. It changes colors, layout, fonts, and defines the Spotify-inspired dark theme.
3. **JavaScript (`script.js`)**: The **brain/interactivity** of the website. It listens to what the user does and updates the page dynamically without needing to reload.

---

## 🧱 1. HTML (`index.html`) Explained

The HTML file acts as the foundation. Here is a breakdown of the key elements we added:

### Header and Linking Files
```html
<head>
  <meta charset="utf-8">
  <title>Spotify - Song Requests</title>
  <!-- Google Fonts: Downloads the 'Plus Jakarta Sans' font family -->
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <link href="reset.css" rel="stylesheet" type="text/css" />
  <link href="styles.css" rel="stylesheet" type="text/css" />
</head>
```
* **`<link>` tags**: These point our HTML file to the stylesheet files (`reset.css` and `styles.css`) and a web font from Google. Without these, our page would look like a plain black-and-white text document.

### The Layout Wrappers
```html
<div class="spotify-wrapper">
  <div class="spotify-card">
     <!-- Contains the form inputs -->
  </div>
  <div class="requests-section">
     <!-- Displays submitted requests -->
  </div>
</div>
```
* **`<div>` (Division)**: A invisible box container. We use these containers to group elements so we can style them as a unit (for example, keeping the form in one card and the recent requests in another card next to it).

### Form Elements and Attributes
```html
<form id="songRequests">
```
* **`id="songRequests"`**: A unique identifier. In JavaScript, we will use this unique ID to find the form on the page and listen to when it is submitted.

Let's look at a form field group:
```html
<div class="form-group">
  <label for="name">Name:</label>
  <input type="text" id="name" placeholder="What should we call you?" required autocomplete="off">
</div>
```
* **`<label>`**: Text that explains what the input field is for.
* **`for="name"`**: This connects the label directly to the input field with `id="name"`. If a user clicks on the word "Name:", the browser automatically focuses their cursor inside the text box! This is great for accessibility.
* **`type="text"`**: Declares that this input box expects the user to type text.
* **`placeholder="..."`**: Light gray hint text that disappears once the user clicks and starts typing.
* **`required`**: A built-in browser rule. If the user leaves this field blank and tries to submit, the browser will stop them and say "Please fill out this field."

### Radio Buttons (Stretch Challenge 3)
```html
<div class="radio-group">
  <label class="radio-label">
    <input type="radio" name="genre" value="Pop" checked>
    <span>Pop</span>
  </label>
  ...
</div>
```
* **`type="radio"`**: Creates a circle choice selector.
* **`name="genre"`**: Radio buttons with the same `name` attribute are grouped together. This ensures the user can only select **one** genre at a time; selecting "Rock" will automatically deselect "Pop".
* **`checked`**: Makes the "Pop" option selected by default when the page first loads.

---

## 🎨 2. CSS (`styles.css`) Explained

CSS changes how HTML elements look and behave. Here are the core concepts used to build our dark Spotify design:

### CSS Variables & Core Rules
```css
html, body {
    background-color: #121212; /* Spotify Dark Background */
    color: #ffffff; /* White Text */
    font-family: 'Plus Jakarta Sans', sans-serif;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}
```
* **`display: flex`**: Turns on **Flexbox**, a powerful layout tool. By setting this on `body`, we can easily center our application on the screen.
* **Colors**: Instead of basic green or black, we use Spotify's exact color palette:
  - Deep black background: `#121212`
  - Dark grey card: `#181818`
  - Input field background: `#242424`
  - Spotify Green accent: `#1DB954`

### The Submit Button
```css
input[type="submit"] {
    background-color: #1DB954;
    border-radius: 500px; /* Completely rounds the button corners */
    transition: all 0.2s ease-in-out; /* Smooth transition when hovering */
}

input[type="submit"]:hover {
    background-color: #1ed760; /* Brighter green on hover */
    transform: scale(1.02); /* Scales the button up 2% (micro-animation) */
}
```
* **`:hover`**: A pseudo-class that triggers only when the user hovers their mouse pointer over the button.
* **`transform: scale(1.02)`**: Gives the button a premium, tactile feel by slightly expanding it under the user's cursor.

---

## 🧠 3. JavaScript (`script.js`) Explained

JavaScript makes the page alive. Let's break down the logic of `script.js` line-by-line.

### Step A: Finding the elements
```javascript
const form = document.getElementById('songRequests');
const requestList = document.getElementById('requestList');
```
* **`const`**: Short for *constant*. It declares a variable (a container for data) that cannot be reassigned to something else later in the code.
* **`document.getElementById(...)`**: Tells JavaScript to look through the HTML document and find the element with that exact ID name.

### Step B: Setting Today's Date
```javascript
document.getElementById('requestDate').valueAsDate = new Date();
```
* This grabs our date input field and automatically fills it with today's local date so the user doesn't have to select it manually.

### Step C: The Event Handler Function
```javascript
const addSongRequest = (event) => {
  event.preventDefault();
  ...
}
```
* **`const addSongRequest = (event) => { ... }`**: This is an **Arrow Function**. It stores a bundle of instructions inside the variable `addSongRequest` so we can run them later. The `(event)` parameter carries information about the action that just happened (the form submission).
* **`event.preventDefault()`**: **Crucial step!** Normally, when you submit an HTML form, the browser tries to refresh the entire page. This command stops that default behavior, allowing us to update the page smoothly using JavaScript without reloading.

### Step D: Extracting the Inputs
```javascript
const name = document.getElementById('name').value;
const song = document.getElementById('song').value;
const artist = document.getElementById('artist').value;
const genre = document.querySelector('input[name="genre"]:checked').value;
const requestDate = document.getElementById('requestDate').value;
const passphrase = document.getElementById('passphrase').value;
```
* **`.value`**: Gets whatever text the user typed inside the input box.
* **`document.querySelector('input[name="genre"]:checked').value`**: Finds the radio button option that is currently selected (`:checked`) and retrieves its text value (e.g. "Rock").

### Step E: The Passphrase Logic & Loops (Stretch Challenge 2)
```javascript
let iterations = 1;
if (passphrase === 'narwhals777') {
  iterations = 3;
}
```
* **`let`**: Unlike `const`, variables defined with `let` **can** have their value changed later. We start with `iterations` equal to `1`.
* **`if (passphrase === 'narwhals777')`**: Compares the entered passphrase against `'narwhals777'`. If they match exactly, we set `iterations` to `3`.

```javascript
for (let i = 0; i < iterations; i++) {
  const requestPara = document.createElement('p');
  requestPara.className = 'request-item';
  requestPara.innerHTML = `<span class="req-name">${name}</span> has requested <span class="req-song">"${song}"</span> by ...`;
  
  requestList.appendChild(requestPara);
}
```
* **`for (let i = 0; i < iterations; i++)`**: A loop that repeats its code block.
  - If the passphrase wasn't correct, this loop runs once (`i = 0`).
  - If the passphrase was `narwhals777`, this loop runs three times (`i = 0`, `i = 1`, and `i = 2`).
* **`document.createElement('p')`**: Creates a new `<p>` (paragraph) element inside the computer's memory. It isn't visible on the screen yet!
* **`requestPara.innerHTML = ...`**: Writes HTML markup inside our new paragraph. We use backticks (\` \`) and `${variable}` to easily insert the inputs directly into the text (this is called **template literals**).
* **`requestList.appendChild(requestPara)`**: Inserts the new paragraph into our requests list, making it instantly visible on the website!

### Step F: Cleaning up the Form
```javascript
document.getElementById('name').value = '';
document.getElementById('song').value = '';
document.getElementById('artist').value = '';
document.getElementById('passphrase').value = '';
```
* Resets the input values to empty strings `""` so the form is clean and ready for the next song request.

### Step G: Attaching the Listener
```javascript
form.addEventListener('submit', addSongRequest);
```
* Tells the form to listen for a `'submit'` event. When the user clicks the "Submit Request" button (or presses Enter), JavaScript will automatically trigger our `addSongRequest` function!

---

## 🚀 Summary of the steps we took

1. **Cleaned up setup errors**: Removed HTML codes that were mistakenly pasted inside the JavaScript file (`script.js`), resulting in a clean and bug-free script.
2. **Defined semantic inputs**: Added appropriate attributes like `type="text"`, unique IDs, and labels linked with the `for` attribute for proper structure.
3. **Structured a responsive grid container**: Wrapped our layout in a flex container so that form controls and request feeds sit side-by-side.
4. **Designed the UI layout**: Added Spotify branding, dark theme color cards, and layout elements with CSS.
5. **Programmed DOM updates**: Added listeners to capture input values and dynamically generate lists with animation slide-ins.
6. **Programmed conditional logic**: Added passphrase evaluation and looping structures to multiply entries on request.
