const express = require('express');
const db = require('../db');

exports.updateItemVariantStock = async (req, res) => {
  const { itemCode, variantCode, quantity } = req.body;

  let results = await db.updateItemVariantStock(
    itemCode,
    variantCode,
    quantity
  );

  results = await db.oneItemVariant(itemCode, variantCode);

  res.json(results);
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
