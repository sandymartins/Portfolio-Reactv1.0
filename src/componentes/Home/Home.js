import React from "react";
import "./Home.css";

var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) {
      delta /= 2;
    }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function () {
      that.tick();
    }, delta);
  };
  
  window.onload = function () {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };


function Home () {
    return (  
        <>
        <main className="container-principal">
        <section className='container-home'>
        <h1>Hi There</h1>
        <img src="https://i.imgur.com/rDbN0qv.png" alt="Hand emoji" width='25%'/>
        <p className="virgle">,</p>
        </section>
        <div>
        <h2>I'm <p>Sandy</p></h2>
        </div>
        <h5>I'm a 
        <span class="txt-rotate" data-period="2000" data-rotate='[ " Designer.", " Web Developer.", " Photoshop Lover." ]'></span>
        </h5>




        <a className='button-animation' href='#'> Discover More <img src="https://i.imgur.com/6s5wteT.png" alt="" /></a>




        </main>
        </>
    );
}

export default Home;