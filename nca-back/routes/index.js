const express = require('express');
const router = express.Router();
const db = require('../db');

const {
  getAllItemVariants,
  getAllItemsPerVariant,
  getAllVariantsPerItem,
  getOneItemVariant,
  updateItemVariantStock,
} = require('../controllers');

// POST /api/nca/item-variant-stock/
// Updates the stock levels of an item variant
router.post('/item-variant-stock', updateItemVariantStock);

// GET /api/nca/variant/:code
// Gets all vehicle models that has a specific variant
router.get('/variant/:code', getAllItemsPerVariant);

// GET /api/nca/item/:code
// Gets all variant for a specific vehicle model
router.get('/item/:code', getAllVariantsPerItem);

// GET /item-variant/:itemCode/:variantCode
// Get a specific item variant
router.get('/item-variant/:itemCode/:variantCode', getOneItemVariant);

// GET /api/nca/
// Gets all items and all their variants
router.get('/', getAllItemVariants);

module.exports = router;
