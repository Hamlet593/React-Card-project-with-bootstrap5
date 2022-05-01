import React from 'react'

const Navbar1 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">HamoBlog</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Տուն</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Մտքեր</a>
              </li>
            </ul>
            <div className='d-flex'>
              <button type="button" class="btn btn-outline-success me-2" data-bs-toggle="modal" data-bs-target="#exampleModal1">Sign in</button>
              <button type="button" class="btn btn-outline-danger me-5">Sign out</button>
            </div>
            <form className="d-flex">
              <input className="form-control me-2" type="search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Փնտրել</button>
            </form>
          </div>
        </div>
      </nav>

      <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Վերնագիր</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Ինչ-որ բան
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Ծածկել</button>
              <button type="button" class="btn btn-primary">Պահել փոփոությունները</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar1;