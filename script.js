document.getElementById("form").addEventListener("submit",function(event){

    event.preventDefault()
    let name = document.getElementById("Name").value
    let id = document.getElementById("ID").value
    let prin = Number(document.getElementById("prin").value)
    let print = Number(document.getElementById("print").value)


    let toatal=print-prin
        document.getElementById("display").innerHTML =("Customer Name :"+name)
        document.getElementById("displays").innerHTML =("Customer ID:"+id)
        document.getElementById("displayst").innerHTML =("Previous Reading:"+prin)
        document.getElementById("displaystl").innerHTML =("Current Reading: "+print)
        document.getElementById("displaynb").innerHTML =("Units Consumed :"+toatal )
    
    if(toatal>0 && toatal<100){
        document.getElementById("displaytb").innerHTML =("Total Bill :"+toatal*2 )
    }else if(toatal>101 && toatal<200){
        document.getElementById("displaytb").innerHTML =("Total Bill :"+toatal*3 )
    }else if(toatal>201 && toatal<300){
        document.getElementById("displaytb").innerHTML =("Total Bill :"+toatal*5 )
    }else{
        document.getElementById("displaytb").innerHTML =("Total Bill :"+toatal*7 )
    }

    if(name ==""){
        document.getElementById("display").innerHTML =("Customer Name : Please enter customer name")
    }
    if(print<prin){
        document.getElementById("displaystl").innerHTML =("Current Reading: Invalid meter reading ")
        
    }
    if(prin<0 || print<0){
        document.getElementById("displayst").innerHTML =("Previous Reading: Meter reading cannot be negative")
        document.getElementById("displaystl").innerHTML =("Current Reading: Meter reading cannot be negative ")
         document.getElementById("displaynb").innerHTML =("Units Consumed : Meter reading cannot be negative ")
    }

    localStorage.setItem("Name",name)
})
document.getElementById("forml").addEventListener("submit",function(event){
    event.preventDefault()
    let name = localStorage.getItem("Name")
    document.getElementById("displayln").innerHTML = name
})

document.getElementById("formc").addEventListener("submit",function(event){
    event.preventDefault()
    let name = localStorage.removeItem("Name")
    document.getElementById("displayln").innerHTML = ("Removed",name)
})


