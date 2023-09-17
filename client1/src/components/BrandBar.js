import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row   >

            {device.brands.map(brand =>
                <Card
                    style={{cursor:'pointer',}}
                    key={brand.id}
                    className="p-2 m-1 w-auto"
                    onClick={() => device.setSelectedBrand(brand)}
                    bg={(brand.id === device.selectedBrand.id) ? 'primary' : 'light'}
                    text={(brand.id === device.selectedBrand.id) ?  'light' : 'black'}
                >
                    {brand.name}
                </Card>
            )}
            {/*</CardGroup>*/}
        </Row>
    );
});

export default BrandBar;