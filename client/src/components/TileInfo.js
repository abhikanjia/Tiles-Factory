// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function TileInfo (){
	
//     let params = useParams();
// 	const [tile, setTile] = useState({});

// 	useEffect(() => {
// 		fetch(`http://localhost:3003/${params.id}`, {
// 			method: "GET"
// 		})
// 			.then((res) => {
// 				return res.json();
// 			})
// 			.then((res) => {
// 				setTile(res);
// 			});
// 	},[params.id]);
//     return(
//     <>
// 	<h1 style={{marginTop:'200px'}}>hello</h1>
//     <img
// 				src={tile.timage}
// 				className="rounded mx-auto d-block"
// 				alt="..."
// 			/>
// 			<div className="d-grid gap-3 rounded-5 shadow-sm p-3 mb-5 bg-body rounded my-3 col-6 mx-auto">
// 				<div className="input-group">
// 					<span className="input-group-text">Tile Name</span>
// 					<input
// 						type="text"
// 						value={tile.tname}
// 						aria-label="First name"
// 						className="form-control"
// 					/>
// 				</div>
// 				<div className="input-group">
// 					<span className="input-group-text">Tile Size</span>
// 					<input
// 						type="text"
// 						value={tile.tsize}
// 						aria-label="First name"
// 						className="form-control"
// 					/>
// 				</div>
// 				<div className="input-group">
// 					<span className="input-group-text">Quantity</span>
// 					<input
// 						type="text"
// 						value={tile.tquantityperbox}
// 						aria-label="First name"
// 						className="form-control"
// 					/>
// 				</div>
// 				<div className="input-group">
// 					<span className="input-group-text">price</span>
// 					<input
// 						type="text"
// 						value={tile.tpriceperbox}
// 						aria-label="First name"
// 						className="form-control"
// 					/>
// 				</div>
// 				<div className="input-group">
// 					<span className="input-group-text">catagory</span>
// 					<input
// 						type="text"
// 						value={tile.tcatagory}
// 						aria-label="First name"
// 						className="form-control"
// 					/>
// 				</div>
// 			</div>
//     </>
//     );
// }
// export default TileInfo;




import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TileInfo() {
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
  
  const [Tiles,setTiles]=useState({tname: "",
    tsize: "",
    tquantityperbox: "",
    tpriceperbox: "",
    tcatagory: "", 
    timage: "",
    tdescription: ""});
  return (
    <>
     <div className="container mt-5 d-flex justify-content-center" 
   style={{ marginTop: "120px" }}>
    <div className="col-md-12">
    <h1 className="text-center mb-4">Tile Information</h1>
    <div className="mb-3">
            {/* Displaying actual image */}
            <img style={{marginLeft:"450px",width: "200px", height: "200px", overflow: "hidden"}}src={Tiles.timage} alt="Tile" className="img-fluid" />
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
                        value={Tiles.timage}
                    />
                    </div> */}
                    <div className="mb-3">
                        <label htmlFor="">Tile description</label>
                        <input type="text" placeholder="Enter tile description" className="form-control"
                        value={Tiles.tdescription}
                    />
                    </div>
        </div>
        </div>
    </>
  );
}
export default TileInfo;

