import React from 'react';
import { User } from '../Search';

export interface Project {
  id: number;
  name: string;
  personId: number;
}

interface ListProps {
  list: Project[];
  users: User[];
}

const List = ({ list, users }: ListProps) => {
  // const list = [
  //   {
  //     id: 1,
  //     name: 'aa',
  //     projectName: 'bb',
  //   },
  // ];
  return (
    <table>
      <thead>
        <tr>
          <th>名稱</th>
          <th>負責人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {users.find((user) => user.id === project.personId)?.name || null}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
