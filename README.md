# Modalify
Modalify is a lightweight Javascript framework for creating customizable and responsive modals  in web applications. With Modalify, you can easily create pop-up windows that can display various types of content, such as texts, images, inputs, and html content. Unlike other complex and bloated modal frameworks, Modalify is simple to use and does not require any external dependencies or plugins. It is perfect for web developers who want to save time and effort when implementing modals without sacrificing the flexibility and functionality of their designs. Modalify is also highly customizable, allowing you to easily modify the appearance and behavior of your modals to fit your specific needs.
## Getting Started
To get started with Modalify, you can download the latest release from the Github repository or install it via NPM:
```bash
npm install modalify
```
# Usage
### Creating a dialog box
Once you have installed Modalify, make sure to include both the modalify.js and modalify.css files in your project.
```bash
<link rel="stylesheet" href="Modalify.css">
<script src="Modalify.js"></script>
```
To create a simple dialog modal, use the instance of the `Modalify.Dialog` function:
```javascript
const dialog = new Modalify.Dialog({
 title: {
  data: "Dialog Title"
 },
 text: {
  data: "Dialog Text"
 }
});
```
The title property sets the text for the dialog's title, and the text property sets the text for the dialog's main content.
### Creating a confirm box
To create a simple confirm modal, use the instance of the `Modalify.Confirm` function:
```javascript
const confirm = new Modalify.Confirm({
 title: {
  data: "Confirm Title"
 },
 text: {
  data: "Confirm Text"
 }
});
```
The title property sets the text for the title of the confirmation box, and the text property sets the text for the message displayed in the box.
### Creating a prompt box
To create a simple prompt modal, use the instance of the `Modalify.Prompt` function:
```javascript
const prompt = new Modalify.Prompt();
```
To display the modal, run the `prompt.show()` or `prompt.hide()` function to hide it. For more information, see the [documentation](https://modalify-e7116.web.app/).
# Future updates
I'm always working on improving Modalify and adding new features. Here are some of the things that I have planned for the future updates:
- Support for custom animation functions
- More built-in styling options
- Improved accessibility features
- Support for multiple modals on the same page
If you would like to provide a feedback, please feel free to contact me via email. My email address is sol.fioriginal@yahoo.com. I would greatly appreciate any suggestions you may have.
## License
[MIT](https://choosealicense.com/licenses/mit/)
