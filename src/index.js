import React from 'react';

function allMustExist(props) {
  Object.keys(props).every(key => props[key] != null);
}

export default function pending(NotReadyComponent) {
  return (hasLoadedTest = allMustExist) => (ReadyComponent) => (props) => {
    if (hasLoadedTest(props)) {
      return <ReadyComponent { ...props } />;
    }
    else {
      return <NotReadyComponent />;
    }
  }
}
