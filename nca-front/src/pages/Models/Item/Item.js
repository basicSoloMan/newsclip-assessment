import React, { Fragment, useState, useEffect } from 'react';

import { instance } from '../../../constants';
import Variant from '../Variant/Variant';

import {
  Collapse,
  Container,
  Col,
  Row,
  Modal,
  Button,
  Form,
} from 'react-bootstrap';

import {
  AccordionHeader,
  ItemWrapper,
  ItemContent,
  VariantHeader,
} from '../Styles';

const Item = ({ model }) => {
  const [accordion, setAccordion] = useState(false);
  const [variantToggle, setVariantToggle] = useState(false);
  const [variants, setVariants] = useState();
  const [allVariants, setAllVariants] = useState([]);
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [values, setValues] = useState({
    variantCode: '',
  });

  const { variantCode } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const getVariants = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const res = await instance.get(`/item/${model.item_code}`);
        setVariants(res.data);
      } catch (error) {
        setIsError(true);
        console.log('error getting variants', error);
      }
      setIsLoading(false);
    };
    getVariants();
  }, [accordion, reload]);

  const getAllVariants = async () => {
    setVariantToggle(!variantToggle);
    try {
      const res = await instance.get('variants');
      setAllVariants(res.data);
    } catch (error) {
      console.log('error in getting variants', error);
    }
  };

  const addNewVariant = async (e) => {
    e.preventDefault();
    const values = {
      itemCode: model.item_code,
      variantCode: variantCode,
    };
    try {
      const res = await instance.post(`/add-variant`, values);
      if (res.status === 200) {
        setReload(!reload);
      }
    } catch (error) {
      console.log('Error adding variant', error);
    }
    setVariantToggle(!variantToggle);
    // alert(JSON.stringify(values, null, 2));
  };

  return (
    <ItemWrapper>
      <ItemContent>
        <div>{model.item_code}</div>
        <div>{model.item_name}</div>
      </ItemContent>
      <div>
        <AccordionHeader onClick={() => setAccordion(!accordion)}>
          Variants
        </AccordionHeader>
        <Collapse in={accordion}>
          <div div style={{ padding: '10px' }}>
            <Row style={{ marginBottom: '10px' }}>
              <Col style={{ textAlign: 'left' }}>
                <VariantHeader>Name</VariantHeader>
              </Col>
              <Col style={{ textAlign: 'left' }}>
                <VariantHeader>Colour</VariantHeader>
              </Col>
              <Col style={{ textAlign: 'left' }}>
                <VariantHeader>Quantity</VariantHeader>
              </Col>
              <Col>
                <Button onClick={() => getAllVariants()}>Add</Button>
              </Col>
            </Row>
            {isLoading || variants === undefined ? (
              <div>Loading...</div>
            ) : (
              variants.map((variant) => (
                <Variant
                  key={variant.ivs_id}
                  variant={variant}
                  setVariants={setVariants}
                />
              ))
            )}
          </div>
        </Collapse>
      </div>
      <Modal
        show={variantToggle}
        onHide={() => setVariantToggle(!variantToggle)}
      >
        <Modal.Header>Add variant</Modal.Header>
        <Modal.Body>
          <Row>
            <Col>Name</Col>
            <Col>Code</Col>
            <Col>Variant</Col>
          </Row>
          <Row>
            <Col>{model.item_name}</Col>
            <Col>{model.item_code}</Col>
            <Col>
              <Form.Control
                name="variantCode"
                onChange={(e) => handleChange(e)}
                value={variantCode}
                as="select"
              >
                {allVariants.map((v) => (
                  <option value={v.variant_code}>
                    {v.variant_description}
                  </option>
                ))}
              </Form.Control>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={(e) => addNewVariant(e)}>Save</Button>
        </Modal.Footer>
      </Modal>
    </ItemWrapper>
  );
};

export default Item;
