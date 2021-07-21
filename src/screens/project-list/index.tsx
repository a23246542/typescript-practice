import React, { useEffect, useState } from 'react';
import List from './components/List';
import Search from './components/Search';
import { User } from './components/Search';
import { Project } from './components/List';

export const ProjectList = () => {
  const [params, setParams] = useState({
    name: '',
    personId: '',
  });

  const [users, setUsers] = useState<User[]>([
    // {
    //   id: 1,
    //   name: 'aa',
    // },
  ]);

  const [list, setList] = useState<Project[]>([
    // {
    //   id: 1,
    //   name: '騎手管理',
    //   // projectName: 'bb',
    //   personId: 1,
    // },
    // {
    //   id: 2,
    //   name: '團購app',
    //   personId: 2,
    // },
  ]);

  useEffect(() => {
    new Promise<Project[]>((resolve) => {
      setTimeout(() => {
        const listData = [
          {
            id: 1,
            name: '騎手管理',
            // projectName: 'bb',
            personId: 1,
          },
          {
            id: 2,
            name: '團購app',
            personId: 2,
          },
        ];
        resolve(listData);
      }, 100);
    }).then((data) => setList(data));
  }, []);

  useEffect(() => {
    // new Promise<{id:number,name:string}[]>((resolve) => { 這樣也行
    new Promise((resolve: (value: { id: number; name: string }[]) => void) => {
      setTimeout(() => {
        const usersData = [
          {
            id: 1,
            name: '高修文',
          },
          {
            id: 2,
            name: '王文靜',
          },
          {
            id: 3,
            name: '熊天成',
          },
        ];
        resolve(usersData);
      }, 100);
      // }).then((data:{id:number,name:string}[]) => {
    }).then((data) => {
      // {id:number,name:string}[]
      setUsers(data);
      // setUsers(data:{id:number,name:string}[]);
    });
  }, []);

  return (
    <div>
      <Search params={params} onChangeParams={setParams} users={users} />
      <List list={list} users={users} />
    </div>
  );
};
