using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ASPNET_with_React.Models;

namespace ASPNET_with_React.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpleadoController : ControllerBase
    {

        private readonly CoreReactTestContext _dbContext;

        public EmpleadoController(CoreReactTestContext context)
        {
            _dbContext = context;
        }

        [HttpGet]
        [Route("ObtenerEmpleado")]
        public IActionResult ObtenerEmpleado()
        {
            List<Empleado> listaE = _dbContext.Empleados.ToList();

            return StatusCode(StatusCodes.Status200OK, listaE);
        }

    }
}
