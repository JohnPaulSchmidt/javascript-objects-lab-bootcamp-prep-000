const recipes = {prop:'1', prop2: '2'}

function updateObjectWithKeyAndValue(object, key, value) {
recipes.prop = "1"
recipes.prop2 = "2"
return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var key = 'prop2'
  var value = '2'
  recipes[prop2] = '2'
  return recipes
}