var app = new function() {
    this.el = document.getElementById('items');
  
    this.items = [];
  
    
    
    this.FetchAll = function() {
      var data = '';
  
      if (this.items.length > 0) {
        for (i = 0; i < this.items.length; i++) {
         
          data += '<li>'+(i+1)+". " + this.items[i] + '  <button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button>  <button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button> <br></li>';
           
        }
      }
  
      this.Count(this.items.length);
      return this.el.innerHTML = data;
    };
  
    this.Add = function () {
      el = document.getElementById('input_text');
   
      var items = el.value;
  
      if (items) {
     
        this.items.push(items.trim());

        el.value = '';

        this.FetchAll();
      }
    };
  
    this.Edit = function (item) {
      var el = document.getElementById('edit_box');

      el.value = this.items[item];

      document.getElementById('edit').style.display = 'flex';
      self = this;
  
      document.getElementById('save_edit').onsubmit = function() {

        var items = el.value;
  
        if (items) {

          self.items.splice(item, 1, items.trim());

          self.FetchAll();

          closeInput();
        }
      }
    };
  
    this.Delete = function (item) {

      this.items.splice(item, 1);

      this.FetchAll();
    };
  
    this.Count = function(data) {
      var el   = document.getElementById('counter');
      var name = 'Items';
  
 
    };
    
  }
  
  app.FetchAll();
  
  function closeInput() {
    document.getElementById('edit').style.display = 'none';
  }