export default class Calculation {
    static renderingForms (fromValue, toValue) {
        if(fromValue===toValue){
            //alert("fromValue와 toValue가 같습니다.")
            return [0, 0, 0]
        }
        
        if(fromValue==="시급"){
            if(toValue==="일급"){
                return [1, 0, 0]
            }
            else if(toValue==="주급"){
                return [1, 1, 0]
            }
            else if(toValue==="월급"){
                return [1, 0, 1]
            }
            else if(toValue==="연봉"){
                return [1, 0, 1]
            }
        }
        else if(fromValue==="일급"){
            if(toValue==="시급"){
                return [1, 0, 0]
            }
            else if(toValue==="주급"){
                return [0, 1, 0]
            }
            else if(toValue==="월급"){
                return [0, 0, 1]
            }
            else if(toValue==="연봉"){
                return [0, 0, 1]
            }
        }
        else if(fromValue==="주급"){
            if(toValue==="시급"){
                return [1, 1, 0]
            }
            else if(toValue==="일급"){
                return [0, 1, 0]
            }
            else if(toValue==="월급"){
                return [0, 1, 1]
            }
            else if(toValue==="연봉"){
                return [0, 1, 1]
            }
        }
        else if(fromValue==="월급"){
            if(toValue==="시급"){
                return [1, 0, 1]
            }
            else if(toValue==="일급"){
                return [0, 0, 1]
            }
            else if(toValue==="주급"){
                return [0, 1, 1]
            }
            else if(toValue==="연봉"){
                return [0, 0, 0]
            }
        }
        else if(fromValue==="연봉"){
            if(toValue==="시급"){
                return [1, 0, 1]
            }
            else if(toValue==="일급"){
                return [0, 0, 1]
            }
            else if(toValue==="주급"){
                return [0, 1, 1]
            }
            else if(toValue==="월급"){
                return [0, 0, 0]
            }
        }
    }


    static doCalcul (fromValue, toValue, payValue, dayValue, weekValue, monthValue) { //계산하기 버튼 누를 때 실행되게
        var result = 0;

        if(fromValue===toValue){
            //alert("fromValue와 toValue가 같습니다.")
            return result
        }
        
        if(fromValue==="시급"){
            if(toValue==="일급"){
                result = payValue * dayValue;
                return result
            }
            else if(toValue==="주급"){
                result = payValue * dayValue * weekValue;
                return result
            }
            else if(toValue==="월급"){
                result = payValue * dayValue * monthValue;
                return result
            }
            else if(toValue==="연봉"){
                result = payValue * dayValue * monthValue * 12;
                return result
            }
        }
        else if(fromValue==="일급"){
            if(toValue==="시급"){
                result = payValue / dayValue;
                result = Math.round(result);
                return result
            }
            else if(toValue==="주급"){
                result = payValue * weekValue;
                return result
            }
            else if(toValue==="월급"){
                result = payValue * monthValue;
                return result
            }
            else if(toValue==="연봉"){
                result = payValue * monthValue * 12;
                return result
            }
        }
        else if(fromValue==="주급"){
            if(toValue==="시급"){
                result = payValue / (dayValue * weekValue);
                result = Math.round(result);
                return result
            }
            else if(toValue==="일급"){
                result = payValue / weekValue;
                result = Math.round(result);
                return result
            }
            else if(toValue==="월급"){
                result = (payValue / weekValue);
                result = Math.round(result);
                result = result * monthValue;
                return result
            }
            else if(toValue==="연봉"){
                result = (payValue / weekValue);
                result = Math.round(result);
                result = result * monthValue * 12;
                return result
            }
        }
        else if(fromValue==="월급"){
            if(toValue==="시급"){
                result = payValue / (dayValue * monthValue);
                result = Math.round(result);
                return result
            }
            else if(toValue==="일급"){
                result = payValue / monthValue;
                result = Math.round(result);
                return result
            }
            else if(toValue==="주급"){
                result = (payValue / monthValue) * weekValue;
                result = Math.round(result);
                return result
            }
            else if(toValue==="연봉"){
                result = payValue * 12;
                return result
            }
        }
        else if(fromValue==="연봉"){
            if(toValue==="시급"){
                result = payValue / (dayValue * monthValue * 12)
                result = Math.round(result);
                return result
            }
            else if(toValue==="일급"){
                result = payValue / (monthValue * 12)
                result = Math.round(result);
                return result
            }
            else if(toValue==="주급"){
                result = (payValue / (monthValue * 12)) * weekValue;
                result = Math.round(result);
                return result
            }
            else if(toValue==="월급"){
                result = payValue / 12;
                result = Math.round(result);
                return result
            }
        }

    }
}