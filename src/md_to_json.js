const fs = require('fs');
const md = require('markdown-it')();

// Read the markdown file
const markdownFilePath = './src/PlaneacionMC.md';
const markdownContent = fs.readFileSync(markdownFilePath, 'utf-8');

// Parse the markdown content
const tokens = md.parse(markdownContent, {});

// Extract text of all headings
const headings = tokens.forEach((result, token, tokenIndex) => {
  if (token.type === 'heading_open') { 
    const headingTextToken = tokens[tokenIndex + 1];
    if (headingTextToken) {
      result.push(headingTextToken.content);
    }
  }
  else if (token.type === 'paragraph_open') { 
    const headingTextToken = tokens[tokenIndex + 1];
    if (headingTextToken) {
      result.push(headingTextToken.content);
    }
  }
  else if (token.type === 'ordered_list_open') { 
    const headingTextToken = tokens[tokenIndex + 1];
    if (headingTextToken) {
      result.push(headingTextToken.content);
    }
  }
  return result;
}, []);

// Print the extracted headings
console.log('Extracted Headings:');
headings.forEach((heading, index) => {
  console.log(`${index + 1}. ${heading}`);
});
