const HomeIntro=(props)=>{
    return(
    <div id="homeIntro">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/homeIntro.jpg" className="img-responsive" alt=""/>
          </div>
          <div className="col-xs-12 col-md-6"> 
            <div className="homeIntro-text">
              <h2 data-aos="fade-down">{props.data &&props.data.HomeIntro ? props.data.HomeIntro.title : "loading..."}</h2>
              <p data-aos="fade-up">{props.data &&props.data.HomeIntro ? props.data.HomeIntro.paragraph : "loading..."}</p>         
            </div>
          </div>
        </div>
      </div>
    </div> 
    );
}
export default HomeIntro;