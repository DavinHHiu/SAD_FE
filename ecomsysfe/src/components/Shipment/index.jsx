import formatDate from '../../utils/formatDate';
import formatNumber from '../../utils/formatNumber';
import ComboBox from '../ComboBox';
import style from './Shipment.module.scss';
import { useEffect, useState } from 'react';

export function Shipment({ shipment, shippingDetails, handleShippingInfo }) {
    const [shipmentCom, setShipmentCom] = useState(shipment);

    const handleSelectItem = (e) => {
        const shippingMethod = e.target.value;
        const date = new Date();
        date.setDate(date.getDate() + shippingDetails[shippingMethod].shipping_days);
        setShipmentCom((ship) => ({
            ...ship,
            shipping_fee: shippingDetails[shippingMethod].fee,
            estimated_delivery_date: date,
            shipping_method: shippingMethod,
        }))
        handleShippingInfo(shipmentCom);
    };

    const handleInputShippingAddress = (e) => {
        setShipmentCom((ship) => ({
            ...ship,
            shipping_address: e.target.value,
        }));
    };

    useEffect(() => {
        handleShippingInfo(shipmentCom);
    }, [shipmentCom]);

    useEffect(() => {
        setShipmentCom(shipment);
    }, [shipment]);

    return (
        <div className={style.shipment_container}>
            <input
                className={style.input_address}
                type="text"
                placeholder="Shipping address"
                defaultValue={shipmentCom?.shipping_address}
                onChange={handleInputShippingAddress}
            ></input>
            <div className={style.shipment_info_container}>
                <div className={style.shipping_info}>
                    <span>Đơn vị vận chuyển:</span>
                    <ComboBox
                        name="shipment_method"
                        selected={shipmentCom?.shipping_method}
                        options={shippingDetails && Object.keys(shippingDetails)}
                        handleSelectItem={handleSelectItem}
                    />
                </div>
                <div className={style.shipping_info}>
                    <span>Ngày nhận dự kiến:</span>
                    <span className={style.highlight}>
                        {formatDate(shipmentCom?.estimated_delivery_date)}
                    </span>
                </div>
                <span className={style.shipping_fee}>
                    {formatNumber.format(shipmentCom?.shipping_fee)}
                </span>
            </div>
        </div>
    );
}
