const searchLayout = document.getElementById('search_layout');
const cartButton = document.getElementById('cart_button');
const carodLayout = document.getElementById('carouselExampleControls');
let logoutbtn = document.getElementById("navlogout");

//var selectedprod = localStorage.getItem('products');
//const newprod = JSON.parse(selectedprod);

//Get all the selected product info from local storage
    function getProductFromStorage(){
    	console.log("I'm in getProductFromStorage");
    	var selectedprod = localStorage.getItem('products');
    	const newprod = JSON.parse(selectedprod);
    	console.log(newprod,"newprod");

      /*  //const head = document.createElement("p");
        //const headnode = document.createTextNode(newprod[i].proName);
        const head  = document.getElementById("cartPara");

        //const para  = document.createElement("span");
        const span  = document.getElementById("cartSpan");

        const anch = document.getElementById("cartAch");

        //const anchnode = document.createTextNode("x");

        const quant = document.getElementById("cartInput");

        
        //const breaknode = document.createElement("br");
        
        const element = document.getElementById("newrow");*/


    	var index;
       /* for (var i = 0; i < newprod.length; i++) {
            let id = newprod[i].mfrCode;
            let name = newprod[i].proName;
            console.log(name,"name");
            console.log(id,"id");
            const head = document.createElement("p");
            //const head  = document.getElementById("cartPara");
            head.innerHTML = newprod[i].proName;
            const headnode = document.createTextNode(newprod[i].proName);
            head.setAttribute("class", "carthead");
            head.appendChild(headnode);
            //const para  = document.createElement("span");
            const span  = document.createElement("span");
            span.setAttribute("class", "card");
            const anch = document.createElement("a");
            //const anch = document.getElementById("cartClose");
            anch.setAttribute("id", "cartClose");
            anch.setAttribute("class", "closebtn");
            anch.setAttribute("href", "#");
            const anchnode = document.createTextNode("x");
            //anch.innerHTML = "x";
            anch.appendChild(anchnode);
            const quant = document.createElement("input");
            //const quant = document.getElementById("cartInput");
            quant.setAttribute("type", "text");
            quant.setAttribute("onclick", "update(event)");
            quant.setAttribute("class", "cartinput");
            quant.setAttribute("value", newprod[i].qty);
            const inputele = document.getElementById("quantinput");
            inputele.appendChild(quant);
            const ratenode = document.createTextNode(
                "Rate : " + newprod[i].proRate);
            const freenode = document.createTextNode(
                "Free quantity : " + newprod[i].freeQty);
            
            const breaknode = document.createElement("br");
            
            const element = document.getElementById("newrow");

            span.appendChild(head);
            span.appendChild(ratenode);
            span.appendChild(freenode);
            span.appendChild(breaknode);
            span.appendChild(quant);
            span.appendChild(anch);
            element.appendChild(span);
        }*/


               // var htmltable = "<table class='table table-bordered table-striped'>"
                var htmltable = "<table class='table table-bordered table-striped' id = 'dsTable'>"
                htmltable+='<thead>'
                htmltable+='<tr>';
                //html+='<th scope="col">'+'M.R.P.'+'</th>';
                htmltable+='<th>'+'Name'+'</th>';
                htmltable+='<th>'+'Quantity'+'</th>';
                htmltable+='<th scope="col">'+'Free quantity'+'</th>';
                htmltable+='<th>'+'Rate'+'</th>';
                htmltable+='</tr>';
                htmltable+='</thead>';
                for (var i = 0; i < newprod.length; i++) {
                    htmltable+='<tr">';
                    //html+='<td>'+newprod[i].proId+'</td>';
                    htmltable+='<td class="prodName">'+newprod[i].proName+'</td>';
                    htmltable+='<td>'+ '<input name="cartQuant" id="cartUpdate" autocomplete="off" onclick="update(event)" style="width: 50%; height: auto; text-align: center;" type="text" value="'+newprod[i].qty+'" />'+'</td>';
                    htmltable+='<td>'+newprod[i].freeQty+'</td>';
                    htmltable+='<td>'+'<span>&#8377;</span>'+newprod[i].proRate+'</td>';
                    //htmltable+='<td>'+'<span>&#10005;</span>'+'</td>';
                    htmltable+='<td>'+ '<input type="button" value="Delete" onclick="tableclick(event)"/>' +'</td>';
                    htmltable+='</tr>';

                }document.getElementById("table").innerHTML = htmltable

                //function tableclick(e){
                  //  alert("Delete")
               // }

               /* function deleteRow(row) {
                    //alert(row);
                    // var d = row.parentNode.parentNode.rowIndex;
                    document.getElementById('dsTable').deleteRow(row);
                }

                function tableclick(e) {
                    //if(!e)
                    // e = window.event;

                    if(e.target.value == "Delete"){
                        let rowId = e.target.closest('tr').rowIndex;
                        console.log(rowId,"rowId");
                       deleteRow( e.target.parentNode.parentNode.rowIndex );
                       let devicesArray = rowId - 1 ;
                       console.log(devicesArray,"devicesArray");
                       var storedNames = JSON.parse(localStorage.getItem("products"));
                       console.log(storedNames,"storedNames");
                       storedNames.splice(devicesArray, 1);
                       localStorage.setItem('products', JSON.stringify(storedNames));
                   //console.log(e.target.parentNode.parentNode.rowIndex,"deletedRow");
                   //console.log(newprod,"newprod");
                   }
                }*/






    	/*var html = "<table class='table table-bordered table-striped' id = 'dsTable'>"
    	html+='<thead>'
    	html+='<tr>';
    	html+='<th scope="col">'+'M.F.R.'+'</th>';
    	html+='<th>'+'Name'+'</th>';
    	html+='<th>'+'Quantity'+'</th>';
    	html+='<th>'+'Rate'+'</th>';
    	html+='</tr>';
    	html+='</thead>';
    	for (var i = 0; i < newprod.length; i++) {
    		html+='<tr>';
            html+='<td>'+'<input type="checkbox" id="" name="" value="">'+'</td>';
    		html+='<td>'+newprod[i].mfrCode+'</td>';
    		html+='<td>'+newprod[i].proName+'</td>';
    		html+='<td>'+ '<input name="cartQuant" style="width: 50%; height: auto; text-align: center;" type="text" value="'+newprod[i].qty+'" />' +'<input onclick="update(event)" type="button" value="Update">' +'</td>';         
    		html+='<td>'+''+newprod[i].proRate+'</td>';//<!--span>&#8377;</span-->
            html+='<td onclick="tableclick(event)">'+ '<input type="button" value="Delete" />' +'</td>';
    		html+='</tr>';*/
//}

            /*var templateString =
             '<article class="card"><!--input type="checkbox" onclick="onSelect()" id="cartCheck" ><span class="checkmark"></span--> <a id="cartClose" class="closebtn" href="#">??</a><h5>'
             + newprod[i].proName + '</h5><p class="checkPag">' 
            +'<span class="cartSpan">M.F.R : </span>' + newprod[i].mfrCode + '</p><p class="checkPag">'+'<span class="cartSpan">Quantity : </span>' + newprod[i].qty + 
            '</p><p>'+'<span class="cartSpan">Rate : </span>' + newprod[i].proRate + 
            '</p><!--p>'+'<span class="cartSpan">Rate : </span><input id="quntid" class="quntclass" name="cartQuant" style="width: 50%; height: auto; text-align: center;" type="text" value="'+newprod[i].qty+'" /> <input onclick="update(event)" type="button" value="Update"-->'
            '</p><p><!--input id="qunt" type="button" onclick="free()"--><p class="checkPag">'+'<span class="cartSpan">Free quantity : </span>' + newprod[i].freeQty + 
            '</p></article>';
            $('#test12').append(templateString);

            



    	}*/
        //document.getElementById("table").innerHTML = html
    	//Cart Buttons
    	cartButton.style.display = 'block';//Display cart buttons.
    	searchLayout.style.display = 'none';//Hide search bar.
    	productLayout.style.display = 'none';//Hide product layout.
    	//divhide.style.display = 'none';//Hide login layout.
        //Onclick card close
         $('.closebtn').click(function(){
           var $target = $(this).parents('span');

           let rowId = $(this).parents('span').index();
           let rowjson = rowId -1;
           console.log(rowId,"rowId");
           console.log(rowjson,"rowjson");
           console.log("$target",$target);
           $target.hide('slow', function(){ $target.remove(); });

            var storedNames = JSON.parse(localStorage.getItem("products"));
            console.log(storedNames,"storedNames");
            var storedOrder = JSON.parse(localStorage.getItem("order"));
            //storedNames.splice(rowId, 1);
            //localStorage.setItem('products', JSON.stringify(storedNames));
            //cartTotal();


            if (storedNames == 0) {
             console.log("table is empty");
             localStorage.removeItem("products"); 
             localStorage.removeItem("order");  
             cartTotal(); 
            }else{
                console.log(storedNames,"storedNames");
                storedNames.splice(rowjson, 1);
                storedOrder.splice(rowjson, 1);
                localStorage.setItem('products', JSON.stringify(storedNames));
                localStorage.setItem('order', JSON.stringify(storedOrder));
                cartTotal();
            }
         });
        
        
    }

    /*function searchqnty() {
        var newval = document.getElementsByClassName('quntclass');
        alert(newval.value); 
        console.log(newval,"inputfield");  
            
    }*/
     function tableclick(e){
        if(!e)
         e = window.event;
          if(e.target.value == "Delete"){
              let rowId = e.target.closest('tr').rowIndex;
              console.log(rowId,"rowId");
             deleteRow( e.target.parentNode.parentNode.rowIndex );
             let devicesArray = rowId - 1 ;
             console.log(devicesArray,"devicesArray");
             var storedNames = JSON.parse(localStorage.getItem("products"));
             var storedOrder = JSON.parse(localStorage.getItem("order"));
             console.log(storedNames,"storedNames");
             storedNames.splice(devicesArray, 1);
             storedOrder.splice(devicesArray, 1);
             cartTotal(); 
             localStorage.setItem('products', JSON.stringify(storedNames));
             localStorage.setItem('order', JSON.stringify(storedOrder));
             cartTotal(); 
         //console.log(e.target.parentNode.parentNode.rowIndex,"deletedRow");
         //console.log(newprod,"newprod");
         }
     }
     function deleteRow(row) {
                    //alert(row);
                    // var d = row.parentNode.parentNode.rowIndex;
                    document.getElementById('dsTable').deleteRow(row);
                }

    function update(event){
      
        $('input[name="cartQuant"]').on('focusin', function(){
          //alert("inputSome");
            console.log("Saving value " + $(this).val());
            $(this).data('val', $(this).val());
        });
        //console.log("after");  
        $('input[name="cartQuant"]').on('change', function(){
          //alert("inputSomeChange");
            var prev = $(this).data('val');
            var current = $(this).val();
            console.log("Prev value " + prev);
            console.log("New value " + current);
            if (current == ''|| current == 0) {
              emptyQuant();
            }else{
              //let val = $(this).siblings("p").text();
              let val = $(this).closest('tr').find('.prodName').text();
              console.log("val",val);  
              var selectedprod = localStorage.getItem('products'); 
              const newprod = JSON.parse(selectedprod);
              for (var i = 0; i < newprod.length; i++) {
                  if (val === newprod[i].proName) {
                      console.log("name matchec");
                      console.log("New value " + current);
                      newprod[i].qty = current;
                      console.log(newprod[i].qty);
                      newprod[i].finalOrder.qty = current;
                      console.log(newprod[i].finalOrder.qty);
                      localStorage.setItem('order',JSON.stringify(newprod));
                      localStorage.setItem('products',JSON.stringify(newprod));
                      cartTotal();
                      }
                      let selectedschemeoffqty = newprod[i].schemeOffer;
                      let selectedschemerange = newprod[i].schemeRange;
                      console.log(selectedschemeoffqty);
                      let prodFree = (selectedschemeoffqty * current);
                      console.log(prodFree,"prodFree");
                      var freeQunt = (prodFree)/(selectedschemerange);
                      var selectedFreeQunt = Math.floor(freeQunt);;
                      console.log("selectedFreeQunt",selectedFreeQunt);
                      newprod[i].freeQty = selectedFreeQunt;
                      newprod[i].finalOrder.freeQty = selectedFreeQunt;

                      localStorage.setItem('order',JSON.stringify(newprod));
                      localStorage.setItem('products',JSON.stringify(newprod));
              }
              /*/schemeOffeQty*cartQuantityValue/schemeRange 1*2/5
              var prodFree = (selectedschemeoffqty * cartQuantityValue);
              console.log(prodFree,"prodFree");
              var freeQunt = (prodFree)/(selectedschemerange);
              //var selectedFreeQunt = freeQunt.toFixed(2);
              var selectedFreeQunt = Math.floor(freeQunt);;
              console.log("selectedFreeQunt",selectedFreeQunt);*/
            }
        });
        //console.log(current);
    }
    //Success order toast message
    function orderSuccessInfo() {
      var x = document.getElementById("orderSuccess");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 8000);
      document.getElementById('number').value = "";
    }
    //Failed order toast message
    function orderFailInfo() {
      var x = document.getElementById("orderFail");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      document.getElementById('number').value = "";
    }
    //Failed order toast message
    function orderLoginInfo() {
      var x = document.getElementById("orderLogin");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      document.getElementById('number').value = "";
    }
    //Failed order toast message
    function orderExpiryInfo() {
      var x = document.getElementById("orderExpiry");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      document.getElementById('number').value = "";
    }
    //Empty cart toast message
    function emptyCart() {
      var x = document.getElementById("emptyCart");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
    //Empty qunt toast message
    function emptyQuant() {
      var x = document.getElementById("addqunt");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }

    document.getElementById('cart_btn').onclick = function(product){
    	if ((localStorage.getItem("products") === null) || (localStorage.getItem("products") === '')) {
    		emptyCart();
    	}else{carodLayout.style.display = 'none';getProductFromStorage();cartTotal();}
    }
    //Checkbox
  /*  function onSelect(){
        var checkBox = document.getElementById("cartCheck");
        var checkboxesChecked = [];
        //var text = document.getElementById("text");
          if (checkBox.checked == true){
            //Get rowID and slice for card 
            var html = document.querySelector(".checkPag");
            for (var i=0; i<html.length; i++) {
                console.log("html",html);
                checkboxesChecked.push(html);
            }
            console.log("html",html);
          } else {
             //text.style.display = "none";
          }
    }*/
    //Date
    let now = new Date();
    
       // alert('Sunday!');
       if (now.getDay() == 0) {
        //alert('Monday!');
        var nextDay = new Date();
        nextDay.setDate(nextDay.getDate() + 1);
        console.log(nextDay);         
        let day = ("0" + nextDay.getDate()).slice(-2);
        let month = ("0" + (nextDay.getMonth() + 1)).slice(-2);

        let monday = (day)+"-"+(month)+"-"+ nextDay.getFullYear(); 
        console.log(monday,"monday");
        document.getElementById("datePickers").defaultValue = monday;
    }else{

        
        console.log(now,"now");
        let day = ("0" + now.getDate()).slice(-2);
        let month = ("0" + (now.getMonth() + 1)).slice(-2);

        let today = (day)+"-"+(month)+"-"+ now.getFullYear();        
        //document.getElementById('dateValue').innerHTML = today;
        //document.getElementById('datePicker').value = today;
        console.log(today,"today");
        document.getElementById("datePickers").defaultValue = today;
    }
        

    /*document.getElementById('datebnt').addEventListener("click", (e)=>{
        let inputvar = document.getElementById('datePickers').value;
        document.getElementById("datePickers").defaultValue = inputvar;
        console.log(inputvar,"inputvar");
    });*/
    //Cart Continue Shopping Button
    function continueShopping(){
    	location.href="index.html";
    }

        //console.log(document.getElementById('datePickers').value = "new Date()","date");
    //Cart Check Out Button
    function checkOut(){
       let user = document.getElementById('navlogout').innerHTML;
        let finalProd = JSON.parse(localStorage.getItem('order'));
        console.log(finalProd,"finalProd");
        for (var i = 0; i < finalProd.length; i++) {
            let selectedorder = finalProd[i].finalOrder;
                console.log(selectedorder,"selectedorder");
                let somearry = [];
                somearry.push(selectedorder);
                console.log(somearry,"somearry");
                console.log(finalProd.length,"finalProd.length");
        }
        /*/check box
         let cartcheck = document.getElementById("cartCheck").checked; 
        if (cartcheck == true) {

        }*/
        //let dateinfo = document.getElementById('dateValue').innerHTML;
        //console.log(dateinfo,"dateinfo");
        //console.log("user",user);

        const shopdata = 
                    {
                        "clientId":"1234",
                        "systemId":"2010",
                        "orderReferenceNo":"",
                        "orderDate":"",
                        "customerCode":"", 
                        "expiryDate": "",
                        "expiryNumber": "",
                        "repCode":"",
                        "lineItems":"" 
                    }
                //Inserting data in json object
                console.log(shopdata,"shopdata");
                shopdata.orderReferenceNo = localStorage.getItem('refnum');
                shopdata.orderDate = document.getElementById('datePickers').value;
                console.log(shopdata.orderDate,"shopdata.orderDate");

                if ((localStorage.getItem("username") === null)) {
                    orderLoginInfo();
                    console.log(shopdata.customerCode,"shopdata.customerCode");
                }else{
                    shopdata.customerCode = localStorage.getItem('username');
                    console.log(shopdata.customerCode,"shopdata.customerCode");
                }

                if ((localStorage.getItem("expiryNumber") !== null)) {
                    var targetExpiry = localStorage.getItem('expiryNumber');
                    console.log("targetExpiry",targetExpiry);
                    let eDate = targetExpiry.substring(0, 10);
                    let eNum = targetExpiry.substring(12,19);
                    console.log("eDate",eDate);
                    console.log("eNum",eNum);
                    shopdata.expiryDate = eDate;
                    shopdata.expiryNumber = eNum;
                }
                shopdata.repCode = localStorage.getItem('repCode');
                shopdata.lineItems = finalProd;
                console.log(shopdata,"shopdata");
                if (((shopdata.lineItems == null) || (shopdata.lineItems == ''))) {
                    emptyCart();
                    console.log("order empty")
                }
                else{

                    if (((shopdata.customerCode === null) || (shopdata.customerCode === ''))) {orderFailInfo();}
                    else{
                        ////////////////////////////////////////////////////////////
                        ////////////////////////////////////////////////////////////
                        
                        
                        //shopdata.customerCode = "9500"; // Till we finish testing
                        
                        
                        ////////////////////////////////////////////////////////////
                        ////////////////////////////////////////////////////////////
                        console.log(shopdata.customerCode,"shopdata.customerCode");
                        const orderurl = "https://raw.githubusercontent.com/BACreator/tulsicorp/main/lib/json/orderresponse.json";
                        //const orderurl = "../tulsicorp/lib/json/orderresponse.json";
                        //const orderurl = "https://www.tulsicorp.com/mobile-order-entry-service/createmobileorder/";
                        fetch(orderurl, /*{
                             headers: {
                             Authorization: 'Basic ' + btoa('tulsi' + ":" + 'FdBNaYWfjpWN9eYghMpbRA=='),
                             'Content-Type': 'application/json' 
                             },
                             credentials: 'include', 
                             method:'POST',  
                             body: JSON.stringify(shopdata)
                              }*/console.log(orderurl,"data")).then((response)=>{
                                
                                            console.log(shopdata,"shopdata");
                                            console.log(finalProd,"finalProd");
                                    return response.json();
                                    }).then((data)=>{
                                        console.log(data,"data");
                                        if (data.error) {
                                        alert("Something went wrong...!");
                                        }else{
                                        if (data.responseCode == '0000') {
                                            console.log(shopdata,"shopdata");
                                            console.log(finalProd,"finalProd");
                                          console.log("Order submitted Successfully!");
                                          orderSuccessInfo();
                                            alert("Order Number : " + data.orderNo);
                                            //alert("Order Number : " + data.orderNo);
                                                localStorage.removeItem("products");
                                                localStorage.removeItem("order");
                                                localStorage.removeItem("expiryNumber");
                                            cartTotal();
                                            //logoutbtn.style.display = "none";
                                               document.getElementById('newrow').innerHTML = "";
                                               document.getElementById('table').innerHTML = "";
                                               document.getElementById('quantinput').innerHTML = "";
                                            //location.href="index.html";
                                        }else{
                                          orderFailInfo();

                                            console.log(shopdata,"shopdata");
                                            console.log(finalProd,"finalProd");
                                        }                
                                        }
                                        }).catch((err)=>{
                                        console.log(err);});                                        
                    }
                }
                
                
    	
    }
/*
    function deleteRow(row) {
        //alert(row);
        // var d = row.parentNode.parentNode.rowIndex;
        document.getElementById('dsTable').deleteRow(row);
    }

    

    function tableclick(e) {
        if(!e)
         e = window.event;
        
        if(e.target.value == "Delete"){
            let rowId = e.target.closest('tr').rowIndex;
            console.log(rowId,"rowId");
           deleteRow( e.target.parentNode.parentNode.rowIndex );
           let devicesArray = rowId - 1 ;
           console.log(devicesArray,"devicesArray");
           var storedNames = JSON.parse(localStorage.getItem("products"));
           console.log(storedNames,"storedNames");
           storedNames.splice(devicesArray, 1);
           localStorage.setItem('products', JSON.stringify(storedNames));
           cartTotal();
       }
       if (storedNames == 0) {
        console.log("table is empty");
        localStorage.removeItem("products");  
        cartTotal(); 
       }
    }*/




//Cart toatal
function cartTotal(){
    var selectedqunt = localStorage.getItem('products');
    const proddetails = JSON.parse(selectedqunt);
    let sum = [];
    var tot=0;
    console.log(proddetails);

    if ((localStorage.getItem('products') === null) || (localStorage.getItem('products') === '')) {
        document.getElementById("prodTotal").innerHTML = "Total Order Value : "  +'<span> &#8377; </span>' + "00.00";
        document.getElementById("prodTotalTable").innerHTML = "Total Order Value : "  +'<span> &#8377; </span>' +"00.00";
    }else{
        if ((proddetails == null) || (proddetails == '')) {
            document.getElementById("prodTotal").innerHTML = "Total Order Value : "  +'<span> &#8377; </span>' + "00.00";
            document.getElementById("prodTotalTable").innerHTML = "Total Order Value : "  +'<span> &#8377; </span>' +"00.00";
        }else{
            for (var i = 0; i < proddetails.length; i++) {
                var prodtotal = proddetails[i].qty * proddetails[i].proRate;
                console.log(prodtotal,"prodtotal");
                console.log(proddetails.length,"proddetails.length;")
                sum.push(prodtotal);
                //console.log("sum",sum);
                let total = sum.reduce((a, b) => a + b, 0)
                //console.log("total",total);
                //console.log("total",total.toFixed(2));
                document.getElementById("prodTotal").innerHTML = "Items: "+proddetails.length+" Total Value : "  +'<span> &#8377; </span>' +total.toFixed(2);
                document.getElementById("prodTotalTable").innerHTML = "Items: "+proddetails.length+" Total Value : "  +'<span> &#8377; </span>' +total.toFixed(2);                
            }
        }
    
    }
}




//Expiry fetch
let expirydetails = document.getElementById('expirydetails');
const expiryList = document.getElementById('expirylist');
expirydetails.addEventListener("click", (e)=>{
    e.preventDefault();
    if (((localStorage.getItem('username') === null) || (localStorage.getItem('username') === ''))) {orderLoginInfo();}
    else{

        let expiryurl = "https://raw.githubusercontent.com/BACreator/tulsicorp/main/lib/json/custexpiryresponse.json";
        //let expiryurl = "https://www.tulsicorp.com/mobile-order-entry-service/getmobilecustomerdetailspercustomer/";
        //Fetch customerurl
        fetch(expiryurl, /* + localStorage.getItem('username'),{
            method: 'POSTJSON.stringify(clientdata',
            headers:    {
                    'Content-Type': 'application/json',
                   },
                    body: JSON.stringify(data),
                }*/).then((response)=>{
                    return response.json();
                    }).then((data)=>{
                        //console.log(data,"data");
                        data.expiryDetails.forEach(function(element){
                            expiryList.insertAdjacentHTML( 'beforeend',"<li>" + element.expiryDate + ' - '  + element.expiryNumber + ' - '  + element.amount +  " </li>");
                        });
                        if (data.error) {
                        alert("Error password or username");
                        }else{

                        }
                        }).catch((err)=>{
                        console.log(err);});
    }
    });
expiryList.addEventListener('click', function(e){
    var target = e.target.innerText;
    //Store in localstorage
    localStorage.setItem('expiryNumber',target);
    var targetExpiry = localStorage.getItem('expiryNumber');
    expirydetails.innerText = targetExpiry;
});
