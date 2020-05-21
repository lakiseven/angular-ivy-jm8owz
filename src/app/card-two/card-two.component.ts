import { Component } from '@angular/core';@Component({
  selector: 'app-card-two',
  template: `
    <div class="card"></div>
    
    <style>
      .card {
        background-image: url('https://media1.giphy.com/media/3oKHWE2vSaeAJfgU1i/200.webp?cid=ecf05e4738add8a35816894e3a12559de9c1981545e210f0&rid=200.webp');           
        background-color: #66ff99;                   
        background-size: cover;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 
                    0 6px 6px rgba(0,0,0,0.23);
        height: 300px;
        margin: 20px;
        width: 300px;
      }
    </style>
  `,
})export class CardTwoComponent {
  constructor() { }
}