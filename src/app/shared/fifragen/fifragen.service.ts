import { Injectable } from '@angular/core';
import { Fifragen } from './fifragen';

@Injectable({
  providedIn: 'root'
})
export class FifragenService {
  ffiragen: Fifragen[];
  constructor() {
    this.ffiragen = [{
      fifnr: 1,
      fifstext: '(6):Which program updates the database that is used by the locate command? (Specify ONLY the command without any path or parameters).',
      fifantworten: [
        {
          antworttext: 'udb',
          antwortrichtig: true,
          antworteingabe: false,
          gegebenetext: '',
        }
      ]
    },
    {
      fifnr: 2,
      fifstext: '(11):Which command displays the current disk space usage for all mounted file systems? (Specify ONLY the command without any path or parameters.)',
      fifantworten: [
        {
          antworttext: 'dhjhf',
          antwortrichtig: true,
          antworteingabe: false,
          gegebenetext: '',
        }
      ]
    },
    {
      fifnr: 3,
      fifstext: '(15):Which file in the /proc filesystem lists parameters passed from the bootloader to the kernel? (Specify the  file name only without any path.)',
      fifantworten: [
        {
          antworttext: 'cmdhhhline',
          antwortrichtig: true,
          antworteingabe: false,
          gegebenetext: '',
        }
      ]
    },
    {
      fifnr: 4,
      fifstext: '(41):Which program runs a command in specific intervals and refreshes the display of the program’s output? (Specify ONLY the command without any path or parameters.)',
      fifantworten: [
        {
          antworttext: 'wajjtch',
          antwortrichtig: true,
          antworteingabe: false,
          gegebenetext: '',

        }
      ]
    },
    {
      fifnr: 5,
      fifstext: '(59):Which command is used to start another command with a given nice level? (Specify ONLY the command without any path or parameters.)',
      fifantworten: [
        {
          antworttext: 'nidfsdce',
          antwortrichtig: true,
          antworteingabe: false,
          gegebenetext: '',
        }
      ]
    },
    {
      fifnr: 6,
      fifstext: '(76):Which file from the /proc/ filesystem contains a list of all currently mounted devices? (Specify the full name of the file, including path.)',
      fifantworten: [
        {
          antworttext: '/procsdfsd/mounts',
          antwortrichtig: true,
          antworteingabe: false,
          gegebenetext: '',
        }
      ]
    },
    {
      fifnr: 7,
      fifstext: '(85):Following the Filesystem Hierarchy Standard (FHS), where should binaries that have been compiled by the system administrator be placed in order to be made available to all users on the system? (Specify the full path to the directory.)', fifantworten: [
        {
          antworttext: '/usr/lsdfsdocal/bin',
          antwortrichtig: true,
          antworteingabe: false,
          gegebenetext: '',
        }
      ]
    },
    {
      fifnr: 8,
      fifstext: '(110):Which command displays a list of all background tasks running in the current shell? (Specify ONLY the command without any path or parameters.)',
      fifantworten: [
        {
          antworttext: 'jsdfobs',
          antwortrichtig: true,
          antworteingabe: false,
          gegebenetext: '',
        }
      ]
    },
    {
      fifnr: 9,
      fifstext: '(111):Which command is used to change the priority of an already running process? (Specify ONLY the command without any path or parameters.)',
      fifantworten: [
        {
          antworttext: 'sdf',
          antwortrichtig: true,
          antworteingabe: false,
          gegebenetext: '',
        }
      ]
    },
    {
      fifnr: 10,
      fifstext: '(120):Which System V init configuration file is commonly used to set the default run level? (Specify the full name of the file, including path.)',
      fifantworten: [
        {
          antworttext: '/sdfds/inittab',
          antwortrichtig: true,
          antworteingabe: false,
          gegebenetext: '',
        }
      ]
    },
    ];
  }

  getAllefifragen(): Fifragen[] {
    return this.ffiragen;
  }


}

