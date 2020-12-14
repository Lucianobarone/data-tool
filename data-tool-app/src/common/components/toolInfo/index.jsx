import React from 'react';
import { Card } from 'antd';
import styles from './index.module.css';

const toolInfo = ({ features, bugs, action }) => (
  <div className={styles.toolInfoContainer}>
    <Card className={styles.toolCard}>
      <h3>Next orders to run</h3>
      <div className={styles.moreVoted}>
        <h4>Feature more voted</h4>

        {features[0] ? (
          <p className={styles.feature} onClick={() => action(features[0].id)}>
            {features[0].name}
          </p>
        ) : (
          'None'
        )}

        <hr className={styles.hr} />

        <h4>Bug more voted</h4>
        {bugs[0] ? (
          <p className={styles.bug} onClick={() => action(bugs[0].id)}>
            {bugs[0].name}
          </p>
        ) : (
          'None'
        )}
      </div>

      <div className={styles.totalOrder}>
        <h4>Total</h4>
        <p>
          Features: <span className={styles.numFeature}>{features.length}</span>
        </p>
        <p>
          Bugs: <span className={styles.numBug}>{bugs.length}</span>
        </p>
      </div>
    </Card>
  </div>
);

export default toolInfo;
