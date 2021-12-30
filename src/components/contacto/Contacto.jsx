import "./contacto.css";
const Contacto = () => {
  return (
    <div className="contact-container">
      <div className="form-container shadow">
        <form className="form-contacto">
          <div className="form-group m-2">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group m-2">
            <label for="exampleInputPassword1">Mensaje</label>
            <textarea
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Escribe aquí tu mensaje"
            ></textarea>
          </div>

          <button type="button" className="btn btn-outline-danger m-2">
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
