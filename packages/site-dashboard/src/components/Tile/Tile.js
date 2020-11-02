import React, { memo } from "react";
import PropTypes from "prop-types";
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
export const Tile = memo(({ header, title, content, cssClasses }) => {
  return (
    <div className="tile fade__in">
      <>
        <div className="tress__header">{header}</div>
        <div className="tress__title">{title}</div>
        <div className={["tress__content", cssClasses].join(" ")}>
          {content}
        </div>
      </>
    </div>
  );
});

Tile.propTypes = {
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  cssClasses: PropTypes.array.isRequired,
};

Tile.defaultPropTypes = {
  header: "Header Text",
  title: "Title Text",
  content: "Content Text",
  cssClasses: "tress__content--sushi",
};
