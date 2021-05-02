new Vue({
  el: "#instrument-store",
  data: {
    instruments: [
      {
        img: "https://cdn.shopify.com/s/files/1/0788/1755/products/50976e03-8870-4517-a291-6056dc2effac_bc8a6a54-9c9a-476b-ba28-f7421e1097ec.jpg?v=1614638644",
        name: "Boxer Series Telecaster HH",
        type: "String",
        price: "1,199.99", 
        brand: "Fender",
        inCart: false,
        details: false
      }, 
      {
        img: "https://d1aeri3ty3izns.cloudfront.net/media/58/585757/600/preview.jpg",
        name: "Player Jazz Bass",
        type: "String",
        price: "749.99", 
        brand: "Fender",
        inCart: false,
        details: false
      },
      {
        img: "https://www.pourlesmusiciens.com/medias/271/fender-jim-root-jazzmaster-v4-mex-signature-hh-emg-ht-eb-large-167053.jpg",
        name: "Jim Root Jazzmaster V4",
        type: "String",
        price: "1,599.99", 
        brand: "Fender",
        inCart: false,
        details: false
      }, 
      {
        img: "https://usa.yamaha.com/files/5D0EFD90C76448FFB6DE99451702168B_735x735_a904ac93e0d5d69de5fe683fb2afa1ef.jpg",
        name: "YCL-SE Artist Model/SE Artist Model A Clarinet",
        type: "Woodwind",
        price: "8,990.00", 
        brand: "Yamaha",
        inCart: false,
        details: false
      },
      {
        img: "https://europe.yamaha.com/en/files/YTR-9445CHS_02_735x735_da43e5590dc2a033c5a9f7b2e5f4e67c.jpg",
        name: "YTR-9445CHS C Trumpet",
        type: "Brass",
        price: "6,315.00", 
        brand: "Yamaha",
        inCart: false,
        details: false
      },
      {
        img: "https://d1aeri3ty3izns.cloudfront.net/media/60/601790/1200/preview.jpg",
        name: "PHX Drum Set",
        type: "Drum",
        price: "8,850.00", 
        brand: "Yamaha",
        inCart: false,
        details: false
      }, 
      {
        img: "https://m.media-amazon.com/images/I/21wZ8i6qTJL._AC_SS450_.jpg",
        name: "EBG808C MicFix Guitar",
        type: "String",
        price: "2,999.00", 
        brand: "Maton",
        inCart: false,
        details: false
      },
      {
        img: "https://www.productfrom.com/photos/0005/5539_full.jpg",
        name: "MS500 Electric Guitar",
        type: "String",
        price: "1,499.99", 
        brand: "Maton",
        inCart: false,
        details: false
      },
      {
        img: "https://www.productfrom.com/photos/0005/5545_medium.jpg",
        name: "The Starline 4606 Guitar",
        type: "String",
        price: "7,199.00", 
        brand: "Maton",
        inCart: false,
        details: false
      }
    ],
    cart: [],
    addInstrumentPopUp: false
  },
  
  methods: {
    addNewInstrument: function(){
      this.addInstrumentPopUp = !this.addInstrumentPopUp;
    },
    
    addInstrument: function(){
      this.instruments.push({img: this.instruments.img, name: this.instruments.name, type: this.instruments.type, price: this.instruments.price, brand: this.instruments.brand, inCart:false, details:false})
      this.addInstrumentPopUp = !this.addInstrumentPopUp;
    },
    
    addToCart: function(instrument){
      instrument.inCart = true;
      instrument.details = false;
      this.cart.push(instrument);

    },
    
    emptyCart: function(instrument){
      this.instruments.forEach(function(instrument){
        instrument.inCart = false;
        instrument.details = false;
      })
      this.cart = [];
    },
    
    displayInfo: function(instrument){
      instrument.details = !instrument.details
    } 
  },
  watch: {
    instrument: function(instrument){
      if(instrument.brand === "Fender"){
        addEventListener("mouseover", function(){
          this.style.backgroundColor = "red";
        })
      }
    }
  }
})