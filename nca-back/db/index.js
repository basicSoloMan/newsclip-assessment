const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'us-cdbr-east-02.cleardb.com',
  user: 'b2eb896b0c398d',
  password: '172e237e',
  database: 'heroku_07c69e1a6223cb9',
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

ncadb.gettAllModels = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select *
      from Items`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

ncadb.gettAllVariants = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select *
      from Variants`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

ncadb.itemsPerVariantName = (variantName) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select distinct item_code,item_name
      from ItemVariantStock
        inner join Items on ivs_item_id = item_id
        inner join Variants on ivs_variant_id = variant_id
          and variant_name = ?`,
      [variantName],
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

ncadb.insertNewItem = (code, name) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `insert into Items (item_code,item_name) 
        values (?,?)`,
      [code, name],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

ncadb.insertNewVariant = (code, description, color, name) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `insert into Variants (variant_code,variant_description,variant_color,variant_name) 
        values (?,?,?,?)`,
      [code, description, color, name],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

ncadb.getItemId = (item) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select item_id from Items where item_code = ?`,
      [item],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

ncadb.getVariantId = (variant) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select variant_id from Variants where variant_code = ?`,
      [variant],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

ncadb.addVariantToItem = (item_id, variant_id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `insert into ItemVariantStock (ivs_item_id,ivs_variant_id)
        values(?,?)`,
      [item_id, variant_id],
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
