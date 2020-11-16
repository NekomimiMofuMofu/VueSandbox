using Microsoft.AspNetCore.Mvc;

namespace HelloWorldAPI.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class HelloWorldController : ControllerBase {
        public string Get() {
            return "Hello World";
        }
    }
}