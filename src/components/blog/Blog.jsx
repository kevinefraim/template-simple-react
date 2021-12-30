import blogImg1 from "../../img/blog1.jpg";
import blogImg2 from "../../img/blog2.jpg";
import "./blog.css";
const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-item">
        <h4 className=" p-2">
          Episodio "Especial de Noche de Brujas VII", Octubre 27, 1996
        </h4>
        <img src={blogImg1} alt="blog-img-1" className="blog-img p-2" />
        <p className="m-0 p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          veritatis commodi voluptatum reprehenderit id aut unde eos facilis.
          Fugiat quaerat odio dicta! Quod nam saepe nostrum in, consequatur quae
          esse suscipit aliquam magnam, voluptatem veniam labore. Corporis sint
          maiores dignissimos optio tempore dolorem neque nesciunt deserunt,
          pariatur, architecto, labore nemo distinctio excepturi magni numquam
          velit eius ducimus sed! Rem aut ducimus, beatae maxime esse adipisci
          ullam vitae officia? Neque, reprehenderit. Ducimus, doloribus
          temporibus. Consequuntur facere nesciunt, enim culpa earum, mollitia
          quasi facilis voluptas provident architecto similique fugiat
          asperiores magnam molestiae impedit, ex exercitationem vel corrupti
          obcaecati. Aliquid ipsam assumenda cupiditate!
        </p>
      </div>
      <div className="blog-item">
        <h4 className="p-2">Episodio "Lucha Educativa", Abril 16, 1995</h4>
        <img src={blogImg2} alt="blog-img-1" className="blog-img p-2" />
        <p className="m-0 p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          veritatis commodi voluptatum reprehenderit id aut unde eos facilis.
          Fugiat quaerat odio dicta! Quod nam saepe nostrum in, consequatur quae
          esse suscipit aliquam magnam, voluptatem veniam labore. Corporis sint
          maiores dignissimos optio tempore dolorem neque nesciunt deserunt,
          pariatur, architecto, labore nemo distinctio excepturi magni numquam
          velit eius ducimus sed! Rem aut ducimus, beatae maxime esse adipisci
          ullam vitae officia? Neque, reprehenderit. Ducimus, doloribus
          temporibus. Consequuntur facere nesciunt, enim culpa earum, mollitia
          quasi facilis voluptas provident architecto similique fugiat
          asperiores magnam molestiae impedit, ex exercitationem vel corrupti
          obcaecati. Aliquid ipsam assumenda cupiditate!
        </p>
      </div>
    </div>
  );
};

export default Blog;
