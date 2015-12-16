import React from 'react';
import { findDOMNode } from 'react-dom';
import Portal, { isNodeInRoot } from 'react-portal';
import css from './FlexModalWrapper.css';

const scrollEvents = ['scroll', 'touchmove', 'wheel'];

export class ModalWrapper extends React.Component {
  constructor() {
    super();
    this.handleMouseClickOutside = this.handleMouseClickOutside.bind(this);
    this.handleScrollOutside = this.handleScrollOutside.bind(this);
  }

  componentDidMount() {
    if (this.props.closeOnOutsideClick) {
      document && document.addEventListener('mousedown', this.handleMouseClickOutside);
    }
    if (this.props.preventScrolling) {
      scrollEvents.forEach(eventType => document && document.addEventListener(eventType, this.handleScrollOutside));
    }
  }

  componentWillUnmount() {
    document && document.removeEventListener('mousedown', this.handleMouseClickOutside);
    scrollEvents.forEach(eventType => document && document.removeEventListener(eventType, this.handleScrollOutside));
  }

  handleMouseClickOutside(e) {
    if (isNodeInRoot(e.target, findDOMNode(this.refs.content))) {
      return;
    }
    e.stopPropagation();
    this.props.closePortal();
  }

  handleScrollOutside(e) {
    if (isNodeInRoot(e.target, findDOMNode(this.refs.content))) {
      return;
    }
    e.preventDefault();
  }

  render() {
    const { className, useOverlay, overlayClassName, overlayStyle, closePortal: closeModal } = this.props;
    const modalwrapper = (
      <div className={className ? `${css.flexModalWrapper} ${className}` : css.flexModalWrapper} ref="content">
        {React.Children.map(this.props.children, (c) => React.cloneElement(c, {closeModal}))}
      </div>
    );
    let overlay;
    if (useOverlay) {
      if (overlayStyle) {
        overlay = <div className={css.flexModalOverlay} style={overlayStyle}>{modalwrapper}</div>;
      } else {
        overlay = <div className={`${css.flexModalOverlay} ${overlayClassName || css.overlayStyle}`}>{modalwrapper}</div>;
      }
    } else {
      overlay = <div className={css.flexModalOverlay}>{modalwrapper}</div>;
    }
    return overlay;
  }
}

ModalWrapper.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
  useOverlay: React.PropTypes.bool,
  overlayStyle: React.PropTypes.object,
  overlayClassName: React.PropTypes.string,
  closeOnOutsideClick: React.PropTypes.bool,
  preventScrolling: React.PropTypes.bool,
  // passed by Portal
  closePortal: React.PropTypes.func
};
ModalWrapper.defaultProps = {
  useOverlay: true,
  preventScrolling: true
};

export default class FlexModalWrapper extends React.Component {
  render() {
    const { children, ...other } = this.props;
    const { closeOnOutsideClick, className, useOverlay, overlayStyle, overlayClassName, preventScrolling, ...portalOptions } = other;
    return (
      <Portal {...portalOptions}>
        <ModalWrapper {...{closeOnOutsideClick, className, useOverlay, overlayStyle, overlayClassName, preventScrolling}}>
          {children}
        </ModalWrapper>
      </Portal>
    );
  }
}

FlexModalWrapper.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
  useOverlay: React.PropTypes.bool,
  overlayStyle: React.PropTypes.object,
  overlayClassName: React.PropTypes.string,
  // Portal props
  isOpened: React.PropTypes.bool,
  openByClickOn: React.PropTypes.element,
  closeOnEsc: React.PropTypes.bool,
  closeOnOutsideClick: React.PropTypes.bool,
  preventScrolling: React.PropTypes.bool,
  onClose: React.PropTypes.func
};

