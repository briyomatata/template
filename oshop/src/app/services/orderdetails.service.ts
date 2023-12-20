import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  constructor() { }

  // development details
    devDetails = [
      {
        id:1,
        devName:"One Page Website",
        devDetils: "One page static website",
        devPrice: 1200
      },

      {
        id:2,
        devName:"Two Page Website",
        devDetils: "Two page static website",
        devPrice: 1600
      },

      {
        id:3,
        devName:"Three Page Website",
        devDetils: "Three page dynamic website",
        devPrice: 2500
      },

      {
        id:4,
        devName:"Four Page Website",
        devDetils: "Four page dynamic website",
        devPrice: 3500
      },

      {
        id:5,
        devName:"One activity mobile app",
        devDetils: "mobile app with one activity",
        devPrice: 2500
      },

      {
        id:6,
        devName:"Multiple activities mobile app",
        devDetils: "mobile app with many activities",
        devPrice: 4500
      }





    ]

  
}
