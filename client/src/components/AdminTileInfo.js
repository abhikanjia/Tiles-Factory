import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function AdminTileInfo() {
  let params = useParams();

  useEffect(() => {
  	fetch("http://localhost:3003/product/" + params.id, {
  		method: "GET"
  	})
  		.then((res) => {
  			return res.json();
  		})
  		.then((res) => {
  			setTiles(res);
  		});
  },[params.id]);
  const navigate = useNavigate();
  
  const [Tiles,setTiles]=useState({tname: "",
    tsize: "",
    tquantityperbox: "",
    tpriceperbox: "",
    tcatagory: "", 
    timage: "",
    tdescription: ""});

  const handleEdit=(id)=>{
    // alert(id);
    navigate("/product/edit/" + id);
  }
  const handleDelete=(id)=>{  
   const confirmDelete= window.confirm("are you sure you want to delete the product??");
    if(confirmDelete){
    fetch(
      "http://localhost:3003/product/"+id,
      {
        method: "DELETE",
      }
    ).then((res) => {
       navigate("/login/admindisplay");
    });
   }
   else{
    //user cancel
   }
  }
  return (
    <>
     <div className="container mt-5 d-flex justify-content-center" 
   style={{ marginTop: "120px" }}>
    <div className="col-md-12">
    <h1 className="text-center mb-4">Tile Information</h1>
    <div className="mb-3">
            {/* Displaying actual image */}
            <img style={{marginLeft:"435px",width: "200px", height: "200px", overflow: "hidden"}}src={Tiles.timage} alt="Tile" className="img-fluid" />
          </div>
                    <div className="mb-3">
                        <label htmlFor="">Tile Name</label>
                        <input type="text" placeholder="Enter tile name" className="form-control"
                        value={Tiles.tname}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Tile size</label>
                        <input type="text" placeholder="Enter tile size" className="form-control"
                        value={Tiles.tsize}
                    />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Tile quantity</label>
                        <input type="text" placeholder="Enter tile quantity" className="form-control"
                        value={Tiles.tquantityperbox}
                    />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Tile price</label>
                        <input type="text" placeholder="Enter tile price" className="form-control"
                        value={Tiles.tpriceperbox}
                    />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Tile catagory</label>
                        <input type="text" placeholder="Enter tile catagory" className="form-control"
                        value={Tiles.tcatagory}
                      />
                    </div>
                     {/* <div className="mb-3">
                        <label htmlFor="">Tile image</label>
                        <input type="text" placeholder="Enter tile image" className="form-control"
                        value={Tiles.timage}/>
                        </div> */}
                    <div className="mb-3">
                        <label htmlFor="">Tile description</label>
                        <input type="text" placeholder="Enter tile description" className="form-control"
                        value={Tiles.tdescription}
                    />
                    </div>
                    
        <div className="d-grid gap-2 col-6 mx-auto" style={{marginTop:'10px'}}>
          <button className="btn btn-primary" onClick={(e)=>handleEdit(Tiles._id)} style={{marginRight:'10px'}}>Edit</button>
          <button className="btn btn-danger" onClick={(e)=>handleDelete(Tiles._id)}>Delete</button>
        </div>  
        </div>
        </div>
    </>
  );
}
export default AdminTileInfo;
