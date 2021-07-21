
import './App.css';

function App() {
  return (
    <div className="App">

        <div class="container-fluid">
          <header class="sticky-top text-center">
              <div class="row bg-dark">
                <div class="col">
                  <button type="button">Get Started</button>
                </div>
                <div class="col">
                  <h1 class="text-white" href="#">Cloudy Weather Studios</h1>
                </div>
                <div class="col">
                  <a href="#">Log In</a>
                  <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                  </button>
                </div>
              </div>

              <nav>
                <a>Catergories</a>
              </nav>

          </header>

          <body>
              <div class="row">
                <div class="col-12">
                <div class="view" style="background-image: url('https://mdbootstrap.com/img/Photos/Others/architecture.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center center;">
                      <div>

                      </div>

                  </div>
                </div>
                
              </div>
          </body>
        </div>


    </div>
  );
}

export default App;
