import React from 'react';
import { Profile } from './Profile/Profile';
import user from './Profile/user';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data';

export const App = () => {
  return (
    <div className="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
