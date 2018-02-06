/**
 * Created by Zac Hayashida
 * @param array
 * @param list
 * @returns {*}
 */
function zipList(array, list) {
  if (array.length !== list.length) {
    return 'Not the same length.';
  }

  let merge = [];
  for (let i = 0; i < array.length + list.length; i++) {
  //  let item = array.pop();
    merge.push(array.shift());
    merge.push(list.shift());
  }

  return merge;
}

console.log(zipList([1, 2], ['a', 'b']));


function zipListTheSimpleWay(array, list){
  if (array.length !== list.length) {
    return 'Not the same length.';
  }
  return _.flatten(_.zip(array, list));
}

console.log(zipListTheSimpleWay([1, 2], ['a', 'b']));
