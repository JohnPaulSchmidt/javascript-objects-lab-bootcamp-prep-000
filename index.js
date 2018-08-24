const recipes = {prop:'1'}

function updateObjectWithKeyAndValue(object, key, value) {
recipes.prop = "1"
recipes.prop2 = "2"
return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var prop2 = 'prop2'
  recipes[prop2] = '2'
  return recipes;
}