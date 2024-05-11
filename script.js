function convert(){
  
    let input= document.querySelector("#user_input").value;
    input= parseFloat(input);
  let from = document.querySelector("#from").value;
  let to = document.querySelector("#to").value;

  let result ; 
    switch(from){
    case "c":
    switch(to){
            case "f":
             result = (input*9)/5+32;
                console.log(result);
                break;
      case "k":
       result = input+ 273.15;
        console.log(result)
        break ;
        default:
            result = input ;
            console.log(result)
        }
        break;
        
        case "f":
        switch(to){
                case "c":
                  result = (input-32)*5/9;
                    console.log(result)
                    break;
      case "k":
       result= (input-32)*5/9+273.15;
        console.log(result);
        break;
        default:
            result = input ;
        }
        
break;
    case "k":
     switch(to){
            case "c":
              result= input-273.15;
                console.log(result);
                break;

                case "f":
                    result=input -(273.15 ) * 9/5+32;
                    console.log(result);
                    break;
                    default:
                        result = input ;
                        console.log(result);
                    }
                  
    }
 
    var final = document.querySelector("#final");
    final.textContent= `${result.toFixed()} ${to.toUpperCase()}`
}
