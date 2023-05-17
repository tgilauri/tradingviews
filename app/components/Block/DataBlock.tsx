import React, {PropsWithChildren} from "react";
import {Segmented} from "antd";

import styles from './styles.module.scss'
import {SegmentedValue} from "rc-segmented";

type Props = {
  title: string;
  onPeriodChange: (period: SegmentedValue) => void
} & PropsWithChildren;

export default function DataBlock({title, children, onPeriodChange}: Props) {
  return (
    <div className={styles.block}>
      <div className={styles.blockTitle}>
        <h3>{title}</h3>
        <Segmented options={['Daily', 'Monthly', 'Yearly']} onChange={onPeriodChange}/>
      </div>
      <div className={styles.blockContent}>

      </div>
    </div>
  )
}