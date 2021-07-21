import React, { useState, useEffect } from 'react';

export interface User {
  id: number;
  name: string;
}

interface SearchProps {
  users: User[];
  params: {
    name: string;
    personId: string;
  };
  onChangeParams: (params: SearchProps['params']) => void;
}

const Search = ({ params, onChangeParams, users }: SearchProps) => {
  return (
    <form>
      <input
        type='text'
        value={params.name}
        name='input'
        onChange={(e) =>
          onChangeParams({
            ...params,
            name: e.target.value,
          })
        }
      />
      <select
        name='select'
        onChange={(e) =>
          onChangeParams({ ...params, personId: e.target.value })
        }
      >
        <option value={''}>負責人</option>
        {users.map((user) => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Search;
