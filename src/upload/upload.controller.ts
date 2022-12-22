import { Controller, Post, UseInterceptors, UploadedFile, Get, Res } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { join } from 'path';
import type { Response } from 'express';
import { zip } from 'compression';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) { }

  @Post('album')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file) {
    console.log(file)
    if (file) {
      return {
        code: 200,
        msg: "successfully upload"
      }
    } else {
      return {
        code: 400,
        msg: "Upload failed, please contact the administrator"
      }
    }
  }

  @Get('download')
  download(@Res() res: Response) {
    const url = join(__dirname, "../images/1671715502161.png")
    res.download(url)
  }

  @Get("stream")
  async down(@Res() res: Response) {
    const url = join(__dirname, "../images/1671715502161.png")
    const tarStream = new zip.Stream()
    await tarStream.addEntry(url)
    res.setHeader("Content-Type", "application/octet-stream")
    res.setHeader("Content-Disposition", "attachment; filename=codenhc")

    tarStream.pipe(res)
  }
}
