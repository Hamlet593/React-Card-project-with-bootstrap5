import React from 'react'

const Collapse = () => {
  return (
      <div className='container-fluid text-center'>
        <p>
            <a className="btn btn-primary me-2" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Բացել կենտերը</a>
            <button className="btn btn-secondary me-2" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Բացել զույգերը</button>
            <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Ընտրել բոլորը</button>
        </p>
        <div className="row gy-4">
            <div className="col-md-6">
                <div className="collapse multi-collapse" id="multiCollapseExample1">
                    <div className="card card-body d-flex">
                        <img className='text-center' src='https://upload.wikimedia.org/wikipedia/commons/4/41/Gamemaker8-200x200.png' width={200} height={200} alt='Gamemaker'/>
                        <p>Lorem text dsfsdf Lorem text dsfsdf Lorem text dsfsdf Lorem text dsfsdf </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="collapse multi-collapse" id="multiCollapseExample2">
                    <div className="card card-body">
                        <img src='http://davidnaylor.org/temp/firefox-logo-200x200.png' width={200} height={200} alt='Mozilla'/>
                        <p>Lorem text dsfsdf Lorem text dsfsdf Lorem text dsfsdf Lorem text dsfsdf </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="collapse multi-collapse" id="multiCollapseExample1">
                    <div className="card card-body">
                        <img src='https://upload.wikimedia.org/wikipedia/commons/4/41/Gamemaker8-200x200.png' width={200} height={200} alt='Gamemaker'/>
                        <p>Lorem text dsfsdf Lorem text dsfsdf Lorem text dsfsdf Lorem text dsfsdf </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="collapse multi-collapse" id="multiCollapseExample2">
                    <div className="card card-body">
                        <img src='http://davidnaylor.org/temp/firefox-logo-200x200.png' width={200} height={200} alt='Mozilla'/>
                        <p>Lorem text dsfsdf Lorem text dsfsdf Lorem text dsfsdf Lorem text dsfsdf </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Collapse;