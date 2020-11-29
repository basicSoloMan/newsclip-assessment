const express = require('express');
const router = express.Router();
const db = require('../db');

const {
  getAllItemVariants,
  getAllItemsPerVariant,
  getAllVariantsPerItem,
  getOneItemVariant,
  getModelsPerVariantName,
  getAllModels,
  getAllVariants,
  updateItemVariantStock,
  insertNewItem,
  insertNewVariant,
  addVariantsToItems,
} = require('../controllers');

// POST /item
// Inserts a new item
router.post('/item', insertNewItem);

// POST /variant
// Inserts a new variant
router.post('/variants', insertNewVariant);

// POST /item-variant-stock/
// Updates the stock levels of an item variant
router.post('/item-variant-stock', updateItemVariantStock);

// POST /add-variant/:itemCode
// Adds a variant to an item
router.post('/add-variant', addVariantsToItems);

// GET /variant/:code
// Gets all vehicle models that has a specific variant
router.get('/variant/:code', getAllItemsPerVariant);

// GET /item/:code
// Gets all variant for a specific vehicle model
router.get('/item/:code', getAllVariantsPerItem);

// GET /item-variant/:itemCode/:variantCode
// Get a specific item variant
router.get('/item-variant/:itemCode/:variantCode', getOneItemVariant);

// GET /models/:name
// Get all of the models by variant name
router.get('/models/:name', getModelsPerVariantName);

// GET /models
// Gets all models
router.get('/models', getAllModels);

// GET /models
// Gets all models
router.get('/variants', getAllVariants);

// GET /
// Gets all items and all their variants
router.get('/', getAllItemVariants);

module.exports = router;
