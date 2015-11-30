import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { ModalWrapper } from '../FlexModalWrapper';
import assert from 'assert';

describe('FlexModalWrapper', () => {
    let renderer;

    beforeEach(() => {
        renderer = TestUtils.createRenderer();
    })

    it('supports overlayClass', () => {
        const overlayClass = 'myClass';
        renderer.render(
            <ModalWrapper overlayClass={overlayClass}>
                <h2>It's a modal</h2>
            </ModalWrapper>
        );
        const result = renderer.getRenderOutput();
        assert(result.props.className.indexOf(overlayClass) > -1);
    });

    it('supports overlayStyle', () => {
        const overlayStyle = {backgroundColor: '#123'};
        renderer.render(
            <ModalWrapper overlayStyle={overlayStyle}>
                <h2>It's a modal</h2>
            </ModalWrapper>
        );
        const result = renderer.getRenderOutput();
        assert(result.props.style.backgroundColor === '#123');
    });
});
