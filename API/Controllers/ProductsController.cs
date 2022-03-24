using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        private readonly StoreContext _context;

        public ProductsController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();

            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            //var products = await context.Products.ToListAsync();
            
            //instead of irriterating i could have used .find(id)
            //var product = products.First(item => item.id == id);
           return await _context.Products.FindAsync(id);
        }
    }
}