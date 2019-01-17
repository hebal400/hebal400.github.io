export default class Calculation {
    static test (fromValue, toValue) {
        if(fromValue===toValue){
            alert("fromValue와 toValue가 같습니다.")
        }
        
        if(fromValue==="시급"){
            if(toValue==="일급"){
                return "시급-일급 form 렌더링"
            }
            else if(toValue==="주급"){
                return "시급-주급 form 렌더링"
            }
            else if(toValue==="월급"){
                return "시급-월급 form 렌더링"
            }
            else if(toValue==="연봉"){
                return "시급-연봉 form 렌더링"
            }
        }
        else if(fromValue==="일급"){
            if(toValue==="시급"){
                return "일급-시급 form 렌더링"
            }
            else if(toValue==="주급"){
                return "일급-주급 form 렌더링"
            }
            else if(toValue==="월급"){
                return "일급-월급 form 렌더링"
            }
            else if(toValue==="연봉"){
                return "일급-연봉 form 렌더링"
            }
        }
        else if(fromValue==="주급"){
            if(toValue==="시급"){
                return "주급-시급 form 렌더링"
            }
            else if(toValue==="일급"){
                return "주급-일급 form 렌더링"
            }
            else if(toValue==="월급"){
                return "주급-월급 form 렌더링"
            }
            else if(toValue==="연봉"){
                return "주급-연봉 form 렌더링"
            }
        }
        else if(fromValue==="월급"){
            if(toValue==="시급"){
                return "월급-시급 form 렌더링"
            }
            else if(toValue==="일급"){
                return "월급-일급 form 렌더링"
            }
            else if(toValue==="주급"){
                return "월급-주급 form 렌더링"
            }
            else if(toValue==="연봉"){
                return "월급-연봉 form 렌더링"
            }
        }
        else if(fromValue==="연봉"){
            if(toValue==="시급"){
                return "연봉-시급 form 렌더링"
            }
            else if(toValue==="일급"){
                return "연봉-일급 form 렌더링"
            }
            else if(toValue==="주급"){
                return "연봉-주급 form 렌더링"
            }
            else if(toValue==="월급"){
                return "연봉-월급 form 렌더링"
            }
        }
    }


    static test2 (fromValue, toValue) { //계산하기 버튼 누를 때 실행되게
        if(fromValue===toValue){
            return "fromValue와 toValue가 같습니다."
        }
        
        if(fromValue==="시급"){
            if(toValue==="일급"){
                return "시급-일급 form 렌더링"
            }
            else if(toValue==="주급"){
                return "시급-주급 form 렌더링"
            }
            else if(toValue==="월급"){
                return "시급-월급 form 렌더링"
            }
            else if(toValue==="연봉"){
                return "시급-연봉 form 렌더링"
            }
        }
        else if(fromValue==="일급"){
            if(toValue==="시급"){
                return "일급-시급 form 렌더링"
            }
            else if(toValue==="주급"){
                return "일급-주급 form 렌더링"
            }
            else if(toValue==="월급"){
                return "일급-월급 form 렌더링"
            }
            else if(toValue==="연봉"){
                return "일급-연봉 form 렌더링"
            }
        }
        else if(fromValue==="주급"){
            if(toValue==="시급"){
                return "주급-시급 form 렌더링"
            }
            else if(toValue==="일급"){
                return "주급-일급 form 렌더링"
            }
            else if(toValue==="월급"){
                return "주급-월급 form 렌더링"
            }
            else if(toValue==="연봉"){
                return "주급-연봉 form 렌더링"
            }
        }
        else if(fromValue==="월급"){
            if(toValue==="시급"){
                return "월급-시급 form 렌더링"
            }
            else if(toValue==="일급"){
                return "월급-일급 form 렌더링"
            }
            else if(toValue==="주급"){
                return "월급-주급 form 렌더링"
            }
            else if(toValue==="연봉"){
                return "월급-연봉 form 렌더링"
            }
        }
        else if(fromValue==="연봉"){
            if(toValue==="시급"){
                return "연봉-시급 form 렌더링"
            }
            else if(toValue==="일급"){
                return "연봉-일급 form 렌더링"
            }
            else if(toValue==="주급"){
                return "연봉-주급 form 렌더링"
            }
            else if(toValue==="월급"){
                return "연봉-월급 form 렌더링"
            }
        }
    }
}