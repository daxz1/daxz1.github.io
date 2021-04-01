import React from 'react';

interface ComponentTypeScriptProps {
  name: string;
}

const ComponentTypeScript:React.FC<ComponentTypeScriptProps> = (props) => {
  return <div>{props.name.toUpperCase()}</div>
};

export default ComponentTypeScript;