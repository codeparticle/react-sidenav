import React, { Fragment, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './sidenav.scss';

const Sidenav = ({
  animateWidth,
  backgroundColor,
  children,
  className,
  closeButtonColor,
  closeButtonIcon,
  fixed,
  hasCloseButton,
  isOpen,
  onStateChange,
  right,
  transitionSpeed,
  trigger,
  triggerIcon,
  width,
  zIndex,
}) => {
  const sidenavContainerRef = useRef();
  const left = isOpen || animateWidth ? 0 : `calc(${width} * -1)`;

  useEffect(() => {
    if (sidenavContainerRef.current && navigator.userAgent.match(/android/i)) {
      sidenavContainerRef.current.classList.add('os-android');
    }
  }, [sidenavContainerRef]);

  useEffect(() => {
    const onWindowClick = (event) => {
      if (!isOpen) {
        return;
      }

      let { target } = event;

      while (target !== null) {
        if (target.classList.contains('react-sidenav')) {
          return;
        }

        target = target.parentElement;
      }

      onStateChange({ isOpen: false, outsideClick: true });
    };

    if (onStateChange) {
      window.addEventListener('click', onWindowClick);
    }

    return () => {
      if (onStateChange) {
        window.removeEventListener('click', onWindowClick);
      }
    };
  }, [isOpen, onStateChange]);

  const containerStyle = {
    '--transitionSpeed': transitionSpeed,
    backgroundColor,
    position: fixed ? 'fixed' : 'relative',
    width: isOpen ? width : 0,
    zIndex,
  };
  const sidenavStyle = {
    '--transitionSpeed': transitionSpeed,
    position: fixed ? 'relative' : 'absolute',
  };

  if (!right) {
    sidenavStyle.right = 0;
  }

  if (!animateWidth) {
    sidenavStyle.width = width;

    if (fixed && !right) {
      containerStyle.left = left;
    } else if (fixed && right) {
      containerStyle.width = width;
      containerStyle.right = isOpen ? 0 : left;
    }
  } else if (right) {
    containerStyle.right = 0;
  }

  const renderCloseButton = () => {
    let CloseButtonElement = null;
    const closeButtonProps = {
      className: 'react-sidenav__close-button',
      onClick: () => onStateChange({ isOpen: false, closeButton: true }),
      style: {},
    };

    if (hasCloseButton) {
      if (closeButtonIcon) {
        CloseButtonElement = <img alt='close' src={closeButtonIcon} />;
      } else {
        const crossProps = {
          className: 'react-sidenav__cross',
          style: {
            backgroundColor: closeButtonColor,
          },
        };

        closeButtonProps.style.paddingRight = '2px';

        CloseButtonElement = (
          <Fragment>
            <span {...crossProps} />
            <span {...crossProps} />
          </Fragment>
        );
      }
    }

    if (CloseButtonElement) {
      return (
        <button {...closeButtonProps}>
          {CloseButtonElement}
        </button>
      );
    }

    return null;
  };

  const renderTrigger = () => {
    const onTriggerButtonClick = () => onStateChange && onStateChange({ isOpen: !isOpen });
    let TriggerElement = trigger;

    if (!TriggerElement && triggerIcon) {
      TriggerElement = (
        <button
          className='react-sidenav-trigger-button'
          onClick={onTriggerButtonClick}
        >
          {triggerIcon}
        </button>
      );
    }

    if (TriggerElement) {
      return (
        <div className='react-sidenav-trigger'>
          {TriggerElement}
        </div>
      );
    }

    return null;
  };

  return (
    <Fragment>
      {renderTrigger()}
      <div
        className={`react-sidenav-container ${className} open-${isOpen}`}
        ref={sidenavContainerRef}
        style={containerStyle}
      >
        <div
          className='react-sidenav'
          style={sidenavStyle}
        >
          {renderCloseButton()}
          {children}
        </div>
      </div>
    </Fragment>
  );
};

Sidenav.propTypes = {
  animateWidth: PropTypes.bool,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  closeButtonColor: PropTypes.string,
  closeButtonIcon: PropTypes.element,
  fixed: PropTypes.bool,
  hasCloseButton: PropTypes.bool,
  isOpen: PropTypes.bool,
  onStateChange: PropTypes.func,
  right: PropTypes.bool,
  transitionSpeed: PropTypes.string,
  trigger: PropTypes.element,
  triggerIcon: PropTypes.element,
  width: PropTypes.string,
  zIndex: PropTypes.number,
};

Sidenav.defaultProps = {
  animateWidth: false,
  backgroundColor: '#FFFFFF',
  className: '',
  closeButtonColor: '#FFFFFF',
  closeButtonIcon: null,
  fixed: false,
  hasCloseButton: false,
  isOpen: false,
  onStateChange: null,
  right: false,
  transitionSpeed: '0.3s',
  trigger: null,
  triggerIcon: null,
  width: '300px',
  zIndex: 10,
};

export default Sidenav;
