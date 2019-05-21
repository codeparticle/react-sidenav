<h1>React Sidenav</h1>

This is a generic sidenav component.

It accepts a variety of props and is fully customizable.

<h1>Install</h1>
<code>npm install --save @codeparticle/react-sidenav</code>

<h1>Run Demo</h1>
Clone this project and run:
<code>npm run demo</code>

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
|closeButtonColor|string|#FFFFFF|Color of the default close button icon|
|closeButtonIcon|React Element|none|Defines the icon to use for the close button|
|fixed|boolean|false|If true, the sidenav will be fixed positioned instead of relative|
|hasCloseButton|boolean|false|If true, the side panel will have a close button|
|isOpen|boolean|false|Toggle this property to open/close sidenav|
|onStateChange|func|none|Callback function for when user clicks on the outside of the sidenav or clicks on the trigger|
|right|boolean|false|If true, the sidenav will appear on the right side of the screen instead of left
|transitionSpeed|string|0.3s|Speed for the css transition when closing/opening|
|trigger|React Element|none|Trigger element for the sidenav. This takes precedence over triggerIcon|
|triggerIcon|React Element|none|If this property is set, there will be a trigger button with this element inside of it|
|width|string|300px|Width of the sidenamv|
|zIndex|number|10|zIndex of the sidenav

<h1>License</h1>
Copyright 2019 Code Particle Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.