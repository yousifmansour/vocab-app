import React from 'react'; // to use JSX

function setUpDataModelDisplay(defOrExample) {
  if (!defOrExample) 
    return;
  
  defOrExample.replace('{ldquo}', '"');
  defOrExample.replace('{rdquo}', '"');

  if (defOrExample.includes('{bc}')) {
    defOrExample = ' : ' + defOrExample.split('{bc}')[1];
  }

  if (defOrExample.includes('{a_link|')) {
    defOrExample.replace('{a_link|', '');
    defOrExample.replace('}', '');
  }

  if (defOrExample.includes('{b}')) {
    const [bold,
      normal] = defOrExample
      .split('{b}')[1]
      .split('{\/b}');
    defOrExample = <b>{bold}</b> + normal;
  }

  if (defOrExample.includes('{inf}')) {
    const [sub,
      normal] = defOrExample
      .split('{b}')[1]
      .split('{\/b}');
    defOrExample = <sub>{sub}</sub> + normal;
  }

  if (defOrExample.includes('{it}')) {
    defOrExample = <div>
      {defOrExample.split('{it}')[0]}
      <i>
        {defOrExample.split('{it}')
        [1].split('{\/it}')[0]}
      </i>
      {defOrExample
        .split('{it}')
        .join()
        .split('{\/it}')[1]}
    </div>
  }

  return defOrExample;
}

export default setUpDataModelDisplay;