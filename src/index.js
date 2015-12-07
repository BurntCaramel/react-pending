import React from 'react';

function propTypesMustExist(props, { propTypes, displayName }) {
  Object.keys(propTypes).every(propName => propTypes[propName](props, propName, displayName) == null);
}

export default function pending(NotReadyComponent) {
  return (hasLoaded = propTypesMustExist) => (ReadyComponent, ErrorComponent) => ({ error, ...props }) => {
    if (error) {
      return <ErrorComponent error={ error } { ...props } />;
    }
    else if (hasLoaded(props, ReadyComponent)) {
      return <ReadyComponent { ...props } />;
    }
    else {
      return <NotReadyComponent />;
    }
  }
}
