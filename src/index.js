import React from 'react';

function allMustExist(props) {
  Object.keys(props).every(propName => props[propName] != null);
}

export default function pending(NotReadyComponent) {
  return (hasLoaded = allMustExist) => (ReadyComponent, ErrorComponent) => ({ error, ...props }) => {
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
