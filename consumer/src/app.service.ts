import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // TODO: call to demonstrate handling of long-running processes
  mySuperLongProcessOfUser(data: any) {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        console.log(`done processing ${JSON.stringify(data)}`);
        resolve();
      }, 10000);
    })
  }
}
