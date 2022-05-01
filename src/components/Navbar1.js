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
              <button type="button" className="btn btn-outline-success me-2" data-bs-toggle="modal" data-bs-target="#exampleModal1">Sign in</button>
              <button type="button" className="btn btn-outline-danger me-5">Sign out</button>
            </div>
            <form className="d-flex">
              <input className="form-control me-2" type="search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Փնտրել</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Գրանցվիր բլոգում</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Էլեկտրոնային հասցե</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                <div id="emailHelp" class="form-text">Ձեր տվյալները չեն տարածվելու</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Գաղտնաբառ</label>
                <input type="password" class="form-control" id="exampleInputPassword1" required/>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Հիշել գաղտնաբառը</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label class="form-check-label" for="flexRadioDefault1">
                  Իգական
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label class="form-check-label" for="flexRadioDefault2">
                  Արական
                </label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>


            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Ծածկել</button>
              <button type="button" className="btn btn-primary">Պահել փոփոությունները</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar1;