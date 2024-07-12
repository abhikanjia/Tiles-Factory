// import { useEffect, useState } from "react";
// import { useNavigate,useParams } from "react-router-dom";

// const AdminEdit=()=>{
//     const navigate=useNavigate();
//     const params = useParams();
//     const [Tiles,setTiles]=useState({tname: "",
//     tsize: "",
//     tquantityperbox: "",
//     tpriceperbox: "",
//     tcatagory: "", 
//     timage: "",
//     tdescription: ""});

//     useEffect(()=>{
//         if (params.id !=="" && params.id!==" "){
//             fetch("http://localhost:3003/"+params.id,{
//                 method:"GET"
//             })
//             .then((res)=>{
//                 return res.json();
//             })
//             .then((res)=>{  
//                 setTiles(res);
//             });
//         }
//     },[params.id]);
  
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
                
                    
//         <div className="mb-2">
//             <label htmlFor="">Tile Catagory</label>
//             <select
//   className="form-control"
//   value={Tiles.tcatagory}
//   onChange={(e) => {
//     setTiles({ ...Tiles, tcatagory: e.target.value });
//   }}
// >
//   <option value="">Select catagory</option>
//   {categories.map((catagory, index) => (
//     <option 
//       key={index} 
//       value={catagory}
//       selected={Tiles.tcatagory === catagory} // Check if the catagory matches the state value
//     >
//       {catagory}
//     </option>
//   ))}
// </select>

//         </div>

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
//                         if(params.id !=="" && params.id!==" "){
//                             console.log(Tiles);
//                             console.log(params.id);
//                              fetch(
//                                 "http://localhost:3003/" + params.id,
//                                 {
//                                   method: "PUT",
//                                   body: JSON.stringify(Tiles),
//                                   headers: {
//                                     "Content-Type": "application/json"
//                                   }
//                                 }
//                               ).then(() => {
//                                 setTiles(Tiles);
//                                 console.log(Tiles);
//                                 navigate("/admindisplay");
//                               });
//                         }
//                     }}
//                     >
//                         Edit Submit</button>
//             </div>
//         </div>
//         </>
//     );
// }
// export default AdminEdit;



import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AdminEdit = () => {
    const navigate = useNavigate();
    const params = useParams();
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

    useEffect(() => {
        if (params.id !== "" && params.id !== " ") {
            fetch("http://localhost:3003/product/" + params.id, {
                method: "GET"
            })
                .then((res) => res.json())
                .then((res) => {
                    setTiles(res);
                });
        }
    }, [params.id]);
    const categories = ["Wall Tiles", "Parking Tiles", "GVT","Porceline Tiles"];

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center" style={{marginTop:'120px'}}>
            <div className="card p-4 shadow w-50">
                <h2 className="text-center mb-4">Edit Product</h2>
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
                            <option key={index} value={catagory}  selected={Tiles.tcatagory === catagory}>{catagory}</option>
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
                    />
                </div> */}

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
                        if (params.id !== "" && params.id !== " ") {
                            fetch(
                                "http://localhost:3003/product/" + params.id,
                                {
                                    method: "PUT",
                                    body: JSON.stringify(Tiles),
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                }
                            ).then(() => {
                                setTiles(Tiles);
                                navigate("/login/admindisplay");
                            });
                        }
                    }}
                    style={{marginTop:'10px'}}
                >
                    Edit & Submit
                </button>
            </div>
        </div>
    );
};

export default AdminEdit;


