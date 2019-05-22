# javascript-helper-functions

> 🐠 A list of helpful javascript functions!

[![NPM](https://img.shields.io/npm/v/javascript-helper-functions.svg)](https://www.npmjs.com/package/javascript-helper-functions) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save javascript-helper-functions
```

## Usage

```jsx
import React, { Component } from "react";
import { truncateText } from "javascript-helper-functions";

class Example extends Component {
  render() {
    const bodyText =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.";

    return <div>{truncateText(bodyText, 20)}</div>;
    // This will return "Lorem Ipsum is simpl..."
  }
}

export default Example;
```

## String Helpers

| Function     | Description                              | Example                  | Args                |
| ------------ | ---------------------------------------- | ------------------------ | ------------------- |
| truncateText | Returns truncated text ending with "..." | truncateText(string, 20) | 1. string 2. length |
| toTitleCase  | Returns string in title case             | toTitleCase(string)      | 1. string           |

## Number Helpers

| Function | Description                              | Example          | Args      |
| -------- | ---------------------------------------- | ---------------- | --------- |
| intComma | Returns number in comma seperated number | intComma(number) | 1. number |
| isEven   | Returns if number is even or not         | isEven(number)   | 1. number |

## Array Helpers

## Object Helpers

| Function   | Description                  | Example         | Args      |
| ---------- | ---------------------------- | --------------- | --------- |
| copyObject | Returns a copy of the object | copyObject(obj) | 1. object |

## License

MIT © [dane-brown](https://github.com/dane-brown)
