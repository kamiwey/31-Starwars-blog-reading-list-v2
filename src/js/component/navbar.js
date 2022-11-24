import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
//import { TiDelete } from "react-icons/ti";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="sticky-top">
        <nav className="navBar1 navbar navbar-expand-lg  ">
          <div className="container-fluid ">
            <div className="col-1"></div>
            <Link className="col-10 text-center" to="/">
              <img
                className="logoNavBar"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Star_Wars_Yellow_One_Line_Logo.svg/800px-Star_Wars_Yellow_One_Line_Logo.svg.png?20140504225120"
              />
            </Link>


            <div className="btn-group dropstart">
  			      <button 
                className="btn btn-lg btn-outline-light dropdown-toggle me-5"
                type="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
                >
    		          Favorites {store.favorites.length}
                  
			        </button>
  			      <ul className="dropContainer dropdown-menu dropdown-menu-end">
				        {store.favorites.map((item,i) => {
				          return (
					          <li key={i}><a className="delFavItemBtn dropdown-item d-flex justify-content-between">
						        {item} <button className="delFavBtn btn btn-outline-dark border-0 btn-sm" > <i className="fa-solid fa fa-trash" onClick={()=> actions.deleteFavorites(i)}></i></ button>
						</a>
					</li>
					)
				})
				}
  			</ul>
  		</div>





          </div>
        </nav>
        {/* Segundo NAV */}
        <nav className="navBar2 navbar  ">
          <div className="container-fluid  d-flex justify-content-center">
            <li className="me-3 nav-item  ">
              <Link   
			  	to="/characters"
			  	className="linkToView"
			  >
                Characters
              </Link>
            </li>
            <li className="me-3 nav-item ">
              <Link className="linkToView" to="/planets">
                Planets
              </Link>
            </li>
            <li className="me-3 nav-item ">
              <Link className="linkToView" to="/vehicles">
                Vehicles
              </Link>
            </li>
          </div>
        </nav>
      </div>
    </>
  );
};
