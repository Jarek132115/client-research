/* Single source of truth for valid vertical slugs + labels.
   "Categories" here = the VERTICAL a prospect was found in.
   Read by build-data.js (require) and check.js. */
const CATEGORIES = ["supplements","homeware","pet","automotive","hobby","fashion","tools","beauty"];
const CATEGORY_LABELS = {
  supplements:"Supplements & Nutrition", homeware:"Homeware & Furniture", pet:"Pet Products",
  automotive:"Automotive & Parts", hobby:"Hobby & Enthusiast Gear", fashion:"Fashion & Accessories",
  tools:"Tools & Equipment", beauty:"Beauty & Skincare",
};
const CATEGORY_LABELS_SHORT = {
  supplements:"Supps", homeware:"Home", pet:"Pet", automotive:"Auto",
  hobby:"Hobby", fashion:"Fashion", tools:"Tools", beauty:"Beauty",
};
const ROTATION = CATEGORIES.slice();
const ROTATION_EPOCH = "2025-01-06";
module.exports = { CATEGORIES, CATEGORY_LABELS, CATEGORY_LABELS_SHORT, ROTATION, ROTATION_EPOCH };
