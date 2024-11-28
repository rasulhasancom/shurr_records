// src/data/albums.ts
export const albums = [
    {
      id: '1',
      artist: 'Vagif Mustafazadeh',
      name: 'Jazz Compositions',
      year: 1978,
      coverPath: '/albums/album1.jpg',
      coverColor: '#FF4444',
      vinylColor: '#FFA500',
      description: 'Vagif Mustafazadeh, was a Soviet-Azerbaijani jazz pianist and composer, acclaimed for fusing jazz and the traditional Azerbaijani folk music known as mugham. According to many world famous jazz musicians, Mustafazadeh is one of the pioneers and "the architect of jazz in Azerbaijan".',
      tracks: {
        sideA: [
          {
            name: "Aziza",
            duration: "4:04",
            artist: "Vagif Mustafazadeh",
            audioFile: "vagif-aziza.mp3"  // This file should be in public/songs/
          },
          {
            name: "Mart",
            duration: "2:30",
            artist: "Vagif Mustafazadeh",
            audioFile: "vagif-mart.mp3"  // This file should be in public/songs/
          },
          {
            name: "Bakili",
            duration: "3:16",
            artist: "Vagif Mustafazadeh",
            audioFile: "vagif-bakili.mp3"  // This file should be in public/songs/
          },
          {
            name: "Galmadi",
            duration: "3:58",
            artist: "Vagif Mustafazadeh",
            audioFile: "vagif-gelmedi.mp3"  // This file should be in public/songs/
          }
        ],
        sideB: [
          {
            name: "Sahar",
            duration: "2:58",
            artist: "Vagif Mustafazadeh",
            audioFile: "vagif-morning.mp3"  // This file should be in public/songs/
          },
          {
            name: "Tanhalig",
            duration: "2:58",
            artist: "Vagif Mustafazadeh",
            audioFile: "vagif-tanhaliq.mp3"  // This file should be in public/songs/
          },
          {
            name: "Azizani gozlayarkan",
            duration: "5:22",
            artist: "Vagif Mustafazadeh",
            audioFile: "vagif-waiting-aziza.mp3"  // This file should be in public/songs/
          },
          {
            name: "Shirvanshahlar Sarayi",
            duration: "4:19",
            artist: "Vagif Mustafazadeh",
            audioFile: "vagif-shirvanshah.mp3"  // This file should be in public/songs/
          }
        ]
      }
    },
    {
        id: '2',
        artist: 'Azerbaijani Folk',
        name: 'National Songs',
        year: 1982,
        coverPath: '/albums/album2.jpg',
        coverColor: '#FF4444',
        vinylColor: '#FFA500',
        description: 'A collection of traditional Azerbaijani folk songs, featuring classic melodies and rhythms that have been passed down through generations. These recordings capture the authentic spirit of Azerbaijan\'s rich musical heritage.',
        tracks: {
          sideA: [
            {
              name: "Ureyine Vuruldum",
              duration: "4:19",
              artist: "Elmira Rahimova",
              audioFile: "ureyine-vuruldum.mp3"  // This file should be in public/songs/
            },
            {
              name: "Qalali",
              duration: "3:10",
              artist: "Rashid Behbudov",
              audioFile: "qalali.mp3"
            },
            {
              name: "Arazbari",
              duration: "3:44",
              artist: "Uzeyir Hajibeyov",
              audioFile: "arazbari.mp3"
            },
            {
              name: "Dashti Tasnifi",
              duration: "6:50",
              artist: "Rubaba Muradova",
              audioFile: "deshti-tesnifi.mp3"
            }
          ],
          sideB: [
            {
              name: "Qayit Azizim",
              duration: "4:05",
              artist: "Muslum Magomayev",
              audioFile: "qayit-ezizim.mp3"
            },
            {
              name: "Aldatmayaq bir-birimizi",
              duration: "6:47",
              artist: "Shovkat Alakbarova",
              audioFile: "qayit-ezizim.mp3"
            },
            {
              name: "Eshqimin Baxtiı",
              duration: "3:19",
              artist: "Ogtay Agayev",
              audioFile: "eshqimin-baxti.mp3"
            },
            {
              name: "Getma-getma",
              duration: "5:03",
              artist: "Gulagha Mammadov",
              audioFile: "getme.mp3"
            }
          ]
        }
      },
      {
        id: '3',
        artist: 'Gara Garayev',
        name: 'Classical Compositions',
        year: 1975,
        coverPath: '/albums/album4.jpg',
        coverColor: '#FF4444',
        vinylColor: '#FFA500',
        description: 'Gara Garayev, was a prominent Soviet Azerbaijani composer. Garayev wrote nearly 110 musical pieces, including ballets, operas, symphonic and chamber pieces, solos for piano, cantatas, songs, and marches, and rose to prominence not only in the Azerbaijan SSR, but also in the rest of the Soviet Union and worldwide',
        tracks: {
          sideA: [
            {
              name: "Aisha",
              duration: "2:55",
              artist: "Gara GArayev",
              audioFile: "qara-aisha.mp3"  // This file should be in public/songs/
            },
            {
              name: "The passionate girl's dance",
              duration: "1:31",
              artist: "Gara GArayev",
              audioFile: "qara-qara-ehtirasli-reqs.mp3"  // This file should be in public/songs/
            },
            {
              name: "The Most Beautiful of Beauties",
              duration: "4:28",
              artist: "Gara GArayev",
              audioFile: "qara-gozallar.mp3"  // This file should be in public/songs/
            },
            {
              name: "Pastoral",
              duration: "0:58",
              artist: "Gara GArayev",
              audioFile: "qara-pastoral.mp3"  // This file should be in public/songs/
            }
          ],
          sideB: [
            {
              name: "Path of Thunder",
              duration: "1:34",
              artist: "Gara GArayev",
              audioFile: "qara-ildirimli-yollarla.mp3"  // This file should be in public/songs/
            },
            {
              name: "Prelude No.5",
              duration: "2:31",
              artist: "Gara GArayev",
              audioFile: "qara-prelude5.mp3"  // This file should be in public/songs/
            },
            {
              name: "Piano Sonata",
              duration: "5:10",
              artist: "Gara GArayev",
              audioFile: "qara-sonata-fortepiano.mp3"  // This file should be in public/songs/
            },
            {
              name: "Waltz",
              duration: "4:30",
              artist: "Gara GArayev",
              audioFile: "qara-vals.mp3"  // This file should be in public/songs/
            }
          ]
        }
      },
      {
        id: '4',
        artist: 'Tofig Guliyev',
        name: 'Compositions',
        year: 1988,
        coverPath: '/albums/album3.jpg',
        coverColor: '#FF4444',
        vinylColor: '#FFA500',
        description: 'A collection of traditional Azerbaijani folk songs, featuring classic melodies and rhythms that have been passed down through generations. These recordings capture the authentic spirit of Azerbaijan\'s rich musical heritage.',
        tracks: {
          sideA: [
            {
              name: "Ureyine Vuruldum",
              duration: "4:19",
              artist: "Elmira Rahimova",
              audioFile: "ureyine-vuruldum.mp3"  // This file should be in public/songs/
            },
            {
              name: "Qalali",
              duration: "3:10",
              artist: "Rashid Behbudov",
              audioFile: "qalali.mp3"
            },
            {
              name: "Arazbari",
              duration: "3:44",
              artist: "Uzeyir Hajibeyov",
              audioFile: "arazbari.mp3"
            },
            {
              name: "Dashti Tasnifi",
              duration: "6:50",
              artist: "Rubaba Muradova",
              audioFile: "deshti-tesnifi.mp3"
            }
          ],
          sideB: [
            {
              name: "Qayit Azizim",
              duration: "4:05",
              artist: "Muslum Magomayev",
              audioFile: "qayit-ezizim.mp3"
            },
            {
              name: "Aldatmayaq bir-birimizi",
              duration: "6:47",
              artist: "Shovkat Alakbarova",
              audioFile: "qayit-ezizim.mp3"
            },
            {
              name: "Eshqimin Baxtiı",
              duration: "3:19",
              artist: "Ogtay Agayev",
              audioFile: "eshqimin-baxti.mp3"
            },
            {
              name: "Getma-getma",
              duration: "5:03",
              artist: "Gulagha Mammadov",
              audioFile: "getme.mp3"
            }
          ]
        }
      },
      {
        id: '5',
        artist: 'Gaya Quartet',
        name: 'National Songs',
        year: 1969,
        coverPath: '/albums/album5.jpg',
        coverColor: '#FF4444',
        vinylColor: '#FFA500',
        description: 'A collection of traditional Azerbaijani folk songs, featuring classic melodies and rhythms that have been passed down through generations. These recordings capture the authentic spirit of Azerbaijan\'s rich musical heritage.',
        tracks: {
          sideA: [
            {
              name: "Ureyine Vuruldum",
              duration: "4:19",
              artist: "Elmira Rahimova",
              audioFile: "ureyine-vuruldum.mp3"  // This file should be in public/songs/
            },
            {
              name: "Qalali",
              duration: "3:10",
              artist: "Rashid Behbudov",
              audioFile: "qalali.mp3"
            },
            {
              name: "Arazbari",
              duration: "3:44",
              artist: "Uzeyir Hajibeyov",
              audioFile: "arazbari.mp3"
            },
            {
              name: "Dashti Tasnifi",
              duration: "6:50",
              artist: "Rubaba Muradova",
              audioFile: "deshti-tesnifi.mp3"
            }
          ],
          sideB: [
            {
              name: "Qayit Azizim",
              duration: "4:05",
              artist: "Muslum Magomayev",
              audioFile: "qayit-ezizim.mp3"
            },
            {
              name: "Aldatmayaq bir-birimizi",
              duration: "6:47",
              artist: "Shovkat Alakbarova",
              audioFile: "qayit-ezizim.mp3"
            },
            {
              name: "Eshqimin Baxtiı",
              duration: "3:19",
              artist: "Ogtay Agayev",
              audioFile: "eshqimin-baxti.mp3"
            },
            {
              name: "Getma-getma",
              duration: "5:03",
              artist: "Gulagha Mammadov",
              audioFile: "getme.mp3"
            }
          ]
        }
      },
      {
          id: '6',
          artist: 'Muslim Magomaev',
          name: ' Songs',
          year: 1985,
          coverPath: '/albums/album6.jpg',
          coverColor: '#FF4444',
          vinylColor: '#FFA500',
          description: 'A collection of traditional Azerbaijani folk songs, featuring classic melodies and rhythms that have been passed down through generations. These recordings capture the authentic spirit of Azerbaijan\'s rich musical heritage.',
          tracks: {
            sideA: [
              {
                name: "Ureyine Vuruldum",
                duration: "4:19",
                artist: "Elmira Rahimova",
                audioFile: "ureyine-vuruldum.mp3"  // This file should be in public/songs/
              },
              {
                name: "Qalali",
                duration: "3:10",
                artist: "Rashid Behbudov",
                audioFile: "qalali.mp3"
              },
              {
                name: "Arazbari",
                duration: "3:44",
                artist: "Uzeyir Hajibeyov",
                audioFile: "arazbari.mp3"
              },
              {
                name: "Dashti Tasnifi",
                duration: "6:50",
                artist: "Rubaba Muradova",
                audioFile: "deshti-tesnifi.mp3"
              }
            ],
            sideB: [
              {
                name: "Qayit Azizim",
                duration: "4:05",
                artist: "Muslum Magomayev",
                audioFile: "qayit-ezizim.mp3"
              },
              {
                name: "Aldatmayaq bir-birimizi",
                duration: "6:47",
                artist: "Shovkat Alakbarova",
                audioFile: "qayit-ezizim.mp3"
              },
              {
                name: "Eshqimin Baxtiı",
                duration: "3:19",
                artist: "Ogtay Agayev",
                audioFile: "eshqimin-baxti.mp3"
              },
              {
                name: "Getma-getma",
                duration: "5:03",
                artist: "Gulagha Mammadov",
                audioFile: "getme.mp3"
              }
            ]
          }
        },
        {
          id: '7',
          artist: 'Uzeyir Hajibayov',
          name: 'Classical Compositions',
          year: 1957,
          coverPath: '/albums/album7.jpg',
          coverColor: '#FF4444',
          vinylColor: '#FFA500',
          description: 'A collection of traditional Azerbaijani folk songs, featuring classic melodies and rhythms that have been passed down through generations. These recordings capture the authentic spirit of Azerbaijan\'s rich musical heritage.',
          tracks: {
            sideA: [
              {
                name: "Ureyine Vuruldum",
                duration: "4:19",
                artist: "Elmira Rahimova",
                audioFile: "ureyine-vuruldum.mp3"  // This file should be in public/songs/
              },
              {
                name: "Qalali",
                duration: "3:10",
                artist: "Rashid Behbudov",
                audioFile: "qalali.mp3"
              },
              {
                name: "Arazbari",
                duration: "3:44",
                artist: "Uzeyir Hajibeyov",
                audioFile: "arazbari.mp3"
              },
              {
                name: "Dashti Tasnifi",
                duration: "6:50",
                artist: "Rubaba Muradova",
                audioFile: "deshti-tesnifi.mp3"
              }
            ],
            sideB: [
              {
                name: "Qayit Azizim",
                duration: "4:05",
                artist: "Muslum Magomayev",
                audioFile: "qayit-ezizim.mp3"
              },
              {
                name: "Aldatmayaq bir-birimizi",
                duration: "6:47",
                artist: "Shovkat Alakbarova",
                audioFile: "qayit-ezizim.mp3"
              },
              {
                name: "Eshqimin Baxtiı",
                duration: "3:19",
                artist: "Ogtay Agayev",
                audioFile: "eshqimin-baxti.mp3"
              },
              {
                name: "Getma-getma",
                duration: "5:03",
                artist: "Gulagha Mammadov",
                audioFile: "getme.mp3"
              }
            ]
          }
        },
        {
          id: '8',
          artist: 'NIyamaddin Musaev',
          name: 'National Songs',
          year: 1998,
          coverPath: '/albums/album8.jpg',
          coverColor: '#FF4444',
          vinylColor: '#FFA500',
          description: 'A collection of traditional Azerbaijani folk songs, featuring classic melodies and rhythms that have been passed down through generations. These recordings capture the authentic spirit of Azerbaijan\'s rich musical heritage.',
          tracks: {
            sideA: [
              {
                name: "Ureyine Vuruldum",
                duration: "4:19",
                artist: "Elmira Rahimova",
                audioFile: "ureyine-vuruldum.mp3"  // This file should be in public/songs/
              },
              {
                name: "Qalali",
                duration: "3:10",
                artist: "Rashid Behbudov",
                audioFile: "qalali.mp3"
              },
              {
                name: "Arazbari",
                duration: "3:44",
                artist: "Uzeyir Hajibeyov",
                audioFile: "arazbari.mp3"
              },
              {
                name: "Dashti Tasnifi",
                duration: "6:50",
                artist: "Rubaba Muradova",
                audioFile: "deshti-tesnifi.mp3"
              }
            ],
            sideB: [
              {
                name: "Qayit Azizim",
                duration: "4:05",
                artist: "Muslum Magomayev",
                audioFile: "qayit-ezizim.mp3"
              },
              {
                name: "Aldatmayaq bir-birimizi",
                duration: "6:47",
                artist: "Shovkat Alakbarova",
                audioFile: "qayit-ezizim.mp3"
              },
              {
                name: "Eshqimin Baxtiı",
                duration: "3:19",
                artist: "Ogtay Agayev",
                audioFile: "eshqimin-baxti.mp3"
              },
              {
                name: "Getma-getma",
                duration: "5:03",
                artist: "Gulagha Mammadov",
                audioFile: "getme.mp3"
              }
            ]
          }
        },
    // Add more albums as needed
  ];