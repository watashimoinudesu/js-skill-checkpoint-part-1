// Question #4
// const inventory = [
//   { name: "Apple", price: 35, quantity: 100 },
//   { name: "Banana", price: 10, quantity: 50 },
//   { name: "Orange", price: 30, quantity: 60 },
// ];

const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
	{ name: "Banana", price: 10, quantity: 2000 },
	{ name: "Orange", price: 30, quantity: 60 },
];


// เริ่มเขียนโค้ดตรงนี้
function minStock (inventory){
  let result = inventory[0].quantity;
  let minName = ""
  for (let i in inventory)
  if (result > inventory[i].quantity ){
    result = inventory[i].quantity
    minName = inventory[i].name
  }

  return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minName}  ซึ่งมี ${result} ชิ้น`

}
console.log(minStock (inventory))
