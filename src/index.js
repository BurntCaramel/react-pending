import React from 'react';

function requiredPropTypesMustExist(props, { propTypes, displayName }) {
  Object.keys(propTypes).every(propName => propTypes[propName](props, propName, displayName) == null);
}

export default function pending(NotReadyComponent) {
  return (hasLoaded = requiredPropTypesMustExist) => (ReadyComponent, ErrorComponent) => (props) => {
    if (props.error) {
      return <ErrorComponent { ...props } />;
    }
    else if (hasLoaded(props, ReadyComponent)) {
      return <ReadyComponent { ...props } />;
    }
    else {
      return <NotReadyComponent />;
    }
  }
}
