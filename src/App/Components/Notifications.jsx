import React from "react";
import { Link } from "react-router-dom";

const Notification = (props) => {
  const id = props.id || null;
  const title = props.title || "Notification";
  const data = props.data || [];

  return (
    <React.Fragment>
      <div id={id} className={props.className}>
        <p className="text-center text-lg">{title} </p>
        <hr />
        <div className="py-3">
          <ul>
            {data.length !== 0
              ? data.map((item) => {
                  return (
                    <li key={item.title}>
                      <Link className="cursor-pointer my-1" to={item.url}>
                        {item.title}
                      </Link>
                    </li>
                  );
                })
              : `No ${title} Yet`}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Notification;
