import React from 'react';
import { findDOMNode } from 'react-dom';
import Portal, { isNodeInRoot } from 'react-portal';
import css from './FlexModalWrapper.css';

// TODO: should be able to do this with just one component rather than two
export class ModalWrapper extends React.Component {
  constructor() {
    super();
    this.handleMouseClickOutside = this.handleMouseClickOutside.bind(this);
  }

  componentDidMount() {
    if (this.props.closeOnOutsideClick) {
      document && document.addEventListener('mousedown', this.handleMouseClickOutside);
    }
  }

  componentWillUnmount() {
    document && document.removeEventListener('mousedown', this.handleMouseClickOutside);
  }

  handleMouseClickOutside(e) {
    if (isNodeInRoot(e.target, findDOMNode(this.refs.content))) {
      return;
    }
    e.stopPropagation();
    this.props.closePortal();
  }

  render() {
    const { useOverlay, overlayClass, overlayStyle } = this.props;
    const modalwrapper = (
      <div className={css.flexModalWrapper} ref="content">
        {React.cloneElement(this.props.children, {closeModal: this.props.closePortal})}
      </div>
    );
    let overlay;
    if (useOverlay) {
      if (overlayStyle) {
        overlay = <div className={css.flexModalOverlay} style={overlayStyle}>{modalwrapper}</div>;
      } else {
        overlay = <div className={`${css.flexModalOverlay} ${overlayClass || css.overlayStyle}`}>{modalwrapper}</div>;
      }
    } else {
      overlay = <div className={css.flexModalOverlay}>{modalwrapper}</div>;
    }
    return overlay;
  }
}

ModalWrapper.propTypes = {
  children: React.PropTypes.element.isRequired,
  useOverlay: React.PropTypes.bool,
  overlayStyle: React.PropTypes.object,
  overlayClass: React.PropTypes.string,
  closeOnOutsideClick: React.PropTypes.bool,
  // passed by Portal
  closePortal: React.PropTypes.func
};
ModalWrapper.defaultProps = { useOverlay: true };

export default class FlexModalWrapper extends React.Component {
  render() {
    const { children, ...other } = this.props;
    const { closeOnOutsideClick, useOverlay, overlayStyle, overlayClass, ...portalOptions } = other;
    return (
      <Portal {...portalOptions}>
        <ModalWrapper {...{closeOnOutsideClick, useOverlay, overlayStyle, overlayClass}}>
          {children}
        </ModalWrapper>
      </Portal>
    );
  }
}

FlexModalWrapper.propTypes = {
  children: React.PropTypes.element.isRequired,
  useOverlay: React.PropTypes.bool,
  overlayStyle: React.PropTypes.object,
  overlayClass: React.PropTypes.string,
  // Portal props
  isOpened: React.PropTypes.bool,
  openByClickOn: React.PropTypes.element,
  closeOnEsc: React.PropTypes.bool,
  closeOnOutsideClick: React.PropTypes.bool,
  onClose: React.PropTypes.func
};

