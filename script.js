function convert(){
  
    let input= document.querySelector("#user_input").value;
    input= Number(input);
   
   
   
   
    let from = document.querySelector("#from").value;
    let to = document.querySelector("#to").value;


    let result ; 
    switch(from){
    case "c":
    case "celcius":
        switch(to){
            case "f":
            case "fahrenheit":
                result = (input*9)/5+32;
                console.log(result);
                break;
      case "k":
      case "kelvin":
        result = input+ 273.15;
        console.log(result)
        break ;
        default:
            result = input ;
            console.log(result)
        }
        break;
        case "f":
        case "fahrenheit":
            switch(to){
                case "c":
                case "celcius":  
                    result = (input-32)*5/9;
                    console.log(result)
                    break;
      case "k":
      case "kelvin":
        result= (input-32)*5/9+273.15;
        console.log(result);
        break;
        default:
            result = input ;
        }
break;
    case "k":
      case "kelvin":
        switch(to){
            case "c":
                case "celcius":  
                result= input-273.15;
                console.log(result);
                break;

                case "f":
                    case "fahrenheit":  
                    result=input -(273.15 ) * 9/5+32;
                    console.log(result);
                    break;
                    default:
                        result = input ;
                        console.log(result);
                    }
                    return result;
    }
 
    var final = document.querySelector("#final");
    final.textContent= `${result.toFixed()} ${to.toUpperCase()}`
}
