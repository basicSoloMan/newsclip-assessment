const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'marius',
  password: 'password',
  database: 'NCA',
  port: '3306',
});

let ncadb = {};

ncadb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select * from ItemVariantStock 
        inner join Items on ivs_item_id = item_id 
        inner join Variants on ivs_variant_id = variant_id`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

ncadb.oneVariant = (code) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select * from ItemVariantStock 
        inner join Items on ivs_item_id = item_id 
        inner join Variants on ivs_variant_id = variant_id 
          and variant_code = ?`,
      [code],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

ncadb.oneItem = (code) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select * from ItemVariantStock 
        inner join Items on ivs_item_id = item_id 
          and item_code = ? 
        inner join Variants on ivs_variant_id = variant_id`,
      [code],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

ncadb.oneItemVariant = (itemCode, variantCode) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select * from ItemVariantStock 
        inner join Items on ivs_item_id = item_id 
          and item_code = ? 
        inner join Variants on ivs_variant_id = variant_id 
          and variant_code = ?`,
      [itemCode, variantCode],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

ncadb.updateItemVariantStock = (itemCode, variantCode, quantity) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `update ItemVariantStock 
        inner join Items on ivs_item_id = item_id 
          and item_code = ? 
        inner join Variants on ivs_variant_id = variant_id 
          and variant_code = ? 
      set ivs_quantity = ?`,
      [itemCode, variantCode, quantity],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

module.exports = ncadb;
