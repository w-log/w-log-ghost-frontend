import React from 'react';

import sanitizeHtml from 'sanitize-html';

interface HtmlViewerProps {
    className?: string;
    html: string;
}

const HtmlViewer = ({ html, className }: HtmlViewerProps) => (
    <div
        className={`${className ?? ''}`}
        dangerouslySetInnerHTML={{
            __html: sanitizeHtml(html, {
                allowedTags: [
                    'img',
                    'strong',
                    'p',
                    'em',
                    'strong',
                    'h1',
                    'h2',
                    'ul',
                    'ol',
                    'li',
                    'blockquote',
                    'a',
                    'u',
                    'span',
                    'div',
                    'iframe',
                ],
                allowedAttributes: {
                    span: ['style'],
                    div: ['style'],
                    '*': ['align', 'data-wrapper-node'],
                    img: ['src'],
                    a: ['href', 'target'],
                    iframe: ['src', 'allow', 'allowfullscreen', 'frameborder'],
                },
            }),
        }}
    />
);

export default HtmlViewer;
