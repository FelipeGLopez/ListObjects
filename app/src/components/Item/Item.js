import './Item.css';
import {
    BILL_ADDRESS,
    BILL_CITY,
    BILL_NAME,
    BILL_PROV,
    BILL_ZIP,
    DELIVERY_DATE,
    DELIVERY_END,
    DELIVERY_END_2,
    DELIVERY_START,
    DELIVERY_START_2,
    DELIVERY_TIME,
    FULFILLMENT,
    ID,
    MF_COMISION,
    NAME,
    NOTES,
    ORDER,
    ORDER_ID,
    PICKUP_ADDRESS,
    PICKUP_DATETIME_END_2,
    PICKUP_DATETIME_START_2,
    PICKUP_DATE_END,
    PICKUP_DATE_START,
    PICKUP_PHONE,
    PRICE,
    PRODUCT,
    QUANTITY,
    REQUIRES,
    SHIP_ADDRESS_1,
    SHIP_ADDRESS_2,
    SHIP_CITY,
    SHIP_NAME_1,
    SHIP_PC,
    SHIP_PHONE_1,
    SHIP_PROV,
    SHOPIFY_ID,
    SUBTOTAL,
    SUBTOTAL_ORDER,
    TAGS_PRODUCT,
    TAXABLE,
    TOTAL,
    TOTAL_DISC,
    VARIANT,
    VENDOR,
    VENDOR_SLUG,
    VENDOR_VENDOR
} from './constants';

function Item({ item }) {

    return (
        <div className="Item">
            <div>{`${ORDER_ID}: ${item[ORDER_ID]}`}</div>
            <br/>

            <div className="Name">{`${NAME}: ${item[NAME]}`}</div>
            <br/>

            <br/>
            <div>{`${PRICE}: ${item[PRICE]}`}</div>
            <div>{`${QUANTITY}: ${item[QUANTITY]}`}</div>

            <br/>
            <div>{`${TOTAL_DISC}: ${item[TOTAL_DISC]}`}</div>
            <div>{`${MF_COMISION}: ${item[MF_COMISION]}`}</div>
            <div>{`${SUBTOTAL_ORDER}: ${item[SUBTOTAL_ORDER]}`}</div>
            <div>{`${SUBTOTAL}: ${item[SUBTOTAL]}`}</div>
            <div>{`${TOTAL}: ${item[TOTAL]}`}</div>
            
            <br/>
            <div className="Notes">{`${NOTES}: ${item[NOTES]}`}</div>
            
            <br/>
            <div>{`${TAXABLE}: ${item[TAXABLE] ? `✅` : `❌`}`}</div>
            <div>{`${REQUIRES}: ${item[REQUIRES] ? `✅` : `❌`}`}</div>
            <div>{`${FULFILLMENT}: ${item[FULFILLMENT]}`}</div>
            
            <br/>
            <div>{`${TAGS_PRODUCT}: ${item[TAGS_PRODUCT]}`}</div>
            
            <br/>
            <div>{"Shipping Info: "}</div>
            <div>{`${SHIP_NAME_1}: ${item[SHIP_NAME_1]}`}</div>
            <div>{`${SHIP_PHONE_1}: ${item[SHIP_PHONE_1]}`}</div>
            <div>{`${SHIP_ADDRESS_1}: ${item[SHIP_ADDRESS_1]}`}</div>
            <div>{`${SHIP_ADDRESS_2}: ${item[SHIP_ADDRESS_2]}`}</div>
            <div>{`${SHIP_PROV}: ${item[SHIP_PROV]}`}</div>
            <div>{`${SHIP_CITY}: ${item[SHIP_CITY]}`}</div>
            <div>{`${SHIP_PC}: ${item[SHIP_PC]}`}</div>
            
            <br/>
            <div>{"Billing Info: "}</div>
            <div>{`${BILL_NAME}: ${item[BILL_NAME]}`}</div>
            <div>{`${BILL_ADDRESS}: ${item[BILL_ADDRESS]}`}</div>
            <div>{`${BILL_PROV}: ${item[BILL_PROV]}`}</div>
            <div>{`${BILL_CITY}: ${item[BILL_CITY]}`}</div>
            <div>{`${BILL_ZIP}: ${item[BILL_ZIP]}`}</div>

            <br/>
            <div>{"Pickup Info: "}</div>
            <div>{`${PICKUP_ADDRESS}: ${item[PICKUP_ADDRESS]}`}</div>
            <div>{`${PICKUP_PHONE}: ${item[PICKUP_PHONE]}`}</div>
            <div>{`${PICKUP_DATE_START}: ${item[PICKUP_DATE_START]}`}</div>
            <div>{`${PICKUP_DATE_END}: ${item[PICKUP_DATE_END]}`}</div>
            <div>{`${PICKUP_DATETIME_START_2}: ${item[PICKUP_DATETIME_START_2]}`}</div>
            <div>{`${PICKUP_DATETIME_END_2}: ${item[PICKUP_DATETIME_END_2]}`}</div>

            <br/>
            <div>{"Delivery Info: "}</div>
            <div>{`${DELIVERY_START}: ${item[DELIVERY_START]}`}</div>
            <div>{`${DELIVERY_END}: ${item[DELIVERY_END]}`}</div>
            <div>{`${DELIVERY_DATE}: ${item[DELIVERY_DATE]}`}</div>
            <div>{`${DELIVERY_TIME}: ${item[DELIVERY_TIME]}`}</div>
            <div>{`${DELIVERY_START_2}: ${item[DELIVERY_START_2]}`}</div>
            <div>{`${DELIVERY_END_2}: ${item[DELIVERY_END_2]}`}</div>
            
            <br/>
            <div>{"Vendor Info: "}</div>
            <div>{`${VENDOR_SLUG}: ${item[VENDOR_SLUG]}`}</div>
            <div>{`${VENDOR_VENDOR}: ${item[VENDOR_VENDOR]}`}</div>

            <br/>
            <div>{"Additional Info: "}</div>
            <div>{`${ID}: ${item[ID]}`}</div>
            <div>{`${PRODUCT}: ${item[PRODUCT]}`}</div>
            <div>{`${VARIANT}: ${item[VARIANT]}`}</div>
            <div>{`${VENDOR}: ${item[VENDOR]}`}</div>
            <div>{`${SHOPIFY_ID}: ${item[SHOPIFY_ID]}`}</div>
            <div>{`${ORDER}: ${item[ORDER]}`}</div>
        </div>
    );
}

export default Item;
