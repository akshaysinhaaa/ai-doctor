import React from 'react'
import markdownit from "markdown-it";
import DOMPurify from 'dompurify';

const md = markdownit()


type Props = {
    content: string
}

const Markdown = ({ content }: Props) => {
    const html = md.render(content);
    const purifiedHtml = DOMPurify.sanitize(html);
    return (
        <div dangerouslySetInnerHTML={{ __html: html}} />
    )
}

export default Markdown