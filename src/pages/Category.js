import { useMatch } from "react-router-dom";
import NotFound from "./NotFound";

export default function Category() {
  const {params}=useMatch("/categories/:slug/");

  const categories = [
    {id:1,name:" Keyboards", slug:"keyboards"},
    {id:2,name:"Mice", slug:"mice"},
    {id:3,name:"Headphones",slug:"headphones"},
    {id:4,name:"Joysticks and Gamepads", slug:"joysticks-and-gamepads"},
    {id:5,name:"Rugs",slug:"rugs"},
    {id:6,name:"Graphic tablets",slug:"graphic-tablets"},
    {id:7,name:"Computers and Laptops",slug:"computers-and-laptops"},
  ];

  const category = categories.find( 
    (category) => category.slug===params.slug
    );

  if (!category) {
    return <NotFound/>
  }
  
  return(
    <div className="Category">
    <h1>{category.name}</h1>
    </div>
  );
}