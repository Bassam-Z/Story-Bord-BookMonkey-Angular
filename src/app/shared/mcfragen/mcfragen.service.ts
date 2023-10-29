import { Injectable } from '@angular/core';
import { Mcfragen } from './mcfragen';

@Injectable({
  providedIn: 'root',
})
export class McfragenService {
  mcfragen: Mcfragen[];

  constructor() {
    this.mcfragen = [
      {
        fmcnr: 1,
        fmctext:
          '9:Consider the following directory:drwxrwxr-x 2 root sales 4096 Jan 1 15:21 salesWhich command ensures new files created within the directory sales are owned by the group sales?(Choose two.)',
        fmcantworten: [
          {
            antworttext: 'c sales',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: 'setpol  sales',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'chgrp  sales',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'chown .sales sales',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'chmod les',
            antwortrichtig: true,
            antworteingabe: false,
          },
        ],
      },
      {
        fmcnr: 2,
        fmctext:
          '10:In order to display all currently mounted filesystems, which of the following commands could be used?(Choose two.)',
        fmcantworten: [
          {
            antworttext: 'cat mounts',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: 'fr',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'lsmo',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'mot',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: 'cat /proc/fms',
            antwortrichtig: false,
            antworteingabe: false,
          },
        ],
      },
      {
        fmcnr: 3,
        fmctext:
          '18: Which of the following statements are true about the boot sequence of a PC using a BIOS? (Choosetwo.)',
        fmcantworten: [
          {
            antworttext:
              'Some parts of tbe configured from the BIOS',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext:
              'Linux does not rhe BIOS to boot a computer',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext:
              'The BIOS boot y storage, such as the hard disk, is functional',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext:
              'The BIOS initiateter turning the computer on',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext:
              'The BIOS is started by ls from secondary storage, such as the hard disk',
            antwortrichtig: false,
            antworteingabe: false,
          },
        ],
      },
      {
        fmcnr: 4,
        fmctext: '19: What is true regarding UEFI firmware? (Choose two.)',
        fmcantworten: [
          {
            antworttext: 'It can rpartition tables',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'It can use aile systems',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext:
              'It stores its on the /boot/ partition',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext:
              'It is stored inwithin the GPT metadata',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: 'It is loboot disk position',
            antwortrichtig: false,
            antworteingabe: false,
          },
        ],
      },
      {
        fmcnr: 5,
        fmctext:
          '21: When is the content of the kernel ring buffer reset? (Choose two.)',
        fmcantworten: [
          {
            antworttext:
              'When the ring  reset using the command dmesg --clear',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext:
              'When the ring  dmesg without any additional parameters',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext:
              'When a configurable  by default, has passed',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext:
              'When the kernel  unloaded kernel module',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'When the shut down or rebooted',
            antwortrichtig: true,
            antworteingabe: false,
          },
        ],
      },
      {
        fmcnr: 6,
        fmctext:
          '25: Which of the following directories on a 64 bit Linux system typically contain shared libraries? (Choosetwo.)',
        fmcantworten: [
          {
            antworttext: '~/.lib',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: '/usr/',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: '/var/',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: '/l4/',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: '/opt//',
            antwortrichtig: false,
            antworteingabe: false,
          },
        ],
      },
      {
        fmcnr: 7,
        fmctext:
          '26: Which of the following files exist in a standard GRUB 2 installation? (Choose two.)',
        fmcantworten: [
          {
            antworttext: '/boots/stage0',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: '/boot/grvm.mod',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: '/boostab',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: '/boot.cfg',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: '/bootlinuz',
            antwortrichtig: false,
            antworteingabe: false,
          },
        ],
      },
      {
        fmcnr: 8,
        fmctext:
          '28: Which of the following properties of a Linux system should be changed when a virtual machine iscloned? (Choose two.)',
        fmcantworten: [
          {
            antworttext: 'The scheme',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'The ystem',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'Thechine ID',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: 'The p/root/',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'The t keys',
            antwortrichtig: true,
            antworteingabe: false,
          },
        ],
      },
      {
        fmcnr: 9,
        fmctext:
          '31: What is true regarding the configuration of yum? (Choose two.)',
        fmcantworten: [
          {
            antworttext:
              'Changes to the recome active after running yum confupdate',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext:
              'Changes to the yum r restarting the yumd service',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext:
              'The configurationvided into multiple files',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext:
              'Repository configsuch as $basearch or $releasever',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext:
              'In case /etc/yum.re/etc/yum.confis ignored',
            antwortrichtig: false,
            antworteingabe: false,
          },
        ],
      },
      {
        fmcnr: 10,
        fmctext:
          '36: Which of the following commands list all files and directories within the /tmp/ directory and its subdirectories which are owned by the user root? (Choose two.)',
        fmcantworten: [
          {
            antworttext: 'find ot -print',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: 'find -uid root',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'find t -print',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'find root',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: 'find -p root -print',
            antwortrichtig: false,
            antworteingabe: false,
          },
        ],
      },
      {
        fmcnr: 11,
        fmctext:
          '37: Which of the following are valid stream redirection operators within Bash? (Choose two.)',
        fmcantworten: [
          {
            antworttext: '<<',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: '#<>',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: '%y>',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: '>>y<>',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: '2><<&1',
            antwortrichtig: true,
            antworteingabe: false,
          },
        ],
      },
      {
        fmcnr: 12,
        fmctext:
          '40: From a Bash shell, which of the following commands directly execute the instructions from the file/usr/local/bin/runme.shi without starting a subshell? (Choose two.)',
        fmcantworten: [
          {
            antworttext: 'source runme.sh',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: '/usr/lonme.sh',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: '/bin//bin/runme.sh',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: '. /usr/nme.sh',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: 'run /ume.sh',
            antwortrichtig: false,
            antworteingabe: false,
          },
        ],
      },
      {
        fmcnr: 13,
        fmctext:
          '51: Which of the following commands can be used to determine how long the system has been running?(Choose two.)',
        fmcantworten: [
          {
            antworttext: 'ume',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: 'ukkp',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'timkkke --up',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'unkkkkame -u',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'tokkp',
            antwortrichtig: true,
            antworteingabe: false,
          },
        ],
      },
      {
        fmcnr: 14,
        fmctext:
          '54: Which wildcards will match the following filenames? (Choose two.)ttyS0, ttyS1, ttyS2',
        fmcantworten: [
          {
            antworttext: 't5]',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'tt5]',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: 't*2',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 't[012]',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: 'tt[02]',
            antwortrichtig: false,
            antworteingabe: false,
          },
        ],
      },
      {
        fmcnr: 15,
        fmctext:
          '61: Instead of supplying an explicit device in /etc/fstab for mounting, what other options may be used toidentify the intended partition? (Choose two.)',
        fmcantworten: [
          {
            antworttext: 'LAL',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: 'IhD',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'FIhhhND',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'NAhhhME',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'UUID',
            antwortrichtig: true,
            antworteingabe: false,
          },
        ],
      },
      {
        fmcnr: 16,
        fmctext:
          '65: Which of the following files are found in the /boot/ filesystem? (Choose two.)',
        fmcantworten: [
          {
            antworttext: 'Lil images',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: 'Basinaries',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'systemd  service units',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'Initial images',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: 'fsck ies',
            antwortrichtig: false,
            antworteingabe: false,
          },
        ],
      },
      {
        fmcnr: 17,
        fmctext:
          '68: Which of the following statements are correct when comparing Linux containers with traditional virtualmachines (e.g. LXC vs. KVM)? (Choose three.)',
        fmcantworten: [
          {
            antworttext:
              'Containers antrols process isolation and resource management.',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext:
              'Fully virtuardware architecture within the virtual machine.',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext:
              'Containers are com hardware and can only use emulated virtual hardware devices.',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext:
              'The guest environmehypervisor which provides virtual and emulated hardware devices.',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext:
              'Containers on the  the container hypervisor creates separate kernel execution.',
            antwortrichtig: false,
            antworteingabe: false,
          },
        ],
      },
      {
        fmcnr: 18,
        fmctext:
          '71: Which of the following commands are valid in the GRUB 2 configuration file? (Choose two.)',
        fmcantworten: [
          {
            antworttext: 'menury',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: 'ui',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'pxefig',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'in',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: 'kpa',
            antwortrichtig: false,
            antworteingabe: false,
          },
        ],
      },
      {
        fmcnr: 19,
        fmctext:
          '73: What can the Logical Volume Manager (LVM) be used for? (Choose three.)',
        fmcantworten: [
          {
            antworttext: 'To apshots.',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: 'To dynamic of logical volumes.',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: 'To dynami logical volumes.',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext: 'To cre9 arrays.',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext: 'To encry volumes.',
            antwortrichtig: false,
            antworteingabe: false,
          },
        ],
      },
      {
        fmcnr: 20,
        fmctext:
          '74: What are the main differences between GPT and MBR partition tables regarding maximum number and size of partitions? (Choose two.)',
        fmcantworten: [
          {
            antworttext:
              'MBR can handle  whereas GPT supports partition sizes up to 128 ZB.',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext:
              'By default, while MBR only supports four primary partitions.',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext:
              'By default, while MBR only supports 16 primary partitions.',
            antwortrichtig: false,
            antworteingabe: false,
          },
          {
            antworttext:
              'MBR can handle whereas GPT supports sizes up to 9.4 ZB.',
            antwortrichtig: true,
            antworteingabe: false,
          },
          {
            antworttext:
              'Both GPT and MBR s each with up to 4096 TB.',
            antwortrichtig: false,
            antworteingabe: false,
          },
        ],
      },
    ];
  }
  getallemcfragen(): Mcfragen[] {
    return this.mcfragen;
  }
}
