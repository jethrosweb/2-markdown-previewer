import React from "react"
import "./App.scss"
import { marked } from "marked"
import logo from "./jethros-web-logo-small.png"

const initialState = `# Welcome to my React markdown previewer!
## Type something in the editor above...
And it will be reflected here in the previewer. 

**If you want to see more [click here](https://github.com/jethrosweb)**

This is inline code nested within back-ticks \`<div></div>\`

Below is a code block:

\`\`\`
let x = 1;
let x = 2;
let z = x + y;
\`\`\`

- Hi, I'm list item 1.
- Hi, I'm list item 2.
- Hi, I'm list item 3.
> See my logo below.. This is brought to you by block quotes.
![Logo](https://avatars.githubusercontent.com/u/96323853?v=4)
`

marked.setOptions({
    breaks: true
})

const renderer = new marked.Renderer()

export default function App() {

    const [text, setText] = React.useState(initialState)

    const handleChange = (event) => {
        setText(event.target.value)
    }

    return (
        <div className="container">
            <div id="editor-tab">
                <img src={logo} alt="Logo" class="logo" />
                <p>Editor</p>
            </div>
            <div id="editor-container">
                <textarea id="editor" readonly value={text} onChange={handleChange}/>
                <div id="preview-tab">
                    <img src={logo} alt="Logo" class="logo" />
                    <p>Previewer</p>
                </div>
                <Preview markdown={text} />
            </div>
        </div>

    )
}

function Preview({ markdown }) {
    return (
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdown, {renderer: renderer})}}></div>
    )
}