import React from 'react';
import { shallow } from 'enzyme';
import Sidenav from '../src/sidenav';
import toJson from 'enzyme-to-json';

let wrapped = shallow(<Sidenav></Sidenav>);
it('should render', () => {
    expect(toJson(wrapped)).toMatchInlineSnapshot(`
<Fragment>
  <div
    className="react-sidenav-container  open-false"
    style={
      Object {
        "--transitionSpeed": "0.3s",
        "backgroundColor": "#FFFFFF",
        "position": "relative",
        "width": 0,
        "zIndex": 10,
      }
    }
  >
    <div
      className="react-sidenav"
      style={
        Object {
          "--transitionSpeed": "0.3s",
          "position": "absolute",
          "right": 0,
          "width": "300px",
        }
      }
    />
  </div>
</Fragment>
`);
});