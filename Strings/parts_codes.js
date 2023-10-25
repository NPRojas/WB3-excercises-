function getSupplier(code){
    let end = code.indexOf(':');
    let supplier = code.slice(0, end);
    console.log(supplier);
}

function getProductNumber(code){
    let start = code.indexOf(':') + 1;
    let end = code.indexOf('-');
    let productNumber = code.slice(start,end);
    console.log(productNumber);
}

function getSize(code){
    let start = code.indexOf('-') + 1;
    let size = code.slice(start);
    console.log(size);
}

let code = 'ACME:123-L';
getSupplier(code);
getProductNumber(code);
getSize(code);
