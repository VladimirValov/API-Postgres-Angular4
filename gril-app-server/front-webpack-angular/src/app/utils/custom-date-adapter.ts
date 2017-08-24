import { NativeDateAdapter } from "@angular/material";


export class CustomDateAdapter extends NativeDateAdapter {

     parse(value: any): Date | null {

      // console.log(value);

    if ((typeof value === 'string') && (value.indexOf('.') > -1)) {
      const str = value.split('.');

      // console.log('split', value);

      const year = Number(str[2]);
      const month = Number(str[1]) - 1;
      const date = Number(str[0]);
      let tmzo = new Date(year, month, date).getTimezoneOffset();
      tmzo = tmzo <= 0 ? 0 : 1;

      return new Date(Date.UTC(year, month, date + tmzo));
    }
    const timestamp = typeof value === 'number' ? value : Date.parse(value);
    return isNaN(timestamp) ? null : new Date(timestamp);
  }
}
