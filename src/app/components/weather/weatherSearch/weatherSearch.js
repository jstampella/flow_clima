import React from "react";

export default function weatherSearch() {
  return (
    <div className="card card-body">
      <form action="">
        <div className="form-group">
          <input
            type="text"
            name="city"
            placeholder="ingrese una ciudad"
            className="form-control"
            autoFocus
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="country"
            placeholder="ingrese su pais"
            className="form-control"
          />
        </div>
        <button className="btn btn-block btn-success">Buscar</button>
      </form>
    </div>
  );
}
