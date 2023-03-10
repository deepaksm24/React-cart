import "./style.css";



export default function App() {

  //props
  return (
    <div className="App">

<Detailsfree
        access="Free"
        value="₨ 0"
        mark = "✔️"
        markno = "❌"
      />

      <Detailsplus
        access="Plus"
        value="₨ 999"
        mark = "✔️"
        markno = "❌"
      />

      <Detailspro
        access="Pro"
        value="₨ 1999"
        mark = "✔️"
        markno = "❌"
      />

    </div>
  );
}




function Detailsfree(props) {
  return (
    <div className="card">
      <h5>
        <span className="access">{props.access}</span>
      </h5>
      <h6 className="card-price">{props.value}<span className="period">/month</span></h6>
      <hr/>
      <Listdetail mark={props.mark} markno={props.markno}/>
      <button type="button">Subscribe</button>

      <p>{}</p>
    </div>
  );
}

function Detailsplus(props) {
  return (

    <div className="card">
      <h5>
        <span className="access">{props.access}</span>
      </h5>
      <h6 className="card-price">{props.value}<span className="period">/month</span></h6>
      <hr/>
      <Listdetailplus mark={props.mark} markno={props.markno}/>
      <button type="button">Subscribe</button>

    </div>
  );
}




function Detailspro(props) {
  return (
    <div className="card">
      <h5>
        <span className="access">{props.access}</span>
      </h5>
      <h6 className="card-price">{props.value}<span className="period">/month</span></h6>
      <hr/>
      <Listdetailpro mark={props.mark} markno={props.markno}/>
      <button type="button">Subscribe</button>

      <p>{}</p>
    </div>
  );
}



function Listdetail (props){

return(
<div className="list">
<ul className="fa-ul">
              <li className="text-ok"><span className="fa-li">{props.mark}</span>Single User</li>
              <li className="text-ok"><span className="fa-li">{props.mark}<i className="fas fa-check"></i></span>5GB Storage</li>
              <li className="text-ok"><span className="fa-li">{props.mark}<i className="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li className="text-ok"><span className="fa-li">{props.mark}<i className="fas fa-check"></i></span>Community Access</li>
              <li className="text-muted">{props.markno}<span className="fa-li"><i className="fas fa-times"></i></span>Unlimited Private Projects</li>
              <li className="text-muted">{props.markno}<span className="fa-li"><i className="fas fa-times"></i></span>Dedicated Phone Support</li>
              <li className="text-muted">{props.markno}<span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain</li>
              <li className="text-muted">{props.markno}<span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status Reports</li>
</ul>

</div>
);
}

function Listdetailplus (props){

  return(
  <div className="list">
  <ul className="fa-ul">
                <li className="text-ok"><span className="fa-li">{props.mark}</span>5 Users</li>
                <li className="text-ok"><span className="fa-li">{props.mark}<i className="fas fa-check"></i></span>50GB Storage</li>
                <li className="text-ok"><span className="fa-li">{props.mark}<i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                <li className="text-ok"><span className="fa-li">{props.mark}<i className="fas fa-check"></i></span>Community Access</li>
                <li className="text-ok">{props.mark}<span className="fa-li"><i className="fas fa-times"></i></span>Unlimited Private Projects</li>
                <li className="text-ok">{props.mark}<span className="fa-li"><i className="fas fa-times"></i></span>Dedicated Phone Support</li>
                <li className="text-ok">{props.mark}<span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain</li>
                <li className="text-muted">{props.markno}<span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status Reports</li>
  </ul>
 
  </div>
  );
  }

  function Listdetailpro (props){

    return(
    <div className="list">
    <ul className="fa-ul">
                  <li className="text-ok"><span className="fa-li">{props.mark}</span>Unlimited Users</li>
                  <li className="text-ok"><span className="fa-li">{props.mark}<i className="fas fa-check"></i></span>150GB Storage</li>
                  <li className="text-ok"><span className="fa-li">{props.mark}<i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                  <li className="text-ok"><span className="fa-li">{props.mark}<i className="fas fa-check"></i></span>Community Access</li>
                  <li className="text-ok">{props.mark}<span className="fa-li"><i className="fas fa-times"></i></span>Unlimited Private Projects</li>
                  <li className="text-ok">{props.mark}<span className="fa-li"><i className="fas fa-times"></i></span>Dedicated Phone Support</li>
                  <li className="text-ok">{props.mark}<span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain</li>
                  <li className="text-ok">{props.mark}<span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status Reports</li>
    </ul>
    
    </div>
    );
    }