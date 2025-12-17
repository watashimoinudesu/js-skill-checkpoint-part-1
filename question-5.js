// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

// const promotionCode = "";
// const promotionCode = "SALE20";
const promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice (products,promotionCode){
  let totalAmount = 0
  for (let i in products){
    totalAmount += (products[i].price * products[i].quantity)
  }
  if (promotionCode === "SALE20"){
    totalAmount = 0.8*totalAmount
  }else if (promotionCode === "SALE50"){
      totalAmount = 0.5*totalAmount
    } else {
      totalAmount = totalAmount
    }
  
  return totalAmount

}
console.log(calculateTotalPrice (products,promotionCode))

