import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './sidenav.scss';

const Sidenav = ({
  animateWidth,
  backgroundColor,
  children,
  className,
  fixed,
  isOpen,
  onClickOutside,
  right,
  transitionSpeed,
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
      let { target } = event;

      while (target !== null) {
        if (target.classList.contains('react-sidenav')) {
          return;
        }

        target = target.parentElement;
      }

      onClickOutside(isOpen);
    };

    if (onClickOutside) {
      window.addEventListener('click', onWindowClick);
    }

    return () => {
      if (onClickOutside) {
        window.removeEventListener('click', onWindowClick);
      }
    };
  }, [isOpen, onClickOutside]);

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

  return (
    <div
      className={`react-sidenav-container ${className} open-${isOpen}`}
      ref={sidenavContainerRef}
      style={containerStyle}
    >
      <div
        className='react-sidenav'
        style={sidenavStyle}
      >
        {children}
      </div>
    </div>
  );
};

Sidenav.propTypes = {
  animateWidth: PropTypes.bool,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClickOutside: PropTypes.func,
  right: PropTypes.bool,
  transitionSpeed: PropTypes.string,
  width: PropTypes.string,
  zIndex: PropTypes.number,
};

Sidenav.defaultProps = {
  animateWidth: false,
  backgroundColor: '#FFFFFF',
  className: '',
  fixed: false,
  isOpen: false,
  onClickOutside: null,
  right: false,
  transitionSpeed: '0.3s',
  width: '300px',
  zIndex: 10,
};

export default Sidenav;
