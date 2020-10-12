import React, { memo } from "react";
import CountUp from "react-countup";

/**
 *
 * @param header
 * @param title
 * @param content
 * @param cssClasses
 * @returns {JSX.Element}
 * @constructor
 */
export const TileWithCountUp = memo(({header, title, content, cssClasses}) => (
  <div className="tile">
    <>
      <div className="tress__header">
        {header}
      </div>
      <div className="tress__title">
        {title}
      </div>
      <div className={['tress__content', cssClasses].join(' ')}>
        {content && content.value && content.suffix &&
          <CountUp
            start={0}
            end={content.value}
            suffix={content.suffix}
          />
        }
      </div>
    </>
  </div>
));
