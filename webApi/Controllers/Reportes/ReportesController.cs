using ClosedXML.Excel;
using DocumentFormat.OpenXml.Spreadsheet;
using Microsoft.AspNetCore.Mvc;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using System.IO;
using System.Net;
using ExcelPlus = OfficeOpenXml;

namespace webApi.Controllers.Reportes
{
  [Route("api/[controller]")]
  public class ReportesController : Controller
  {
    [HttpGet]
    [Route("GetExcel")]
    public IActionResult GetExcel()
    {
      try
      {
        string name = "/Pioneer";
        string extension = ".xlsx";
        string path = Environment.CurrentDirectory + "/docs/POS/" + name + extension;
        
        using (FileStream fs = System.IO.File.Open(path, FileMode.Open, FileAccess.ReadWrite, FileShare.None))
        {
          using (var package = new ExcelPlus.ExcelPackage(fs))
          {
            var workBook = package.Workbook;
            if (workBook != null)
            {
              if (workBook.Worksheets.Count > 0)
              {
                var hoja = workBook.Worksheets[1];
                workBook.Worksheets.Add("GRUPO JAUART");
                hoja = workBook.Worksheets[workBook.Worksheets.Count() - 1];
                //var startD = hoja.Dimension.Start;
                //var endD = hoja.Dimension.End;

                //hoja.Cells[8, 1].Value = "EDITADO JAUART";
                //hoja.Cells[8, 2].Value = "EDITADO JAUART";
                //hoja.Cells[8, 3].Value = "EDITADO JAUART";
                //hoja.Cells[8, 4].Value = "EDITADO JAUART";
                //hoja.Cells[8, 5].Value = "EDITADO JAUART";
                //hoja.Cells[8, 6].Value = "EDITADO JAUART";
                //hoja.Cells[8, 7].Value = "EDITADO JAUART";
                //hoja.Cells[8, 8].Value = "EDITADO JAUART";
                //hoja.Cells[8, 9].Value = "EDITADO JAUART";

                //hoja.Cells[9, 1].Value = "EDITADO JAUART";
                //hoja.Cells[9, 2].Value = "EDITADO JAUART";
                //hoja.Cells[9, 3].Value = "EDITADO JAUART";
                //hoja.Cells[9, 4].Value = "EDITADO JAUART";
                //hoja.Cells[9, 5].Value = "EDITADO JAUART";
                //hoja.Cells[9, 6].Value = "EDITADO JAUART";
                //hoja.Cells[9, 7].Value = "EDITADO JAUART";
                //hoja.Cells[9, 8].Value = "EDITADO JAUART";
                //hoja.Cells[9, 9].Value = "EDITADO JAUART";

                //hoja.Cells[10, 11].Value = "EDITADO JAUART";
                //hoja.Cells[10, 12].Value = "EDITADO JAUART";
                //hoja.Cells[10, 13].Value = "EDITADO JAUART";
                //hoja.Cells[10, 14].Value = "EDITADO JAUART";
                //hoja.Cells[10, 15].Value = "EDITADO JAUART";
                //hoja.Cells[10, 16].Value = "EDITADO JAUART";
                //hoja.Cells[10, 17].Value = "EDITADO JAUART";
                //hoja.Cells[10, 18].Value = "EDITADO JAUART";
                //hoja.Cells[10, 19].Value = "EDITADO JAUART";

                //hoja.Cells[11, 1].Value = "EDITADO JAUART";
                //hoja.Cells[11, 2].Value = "EDITADO JAUART";
                //hoja.Cells[11, 3].Value = "EDITADO JAUART";
                //hoja.Cells[11, 4].Value = "EDITADO JAUART";
                //hoja.Cells[11, 5].Value = "EDITADO JAUART";
                //hoja.Cells[11, 6].Value = "EDITADO JAUART";
                //hoja.Cells[11, 7].Value = "EDITADO JAUART";
                //hoja.Cells[11, 8].Value = "EDITADO JAUART";
                //hoja.Cells[11, 9].Value = "EDITADO JAUART";

                //hoja.Cells[12, 1].Value = "EDITADO JAUART";
                //hoja.Cells[12, 2].Value = "EDITADO JAUART";
                //hoja.Cells[12, 3].Value = "EDITADO JAUART";
                //hoja.Cells[12, 4].Value = "EDITADO JAUART";
                //hoja.Cells[12, 5].Value = "EDITADO JAUART";
                //hoja.Cells[12, 6].Value = "EDITADO JAUART";
                //hoja.Cells[12, 7].Value = "EDITADO JAUART";
                //hoja.Cells[12, 8].Value = "EDITADO JAUART";
                //hoja.Cells[12, 9].Value = "EDITADO JAUART";

                //hoja.Cells[13, 1].Value = "EDITADO JAUART";
                //hoja.Cells[13, 2].Value = "EDITADO JAUART";
                //hoja.Cells[13, 3].Value = "EDITADO JAUART";
                //hoja.Cells[13, 4].Value = "EDITADO JAUART";
                //hoja.Cells[13, 5].Value = "EDITADO JAUART";
                //hoja.Cells[13, 6].Value = "EDITADO JAUART";
                //hoja.Cells[13, 7].Value = "EDITADO JAUART";
                //hoja.Cells[13, 8].Value = "EDITADO JAUART";
                //hoja.Cells[13, 9].Value = "EDITADO JAUART";     }}
                string newNameFile = Environment.CurrentDirectory + "/docs/POS/" + name + "EDT" + extension;
                package.SaveAs(newNameFile);
                var resultF = File(System.IO.File.OpenRead(newNameFile), "application/octet-stream", Path.GetFileName(path));

                return resultF;
              }
              else throw new Exception("NO Sheets");
            }
            else throw new Exception("NO Workbook");
          }
        }
          
      }  catch (Exception ex)
      {
        throw ex;
      }
     
    }

    [HttpGet]
    [Route("GetNPOIexcel")]
    public IActionResult GetNPOIexcel()
    {
      try
      {
        string name = "/Pioneer";
        string extension = ".xlsx";
        string path = Environment.CurrentDirectory + "/docs/POS/" + name + extension;

        using (FileStream fs = System.IO.File.Open(path, FileMode.Open, FileAccess.ReadWrite, FileShare.ReadWrite))
        {
          using (IWorkbook workbook = new XSSFWorkbook())
          {

            //ISheet sheet1 = workbook.CreateSheet("Sheet1");
            if (workbook != null)
            {
              workbook.CreateSheet("GRUPO JAUART");
              if (workbook.NumberOfSheets > 0)
              {
                //var hoja = workbook.GetSheetAt(workbook.NumberOfSheets - 1);
                //w
                //var startD = hoja.Dimension.Start;
                //var endD = hoja.Dimension.End;

                string newNameFile = Environment.CurrentDirectory + "/docs/POS/" + name + "EDT" + extension;
                using (var f = new FileStream(newNameFile, FileMode.Create, FileAccess.Write, FileShare.ReadWrite))
                {
                  workbook.Write(f);
                }
                var resultF = File(System.IO.File.OpenRead(newNameFile), "application/octet-stream", Path.GetFileName(path));

                return resultF;
              }
              else throw new Exception("No Sheets");
            }
            else throw new Exception("No Workbook");
          }
        }
      }
      catch (Exception ex)
      {
        throw ex;
      }

    }

    [HttpGet]
    [Route("GetClosedXMLexcel")]
    public IActionResult GetClosedXMLexcel()
    {
      try
      {
        string name = "/Pioneer";
        string extension = ".xlsx";
        string path = Environment.CurrentDirectory + "/docs/POS/" + name + extension;

        using (FileStream fs = System.IO.File.Open(path, FileMode.Open, FileAccess.ReadWrite, FileShare.ReadWrite))
        {
          using(var workbook = new XLWorkbook(fs))
          {

            //ISheet sheet1 = workbook.CreateSheet("Sheet1");
            if (workbook != null)
            {
              workbook.Worksheets.Add("GRUPO JAUART");
              if (workbook.Worksheets.Count > 0)
              {
                string newNameFile = Environment.CurrentDirectory + "/docs/POS/" + name + "EDT" + extension;
                workbook.SaveAs(newNameFile);

                var resultF = File(System.IO.File.OpenRead(newNameFile), "application/octet-stream", Path.GetFileName(path));

                return resultF;
              }
              else throw new Exception("No Sheets");
            }
            else throw new Exception("No Workbook");
          }
        }
      }
      catch (Exception ex)
      {
        throw ex;
      }

    }

  }
}
