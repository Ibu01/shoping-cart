//function for plus and for the elements
function updateProductNumber(product, isIncreasing,price,totalAmount){
    const productInput = document.getElementById(product)
    let productNumber = productInput.value 
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1
    }else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1
    }
    productInput.value = productNumber
    //update total
    const productTotal = document.getElementById(totalAmount)
    productTotal.innerText = productNumber * price
    //update product total
    calculateTotal()
}
//calculate total ammount
function getInputValue(product){
    const productInput = document.getElementById(product)
    const productNumber =parseInt(productInput.value)
    return productNumber
}
function calculateTotal(){
    const phoneTotal = getInputValue('phone-number') * 1219
    const caseTotal = getInputValue('case-number') * 59
    const subTotal = phoneTotal + caseTotal
    const tax = (subTotal / 100) * 5
    const total = subTotal + tax
    //update on html
    document.getElementById('sub-total').innerText = subTotal
    document.getElementById('tax-amount').innerText = tax
    document.getElementById('total-price').innerText = total
}
//phone increase decrease event
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone-number', true,1219,'phone-total')
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone-number',false,1219,'phone-total')
})
//case increase decrease calculation
document.getElementById('case-plus').addEventListener('click',function(){
     //const caseInput = document.getElementById('case-number')
     //const caseNumber = caseInput.value 
    // caseInput.value = parseInt(caseNumber) + 1
    // console.log(caseNumber)
    updateProductNumber('case-number', true,59,'case-total')
})
document.getElementById('case-minus').addEventListener('click',function(){
    // const caseInput = document.getElementById('case-number')
    //  const caseNumber = parseInt(caseInput.value)
    // if( caseNumber > 0){
    //     caseInput.value = parseInt(caseNumber) - 1
    // }
    updateProductNumber('case-number', false,59,'case-total')
})
