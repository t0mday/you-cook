import React from 'react';

function Search() {

  /*function onChangeTagInput(e) {
    setTagInputVal(e.target.value.replace(/[^a-zA-Z\d]/ig, ""));
  }*/

  return (
    <form>
      <input type="text" onChange="handleChange" value="" required />
    </form>
  );
}