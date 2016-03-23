import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FlexModalWrapper from '../../index';

let isOpen = false;

const Modal = React.createClass({
    propTypes: {
        className: React.PropTypes.string,
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.arrayOf(React.PropTypes.element)
        ]),
        closeModal: React.PropTypes.func,
        useOpen: React.PropTypes.bool
    },

    close() {
        if (this.props.useOpen) {
            isOpen = false;
        }
        this.props.closeModal();
    },

    render() {
        const transitionProps = {
            transitionName: 'animate',
            transitionAppear: true,
            transitionAppearTimeout: 300,
            transitionEnter: false,
            transitionLeave: false
        };
        return (
            <ReactCSSTransitionGroup {...transitionProps}>
                <div className={`modal ${this.props.className}`}>
                    {this.props.children}
                    <p><button onClick={this.close}>Close this</button></p>
                </div>
            </ReactCSSTransitionGroup>
        );
    }
});

const App = React.createClass({
    onClick() {
        isOpen = true;
        this.forceUpdate();
    },

    render() {
        const buttonBasic = <button>Open a Basic Modal</button>;
        const buttonFullscreen = <button>Open a Fullscreen Modal</button>;
        const buttonScrolling = <button>Open a Scrolling Modal</button>;
        const nextModalBasic = <button>Open next modal</button>;
        return (
            <div className="example">
                <h1>react-flex-modal</h1>
                <FlexModalWrapper openByClickOn={buttonBasic} closeOnEsc closeOnOutsideClick>
                    <Modal>
                        <h2>Basic Modal</h2>
                        <p>You can close this with ESC or clicking outside the modal.</p>
                        <FlexModalWrapper openByClickOn={nextModalBasic}>
                            <Modal>
                                <h2>Moved to next modal</h2>
                                <p>This was nested in a modal. It closed the previous modal first before opening this one</p>
                            </Modal>
                        </FlexModalWrapper>
                    </Modal>
                </FlexModalWrapper>
                <FlexModalWrapper openByClickOn={buttonFullscreen}>
                    <Modal className={'fullscreen'}>
                        <h2>Fullscreen Modal</h2>
                        <p>You can close only close this by clicking the button</p>
                    </Modal>
                </FlexModalWrapper>
                <FlexModalWrapper openByClickOn={buttonScrolling} closeOnEsc>
                    <Modal className={'scrolling'}>
                        <h2>Scrolling Modal</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.
                        </p><p>
                            Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis. Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci. Fusce eget orci a orci congue vestibulum. Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. Curabitur venenatis pulvinar tellus gravida ornare. Sed et erat faucibus nunc euismod ultricies ut id justo. Nullam cursus suscipit nisi, et ultrices justo sodales nec. Fusce venenatis facilisis lectus ac semper. Aliquam at massa ipsum. Quisque bibendum purus convallis nulla ultrices ultricies. Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. Fusce vel volutpat elit. Nam sagittis nisi dui.
                        </p><p>
                            Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. Etiam luctus porttitor lorem, sed suscipit est rutrum non. Curabitur lobortis nisl a enim congue semper. Aenean commodo ultrices imperdiet. Vestibulum ut justo vel sapien venenatis tincidunt. Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. Aliquam ut massa in turpis dapibus convallis. Praesent elit lacus, vestibulum at malesuada et, ornare et est. Ut augue nunc, sodales ut euismod non, adipiscing vitae orci. Mauris ut placerat justo. Mauris in ultricies enim. Quisque nec est eleifend nulla ultrices egestas quis ut quam. Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus. Cras quis ligula sem, vel elementum mi. Phasellus non ullamcorper urna.
                        </p><p>
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In euismod ultrices facilisis. Vestibulum porta sapien adipiscing augue congue id pretium lectus molestie. Proin quis dictum nisl. Morbi id quam sapien, sed vestibulum sem. Duis elementum rutrum mauris sed convallis. Proin vestibulum magna mi. Aenean tristique hendrerit magna, ac facilisis nulla hendrerit ut. Sed non tortor sodales quam auctor elementum. Donec hendrerit nunc eget elit pharetra pulvinar. Suspendisse id tempus tortor. Aenean luctus, elit commodo laoreet commodo, justo nisi consequat massa, sed vulputate quam urna quis eros. Donec vel.
                        </p>
                    </Modal>
                </FlexModalWrapper>
                <button onClick={this.onClick}>Self-managed modal</button>
                <FlexModalWrapper closeOnEsc closeOnOutsideClick isOpened={isOpen}>
                    <Modal useOpen>
                        <h2>Self-managed Modal</h2>
                        <p>We pass a boolean which determines whether the modal is opened or closed.</p>
                        <p>We have to manage it though so for example, if the "close this" button is clicked, we have to track that</p>
                    </Modal>
                </FlexModalWrapper>
            </div>
        );
    }
})

ReactDOM.render(<App/>, document.getElementById('container'));
