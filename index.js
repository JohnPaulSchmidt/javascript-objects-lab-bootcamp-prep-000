const recipes = {spam:'meat'}

function updateObjectWithKeyAndValue(object, key, value) {
recipes.prop = "1"
recipes.prop2 = "2"
return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var prop = 'prop'
  var prop2 = 'prop2'
  recipes[prop, prop2] = '1', '2'
  return recipes;
}