import React, { memo } from "react";
import "./style.scss";

/**
 *
 * @param header
 * @param title
 * @param content
 * @param cssClasses
 * @returns {JSX.Element}
 * @constructor
 */
export const Tile = memo(({header, title, content, cssClasses}) => {
  return (
    <div className="tile fade__in">
      <>
        <div className="tress__header">
          {header}
        </div>
        <div className="tress__title">
          {title}
        </div>
        <div className={['tress__content', cssClasses].join(' ')}>
          {content}
        </div>
      </>
    </div>
  );
});