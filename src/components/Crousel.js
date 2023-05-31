import React from "react";

function Crousel() {
  return (
    <div id="text-carousel" class="carousel slide" data-ride="carousel">
      <div class="row">
        <div class="col-xs-offset-3 col-xs-6">
          <div class="carousel-inner">
            <div class="item active">
              <div class="carousel-content">
                <div>
                  <p>
                    Sapiente, ducimus, voluptas, mollitia voluptatibus nemo
                    explicabo sit blanditiis laborum dolore illum fuga veniam
                    quae expedita libero accusamus quas harum ex numquam
                    necessitatibus provident deleniti tenetur iusto officiis
                    recusandae corporis culpa quaerat?
                  </p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="carousel-content">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi, sint fuga temporibus nam saepe delectus expedita
                    vitae magnam necessitatibus dolores tempore consequatur
                    dicta cumque repellendus eligendi ducimus placeat!{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="carousel-content">
                <div>
                  <p>
                    Sapiente, ducimus, voluptas, mollitia voluptatibus nemo
                    explicabo sit blanditiis laborum dolore illum fuga veniam
                    quae expedita libero accusamus quas harum ex numquam
                    necessitatibus provident deleniti tenetur iusto officiis
                    recusandae corporis culpa quaerat?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="left carousel-control" href="#text-carousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
      </a>
      <a class="right carousel-control" href="#text-carousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
      </a>
    </div>
  );
}

export default Crousel;
