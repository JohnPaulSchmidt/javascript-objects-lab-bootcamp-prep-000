var recipes = {spam:'meat'}

function updateObjectWithKeyAndValue(object, key, value) {
recipes.prop = "1"
recipes.prop2 = "2"
return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes.spam = 'prop: 1';
  return recipes
}