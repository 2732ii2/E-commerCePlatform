import React, { useState } from 'react'
import StarIcon from "@mui/icons-material/Star";
import LayersIcon from "@mui/icons-material/Layers";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

export default function Item(props) {
    // console.log(props);
//    console.log(props.index, props.props, props.styles);
   var e = props.props;
   var i = props.index;
    var [trans_, settrans_] = useState({
      tra: 150,
      opa:0
    });
    if (i===0){
        return (
          <div
            style={{
              marginLeft: `-${props.styles}px`,
              transition:"all .3s",
            }}
            onMouseEnter={()=> settrans_({
              ...trans_,tra:0,opa:1
            }) }
            onMouseLeave={()=>settrans_({
              ...trans_,tra:150,opa:0
            })}
            id="item"
          >

            {/* transform: translateY(-150px); */}
            <div style={{transform:`translateY(-${trans_.tra}px)`,transition:"all .2s ease-in",opacity:`${trans_.opa}`}} id='trans_late'>

            <LayersIcon />
            <FavoriteBorderIcon />
            <RemoveShoppingCartIcon />
            </div>

            <div id="percentage">
              {e.per ? <div id="per_btn"> {e.per}% </div> : null}
            </div>
            <div id="_img_">
              <img
                id="hover_img_"
                src={e.img_}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div id="content_">
              <h2 id="ch2item_">{e.name} </h2>
              <div id="stars">
                {i === 0 ? (
                  <>
                    <StarIcon key={i + 1} style={{ color: "orange" }} />
                    <StarIcon key={i + 2} style={{ color: "orange" }} />
                    <StarIcon key={i + 3} style={{ color: "orange" }} />
                    <StarIcon key={i + 4} style={{ color: "orange" }} />
                    <StarIcon key={i + 5} style={{ color: "orange" }} />
                  </>
                ) : i === 1 ? (
                  <>
                    <StarIcon key={i + 1} style={{ color: "orange" }} />
                    <StarIcon key={i + 2} style={{ color: "orange" }} />
                    <StarIcon key={i + 3} style={{ color: "orange" }} />
                    <StarIcon key={i + 4} style={{ color: "orange" }} />
                  </>
                ) : i === 2 ? (
                  <>
                    <StarIcon key={i + 1} style={{ color: "orange" }} />
                    <StarIcon key={i + 2} style={{ color: "orange" }} />
                    <StarIcon key={i + 3} style={{ color: "orange" }} />
                  </>
                ) : i === 3 ? (
                  <>
                    <StarIcon key={i + 1} style={{ color: "orange" }} />
                    <StarIcon key={i + 2} style={{ color: "orange" }} />
                  </>
                ) : i === 4 ? (
                  <>
                    <StarIcon key={i + 1} style={{ color: "orange" }} />
                    <StarIcon key={i + 2} style={{ color: "orange" }} />
                    <StarIcon key={i + 3} style={{ color: "orange" }} />
                    <StarIcon key={i + 4} style={{ color: "orange" }} />
                    <StarIcon key={i + 5} style={{ color: "orange" }} />
                  </>
                ) : i === 5 ? (
                  <>
                    <StarIcon key={i + 1} style={{ color: "orange" }} />
                    <StarIcon key={i + 2} style={{ color: "orange" }} />
                    <StarIcon key={i + 3} style={{ color: "orange" }} />
                    <StarIcon key={i + 4} style={{ color: "orange" }} />
                    <StarIcon key={i + 5} style={{ color: "orange" }} />
                  </>
                ) : i === 6 ? (
                  <>
                    <StarIcon key={i + 1} style={{ color: "orange" }} />
                    <StarIcon key={i + 2} style={{ color: "orange" }} />
                    <StarIcon key={i + 3} style={{ color: "orange" }} />
                    <StarIcon key={i + 4} style={{ color: "orange" }} />
                    <StarIcon key={i + 5} style={{ color: "orange" }} />
                  </>
                ) : (
                  <div></div>
                )}
              </div>
              <div id="chprice"> ${e.price}.00 </div>
            </div>
          </div>
        );
    }
    else{
        return (
          <div
            onMouseEnter={() =>
              settrans_({
                ...trans_,
                tra: 0,
                opa: 1,
              })
            }
            onMouseLeave={() =>
              settrans_({
                ...trans_,
                tra: 150,
                opa: 0,
              })
            }
            id="item"
          >
            <div
              style={{
                transform: `translateY(-${trans_.tra}px)`,
                transition: "all .3s ease-in",
                opacity: `${trans_.opa}`,
              }}
              id="trans_late"
            >
              <LayersIcon style={{ fontWeight: 200, color: "black" }} />
              <FavoriteBorderIcon
                style={{ fontWeight: 200, color: "rgba(0,0,0,.9)" }}
              />
              <RemoveShoppingCartIcon
                style={{ fontWeight: 200, color: "rgba(0,0,0,.9)" }}
              />
            </div>

            <div id="percentage">
              {e.per ? <div id="per_btn"> {e.per}% </div> : null}
            </div>
            <div id="_img_">
              <img
                id="hover_img_"
                src={e.img_}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div id="content_">
              <h2 id="ch2item_">{e.name} </h2>
              <div id="stars">
                {i === 0 ? (
                  <>
                    <StarIcon key={i + 1} style={{ color: "orange" }} />
                    <StarIcon key={i + 2} style={{ color: "orange" }} />
                    <StarIcon key={i + 3} style={{ color: "orange" }} />
                    <StarIcon key={i + 4} style={{ color: "orange" }} />
                    <StarIcon key={i + 5} style={{ color: "orange" }} />
                  </>
                ) : i === 1 ? (
                  <>
                    <StarIcon key={i + 1} style={{ color: "orange" }} />
                    <StarIcon key={i + 2} style={{ color: "orange" }} />
                    <StarIcon key={i + 3} style={{ color: "orange" }} />
                    <StarIcon key={i + 4} style={{ color: "orange" }} />
                  </>
                ) : i === 2 ? (
                  <>
                    <StarIcon key={i + 1} style={{ color: "orange" }} />
                    <StarIcon key={i + 2} style={{ color: "orange" }} />
                    <StarIcon key={i + 3} style={{ color: "orange" }} />
                  </>
                ) : i === 3 ? (
                  <>
                    <StarIcon key={i + 1} style={{ color: "orange" }} />
                    <StarIcon key={i + 2} style={{ color: "orange" }} />
                  </>
                ) : i === 4 ? (
                  <>
                    <StarIcon key={i + 1} style={{ color: "orange" }} />
                    <StarIcon key={i + 2} style={{ color: "orange" }} />
                    <StarIcon key={i + 3} style={{ color: "orange" }} />
                    <StarIcon key={i + 4} style={{ color: "orange" }} />
                    <StarIcon key={i + 5} style={{ color: "orange" }} />
                  </>
                ) : i === 5 ? (
                  <>
                    <StarIcon key={i + 1} style={{ color: "orange" }} />
                    <StarIcon key={i + 2} style={{ color: "orange" }} />
                    <StarIcon key={i + 3} style={{ color: "orange" }} />
                    <StarIcon key={i + 4} style={{ color: "orange" }} />
                    <StarIcon key={i + 5} style={{ color: "orange" }} />
                  </>
                ) : i === 6 ? (
                  <>
                    <StarIcon key={i + 1} style={{ color: "orange" }} />
                    <StarIcon key={i + 2} style={{ color: "orange" }} />
                    <StarIcon key={i + 3} style={{ color: "orange" }} />
                    <StarIcon key={i + 4} style={{ color: "orange" }} />
                    <StarIcon key={i + 5} style={{ color: "orange" }} />
                  </>
                ) : i === 7 ? (
                  <>
                    <StarIcon key={i + 1} style={{ color: "orange" }} />
                    <StarIcon key={i + 2} style={{ color: "orange" }} />
                    <StarIcon key={i + 3} style={{ color: "orange" }} />
                    <StarIcon key={i + 4} style={{ color: "orange" }} />
                    {/* <StarIcon key={i + 5} style={{ color: "orange" }} /> */}
                  </>
                ) : i === 8 ? (
                  <>
                    <StarIcon key={i + 1} style={{ color: "orange" }} />
                    <StarIcon key={i + 2} style={{ color: "orange" }} />
                    {/* <StarIcon key={i + 3} style={{ color: "orange" }} /> */}
                    {/* <StarIcon key={i + 4} style={{ color: "orange" }} /> */}
                    {/* <StarIcon key={i + 5} style={{ color: "orange" }} /> */}
                  </>
                ) : i === 9 ? (
                  <>
                    <StarIcon key={i + 1} style={{ color: "orange" }} />
                    <StarIcon key={i + 2} style={{ color: "orange" }} />
                    <StarIcon key={i + 3} style={{ color: "orange" }} />
                  </>
                ) : i === 10 ? (
                  <>
                    <StarIcon key={i + 1} style={{ color: "orange" }} />
                    <StarIcon key={i + 2} style={{ color: "orange" }} />
                    <StarIcon key={i + 3} style={{ color: "orange" }} />
                    <StarIcon key={i + 4} style={{ color: "orange" }} />
                    <StarIcon key={i + 5} style={{ color: "orange" }} />
                  </>
                ) : i === 11 ? (
                  <>
                    <StarIcon key={i + 1} style={{ color: "orange" }} />
                    <StarIcon key={i + 2} style={{ color: "orange" }} />
                  </>
                ) : i === 12 ? (
                  <>
                    <StarIcon key={i + 1} style={{ color: "orange" }} />
                    <StarIcon key={i + 2} style={{ color: "orange" }} />
                    <StarIcon key={i + 3} style={{ color: "orange" }} />
                    <StarIcon key={i + 4} style={{ color: "orange" }} />
                  </>
                ) : (
                  <div></div>
                )}
              </div>
              <div id="chprice"> ${e.price}.00 </div>
            </div>
          </div>
        );
    }

  
}
