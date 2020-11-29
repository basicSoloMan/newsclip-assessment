import React, { Fragment, useEffect, useState } from 'react';
import { instance } from '../../constants';

import { Card, Modal, Button, Form } from 'react-bootstrap';

const Variants = () => {
  const [variants, setVariants] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [values, setValues] = useState({
    variantCode: '',
    variantDescription: '',
    variantColor: '',
    variantName: '',
  });
  const [updated, setUpdated] = useState(false);

  const { variantCode, variantDescription, variantColor, variantName } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchVariants = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const res = await instance.get('/variants');

        setVariants(res.data);
      } catch (error) {
        setIsError(true);
        console.log('error loading variants', error);
      }
      setIsLoading(false);
    };
    fetchVariants();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault(e);
    // alert(JSON.stringify(values, null, 2));
    try {
      const res = await instance.post('/variants', values);
      if (res.status === 200) {
        setUpdated(!updated);
      }
    } catch (error) {
      console.log('error creating variant: ', error);
    }
    setToggle(!toggle);
  };

  return (
    <div>
      <Card>
        <Card.Header>Variants</Card.Header>
        <Card.Body>
          <div style={{ marginBottom: 20 }}>
            <Button variant="dark" onClick={() => setToggle(!toggle)}>
              Add Variant
            </Button>
          </div>

          <div
            style={{
              textAlign: 'left',
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <div style={{ textAlign: 'left' }}>Variant Code</div>
            <div style={{ textAlign: 'left' }}>Variant Description</div>
            <div style={{ textAlign: 'left' }}>Variant Colour</div>
            <div style={{ textAlign: 'left' }}>Variant Name</div>
          </div>

          <Fragment>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              variants.map((variant) => (
                <div
                  style={{
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                >
                  <div style={{ textAlign: 'left' }}>
                    {variant.variant_code}
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    {variant.variant_description}
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    {variant.variant_color}
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    {variant.variant_name}
                  </div>
                </div>
              ))
            )}
          </Fragment>
        </Card.Body>
      </Card>
      <Modal show={toggle} onHide={() => setToggle(!toggle)}>
        <Modal.Header>Add a variant</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Variant Code</Form.Label>
              <Form.Control
                name="variantCode"
                value={variantCode}
                placeholder="Variant Code"
                onChange={(e) => handleChange(e)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Variant Description</Form.Label>
              <Form.Control
                name="variantDescription"
                value={variantDescription}
                placeholder="Variant Description"
                onChange={(e) => handleChange(e)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Variant Colour</Form.Label>
              <Form.Control
                name="variantColor"
                value={variantColor}
                placeholder="Variant Color"
                onChange={(e) => handleChange(e)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Variant Name</Form.Label>
              <Form.Control
                name="variantName"
                value={variantName}
                placeholder="Variant Name"
                onChange={(e) => handleChange(e)}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setToggle(!toggle)} variant="secondary">
            Cancel
          </Button>
          <Button onClick={(e) => handleSave(e)} variant="success">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Variants;
