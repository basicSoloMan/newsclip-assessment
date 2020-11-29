import React, { useEffect, useState, Fragment } from 'react';
import { instance } from '../../constants';

import { Card, Modal, Button, Form } from 'react-bootstrap';
import Item from './Item/Item';
import { ItemHeader } from './Styles';

const Models = () => {
  const [toggle, setToggle] = useState(false);
  const [accordion, setAccordion] = useState(false);
  const [models, setModels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [values, setValues] = useState({
    itemCode: '',
    itemName: '',
  });
  const [updated, setUpdated] = useState(false);

  const { itemCode, itemName } = values;

  useEffect(() => {
    const fetchModels = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const res = await instance.get('/models');

        setModels(res.data);
      } catch (error) {
        setIsError(true);
        console.log('error loading models', error);
      }
      setIsLoading(false);
    };
    fetchModels();
  }, [updated]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault(e);
    // alert(JSON.stringify(values, null, 2));
    try {
      const res = await instance.post('/item', values);
      if (res.status === 200) {
        setUpdated(!updated);
      }
    } catch (error) {
      console.log('error white creating model', error);
    }
    setToggle(!toggle);
  };

  return (
    <div>
      <Card>
        <Card.Header>Models</Card.Header>
        <Card.Body>
          <div style={{ marginBottom: 20 }}>
            <Button variant="dark" onClick={() => setToggle(!toggle)}>
              Add Model
            </Button>
          </div>

          <ItemHeader>
            <div>Model Code</div>
            <div>Model Description</div>
          </ItemHeader>

          {isLoading && <div>Loading...</div>}

          {!isLoading &&
            models.map((model) => <Item key={model.item_id} model={model} />)}
        </Card.Body>
      </Card>
      <Modal show={toggle} onHide={() => setToggle(!toggle)}>
        <Modal.Header>Add a car model</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Model Code</Form.Label>
              <Form.Control
                name="itemCode"
                value={itemCode}
                placeholder="Item code"
                onChange={(e) => handleChange(e)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Model Name</Form.Label>
              <Form.Control
                name="itemName"
                value={itemName}
                onChange={(e) => handleChange(e)}
                placeholder="Item name"
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

export default Models;
