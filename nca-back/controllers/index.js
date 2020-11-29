const express = require('express');
const db = require('../db');

exports.updateItemVariantStock = async (req, res) => {
  try {
    const { itemCode, variantCode, quantity } = req.body;

    let results = await db.updateItemVariantStock(
      itemCode,
      variantCode,
      quantity
    );

    results = await db.oneItemVariant(itemCode, variantCode);
    res.json(results);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
};

exports.insertNewItem = async (req, res) => {
  try {
    const { itemCode, itemName } = req.body;

    let results = await db.insertNewItem(itemCode, itemName);
    res.send('Inserted');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
};

exports.insertNewVariant = async (req, res) => {
  try {
    const {
      variantCode,
      variantDescription,
      variantColor,
      variantName,
    } = req.body;

    let results = await db.insertNewVariant(
      variantCode,
      variantDescription,
      variantColor,
      variantName
    );
    res.send('Inserted');
  } catch (error) {
    console.error(error.message);
    res, status(500).send('Internal Server Error');
  }
};

exports.addVariantsToItems = async (req, res) => {
  try {
    const { itemCode, variantCode } = req.body;

    let itemId = await db.getItemId(itemCode);
    let variantId = await db.getVariantId(variantCode);

    let iid = itemId[0].item_id;
    let vid = variantId[0].variant_id;

    let results = await db.addVariantToItem(iid, vid);
    res.send('Inserted');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
};

exports.getAllItemVariants = async (req, res) => {
  try {
    let results = await db.all();
    res.json(results);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
};

exports.getAllItemsPerVariant = async (req, res) => {
  try {
    let results = await db.oneVariant(req.params.code);
    res.json(results);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
};

exports.getAllVariantsPerItem = async (req, res) => {
  try {
    let results = await db.oneItem(req.params.code);
    res.json(results);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
};

exports.getAllModels = async (req, res) => {
  try {
    let results = await db.gettAllModels();
    res.json(results);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
};

exports.getAllVariants = async (req, res) => {
  try {
    let results = await db.gettAllVariants();
    res.json(results);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
};

exports.getModelsPerVariantName = async (req, res) => {
  try {
    let results = await db.itemsPerVariantName(req.params.name);
    res.json(results);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
};

exports.getOneItemVariant = async (req, res) => {
  try {
    let results = await db.oneItemVariant(
      req.params.itemCode,
      req.params.variantCode
    );
    res.json(results);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
};
