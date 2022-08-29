function GenericList() {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">UserName</th>
            <th scope="col">Password</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Actoins</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>rohit</td>
            <td>******</td>
            <td>rohit@gmail.com</td>
            <td>212212</td>
            <td>
              <input className="btn btn-link" type="button" value="View" /> /
              <input className="btn btn-link" type="button" value="Edit" />
              /<input className="btn btn-link" type="button" value="Del" />
            </td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>rohit</td>
            <td>******</td>
            <td>rohit@gmail.com</td>
            <td>212212</td>
            <td>
              <input className="btn btn-link" type="button" value="View" /> /
              <input className="btn btn-link" type="button" value="Edit" />
              /<input className="btn btn-link" type="button" value="Del" />
            </td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>rohit</td>
            <td>******</td>
            <td>rohit@gmail.com</td>
            <td>212212</td>
            <td>
              <input className="btn btn-link" type="button" value="View" /> /
              <input className="btn btn-link" type="button" value="Edit" />
              /<input className="btn btn-link" type="button" value="Del" />
            </td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>rohit</td>
            <td>******</td>
            <td>rohit@gmail.com</td>
            <td>212212</td>
            <td>
              <input className="btn btn-link" type="button" value="View" /> /
              <input className="btn btn-link" type="button" value="Edit" />
              /<input className="btn btn-link" type="button" value="Del" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GenericList;
