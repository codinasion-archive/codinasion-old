import Breadcrumb from "@/components/Breadcrumb";
import MarkdownPreview from "@/components/MarkdownPreview";

import Comment from "@/components/Comment";

export default async function MarkdownPreviewPage() {
  const markdown_text = `# Heading 1

## Heading 2

### Heading 3

#### Heading 4

This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ultricies augue. Sed euismod, nisl nec ultricies tincidunt, nunc nisl aliquet nisl, vitae aliquet nisl nisl nec nisl. Sed euismod, nisl nec ultricies tincidunt, nunc nisl aliquet nisl, vitae aliquet nisl nisl nec nisl.

**This is a bold text**

*This is an italic text*

***This is a bold and italic text***

~~This is a strikethrough text~~

[This is a link](https://www.google.com)

\`This is an inline code\`

\`\`\`javascript
const a = 1;
const b = 2;
const c = a + b;
\`\`\`

\`\`\`
This is a code block
\`\`\`

<CodeBlock>

\`\`\`javascript
// Javascript
const a = 1;
const b = 2;
const c = a + b;
\`\`\`

\`\`\`typescript
// Typescript
const a = 1;
const b = 2;
const c = a + b;
\`\`\`

\`\`\`csharp
// C#
int a = 1;
int b = 2;
int c = a + b;
\`\`\`

</CodeBlock>

> This is a blockquote

- This is a list item
- This is another list item

1. This is a list item
2. This is another list item

- This is a list item
  - This is a nested list item
  - This is another nested list item
- This is another list item

1. This is a list item
    1. This is a nested list item
    2. This is another nested list item
2. This is another list item

| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |

---
  `;

  return (
    <>
      <Breadcrumb
        links={[
          {
            title: "Home",
            url: "/",
          },

          {
            title: "Markdown Preview",
          },
        ]}
      />
      <div className="py-5">
        <MarkdownPreview>{markdown_text}</MarkdownPreview>

        <Comment />
      </div>
    </>
  );
}
