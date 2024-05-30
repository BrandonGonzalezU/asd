using Microsoft.AspNetCore.Mvc;
using ShapeCrawler;

namespace webApi.Controllers.PPTX
{

  [Route("api/[controller]")]
  public class PptxController : Controller
  {
    [HttpGet]
    [Route("GetPptx")]
    public IActionResult GetPptx()
    {
      // create a new presentation
      var pres = new Presentation();

      var shapes = pres.Slides[0].Shapes;

      // add new shape
      shapes.AddRectangle(x: 50, y: 60, width: 100, height: 70);
      var addedShape = shapes.Last();

      addedShape.TextFrame!.Text = "Grupo Jauart";
      string path = Environment.CurrentDirectory + "/docs/my_pres.pptx";
      pres.SaveAs(path);

      if (System.IO.File.Exists(path))
      {
          return File(System.IO.File.OpenRead(path), "application/octet-stream", Path.GetFileName(path));
      }

      return NotFound();

    }

    [HttpGet]
    [Route("GetPptxEdited")]
    public IActionResult GetPptxEdited()
    {
      var pres = new Presentation(Environment.CurrentDirectory + "/docs/pres.pptx");

      var shapes = pres.Slides[8].Shapes;

      // get number of shapes on slide
      var shapesCount = shapes.Count;

      // get text
      var shape = shapes.ElementAt(35);
      shape.TextFrame!.Text = "ELEMENTO EDITADO JAUART";
      var text = shape.TextFrame!.Text;

      //// add new shape
      //shapes.AddRectangle(x: 50, y: 60, width: 100, height: 70);
      //var addedShape = shapes.Last();

      //addedShape.TextFrame!.Text = "Grupo Jauart";
      string path = Environment.CurrentDirectory + "/docs/my_pres.pptx";
      pres.SaveAs(path);

      if (System.IO.File.Exists(path))
      {
        return File(System.IO.File.OpenRead(path), "application/octet-stream", Path.GetFileName(path));
      }

      return NotFound();

    }
  }
}
