import React from 'react';
import PropTypes from 'prop-types';
import Background from '../../../components/Background/Background';
import generateEventData from '../generate-event-data';
import Keycap from './Keycap/Keycap';
import classes from './Header.styles.less';

function getPressedKeys(event) {
  const keys = [];

  event.shiftKey && keys.push('Shift');
  event.ctrlKey && keys.push('Ctrl');
  event.altKey && keys.push('Alt');
  event.metaKey && keys.push('Cmd');
  event.code && keys.push(event.key);

  return keys;
}

export default function Header({ event }) {
  if (!event) {
    return (
      <Background className={classes.wrapper}>
        <div className={classes.placeholder}>
          <h1 className={classes.title}>Press any key to get JavaScript event keycode info</h1>
          <p className={classes.description}>
            <b>Tip:</b> shift, control, alt and meta (cmd) keys are also captured, you can generate
            usage with these keys combinations
          </p>
        </div>
      </Background>
    );
  }

  const data = generateEventData(event);
  const pressedKeys = getPressedKeys(data).map((key) => <Keycap key={key} value={key} />);

  return (
    <Background className={classes.wrapper}>
      <div className={classes.keys}>{pressedKeys}</div>
    </Background>
  );
}

Header.propTypes = {
  event: PropTypes.object,
};
