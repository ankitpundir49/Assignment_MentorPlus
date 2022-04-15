import React,{Component} from "react";
class Date extends Component{
    day(year,month,dateNo){
        
        let monthCode=month==="Jan"?0:month==="Feb"?3:month==="Mar"?3:month==="Apr"?6:month==="May"?1:month==="Jun"?4
        :month==="Jul"?6:month==="Aug"?2:month==="Sep"?5:month==="oct"?0:month==="Nov"?3:5;
        
        let yearCode=(year=>"1600"||year<="1699")?6:(year=>"1700"||year<="1799")?4:(year=>"1800"||year<="1899")?2:(year=>"1900"||year<="1999")?0
        :(year=>"2000"||year<="2099")?6:4;
        
        let yearlast2Digit=year.substring(2)
        
        let dayNo=(parseInt(yearlast2Digit)+Math.floor(yearlast2Digit/4)+yearCode+monthCode+parseInt(dateNo))%7;
        
        let day=dayNo===0?"Sun":dayNo===1?"Mon":dayNo===2?"Tue":dayNo===3?"Wed":dayNo===4?"Thu":dayNo===5?"Fri":"Sat";
        return day;
    }
    render(){
        let {data,index,onDate}=this.props;
        let date=data.date;
        
        let month=date.substring(5,7)==="01"?"Jan":date.substring(5,7)==="02"?"Feb":date.substring(5,7)==="03"?"Mar":date.substring(5,7)==="04"?"Apr":date.substring(5,7)==="05"?"May":date.substring(5,7)==="06"?"Jun":
        date.substring(5,7)==="07"?"Jul":date.substring(5,7)==="08"?"Aug":date.substring(5,7)==="09"?"Sep":date.substring(5,7)==="10"?"oct":date.substring(5,7)==="11"?"Nov":"Dec";
        
        let dateNo=date.substring(8,10);
        
        let year=date.substring(0,4);
        
        return(
            <div onClick={()=>onDate(index)}>
                <h6 className="text-center pt-1">{this.day(year,month,dateNo)}</h6>
                <h1 className="text-center">{dateNo}</h1>
                <h6 className="text-center">{month}</h6>
            </div>
        )
    }

}export default Date;