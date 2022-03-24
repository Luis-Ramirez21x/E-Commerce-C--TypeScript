using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    //gives us api 'powers'
    [ApiController]
    //we are defining our route api/products
    [Route("api/[controller]")]
    //the [controller] piece will literally take the name from the class name
    //so if you chnage the class name below the route url changes
    public class ProductsController : ControllerBase
    {
        private readonly StoreContext context;
        public ProductsController(StoreContext context)
        {
            this.context = context;
            
        }

        [HttpGet]
        public ActionResult<List<Product>> GetProducts()
        {
            var products = context.Products.ToList();

            return Ok(products);
        }

        [HttpGet("{id}")]
        public ActionResult<Product> GetProduct(int id)
        {
            var products = context.Products.ToList();
            
            //instead of irriterating i could have used .find(id)
            var product = products.First(item => item.id == id);
            if(product is null)
            {
                return NotFound("product not found");
            }

            return Ok(product);
        }
    }
}