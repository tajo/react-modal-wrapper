# react-modal-wrapper

A React Modal Wrapper that uses FlexBox to keep it's position, BYOM (bring-your-own-modal). Based off the [Portal component](https://github.com/tajo/react-portal) by [Tajo](https://github.com/tajo).
**Note:** This uses flexbox so browser support is iffy. Will post a compatibility table at some point.

## Installation (not yet published)
```
npm install react-modal-wrapper --save
```

## Usage
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import FlexModalWrapper from 'react-flex-modal';

const Modal = React.createClass({
  render() {
    return (
      <div className="modal">
        {this.props.children}
        <p><button onClick={this.props.closeModal}>Close this</button></p>
      </div>
    );
  }
});

let App = React.createClass({
  render() {
    const button = <button>Open Modal</button>;
    return (
      <div className="example">
        <FlexModalWrapper closeOnEsc closeOnOutsideClick openByClickOn={button}>
          <Modal>
            <h2>Modal</h2>
            <p>this react component is appended to the document body</p>
          </Modal>
        </FlexModalWrapper>
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('container'));
```
With accompanying CSS:
```css
.modal {
  background-color: #fff;
  border: 1px solid #000;
  padding: 25px;
}
```

## Documentation
#### children : `React.PropTypes.element.isRequired`
The modal expects a single child which is the modal component that you provide.
#### isOpened : `React.PropTypes.bool`
If `true`, the modal will be open, if `false`, the modal will be closed. You have to manage closing it (via state management) so to make life easier see `openByClickOn`
#### openByClickOn : `React.PropTypes.element`
Renders the passed element where you actually use the `FlexModalWrapper` (see example above). It's `onClick` handler opens the modal. The prop `closeModal` gets passed into your Modal so you can call `this.props.closeModal` to close the modal.
#### closeOnEsc : `React.PropTypes.bool`
If `true`, the modal can be closed by pressing the ESC key.
#### closeOnOutsideClick : `React.PropTypes.bool`
If `true`, the modal can be closed by click anywhere outside the modal.
#### onClose : `React.PropTypes.func`
Callback that is called when the portal closes.
#### useOverlay : `React.PropTypes.bool` (defaults to `true`)
If `true`, will use an overlay that gets placed behind the modal. Will use default style or use passed `overlayStyle` or `overlayClass` for the overlay style.
#### overlayStyle : `React.PropTypes.object`
Object that will be used as inline styles for the overlay (only if `useOverlay` is `true`)
#### overlayClass : `React.PropTypes.string`
String that will be used as the class for the overlay (only if `useOverlay` is `true`)

## Testing and Examples
You can test the examples by running
```
npm start
```
and then going to `localhost:8080/basic/` in your browser. There'll be buttons for different modals

To test run
```
npm test
```
**Note:** Tests are not yet implemented
