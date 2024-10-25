export class Order{
    constructor(id, placeDate, deliveredDate, status, products, deliveryAddress, promoCode, price, tax, delivery, discount){
        this.id = id;
        this.placeDate = placeDate;
        this.deliveredDate = deliveredDate;
        this.status = status;
        this.products = products;
        this.deliveryAddress = deliveryAddress;
        this.promoCode = promoCode;
        this.price = price;
        this.tax = tax;
        this.delivery = delivery;
        this.discount = discount;
    }
    get placeDateString() {
        const day = this.placeDate.getDate();
        const month = this.placeDate.getMonth() + 1;
        const year = this.placeDate.getFullYear();
        return `${day}/${month}/${year}`;
    }
    get deliveryDateString() {
        const day = this.deliveredDate.getDate();
        const month = this.deliveredDate.getMonth() + 1;
        const year = this.deliveredDate.getFullYear();
        return `${day}/${month}/${year}`;
    }
}