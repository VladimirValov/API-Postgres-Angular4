import { NativeDateAdapter } from "@angular/material";


export class CustomDateAdapter extends NativeDateAdapter {

    // format(date: Date, displayFormat: Object): string {

    //     if (displayFormat === 'input') {
    //         const day = date.getDate();
    //         const month = date.getMonth() + 1;
    //         const year = date.getFullYear();
    //         return `${day}.${month}.${year}`;
    //     } else {
    //         return date.toDateString();
    //     }
    // }

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



// import { NativeDateAdapter, DateAdapter } from '@angular/material';

// export class CustomDateAdapter extends NativeDateAdapter {

  
//   parse(value: any): Date | null {

//     if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
//       const str = value.split('/');

//       const year = Number(str[2]);
//       const month = Number(str[1]) - 1;
//       const date = Number(str[0]);
//       let tmzo = new Date(year, month, date).getTimezoneOffset();
//       tmzo = tmzo <= 0 ? 0 : 1;

//       return new Date(Date.UTC(year, month, date + tmzo));
//     }
//     const timestamp = typeof value === 'number' ? value : Date.parse(value);
//     return isNaN(timestamp) ? null : new Date(timestamp);
//   }
  
//   createDate(year: number, month: number, date: number): Date {

//     if (month < 0 || month > 11 || date < 1) {
//       return null;
//     }

//     const result = this._customCreateDateWithOverflow(year, month, date);

//     return result;
//   }

//   private _customCreateDateWithOverflow(year: number, month: number, date: number): Date {
//     // doing this you avoid trouble with Daylight Saving Time
//     let tmzo = new Date(year, month, date).getTimezoneOffset();
//     tmzo = tmzo <= 0 ? 0 : 1;
//     const result = new Date(Date.UTC(year, month, date + tmzo));

//     // We need to correct for the fact that JS native Date treats years
//     // in range [0, 99] as abbreviations for 19xx.
//     if (year >= 0 && year < 100) {
//       result.setFullYear(this.getYear(result) - 1900);
//     }

//     return result;
//   }
// }


// export class PlunkerAppModule {
//   constructor(private dateAdapter: DateAdapter<Date>) {
//     this.dateAdapter.setLocale('pt-br');
//   }
// }
