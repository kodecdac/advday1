import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage";

function Project() {
  const handleError = (error, info) => {
    console.log(error);
  };

  return (
    <>
      <nav>
        <Link to="projecta">Project A</Link>
        <Link to="projectb">Project B</Link>
      </nav>
      <Outlet />
    </>
  );
}

export function ProjectA() {
  const [project] = useState({});
  return (
    <div>
      <h1>Project {}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, temporibus?
        Fuga ipsa veniam distinctio neque sapiente eos vitae reprehenderit sequi
        dolorem velit eveniet excepturi possimus ex, quasi numquam nostrum,
        laborum ducimus porro quae ab maxime cum nobis culpa quam? Aut, suscipit
        distinctio ducimus, quidem reprehenderit laboriosam magni delectus sunt
        molestias vero totam nihil pariatur. At totam sit praesentium eos
        reiciendis odit sed temporibus maxime optio iusto amet magnam veritatis,
        quis dolorem voluptatem aliquid vero dolorum iure quisquam dolor quos ex
        repellendus nulla. Deleniti omnis consectetur tempora quas incidunt,
        voluptates sapiente totam sequi architecto ut corrupti veniam, quidem
        quasi odit fugit!
      </p>
    </div>
  );
}

export function ProjectB() {
  return (
    <div>
      <h1>Project B</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, temporibus?
        Fuga ipsa veniam distinctio neque sapiente eos vitae reprehenderit sequi
        dolorem velit eveniet excepturi possimus ex, quasi numquam nostrum,
        laborum ducimus porro quae ab maxime cum nobis culpa quam? Aut, suscipit
        distinctio ducimus, quidem reprehenderit laboriosam magni delectus sunt
        molestias vero totam nihil pariatur. At totam sit praesentium eos
        reiciendis odit sed temporibus maxime optio iusto amet magnam veritatis,
        quis dolorem voluptatem aliquid vero dolorum iure quisquam dolor quos ex
        repellendus nulla. Deleniti omnis consectetur tempora quas incidunt,
        voluptates sapiente totam sequi architecto ut corrupti veniam, quidem
        quasi odit fugit!
      </p>
    </div>
  );
}

export default Project;
