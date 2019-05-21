<h1>React Sidenav</h1>

This is a generic sidenav component.

It accepts a variety of props and is fully customizable.

<h1>Install</h1>
<code>npm install --save @codeparticle/react-sidenav</code>

<h1>Usage</h1>

```javascript
import React, { Fragment } from 'react';
import Sidenav from '@codeparticle/react-sidenav';

const App = () => {
  return (
    <Fragment>
      <Sidenav
        backgroundColor='red'
        fixed={true}
        isOpen={true}
      >
        Sidenav content
      </Sidenav>
      <p>
        Basic usage
      </p>
    </Fragment>
  );
};

export default App;
```

<h1>Props</h1>
<h2>Sidenav</h2>

Prop | type | default | description
---- | ---- | ------- | -----------
|animateWidth|bool|false|If true, animates the width of the sidenav instead of the left attribute|
|backgroundColor|string|#FFFFFF|Background color of the sidenav container|
|className|string|none|Class name for the container|
|fixed|boolean|false|If true, the sidenav will be fixed positioned instead of relative|
|isOpen|boolean|false|Toggle this property to open/close sidenav|
|onClickOutside|func|none|Callback function for when user clicks on the outside of the sidenav|
|right|boolean|false|If true, the sidenav will appear on the right side of the screen instead of left
|transitionSpeed|string|0.3s|Speed for the css transition when closing/opening|
|width|string|300px|Width of the sidenamv|
|zIndex|number|10|zIndex of the sidenav

<h1>License</h1>
Copyright 2019 Code Particle Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.