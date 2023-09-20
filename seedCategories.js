const mongoose = require('mongoose');
const category = require('./models/categories');

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


const categoryData = [
    {
        Name: 'Computers and Laptops',
        Description: 'Desktop Computers, Laptops, Computer Monitors, Computer Keyboards, Computer Mouse',
        Image: 'https://images.unsplash.com/photo-1497296805880-3b37686c87ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
        Name: 'Mobile Devices',
        Description: 'Smartphones, Tablets, Feature Phones, Smartwatches,Portable Media Players',
        Image: 'https://plus.unsplash.com/premium_photo-1682065724586-e3f31e7fb33d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1997&q=80'
    },
    {
        Name: 'Televisions',
        Description: 'LED/LCD Televisions, Plasma Televisions, CRT Televisions, Smart TVs, Curved TVs',
        Image: 'https://media.istockphoto.com/id/1174414330/photo/multimedia-video-wall-television-broadcast.jpg?s=2048x2048&w=is&k=20&c=MiAeOzqBOiELhnFTT-Itaj_8gP9e-3dV8AnT-0ruOuM='
    },
    {
        Name: 'Kitchen Appliances',
        Description: 'Microwave Ovens, Refrigerators, Dishwashers, Toasters, Coffee Makers',
        Image: 'https://images.unsplash.com/photo-1618506408870-64d8bec48248?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
        Name: 'Audio Equipments',
        Description: 'Stereo Systems, Speakers, Headphones, Radios, Amplifiers',
        Image: 'https://images.unsplash.com/photo-1517522628113-2a66a330a878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvdW5kJTIwZXF1aXBtZW50fGVufDB8fDB8fHww&w=1000&q=80'
    },
    {
        Name: 'Office Equipment',
        Description: 'Printers, Photocopiers, Fax Machines, Scanners, Fax Machines',
        Image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
        Name: 'Gaming Consoles',
        Description: 'Game Consoles (e.g., Xbox, PlayStation), Handheld Gaming Devices, Gaming Controllers, Virtual Reality (VR) Headsets, Gaming Accessories',
        Image: 'https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
        Name: 'Cameras and Camcorders',
        Description: 'Digital Cameras, DSLR Cameras, Camcorders, Camera Lenses, Action Cameras',
        Image: 'https://images.unsplash.com/photo-1497296805880-3b37686c87ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
        Name: 'Networking Equipment',
        Description: 'Routers, Switches, Modems, Network Cables, Access Points',
        Image: 'https://www.shutterstock.com/shutterstock/photos/1938620782/display_1500/stock-photo-fiber-optical-cables-connected-to-an-optic-ports-and-network-cables-connected-to-ethernet-ports-1938620782.jpg'
    },
    {
        Name: 'Small Electronics',
        Description: 'Electronic Watches, Calculators, Remote Controls, Digital Thermometers, Portable Fans',
        Image: 'https://images.unsplash.com/photo-1593319634705-4f92f42a7fb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
    },
]

async function seedData(){
    await category.create(categoryData);
    console.log('Category Db Seeded');
}

seedData();