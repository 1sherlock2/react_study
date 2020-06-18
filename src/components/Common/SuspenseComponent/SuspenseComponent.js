import React from 'react';
import s from './SuspenseComponent.module.css';

export const SuspenseComponent = () => (
  <div className="col s9">
    <div className={s.suspense}>
      Loading...
    </div>
  </div>
);
