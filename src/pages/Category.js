import { useMatch } from "react-router-dom";
import NotFound from "./NotFound";

export default function Category() {
  const {params}=useMatch("/categories/:slug/");

  const categories = [
    {id:1,name:" Keyboards", slug:"keyboards"},
    {id:2,name:"Mice", slug:"mice"},
    {id:3,name:"Headphones",slug:"headphones"},
    {id:4,name:"Joysticks ", slug:"joysticks"},
    {id:5,name:"Armchairs",slug:"armchairs"},
    {id:6,name:" Tablets",slug:"tablets"},
    {id:7,name:"Computers ",slug:"computers"},
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