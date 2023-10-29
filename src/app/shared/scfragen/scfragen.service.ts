import { Injectable } from '@angular/core';
import { Scfragen } from './scfragen';

@Injectable({
  providedIn: 'root'
})
export class ScfragenService {
scfragen: Scfragen[];

  constructor() {
    this.scfragen = [
      {
        fscnr: 1,
        fscstext: '1: Which type of file system is created by mkfs when it is executed with the block device name only and without any additional parameters?',
        fscantworten: [
          {
            antworttext:'XS',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'VFT',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'ext',
            antwortrichtig: true,
            antworteingabe: false
          },
          {
            antworttext:'ex3',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'et4',
            antwortrichtig: false,
            antworteingabe: false
          },
        ]
      },
      {
        fscnr: 2,
        fscstext: '2: Which umask value ensures that new directories can be read, written and listed by their owning user,read and listed by their owning group and are not accessible at all for everyone else?',
        fscantworten: [
          {
            antworttext:'070',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'007',
            antwortrichtig: true,
            antworteingabe: false
          },
          {
            antworttext:'006',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'760',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'029',
            antwortrichtig: false,
            antworteingabe: false
          },
        ]
      },
      {
        fscnr: 3,
        fscstext: '3: Which of the following commands changes the number of days before the ext3 filesystem on /dev/sda1 has to run through a full filesystem check while booting?',
        fscantworten: [
          {
            antworttext:'tune2fs -d 200 /dev/',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'tune2fs -i 200 /dev/',
            antwortrichtig: true,
            antworteingabe: false
          },
          {
            antworttext:'tune2fs -c 200 /dev/',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'tune2fs -n 200 /sda1',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'tune2fs --days /dev/sda1',
            antwortrichtig: false,
            antworteingabe: false
          },
        ]
      },
      {
        fscnr: 4,
        fscstext: '4: Which is the default percentage of reserved space for the root user on new ext4 filesystems?',
        fscantworten: [
          {
            antworttext:'1%',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'38%',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'1%',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'08%',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'59%',
            antwortrichtig: true,
            antworteingabe: false
          },
        ]
      },
      {
        fscnr: 5,
        fscstext: '5: Which of the following is true when a file system, which is neither listed in /etc/fstab nor known to system,is mounted manually?',
        fscantworten: [
          {
            antworttext:'systemd ignores any manual mounts which are not done',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'The command systemctl mountsynccan be used to create ',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'systemd automatically generates a mount unit and monitors  changing it',
            antwortrichtig: true,
            antworteingabe: false
          },
          {
            antworttext:'Unless a systemd mount  file system after a short period of time',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'systemctl unmountmust be used  because system opens a file descriptor on the mount point',
            antwortrichtig: false,
            antworteingabe: false
          },
        ]
      },
      {
        fscnr: 6,
        fscstext: '7: What does the command mount --bind do?',
        fscantworten: [
          {
            antworttext:'It makes the contents  available in another directory',
            antwortrichtig: true,
            antworteingabe: false
          },
          {
            antworttext:'It mounts all available  current directory',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'It mounts all user mountable  home directory',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'It mounts all file systems listed hich have the option userbindset',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'It permanently mounts  to a directory',
            antwortrichtig: false,
            antworteingabe: false
          },
        ]
      },
      {
        fscnr: 7,
        fscstext: '8: Consider the following output from the command ls -i: How would a new file named c.txt be created with the same inode number as a.txt (Inode 525385)?',
        fscantworten: [
          {
            antworttext:'ln  c.txt',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'ln  a.txt',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'ln  c.txt',
            antwortrichtig: true,
            antworteingabe: false
          },
          {
            antworttext:'ln  a.txt',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'ln  c.txt',
            antwortrichtig: false,
            antworteingabe: false
          },
        ]
      },
      {
        fscnr: 8,
        fscstext: '12: Which chown command changes the ownership to dave and the group to staff on a file named data.txt?',
        fscantworten: [
          {
            antworttext:'chown data.txt',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'chown staff data.txt',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'chown  --group staff data.txt',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'chown  data.txt',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'chown  data.txt',
            antwortrichtig: true,
            antworteingabe: false
          },
        ]
      },
      {
        fscnr: 9,
        fscstext: '13: When considering the use of hard links, what are valid reasons not to use hard links?',
        fscantworten: [
          {
            antworttext:'Hard links are stems because traditional filesystems, such as ext4, do not support them',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'Each hard link  which can lead to unintended disclosure of file content',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'Hard links are specific  point to files on another filesystem',
            antwortrichtig: true,
            antworteingabe: false
          },
          {
            antworttext:'If users other than root should be  suln has to be installed and configured',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'When a hard linked the file is created and consumes additional space',
            antwortrichtig: false,
            antworteingabe: false
          },
        ]
      },
      {
        fscnr: 10,
        fscstext: '14: In compliance with the FHS, in which of the directories are man pages found?',
        fscantworten: [
          {
            antworttext:'/opt',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'/usr',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'/usr/',
            antwortrichtig: true,
            antworteingabe: false
          },
          {
            antworttext:'/var',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'/var',
            antwortrichtig: false,
            antworteingabe: false
          },
        ]
      },
      {
        fscnr: 11,
        fscstext: '16: What is the process ID number of the init process on a System V init based system?',
        fscantworten: [
          {
            antworttext:'-18',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'08',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'91',
            antwortrichtig: true,
            antworteingabe: false
          },
          {
            antworttext:'It is di each reboot',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'It is 8rent run level',
            antwortrichtig: false,
            antworteingabe: false
          },
        ]
      },
      {
        fscnr: 12,
        fscstext: '17: Which daemon handles power management events on a Linux system?',
        fscantworten: [
          {
            antworttext:'acuupid',
            antwortrichtig: true,
            antworteingabe: false
          },
          {
            antworttext:'batt8eryd',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'pwrdfmgntd',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'pfdfsd',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'inetdffdd',
            antwortrichtig: false,
            antworteingabe: false
          },
        ]
      },
      {
        fscnr: 13,
        fscstext: '20: A faulty kernel module is causing issues with a network interface card.Which of the following actions ensures that this module is not loaded automatically when the system boots?',
        fscantworten: [
          {
            antworttext:'Using lsmod  specifying the name of a specific module',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'modinfo  of the offending module',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'Using  the name of the offending module',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'Adding a  the name of the offending module to the file /etc/modprobe.d/blacklist.conf',
            antwortrichtig: true,
            antworteingabe: false
          },
          {
            antworttext:'Deleting the kernel  file system and recompiling the kernel, including its modules',
            antwortrichtig: false,
            antworteingabe: false
          },
        ]
      },
      {
        fscnr: 14,
        fscstext: '22: What is the first program the Linux kernel starts at boot time when using System V init?',
        fscantworten: [
          {
            antworttext:'/lib',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'/proc/sys',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'/etc/rc.d',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'/sbin',
            antwortrichtig: true,
            antworteingabe: false
          },
          {
            antworttext:'/boot',
            antwortrichtig: false,
            antworteingabe: false
          },
        ]
      },
      {
        fscnr: 15,
        fscstext: '23: A Debian package creates several files during its installation.Which of the following commands searches for packages owning the file /etc/debian_version?',
        fscantworten: [
          {
            antworttext:'apt-get search _version',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'apt -r /etc/',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'find /etc/debian_version -dpkg',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'dpkg -S  _version',
            antwortrichtig: true,
            antworteingabe: false
          },
          {
            antworttext:'apt-file version',
            antwortrichtig: false,
            antworteingabe: false
          },
        ]
      },
      {
        fscnr: 16,
        fscstext: '24: What is contained on the EFI System Partition?',
        fscantworten: [
          {
            antworttext:'The Linux  system',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'The first  loader',
            antwortrichtig: true,
            antworteingabe: false
          },
          {
            antworttext:'The default  file',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'The Linux default ',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'The directories',
            antwortrichtig: false,
            antworteingabe: false
          },
        ]
      },
      {
        fscnr: 17,
        fscstext: '27: Which of the following commands installs all packages with a name ending with the string foo?',
        fscantworten: [
          {
            antworttext:'zypper "*foo"',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'zypper "foo?"',
            antwortrichtig: true,
            antworteingabe: false
          },
          {
            antworttext:'zypper "foo*"',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'zypper "*foo"',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'zypper ".*foo"',
            antwortrichtig: false,
            antworteingabe: false
          },
        ]
      },
      {
        fscnr: 18,
        fscstext: '29: Which of the following commands installs GRUB 2 into the master boot record on the third hard disk?',
        fscantworten: [
          {
            antworttext:'grub2 /dev/sdc',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'grub-mkrescue /dev/sdc',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'grub /dev/sdc',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'grub-/sdc',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'grub-/sdc',
            antwortrichtig: true,
            antworteingabe: false
          },
        ]
      },
      {
        fscnr: 19,
        fscstext: '30: Which of the following partition types is used for Linux swap spaces when partitioning hard disk drives?',
        fscantworten: [
          {
            antworttext:'75',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'852',
            antwortrichtig: true,
            antworteingabe: false
          },
          {
            antworttext:'853',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'86e',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'fgd',
            antwortrichtig: false,
            antworteingabe: false
          },
        ]
      },
      {
        fscnr: 20,
        fscstext: '32: Which of the following apt-get subcommands installs the newest versions of all currently installed packages?',
        fscantworten: [
          {
            antworttext:'autate',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'disde',
            antwortrichtig: true,
            antworteingabe: false
          },
          {
            antworttext:'fulrade',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'ill',
            antwortrichtig: false,
            antworteingabe: false
          },
          {
            antworttext:'upe',
            antwortrichtig: false,
            antworteingabe: false
          },
        ]
      }
    ]
  }
  getallescfragen(): Scfragen[] {
    return this.scfragen;
  }
}
