const mongoose = require('mongoose');
const product = require('./models/products');

mongoose
  .connect(
    "mongodb+srv://aggarwalprakhar0:2lpQzBDYtBN1nINB@cluster0.quwzofx.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )

  .then(() => {
    console.log("My db is connected");
  })
  .catch((err) => {
    console.log(err);
  });


const productData = [
    {
      Name:'Desktop Computers',
      Image:'https://images.unsplash.com/photo-1494173853739-c21f58b16055?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80',
      Category: 'Computers and Laptops',
      Metals: ['Gold', 'Silver', 'Copper', 'Palladium', 'Aluminum'],
      Percentage: 95
    },
    { 
      Name:'Laptops',
      Image:'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      Category: 'Computers and Laptops',
      Metals: ['Gold', 'Silver', 'Copper', 'Palladium', 'Aluminum'],
      Percentage: 95
    },
    {
      Name:'Computer Monitors',
      Image:'https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      Category: 'Computers and Laptops',
      Metals: ['Gold', 'Silver', 'Copper', 'Palladium', 'Aluminum'],
      Percentage: 95
    },
    {
      Name:'Computer Keyboards',
      Image:'https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      Category: 'Computers and Laptops',
      Metals: ['Gold', 'Silver', 'Copper', 'Palladium', 'Aluminum'],
      Percentage: 95
    },
    {
      Name:'Computer Mouse',
      Image:'https://images.unsplash.com/photo-1613141411244-0e4ac259d217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      Category: 'Computers and Laptops',
      Metals: ['Gold', 'Silver', 'Copper', 'Palladium', 'Aluminum'],
      Percentage: 95
    },
    {
      Name:'Smartphones',
      Image:'https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80',
      Category: 'Mobile Devices',
      Metals: ['Gold', 'Silver', 'Copper', 'Palladium', 'Tantalum'],
      Percentage: 90

    },
    {
      Name:'Tablets',
      Image:'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
      Category: 'Mobile Devices',
      Metals: ['Gold', 'Silver', 'Copper', 'Palladium', 'Tantalum'],
      Percentage: 90
    },
    {
      Name:'Smartwatches',
      Image:'https://plus.unsplash.com/premium_photo-1681147547346-2d73c90988d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      Category: 'Mobile Devices',
      Metals: ['Gold', 'Silver', 'Copper', 'Palladium', 'Tantalum'],
      Percentage: 90
    },
    {
      Name:'Portable Media Players',
      Image:'https://images.pexels.com/photos/5744291/pexels-photo-5744291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      Category: 'Mobile Devices',
      Metals: ['Gold', 'Silver', 'Copper', 'Palladium', 'Tantalum'],
      Percentage: 90
    },
    {
      Name:'LED/LCD Televisions',
      Image:'https://media.istockphoto.com/id/170616600/photo/lcd-tvs-in-a-row-on-wall.webp?s=2048x2048&w=is&k=20&c=gNNBorhYgJn7YsYjmC9nq7wkZJFETSoiJTiCduQKb28=',
      Category: 'Televisions',
      Metals: ['Copper', 'Aluminum', 'Lead', 'Glass'],
      Percentage: 80
      
    },
    {
      Name:'Plasma Televisions',
      Image:'https://media.istockphoto.com/id/486895337/photo/high-definition-television.jpg?s=2048x2048&w=is&k=20&c=Ln38Cxy4gRsn_jwuKndoET2it7f8B1InUf9iRl1ExWI=',
      Category: 'Televisions',
      Metals: ['Copper', 'Aluminum', 'Lead', 'Glass'],
      Percentage: 80
    },
    {
      Name:'CRT Televisions',
      Image:'https://images.unsplash.com/photo-1594318884016-b7cb9f92709e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      Category: 'Televisions',
      Metals: ['Copper', 'Aluminum', 'Lead', 'Glass'],
      Percentage: 80
    },
    {
      Name:'Smart TVs',
      Image:'https://media.istockphoto.com/id/863399504/photo/big-screen-television-smart-tv.webp?s=2048x2048&w=is&k=20&c=KRqXMaqkjsGtC5idCgC2T8sjFK81jGZ9j3syTmGtweI=',
      Category: 'Televisions',
      Metals: ['Copper', 'Aluminum', 'Lead', 'Glass'],
      Percentage: 80
    },
    {
      Name:'Curved TVs',
      Image:'https://media.istockphoto.com/id/467946398/photo/contemporary-curved-led-smart-tv-design.webp?s=2048x2048&w=is&k=20&c=8TzbKe5dR4aa96tzgpSecKWPAlaumS0ThKE7Youe2MQ=',
      Category: 'Televisions',
      Metals: ['Copper', 'Aluminum', 'Lead', 'Glass'],
      Percentage: 80
    },
    {
      Name:'Microwave Ovens',
      Image:'https://media.istockphoto.com/id/1144960519/photo/modern-kitchen-microwave-oven.jpg?s=2048x2048&w=is&k=20&c=TCuq4wPk_Wy2oWdV5LGTu7H1lw7WgiscQnfOON_USS4=',
      Category: 'Kitchen Appliances',
      Metals: ['Copper', 'Aluminum','Stainless Steel'],
      Percentage: 85
    },
    {
      Name:'Refrigerators',
      Image:'https://images.unsplash.com/photo-1630459065645-549fe5a56db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      Category: 'Kitchen Appliances',
      Metals: ['Copper', 'Aluminum','Stainless Steel'],
      Percentage: 85
    },
    {
      Name:'Dishwashers',
      Image:'https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      Category: 'Kitchen Appliances',
      Metals: ['Copper', 'Aluminum','Stainless Steel'],
      Percentage: 85
    },
    {
      Name:'Toasters',
      Image:'https://images.unsplash.com/photo-1583729250536-d5fb10401671?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      Category: 'Kitchen Appliances',
      Metals: ['Copper', 'Aluminum','Stainless Steel'],
      Percentage: 85
    },
    {
      Name:'Coffee Makers',
      Image:'https://plus.unsplash.com/premium_photo-1664301531812-cb351e0022f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      Category: 'Kitchen Appliances',
      Metals: ['Copper', 'Aluminum','Stainless Steel'],
      Percentage: 85
    },
    {
      Name:'Stereo Systems',
      Image:'https://plus.unsplash.com/premium_photo-1681433389174-b08efd10579e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1954&q=80',
      Category: 'Audio Equipments',
      Metals: ['Copper', 'Aluminum','Gold','Silver'],
      Percentage: 90
    },
    {
      Name:'Speakers',
      Image:'https://plus.unsplash.com/premium_photo-1676722631511-c003f7d87b91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
      Category: 'Audio Equipments',
      Metals: ['Copper', 'Aluminum','Gold','Silver'],
      Percentage: 90
    },
    {
      Name:'Headphones',
      Image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      Category: 'Audio Equipments',
      Metals: ['Copper', 'Aluminum','Gold','Silver'],
      Percentage: 90
    },
    {
      Name:'Radios',
      Image:'https://images.unsplash.com/photo-1623969451926-10c5e52b707a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      Category: 'Audio Equipments',
      Metals: ['Copper', 'Aluminum','Gold','Silver'],
      Percentage: 90
    },
    {
      Name:'Amplifiers',
      Image:'https://images.unsplash.com/photo-1545932447-c5f8dbf04576?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1922&q=80',
      Category: 'Audio Equipments',
      Metals: ['Copper', 'Aluminum','Gold','Silver'],
      Percentage: 90
    },
    {
      Name:'Printers',
      Image:'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      Category: 'Office Equipment',
      Metals: ['Copper', 'Aluminum','Steel'],
      Percentage: 80
    },
    {
      Name:'Photocopiers',
      Image:'https://media.istockphoto.com/id/478656787/photo/office-multifunction-printer.jpg?s=2048x2048&w=is&k=20&c=C23D0fCjYKG9P0Y1mojntPpv_OgS3jOs6n7E_2KrPFM=',
      Category: 'Office Equipment',
      Metals: ['Copper', 'Aluminum','Steel'],
      Percentage: 80
    },
    {
      Name:'Fax Machines',
      Image:'https://media.istockphoto.com/id/1163477236/photo/the-fax-machine-for-sending-documents-in-the-office.jpg?s=2048x2048&w=is&k=20&c=tZgyglERa2MS3l2__GHWizgoRC1y68EQ6YXqkhtA5Bw=',
      Category: 'Office Equipment',
      Metals: ['Copper', 'Aluminum','Steel'],
      Percentage: 80
    },
    {
      Name:'Scanners',
      Image:'https://media.istockphoto.com/id/157618089/photo/using-copier.webp?s=2048x2048&w=is&k=20&c=PlUcXlDkDmTPie3c5_pWR62TFtvGp4g6tznenjWE4j4=',
      Category: 'Office Equipment',
      Metals: ['Copper', 'Aluminum','Steel'],
      Percentage: 80
    },
    {
      Name:'Gaming Consoles',
      Image:'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80',
      Category: 'Gaming Consoles',
      Metals: ['Copper', 'Aluminum'],
      Percentage: 85
    },
    {
      Name:'Handheld Gaming Devices',
      Image:'https://images.unsplash.com/photo-1642049671748-2e35cdb11c2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80',
      Category: 'Gaming Consoles',
      Metals: ['Copper', 'Aluminum'],
      Percentage: 85
    },
    {
      Name:'Gaming Controllers',
      Image:'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1894&q=80',
      Category: 'Gaming Consoles',
      Metals: ['Copper', 'Aluminum'],
      Percentage: 85
    },
    {
      Name:'Virtual Reality (VR) Headsets',
      Image:'https://images.unsplash.com/photo-1630148198235-6bd561ba72a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      Category: 'Gaming Consoles',
      Metals: ['Copper', 'Aluminum'],
      Percentage: 85
    },
    {
      Name:'Digital Cameras',
      Image:'https://images.unsplash.com/photo-1595793550800-5bdd9d23b2fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      Category: 'Cameras and Camcorders',
      Metals: ['Copper', 'Aluminum', 'Lithium-ion Batteries'],
      Percentage: 80
    },
    {
      Name:'Camcorders',
      Image:'https://media.istockphoto.com/id/1287634755/photo/businesswoman-and-businessmen-during-online-seminar.webp?s=2048x2048&w=is&k=20&c=8F_oH9nVgpoR_59ggo6Rh7KjVRb6Mw73tY6ybwtgzvA=',
      Category: 'Cameras and Camcorders',
      Metals: ['Copper', 'Aluminum', 'Lithium-ion Batteries'],
      Percentage: 80
    },
    {
      Name:'Camera Lenses',
      Image:'https://images.unsplash.com/photo-1588990492514-75dc82e48152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      Category: 'Cameras and Camcorders',
      Metals: ['Copper', 'Aluminum', 'Lithium-ion Batteries'],
      Percentage: 80
    },
    {
      Name:'Action Cameras',
      Image:'https://images.unsplash.com/photo-1679421253067-b5adad691552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
      Category: 'Cameras and Camcorders',
      Metals: ['Copper', 'Aluminum', 'Lithium-ion Batteries'],
      Percentage: 80
    },
    {
      Name:'Routers',
      Image:'https://images.unsplash.com/photo-1606420187127-dae7c868fa7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      Category: 'Networking Equipments',
      Metals: ['Copper', 'Aluminum'],
      Percentage: 85
    },
    {
      Name:'Switches',
      Image:'https://media.istockphoto.com/id/1344207704/photo/cropped-photo-of-modern-telecommunication-equipments-in-database-center.webp?s=2048x2048&w=is&k=20&c=QuWz58pLt-YPFi1pLmsTfczclcCJkz9PKkEY1XwYXTc=',
      Category: 'Networking Equipments',
      Metals: ['Copper', 'Aluminum'],
      Percentage: 85
    },
    {
      Name:'Modems',
      Image:'https://plus.unsplash.com/premium_photo-1671017817487-baaae0de6d4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80',
      Category: 'Networking Equipments',
      Metals: ['Copper', 'Aluminum'],
      Percentage: 85
    },
    {
      Name:'Network Cables',
      Image:'https://images.unsplash.com/photo-1531668383211-64743e924c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1956&q=80',
      Category: 'Networking Equipments',
      Metals: ['Copper', 'Aluminum'],
      Percentage: 85
    },
    {
      Name:'Electronic Watches',
      Image:'https://images.unsplash.com/photo-1617625802912-cde586faf331?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
      Category: 'Small Electronics',
      Metals: ['Copper', 'Aluminum','Lithium Ion Batteries'],
      Percentage: 80
    },
    {
      Name:'Calculators',
      Image:'https://images.unsplash.com/photo-1574607383077-47ddc2dc51c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80',
      Category: 'Small Electronics',
      Metals: ['Copper', 'Aluminum','Lithium Ion Batteries'],
      Percentage: 80
    },
    {
      Name:'Remote Controls',
      Image:'https://images.unsplash.com/photo-1528158830489-3ba27c0c9325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1951&q=80',
      Category: 'Small Electronics',
      Metals: ['Copper', 'Aluminum','Lithium Ion Batteries'],
      Percentage: 80
    },
    {
      Name:'Digital Thermometers',
      Image:'https://images.unsplash.com/photo-1609725236589-d987ffc8133a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      Category: 'Small Electronics',
      Metals: ['Copper', 'Aluminum','Lithium Ion Batteries'],
      Percentage: 80
    },
    {
      Name:'Portable Fans',
      Image:'https://media.istockphoto.com/id/1390275521/photo/modern-electric-fan-heater-on-floor-at-home-space-for-text.webp?s=2048x2048&w=is&k=20&c=gtTtyV0Gn2nvLzlwiKXmv83Ruzv0XhUVKlercpyvh7A=',
      Category: 'Small Electronics',
      Metals: ['Copper', 'Aluminum','Lithium Ion Batteries'],
      Percentage: 80
    },
]

async function seedData(){
    await product.create(productData);
    console.log('Db Seeded');
}

seedData();