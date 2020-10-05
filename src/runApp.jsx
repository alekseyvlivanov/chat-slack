import React from 'react';
import ReactDOM from 'react-dom';

const runApp = (gon) => {
  console.log(gon);
  ReactDOM.render(
    <main className="row h-100">
      <aside className="col-3 border-right">
        <div className="d-flex align-items-center my-2 px-1">
          <span className="h5 m-0">Channels</span>
          <button className="btn ml-auto p-0" type="button">
            <span className="h5 m-0">+</span>
          </button>
        </div>
        <ul className="nav nav-pills d-flex flex-column">
          {gon.channels.map((channel) => (
            <li key={channel.id} className="nav-item">
              <button
                type="button"
                className="nav-link btn btn-block btn-light mb-2 text-left"
              >
                {channel.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <section className="col" />
    </main>,
    document.querySelector('#chat'),
  );
};

export default runApp;
