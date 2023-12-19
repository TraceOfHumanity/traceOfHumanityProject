import React, { useState } from 'react';

import { greetingPopupText } from './data';
import styles from './greetingPopup.module.scss';

export const GreetingPopup = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  return (
    <div className={styles.greetingPopupWrapper}>
      <div className={styles.popup}>
        <h2>{greetingPopupText.title}</h2>
        {greetingPopupText.text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};
