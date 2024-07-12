// import { useNavigate } from "react-router-dom";

// import { useState } from "react";
// const AdminAdd=()=>{
//     const navigate=useNavigate();
//     const [Tiles,setTiles]=useState({tname: "",
//     tsize: "",
//     tquantityperbox: "",
//     tpriceperbox: "",
//     tcatagory: "", 
//     timage: "",
//     tdescription: ""});

//     const categories = ["Wall Tiles", "Parking Tiles", "GVT","Porceline Tiles"];
//     return (
//         <>
//         <h1 style={{marginTop:'200px'}}>hello</h1>
//         <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//             <div className="w-50 bg-white rounded p-3">
//                     <h2>Add Product</h2>
//                     <div className="mb-2">
//                         <label htmlFor="">Tile Name</label>
//                         <input type="text" placeholder="Enter tile name" className="form-control"
//                         name="tname"
//                         value={Tiles.tname}
//                         onChange={(e)=>{setTiles({...Tiles,tname:e.target.value});
//                         }}/>
//                     </div>
//                     <div className="mb-2">
//                         <label htmlFor="">Tile size</label>
//                         <input type="text" placeholder="Enter tile size" className="form-control"
//                         name="tsize"
//                         value={Tiles.tsize}
//                         onChange={(e)=>{setTiles({...Tiles,tsize:e.target.value});
//                     }}/>
//                     </div>
//                     <div className="mb-2">
//                         <label htmlFor="">Tile quantity</label>
//                         <input type="text" placeholder="Enter tile quantity" className="form-control"
//                         name="tquantityperbox"
//                         value={Tiles.tquantityperbox}
//                        onChange={(e)=>{setTiles({...Tiles,tquantityperbox:e.target.value});
//                     }}/>
//                     </div>
//                     <div className="mb-2">
//                         <label htmlFor="">Tile price</label>
//                         <input type="text" placeholder="Enter tile price" className="form-control"
//                         name="tpriceperbox"
//                         value={Tiles.tpriceperbox}
//                         onChange={(e)=>{setTiles({...Tiles,tpriceperbox:e.target.value});
                        
//                     }}/>
//                     </div>
//                     {/* <div className="mb-2">
//                         <label htmlFor="">Tile catagory</label>
//                         <input type="text" placeholder="Enter tile catagory" className="form-control"
//                         name="tcatagory"
//                         value={Tiles.tcatagory}
//                         onChange={(e)=>{setTiles({...Tiles,tcatagory:e.target.value});
//                     }}/>
//                     </div> */}

// <div className="mb-2">
//             <label htmlFor="">Tile Catagory</label>
//             <select
//               className="form-control"
//               value={Tiles.tcatagory}
//               onChange={(e) => {
//                 setTiles({ ...Tiles, tcatagory: e.target.value });
//               }}
//             >
//               <option value="">Select catagory</option>
//               {categories.map((catagory, index) => (
//                 <option key={index} value={catagory}>
//                   {catagory}
//                 </option>
//               ))}
//             </select>
//           </div>
//                     <div className="mb-2">
//                         <label htmlFor="">Tile image</label>
//                         <input type="text" placeholder="Enter tile image" className="form-control"
//                         name="timage"
//                         value={Tiles.timage}
//                        onChange={(e)=>{setTiles({...Tiles,timage:e.target.value});
//                     }}/>
//                     </div>
//                     <div className="mb-2">
//                         <label htmlFor="">Tile description</label>
//                         <input type="text" placeholder="Enter tile description" className="form-control"
//                         name="tdescription"
//                         value={Tiles.tdescription}
//                         onChange={(e)=>{setTiles({...Tiles,tdescription:e.target.value});
//                     }}/>
//                     </div>
//                     <button type="button" className="btn btn-success"
//                     onClick={()=>{
//                             console.log("add called");
//                         fetch("http://localhost:3003/", {
//                             method: "POST",
//                             body: JSON.stringify(Tiles),
//                             headers: { 
//                               "Content-Type": "application/json"
//                             }
//                           })    
//                             .then((res) => {
//                             setTiles(Tiles);
//                               navigate("/admindisplay");
//                             });
//                         }
//                     }
//                     >
//                         Add Submit</button>
//             </div>
//         </div>
//         </>
//     );
// }
// export default AdminAdd;


import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminAdd = () => {
    const navigate = useNavigate();
    const [Tiles, setTiles] = useState({
        tname: "",
        tsize: "",
        tquantityperbox: "",
        tpriceperbox: "",
        tcatagory: "",
        timage: "",
        tdescription: ""
    });
    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
          // Convert the selected file to base64 for sending to the API
          const reader = new FileReader();
          reader.readAsDataURL(selectedFile);
          reader.onload = (e) => {
            setTiles({ ...Tiles, timage: e.target.result });
          };
        }
      };

    const categories = ["Wall Tiles", "Parking Tiles", "GVT", "Porcelain Tiles"];


    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center" style={{marginTop:'120px'}}>
            <div className="card p-4 shadow">
                <h2 className="text-center mb-4">Add Product</h2>
                <div className="mb-3">
                    <label htmlFor="tname" className="form-label">Tile Name</label>
                    <input
                        type="text"
                        id="tname"
                        className="form-control"
                        name="tname"
                        value={Tiles.tname}
                        onChange={(e) => setTiles({ ...Tiles, tname: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tsize" className="form-label">Tile Size</label>
                    <input
                        type="text"
                        id="tsize"
                        className="form-control"
                        name="tsize"
                        value={Tiles.tsize}
                        onChange={(e) => setTiles({ ...Tiles, tsize: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tquantityperbox" className="form-label">Tile Quantity</label>
                    <input
                        type="text"
                        id="tquantityperbox"
                        className="form-control"
                        name="tquantityperbox"
                        value={Tiles.tquantityperbox}
                        onChange={(e) => setTiles({ ...Tiles, tquantityperbox: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tpriceperbox" className="form-label">Tile Price</label>
                    <input
                        type="text"
                        id="tpriceperbox"
                        className="form-control"
                        name="tpriceperbox"
                        value={Tiles.tpriceperbox}
                        onChange={(e) => setTiles({ ...Tiles, tpriceperbox: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tcatagory" className="form-label">Tile catagory</label>
                    <select
                        id="tcatagory"
                        className="form-control"
                        value={Tiles.tcatagory}
                        onChange={(e) => setTiles({ ...Tiles, tcatagory: e.target.value })}
                    >
                        <option value="">Select catagory</option>
                        {categories.map((catagory, index) => (
                            <option key={index} value={catagory}>{catagory}</option>
                        ))}
                    </select>
                </div>
                {/* <div className="mb-3">
                    <label htmlFor="timage" className="form-label">Tile Image</label>
                    <input
                        type="text"
                        id="timage"
                        className="form-control"
                        name="timage"
                        value={Tiles.timage}
                        onChange={(e) => setTiles({ ...Tiles, timage: e.target.value })}
                        </div>
                    /> */}

<div className="mb-3">
          <label htmlFor="timage" className="form-label">Tile Image</label>
          <input
            type="file"
            id="timage"
            className="form-control"
            name="timage"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

                
                <div className="mb-3">
                    <label htmlFor="tdescription" className="form-label">Tile Description</label>
                    <input
                        type="text"
                        id="tdescription"
                        className="form-control"
                        name="tdescription"
                        value={Tiles.tdescription}
                        onChange={(e) => setTiles({ ...Tiles, tdescription: e.target.value })}
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                        fetch("http://localhost:3003/product", {
                            method: "POST",
                            body: JSON.stringify(Tiles),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                            .then((res) => {
                                setTiles(Tiles);
                                navigate("/login/admindisplay");
                            });
                    }}
                    style={{marginTop:'10px'}}
                >
                    Add & Submit
                </button>
            </div>
        </div>
    );
};

export default AdminAdd;
