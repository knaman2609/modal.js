# Modal
![modal](modal.png)       


#### Install
    npm install modaljs    
    
    var Modal = require('modaljs');

if not using browerify/webpack simply copy modal.js and modal.css.

See the example in example folder.

### Usage  

##### create the modal box
```javascript
var modal = Modal(); // returns the same modal obj every time.

 // use this to create new  modal if close
modal.create({       
    _class: 'modal--doSomething',
    header: 'My custom header',
    body: 'My modal body text',
    footer: {confirmText: 'CONFIRM', cancelText: 'CANCEL'},
});

modal.open();

```

Use  `_class` to add custom modal css for different situations. 

Pass  `null` for footer options if dont want confirm or cancel.


##### html generated
```html
<div class="modal is-active">
    <div class="modal__backdrop"></div>
    <div class="modal__inner">
        <div class="modal__header"></div>
        <div class="modal__body"></div>
        <div class="modal__footer"></div>
        <div class="modal__close"></div>
    </div>
</div>
```
This html will be generated only once for the first time automatically.


##### Css   
Copy the css from modal.css. `is-active`  class is appled on open.


##### Callbacks
```javascript
var modal = Modal();
modal.create({
    _class: 'modal--doSomething',
    header: 'My custom header',
    body: 'My modal body text',
    done: function() { },
    confirm: function() { },
    cancel: function() { }
});
```

`done` is called after  `modal.create()`.

`confirm` is called on confirm button click.

`cancel` is called  on close button click.

Use  `this.$el`  to access the modal element inside any of these callbacks.


##### update the modal box
```javascript

var modal = Modal();

//  use this if updating the modal keeping the 
//  prev values of header, footer.
modal.update({  
  _class: 'modal--success',
  body: 'delete Success',
  footer: {confirmText: null, cancelText: null},
});
```

##### close the modal
    modal.close(); // close immediately

    modal.close(2000); // to close after 2000ms
