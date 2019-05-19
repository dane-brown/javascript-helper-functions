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

## List of available helper functions

| Function     | Description                              | Example                    | Args              |
| ------------ | ---------------------------------------- | -------------------------- | ----------------- |
| truncateText | Returns truncated text ending with "..." | truncateText(bodyText, 20) | - string - length |

## License

MIT © [dane-brown](https://github.com/dane-brown)
