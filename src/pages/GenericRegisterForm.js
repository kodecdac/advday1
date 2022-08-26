function GenericRegisterForm() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8 col-sm-12 my-2">
        <input
          type="text"
          className="form-control form-control-lg mb-1"
          placeholder="Enter Username"
        />

        <input
          type="password"
          className="form-control form-control-lg mb-1"
          placeholder="Enter Password"
        />

        <input
          type="text"
          className="form-control form-control-lg mb-1"
          placeholder="Enter Email"
        />

        <input
          type="text"
          className="form-control form-control-lg mb-1"
          placeholder="Enter Mobile"
        />

        <input
          type="button"
          value="Add User"
          className="btn btn-lg btn-secondary w-100"
        />
      </div>
    </div>
  );
}

export default GenericRegisterForm;
