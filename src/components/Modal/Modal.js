/**
 * 
 */
import React from 'react';
import ReactModal from 'react-modal';

export default class Modal extends React.Component {
  render() {
    return (
      <ReactModal
        isOpen={false}
        onAfterOpen={() => (null)}
        onRequestClose={() => (null)}
        closeTimeoutMS={0}
        style={{ overlay: {}, content: {} }}
        contentLabel="Example Modal"
        portalClassName="ReactModalPortal"
        overlayClassName="ReactModal__Overlay"
        className="ReactModal__Content"
        bodyOpenClassName="ReactModal__Body--open"
        htmlOpenClassName="ReactModal__Html--open"
        ariaHideApp={true}
        shouldFocusAfterRender={true}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        shouldReturnFocusAfterClose={true}
        role="dialog"
        parentSelector={() => document.body}
        aria={{
          labelledby: "heading",
          describedby: "full_description"
        }}
        overlayRef={null}
        contentRef={node => this.content = node}
      >
        {this.props.children}
      </ReactModal>
    );
  }
}