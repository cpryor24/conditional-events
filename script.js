/*
	Add code to do the following:

	1. When you click on an `li` it selects it.
  2. If the `li` is already selected, it unselects it.
  3. After each click, update the total count of selected `li`s in the H1.
*/
'use strict';
document.addEventListener('DOMContentLoaded', function(){
	const LIST = document.getElementsByTagName('ul')[0];
  let spanCount = document.getElementsByTagName('span')[0];
  let count = 1;

  let onListClick = function(e){
    if(e.target.className === 'selected'){
      e.target.classList.remove('selected');
      --count;
    } else {
      e.target.classList.add('selected');
      ++count;
    }
    spanCount.textContent = '('+ count + ')';
  };

  LIST.addEventListener('click', onListClick);
});
