/*
*   Plugin developed by Focus Style.
*
*   LICENCE: GPL, LGPL, MPL
*   NON-COMMERCIAL PLUGIN.
*
*   Website: focus.style   
*   Facebook: focus.style
*
*/

CKEDITOR.plugins.add( 'sticky', {
  init: function( editor ) {
    
    setToolbars();

    window.addEventListener('scroll', function(){
      setToolbars();
    }, false);
    
    editor.on('contentDom', function () {
      var editable = editor.editable();
      editable.attachListener(editable, 'click', function () {
        setToolbars();
      });
    });
    
    function setToolbars() {
      document.querySelectorAll(".cke").forEach(function(editor) {            
        let inner = editor.querySelector('.cke_inner'),
            content = editor.querySelector('.cke_contents'),
            toolbar = editor.querySelector('.cke_top'); 
        
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;             
        
        function getCoords(elem) { // crossbrowser version
          let box = elem.getBoundingClientRect(),
      
              body = document.body,
              docEl = document.documentElement,
          
              scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop,
              scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft,
          
              clientTop = docEl.clientTop || body.clientTop || 0,
              clientLeft = docEl.clientLeft || body.clientLeft || 0,
          
              top  = box.top +  scrollTop - clientTop,
              left = box.left + scrollLeft - clientLeft;
      
          return { top: Math.round(top), left: Math.round(left) };
        }

        inner.style.position = "relative";
        
        toolbar.style.position  = "absolute";
        toolbar.style.width     = "100%";
        toolbar.style.left      = "0";
        toolbar.style.margin    = "0";
        toolbar.style.boxSizing = "border-box";
        
        let editorTop = getCoords(editor).top;
        let editorHeight = editor.offsetHeight;
        let toolbarHeight = toolbar.offsetHeight;
        
        content.style.paddingTop = toolbarHeight+"px";
        
        let contentHeight = content.offsetHeight;
        let editorBorderTopWidth = parseFloat(getComputedStyle(editor).borderTopWidth);
        
        if((scrollTop > editorTop) && (scrollTop < (editorTop+contentHeight-toolbarHeight))) {
          toolbar.style.top = (scrollTop-editorTop-editorBorderTopWidth) + "px";
        }  else if (scrollTop >= (editorTop+contentHeight-toolbarHeight)) {
          toolbar.style.top = (contentHeight-toolbarHeight-editorBorderTopWidth) + "px";
        } else {
          toolbar.style.top = "0";
        }               
      });  
    }
      
  }
});