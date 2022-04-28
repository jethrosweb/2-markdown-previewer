import React from "react"
import "./App.scss"
import { marked } from "marked"

const initialState = `
This is a paragraph
**This is bolded text**
> Block quotes!

# Heading
## Heading 2

- list item 1
- list item 2
- list item 3

[Visit my website](link here)

This is an inline \`<div></div>\`

This is a block code

\`\`\`
let x = 1;
let x = 2;
let z = x + y;
\`\`\`

![React](link here)
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
            <textarea id="editor" value={text} onChange={handleChange}/>
            <Preview markdown={text} />
        </div>
    )
}

function Preview({ markdown }) {
    return (
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdown, {renderer: renderer})}}></div>
    )
}