import { Link, useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  const goToProjectPage = () => {
    // logical operations :: dynamic
    navigate("/project");
  };

  return (
    <div>
      <h1>Main</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis debitis
        ea dignissimos optio reiciendis? Asperiores impedit qui architecto
        possimus, voluptatum quaerat vitae dicta error ex, natus harum corrupti
        id ut dignissimos nam nihil repellendus doloribus libero accusamus
        nulla, autem deleniti rerum. Enim quibusdam soluta ex ea rem quisquam
        labore, ipsam exercitationem saepe magni nobis perspiciatis suscipit
        tempore molestiae numquam sapiente dolor optio hic quasi porro ad nihil
        nostrum et. Sequi accusamus deserunt hic blanditiis quod fugiat dolorum
        nesciunt, itaque, harum id nobis architecto quo porro libero voluptatum,
        ex sint quibusdam veniam exercitationem eligendi consequatur eum
        repellendus ad! Debitis, ad perferendis.
      </p>

      <Link to="/project">Project Page Using Link Tag</Link>

      <input
        className="btn btn-outline-secondary"
        type="button"
        value="Project Explorer"
        onClick={goToProjectPage}
      />
    </div>
  );
}

export default Main;
