import * as React from 'react';
import './style.css';
import { mailList } from './mainList';

export default function App() {
  return (
    <div>
      {mailList?.map((item) => (
        <>
          <h1>{item.title}</h1>
          {item.linkData.map((link) => (
            <>
              <a target="_blank" href={link.link}>
                {link.name}{' '}
              </a>
            </>
          ))}
        </>
      ))}

      {/* <h1>Hello StackBlitz!</h1>
      {mainList.map((item) => (
        <>
          <h1>{item.title}</h1>

          {/* <h1>{item.title}</h1>
          {item.data.map((link) => (
            <a href={link[0]} target="_blank">
              {link[1]}
            </a>
          ))} */}
      {/* </> */}
    </div>
  );
}
