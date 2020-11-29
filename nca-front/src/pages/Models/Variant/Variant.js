import React, { Fragment, useState, useEffect } from 'react';

import { instance } from '../../../constants';

import { Row, Col, Form, Button } from 'react-bootstrap';

const Variant = ({ variant, setVariants }) => {
  const [values, setValues] = useState({
    quantity: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [item, setItem] = useState(variant);

  useEffect(() => {
    setValues({
      quantity: item.ivs_quantity ? item.ivs_quantity : 0,
    });
  }, []);

  const { quantity } = values;
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault(e);
    const formData = {
      itemCode: variant.item_code,
      variantCode: variant.variant_code,
      quantity: quantity,
    };
    // alert(JSON.stringify(formData, null, 2));
    try {
      setIsLoading(true);
      setIsError(false);
      const res = await instance.post('/item-variant-stock', formData);
      setItem(res.data[0]);
    } catch (error) {
      setIsError(true);
      console.log('there was a error', error);
    }
    setIsLoading(false);
  };
  return (
    <Fragment>
      <Row
        style={{
          padding: '10px 0',
          borderBottom: '1px solid gray',
          alignItems: 'center',
        }}
      >
        <Col>
          <p>{item.variant_name}</p>
        </Col>
        <Col>
          <p>{item.variant_color}</p>
        </Col>
        <Col style={{ display: 'flex', gap: 5 }}>
          <Form.Control
            onChange={(e) => handleChange(e)}
            type="number"
            name="quantity"
            step="1"
            value={quantity}
          />

          <Button
            variant="success"
            disabled={quantity !== item.ivs_quantity ? false : true}
            onClick={(e) => handleSave(e)}
          >
            Save
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Variant;
