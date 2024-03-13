function scmEval(e) {
  if(!lips){
    console.error("LIPS not loaded.");
    return 1;
  }

  console.log(e);

  var out = e + "-out";
  var output = document.getElementById(out);

  var btn = e + "-btn";
  var button = document.getElementById(btn);

  var contentBox = document.getElementById(e);
  var content = document.getElementById(e).value;
  console.log(content);

  function enable(){
    setTimeout(function(){
      button.innerHTML = "Run Program"
      button.disabled = false
      contentBox.disabled = false
    }, 200);
  }

  var disablePromise = new Promise(function(resolve, reject){
    // Set things.
    button.innerHTML = "Running...";
    button.disabled = true;
    contentBox.disabled = true;
    setTimeout(function(){resolve("done");}, 10);
  });
  
  disablePromise
    .then(function(){
      return lips.exec(content);
    })
    .then(
     function(results) {
       output.innerHTML = "";
       results.forEach(function(result) {
         if(result){
           console.log(result.toString());
           var node = document.createElement("p");
           node.classList.add("scm-success");
           node.innerHTML = result.toString();
           output.appendChild(node);
         }
         }
       );
     }
  ).catch (function(error) {
    output.innerHTML = "";
    console.log("Issue encountered while interpreting.");
    console.log(error.message);
           var node = document.createElement("p");
           node.innerHTML = error.message.toString();
           node.classList.add("scm-error");
           output.appendChild(node);

    console.error(error);
    }).finally(function(){
    enable();
  });
}
