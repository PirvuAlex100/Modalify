const Modalify={};var Modal=!1;Modalify.Dialog=function(t){let e=document.createElement("div");e.classList.add("modalify-backdrop");let o=document.createElement("div");o.classList.add("modalify-dialog"),"object"==typeof t&&"number"==typeof t.radius?o.style.borderRadius=t.radius+"px":o.style.borderRadius="8px";let l="small"===t.size?"modalify-dialog-small":"large"===t.size?"modalify-dialog-large":"modalify-dialog-medium";o.classList.add(l),"left"===t.alignment?o.classList.add("modalify-left"):"center"===t.alignment&&o.classList.add("modalify-center");let n=document.createElement("h2");n.classList.add("modalify-title"),n.style.fontFamily=t.title.font||"Arial, Helvetica, sans-serif",t.theme&&"dark"==t.theme.toLowerCase()?n.style.color=t.title.color||"#dddddd":n.style.color=t.title.color||"#000000",("object"==typeof t&&"solid"==t.title.underline||"object"==typeof t&&"wavy"==t.title.underline||"object"==typeof t&&"dotted"==t.title.underline||"object"==typeof t&&"dashed"==t.title.underline||"object"==typeof t&&"double"==t.title.underline)&&(n.style.textDecoration="underline "+t.title.underline.toLowerCase()),"object"==typeof t&&"none"==t.title.underline&&(n.style.textDecoration="none"),"object"==typeof t&&"solid"!==t.title.underline&&"object"==typeof t&&"wavy"!==t.title.underline&&"object"==typeof t&&"dotted"!==t.title.underline&&"object"==typeof t&&"dashed"!==t.title.underline&&"object"==typeof t&&"double"!==t.title.underline&&"object"==typeof t&&"none"!==t.title.underline&&(n.style.textDecoration="underline"),n.textContent=t.title.data;let a=document.createElement("p");a.classList.add("modalify-text"),a.style.fontFamily=t.text.font||"Arial, Helvetica, sans-serif","object"==typeof t&&void 0!==t.theme&&"dark"==t.theme.toLowerCase()?a.style.color=t.text.color||"#E0E0E0":a.style.color=t.text.color||"#000000",a.textContent=t.text.data;let c=document.createElement("button");if(c.classList.add("modalify-close"),"object"==typeof t&&"object"==typeof t.closeButton&&(c.style.fontFamily=t.closeButton.font||"Arial, Helvetica, sans-serif",void 0!==t.closeButton.color&&(c.style.background=t.closeButton.color),void 0!==t.closeButton.textColor&&(c.style.color=t.closeButton.textColor),void 0!==t.closeButton.data?c.textContent=t.closeButton.data:c.textContent="Close"),"object"==typeof t.title&&"string"==typeof t.title.alignment&&"left"===t.title.alignment&&n.classList.add("modalify-left"),"object"==typeof t.title&&"string"==typeof t.title.alignment&&"center"===t.title.alignment&&n.classList.add("modalify-center"),"object"==typeof t.text&&"string"==typeof t.text.alignment&&"left"===t.text.alignment&&a.classList.add("modalify-left"),"object"==typeof t.text&&"string"==typeof t.text.alignment&&"center"===t.text.alignment&&a.classList.add("modalify-center"),"object"==typeof t.closeButton&&"string"==typeof t.closeButton.alignment&&"left"===t.closeButton.alignment&&o.classList.add("modalify-left"),"object"==typeof t.closeButton&&"string"==typeof t.closeButton.alignment&&"center"===t.closeButton.alignment&&o.classList.add("modalify-center"),void 0===t.xButton||t.xButton){let i=document.createElement("button");i.classList.add("modalify-x"),t.theme&&"dark"==t.theme.toLowerCase()&&(o.classList.add("modalify-dark"),n.classList.add("modalify-dark-text"),a.classList.add("modalify-dark-text"),i.classList.add("modalify-dark-x"),c.classList.add("modalify-dark-close")),i.innerHTML="&times;",i.addEventListener("click",function(){o.remove(),("object"==typeof t&&"object"==typeof t.backdrop&&t.backdrop.visible||"object"!==t.backdrop)&&e.remove()}),o.appendChild(i)}o.appendChild(n),o.appendChild(a),o.appendChild(c),c.addEventListener("click",function(){o.remove(),("object"==typeof t&&"object"==typeof t.backdrop&&t.backdrop.visible||"object"!==t.backdrop)&&e.remove(),"object"==typeof t&&"object"==typeof t.closeButton&&"function"==typeof t.closeButton.callback&&t.closeButton.callback()}),e.addEventListener("click",function(){"object"==typeof t&&"object"==typeof t.backdrop&&t.backdrop.visible&&t.backdrop.clickable&&(o.remove(),e.remove())}),("object"==typeof t&&"object"==typeof t.backdrop&&t.backdrop.visible||"object"!==t.backdrop)&&document.body.appendChild(e),document.body.appendChild(o),o.style.display="none",e.style.display="none",this.hide=function(){o.style.display="none",e.style.display="none",Modal=!1},this.show=function(){Modal||(o.style.display="block",e.style.display="block",setTimeout(()=>{Modal=!0},3))}},Modalify.Confirm=function(t){let e=document.createElement("div");e.classList.add("modalify-backdrop");let o=document.createElement("div");o.classList.add("modalify-confirm");let l="small"===t.size?"modalify-confirm-small":"large"===t.size?"modalify-confirm-large":"modalify-confirm-medium";o.classList.add(l),"object"==typeof t&&"number"==typeof t.radius?o.style.borderRadius=t.radius+"px":o.style.borderRadius="8px";let n=document.createElement("h2");n.classList.add("modalify-confirm-title"),n.style.fontFamily=t.title.font||"Arial, Helvetica, sans-serif",n.textContent=t.title.data;let a=document.createElement("p");a.classList.add("modalify-confirm-text"),a.style.fontFamily=t.text.font||"Arial, Helvetica, sans-serif",t.theme&&"dark"==t.theme.toLowerCase()?(n.style.color=t.title.color||"#dddddd",a.style.color=t.text.color||"#dddddd"):(n.style.color=t.title.color||"#000000",a.style.color=t.text.color||"#000000"),a.textContent=t.text.data;let c=document.createElement("button");c.classList.add("modalify-confirm-ok"),"object"==typeof t&&"object"==typeof t.buttons&&"object"==typeof t.buttons.confirm?("object"==typeof t&&void 0!==t.buttons.confirm.color&&(c.style.background=t.buttons.confirm.color||"#1f1f1f",c.textContent=t.buttons.confirm.data||"OK"),"object"==typeof t&&void 0!==t.buttons.confirm.font&&(c.style.fontFamily=t.buttons.confirm.font||"Arial, Helvetica, sans-serif"),"object"==typeof t&&void 0!==t.buttons.confirm.data&&(c.textContent=t.buttons.confirm.data||"OK")):(c.style.fontFamily="Arial, Helvetica, sans-serif",c.textContent="OK",t.theme&&"dark"==t.theme.toLowerCase()?c.style.background="#E0E0E0":c.style.background="#1f1f1f");let i=document.createElement("button");i.classList.add("modalify-confirm-cancel"),"object"==typeof t&&"object"==typeof t.buttons&&"object"==typeof t.buttons.confirm&&(c.style.color=t.buttons.confirm.textColor),"object"==typeof t&&"object"==typeof t.buttons&&"object"==typeof t.buttons.cancel?(i.style.fontFamily=t.buttons.cancel.font||"Arial, Helvetica, sans-serif",i.style.border="1px solid "+t.buttons.cancel.color,void 0===t.theme||void 0!==t.theme&&"dark"!==t.theme.toLowerCase()?i.style.color=t.buttons.cancel.textColor||"#000000":i.style.color=t.buttons.cancel.textColor||"#E0E0E0",i.textContent=t.buttons.cancel.data||"Cancel"):(i.style.background="transparent",i.style.fontFamily="Arial, Helvetica, sans-serif",i.textContent="Cancel"),"object"==typeof t&&"object"==typeof t.buttons&&"object"==typeof t.buttons.cancel?i.textContent=t.buttons.cancel.data||"Cancel":i.textContent="Cancel",("object"==typeof t&&"solid"==t.title.underline||"object"==typeof t&&"wavy"==t.title.underline||"object"==typeof t&&"dotted"==t.title.underline||"object"==typeof t&&"dashed"==t.title.underline||"object"==typeof t&&"double"==t.title.underline)&&(n.style.textDecoration="underline "+t.title.underline.toLowerCase()),"object"==typeof t&&"none"==t.title.underline&&(n.style.textDecoration="none"),"object"==typeof t&&"solid"!==t.title.underline&&"object"==typeof t&&"wavy"!==t.title.underline&&"object"==typeof t&&"dotted"!==t.title.underline&&"object"==typeof t&&"dashed"!==t.title.underline&&"object"==typeof t&&"double"!==t.title.underline&&"object"==typeof t&&"none"!==t.title.underline&&(n.style.textDecoration="underline"),t.theme&&"dark"==t.theme.toLowerCase()&&(o.classList.add("modalify-confirm-dark"),n.classList.add("modalify-dark-text"),a.classList.add("modalify-dark-text"),i.classList.add("modalify-confirm-dark-cancel"),c.classList.add("modalify-confirm-dark-ok"));let s=document.createElement("div");s.classList.add("modalify-confirm-buttons"),s.appendChild(i),s.appendChild(c),o.appendChild(n),o.appendChild(a),o.appendChild(s),c.addEventListener("click",function(){("object"==typeof t&&"object"==typeof t.backdrop&&t.backdrop.visible||"object"!==t.backdrop)&&e.remove(),o.remove(),"object"==typeof t&&"object"==typeof t.buttons&&"object"==typeof t.buttons.confirm&&"function"==typeof t.buttons.confirm.callback&&t.buttons.confirm.callback()}),e.addEventListener("click",function(){"object"==typeof t&&"object"==typeof t.backdrop&&t.backdrop.visible&&t.backdrop.clickable&&(modal.remove(),e.remove())}),i.addEventListener("click",function(){("object"==typeof t&&"object"==typeof t.backdrop&&t.backdrop.visible||"object"!==t.backdrop)&&e.remove(),o.remove(),"object"==typeof t&&"object"==typeof t.buttons&&"object"==typeof t.buttons.cancel&&"function"==typeof t.buttons.cancel.callback&&t.buttons.cancel.callback()}),document.body.appendChild(o),("object"==typeof t&&"object"==typeof t.backdrop&&t.backdrop.visible||"object"!==t.backdrop)&&document.body.appendChild(e),o.style.display="none",e.style.display="none",this.hide=function(){o.style.display="none",e.style.display="none",Modal=!1},this.show=function(){Modal||(o.style.display="block",e.style.display="block",setTimeout(()=>{Modal=!0},3))}},Modalify.Prompt=function(t){let e=document.createElement("div");e.classList.add("modalify-backdrop");let o=document.createElement("div");if(o.classList.add("modalify-prompt"),"object"==typeof t&&"object"==typeof t){let l="small"===t.size?"modalify-prompt-small":"large"===t.size?"modalify-prompt-large":"modalify-prompt-medium";o.classList.add(l)}o.classList.add("modalify-prompt-medium"),"object"==typeof t&&"number"==typeof t.radius?o.style.borderRadius=t.radius+"px":o.style.borderRadius="8px";let n=document.createElement("h2");n.classList.add("modalify-prompt-title"),"object"==typeof t&&"object"==typeof t.title&&(n.textContent=t.title.data||"Please enter a value");let a=document.createElement("label");a.classList.add("modalify-prompt-label"),"object"==typeof t&&"object"==typeof t.label&&(a.textContent=t.label.data+":");let c=document.createElement("input");c.classList.add("modalify-prompt-input"),"object"==typeof t&&"object"==typeof t.input&&("object"==typeof t&&"text"!==t.input.type.toLowerCase()&&"object"==typeof t&&"password"!==t.input.type.toLowerCase()&&"object"==typeof t&&"datetime-local"!==t.input.type.toLowerCase()&&"object"==typeof t&&"date"!==t.input.type.toLowerCase()&&"object"==typeof t&&"month"!==t.input.type.toLowerCase()&&"object"==typeof t&&"number"!==t.input.type.toLowerCase()&&"time"!==t.input.type.toLowerCase()&&"week"!==t.input.type.toLowerCase()?c.type="text":c.type=t.input.type.toLowerCase(),c.value=t.input.value||"",c.placeholder=t.input.placeholder||"",c.style.textAlign=t.input.align||"");let i=document.createElement("button");i.classList.add("modalify-prompt-submit"),"object"==typeof t&&"object"==typeof t.title&&(("object"==typeof t&&"solid"==t.title.underline||"object"==typeof t&&"wavy"==t.title.underline||"object"==typeof t&&"dotted"==t.title.underline||"object"==typeof t&&"dashed"==t.title.underline||"object"==typeof t&&"double"==t.title.underline)&&(n.style.textDecoration="underline "+t.title.underline.toLowerCase()),"object"==typeof t&&"none"==t.title.underline&&(n.style.textDecoration="none"),"object"==typeof t&&"solid"!==t.title.underline&&"object"==typeof t&&"wavy"!==t.title.underline&&"object"==typeof t&&"dotted"!==t.title.underline&&"object"==typeof t&&"dashed"!==t.title.underline&&"object"==typeof t&&"double"!==t.title.underline&&"object"==typeof t&&"none"!==t.title.underline&&(n.style.textDecoration="underline"));let s=document.createElement("button");s.classList.add("modalify-prompt-cancel"),"object"==typeof t&&t.theme&&"dark"==t.theme.toLowerCase()&&(o.classList.add("modalify-prompt-dark"),n.classList.add("modalify-dark-text"),a.classList.add("modalify-dark-text"),c.classList.add("modalify-prompt-dark-input"),s.classList.add("modalify-prompt-dark-cancel"),i.classList.add("modalify-prompt-dark-submit")),"object"==typeof t&&"object"==typeof t.buttons&&"object"==typeof t.buttons.cancel?s.textContent=t.buttons.cancel.data||"Cancel":s.textContent="Cancel","object"==typeof t&&"object"==typeof t.buttons&&"object"==typeof t.buttons.cancel?(s.style.fontFamily=t.buttons.cancel.font||"Arial, Helvetica, sans-serif",s.style.background=t.buttons.cancel.color||"transparent",s.textContent=t.buttons.cancel.data||"Cancel"):("object"==typeof t&&t.theme&&"dark"==t.theme.toLowerCase()?s.style.background="#E0E0E0":s.style.background="#1f1f1f",s.style.fontFamily="Arial, Helvetica, sans-serif",s.textContent="Cancel"),"object"==typeof t&&"object"==typeof t.title&&(n.style.fontFamily=t.title.font||"Arial, Helvetica, sans-serif"),"object"==typeof t&&"object"==typeof t.label&&(a.style.fontFamily=t.label.font||"Arial, Helvetica, sans-serif",void 0!==t.theme&&"dark"==t.theme.toLowerCase()?a.style.color=t.label.color||"#ffffff":a.style.color=t.label.color||"#000000",void 0!==t.label.font&&(c.style.fontFamily=t.input.font||"Arial, Helvetica, sans-serif"),void 0!==t.input&&(c.style.outline=t.input.outline)),"object"==typeof t&&"object"==typeof t.buttons&&"object"==typeof t.buttons.cancel?(s.style.fontFamily=t.buttons.cancel.font||"Arial, Helvetica, sans-serif",s.style.background=t.buttons.cancel.color||"#1f1f1f",s.textContent=t.buttons.cancel.data||"Cancel"):("object"==typeof t&&t.theme&&"dark"==t.theme.toLowerCase()?s.style.background="#E0E0E0":s.style.background="#1f1f1f",s.style.fontFamily="Arial, Helvetica, sans-serif"),"object"==typeof t&&"object"==typeof t.buttons&&"object"==typeof t.buttons.cancel&&("object"==typeof t&&void 0!==t.buttons.cancel.data&&(s.textContent=t.buttons.cancel.data||"Cancel"),"object"==typeof t&&void 0!==t.buttons.cancel.color&&(s.style.background=t.buttons.cancel.color||"#E0E0E0")),"object"==typeof t&&"object"==typeof t.buttons&&"object"==typeof t.buttons.cancel?(s.style.fontFamily=t.buttons.cancel.font||"Arial, Helvetica, sans-serif",s.style.border="1px solid "+t.buttons.cancel.color,void 0===t.theme||void 0!==t.theme&&"dark"!==t.theme.toLowerCase()?s.style.color=t.buttons.cancel.textColor||"#E0E0E0":s.style.color=t.buttons.cancel.textColor||"#000000",s.textContent=t.buttons.cancel.data||"Cancel"):(s.style.background="transparent",s.style.fontFamily="Arial, Helvetica, sans-serif",s.textContent="Cancel"),"object"==typeof t&&"object"==typeof t.buttons&&"object"==typeof t.buttons.submit?i.style.fontFamily=t.buttons.submit.font||"Arial, Helvetica, sans-serif":(i.style.background="#1f1f1f","object"==typeof t&&t.theme&&"dark"==t.theme.toLowerCase()?i.style.background="#E0E0E0":i.style.background="#1f1f1f",i.style.fontFamily="Arial, Helvetica, sans-serif"),"object"==typeof t&&"object"==typeof t.buttons&&"object"==typeof t.buttons.submit&&("object"==typeof t&&void 0!==t.buttons.submit.data&&(i.textContent=t.buttons.submit.data||"Submit"),"object"==typeof t&&void 0!==t.buttons.submit.color&&(i.style.background=t.buttons.submit.color||"#E0E0E0")),"object"==typeof t&&"object"==typeof t.buttons&&"object"==typeof t.buttons.submit&&void 0!==t.buttons.submit.color&&(i.style.color=t.buttons.submit.textColor),("object"==typeof t&&"object"!=typeof t.buttons||"object"==typeof t&&"object"==typeof t.buttons&&"object"!=typeof t.buttons.submit||"object"==typeof t&&"object"==typeof t.buttons&&"object"==typeof t.buttons.submit&&void 0===t.buttons.submit.data||"object"!=typeof t)&&(i.textContent="OK"),i.addEventListener("click",function(){c.value,("object"==typeof t&&"object"==typeof t.backdrop&&t.backdrop.visible||"object"!==t.backdrop)&&e.remove(),o.remove(),"object"==typeof t.buttons&&"object"==typeof t.buttons.submit&&"function"==typeof t.buttons.submit.callback&&t.buttons.submit.callback(c.value)}),s.addEventListener("click",function(){("object"==typeof t&&"object"==typeof t.backdrop&&t.backdrop.visible||"object"!==t.backdrop)&&e.remove(),o.remove(),"object"==typeof t.buttons&&"object"==typeof t.buttons.cancel&&"function"==typeof t.buttons.cancel.callback&&t.buttons.cancel.callback()});let d=document.createElement("div");d.classList.add("modalify-prompt-buttons"),d.appendChild(i),d.appendChild(s),"object"==typeof t&&"object"==typeof t.title&&o.appendChild(n),o.appendChild(a),o.appendChild(c),o.appendChild(d),document.body.appendChild(o),c.focus(),document.body.appendChild(e),o.style.display="none",e.style.display="none",this.hide=function(){o.style.display="none",e.style.display="none",Modal=!1},this.show=function(){Modal||(o.style.display="block",e.style.display="block",setTimeout(()=>{Modal=!0},3))}};