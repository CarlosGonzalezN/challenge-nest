import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class ErrorFilter implements ExceptionFilter {
  catch(error: Error, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const status = this.getHttpStatus(error);

    response.status(status).json({
      statusCode: status,
      message: error.message || 'Internal server error',
    });
  }

  private getHttpStatus(error: Error): number {
    if (error instanceof HttpException) {
      return error.getStatus();
    } else {
      return HttpStatus.INTERNAL_SERVER_ERROR;
    }
  }
}
