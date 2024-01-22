type ColabModualDataInterface = ColabNodeInterface[];

export interface ColabNodeInterface {
    entity: EntityInterface,
    matchConfidence: number,
}

interface EntityInterface {
    name: string,
    sector: string,
    startDate: Date,
    description: string,
    ongoingProjects: number,
    marketCap: number,
    annualRevenue: number,
    connectionsMade: number,
    projects: ProjectInterface[] 
}

export interface ProjectInterface {
  projectName: string,
  projectDescription: string,
  contributors: UserInterface[],
  progress: number
}

export interface UserInterface {
  name: string,
  profilePicture: string,
}

export const mockData: ColabModualDataInterface = [
  {
    entity: {
      name: "Acme Inc.",
      sector: "Technology",    
      startDate: new Date("2019-01-01"),
      description: 
        "Acme Inc. is a technology company specializing in software and hardware.",
      ongoingProjects: 7, 
      marketCap: 500000000,    
      annualRevenue: 200000000,
      connectionsMade: 250,   
      projects: [
        {
          projectName: "Project X",
          projectDescription: "A top secret project.",
          contributors: [  
            {
              name: "John Smith",
              profilePicture: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            {
              name: "Jane Doe",
              profilePicture: "https://randomuser.me/api/portraits/women/33.jpg"
            },
            {
              name: "Jane Doe",
              profilePicture: "https://randomuser.me/api/portraits/women/33.jpg"
            },
            {
              name: "Jane Doe",
              profilePicture: "https://randomuser.me/api/portraits/women/33.jpg"
            },
            {
              name: "Jane Doe",
              profilePicture: "https://randomuser.me/api/portraits/women/33.jpg"
            },
            {
              name: "Jane Doe",
              profilePicture: "https://randomuser.me/api/portraits/women/33.jpg"
            },
            {
              name: "Jane Doe",
              profilePicture: "https://randomuser.me/api/portraits/women/33.jpg"
            },
            {
              name: "Jane Doe",
              profilePicture: "https://randomuser.me/api/portraits/women/33.jpg"
            },
            {
              name: "Jane Doe",
              profilePicture: "https://randomuser.me/api/portraits/women/33.jpg"
            },
            {
              name: "Jane Doe",
              profilePicture: "https://randomuser.me/api/portraits/women/33.jpg"
            },
            {
              name: "Jane Doe",
              profilePicture: "https://randomuser.me/api/portraits/women/33.jpg"
            },
            {
              name: "Jane Doe",
              profilePicture: "https://randomuser.me/api/portraits/women/33.jpg"
            },
            {
              name: "Jane Doe",
              profilePicture: "https://randomuser.me/api/portraits/women/33.jpg"
            },
            {
              name: "Jane Doe",
              profilePicture: "https://randomuser.me/api/portraits/women/33.jpg"
            },
            {
              name: "Jane Doe",
              profilePicture: "https://randomuser.me/api/portraits/women/33.jpg"
            },
            {
              name: "Bob Wilson",
              profilePicture: "https://randomuser.me/api/portraits/men/22.jpg"
            }
          ],
          progress: 60   
        },
        {
          projectName: "Project Y",
          projectDescription: "Another top secret project.",
          contributors: [
            {
              name: "Sarah Lee",
              profilePicture: "https://randomuser.me/api/portraits/women/28.jpg"
            },
            {
              name: "Mark Allen",
              profilePicture: "https://randomuser.me/api/portraits/men/30.jpg" 
            },
            {
              name: "Alice Wright",
              profilePicture: "https://randomuser.me/api/portraits/women/29.jpg"
            }
          ],
          progress: 35 
        },
        {
          projectName: "Project Z",
          projectDescription: "A third top secret project.",  
          contributors: [
            {
              name: "Michael Davis",
              profilePicture: "https://randomuser.me/api/portraits/men/31.jpg"
            },
            {
              name: "Lisa Brown",
              profilePicture: "https://randomuser.me/api/portraits/women/32.jpg"
            },
            {
              name: "David Lee",
              profilePicture: "https://randomuser.me/api/portraits/men/33.jpg"
            }
          ],
          progress: 10
        }
      ]
    },
    matchConfidence: 0.95
  },
  {
    entity: {
      name: "Sample Company",
      sector: "Healthcare",
      startDate: new Date("2015-05-15"),
      description: "Sample Company provides healthcare services and products.",    
      ongoingProjects: 5,
      marketCap: 300000000,
      annualRevenue: 150000000, 
      connectionsMade: 150,
      projects: [
        {
          projectName: "Healthcare Project 1",
          projectDescription: "Improve healthcare services.",
          contributors: [  
            {
              name: "Jane Miller",
              profilePicture: "https://randomuser.me/api/portraits/women/26.jpg" 
            },
            {
              name: "Sarah Lee",
              profilePicture: "https://randomuser.me/api/portraits/women/28.jpg"
            }, 
            {
              name: "Mark Allen",
              profilePicture: "https://randomuser.me/api/portraits/men/30.jpg"
            }
          ],
          progress: 30
        },
        {
          projectName: "Healthcare Project 2",
          projectDescription: "Healthcare product development.",
          contributors: [
            {
              name: "Bob Wilson",
              profilePicture: "https://randomuser.me/api/portraits/men/22.jpg"
            },
            {
              name: "Alice Wright",
              profilePicture: "https://randomuser.me/api/portraits/women/29.jpg"
            },
            {
              name: "Michael Davis",
              profilePicture: "https://randomuser.me/api/portraits/men/31.jpg"
            }
          ],
          progress: 65  
        }
      ]
    },
    matchConfidence: 0.85
  },
  {
    entity: {
      name: "ABC Systems",
      sector: "Information Technology",
      startDate: new Date("2000-04-05"),
      description: "ABC Systems provides IT consulting and services.",   
      ongoingProjects: 3,
      marketCap: 1200000000,
      annualRevenue: 800000000,
      connectionsMade: 400,
      projects: [
        {
          projectName: "Enterprise Platform",
          projectDescription: "Develop new enterprise IT platform.",
          contributors: [
            {
              name: "Nick Evans",
              profilePicture: "https://randomuser.me/api/portraits/men/34.jpg"
            },
            {
              name: "Stacy Lewis",
              profilePicture: "https://randomuser.me/api/portraits/women/35.jpg" 
            },
            {
              name: "Marcus Chen",
              profilePicture: "https://randomuser.me/api/portraits/men/36.jpg"
            }
          ],
          progress: 45
        }, 
        {
          projectName: "Customer Portal",
          projectDescription: "Customer self-service web portal.",
          contributors: [
            {
              name: "Lea Thompson",
              profilePicture: "https://randomuser.me/api/portraits/women/37.jpg"
            },
            {
              name: "Henry Wilson",
              profilePicture: "https://randomuser.me/api/portraits/men/38.jpg"
            },
            { 
              name: "Maria Garcia",
              profilePicture: "https://randomuser.me/api/portraits/women/39.jpg"
            }
          ],
          progress: 80
        }
      ]
    },
    matchConfidence: 0.9
  }
];
export interface RevenueDataInterface {
  date: string,
  revenue: number
}

export const revenueData: RevenueDataInterface[] = [
  {"date": "2023-01-01", "revenue": 5000},
  {"date": "2023-01-02", "revenue": 5200}, 
  {"date": "2023-01-03", "revenue": 4900},
  {"date": "2023-01-04", "revenue": 5100},
  {"date": "2023-01-05", "revenue": 4950},
  {"date": "2023-01-06", "revenue": 5300},
  {"date": "2023-01-07", "revenue": 5100},
  {"date": "2023-01-08", "revenue": 5000},
  {"date": "2023-01-09", "revenue": 5400},
  {"date": "2023-01-10", "revenue": 5250},
  {"date": "2023-01-11", "revenue": 5500},
  {"date": "2023-01-12", "revenue": 5980},
  {"date": "2023-01-13", "revenue": 5550},
  {"date": "2023-01-14", "revenue": 5600},
  {"date": "2023-01-15", "revenue": 5450},
  {"date": "2023-01-16", "revenue": 5700},
  {"date": "2023-01-17", "revenue": 5620},
  {"date": "2023-01-18", "revenue": 5750},
  {"date": "2023-01-19", "revenue": 5640},
  {"date": "2023-01-20", "revenue": 5820},
  {"date": "2023-01-21", "revenue": 5780},
  {"date": "2023-01-22", "revenue": 5900},
  {"date": "2023-01-23", "revenue": 5850},
  {"date": "2023-01-24", "revenue": 6000},
  {"date": "2023-01-25", "revenue": 5940},
  {"date": "2023-01-26", "revenue": 6080},
  {"date": "2023-01-27", "revenue": 6020},
  {"date": "2023-01-28", "revenue": 6160},
  {"date": "2023-01-29", "revenue": 6100},
  {"date": "2023-01-30", "revenue": 6240},
  {"date": "2023-01-31", "revenue": 6180},
  {"date": "2023-02-01", "revenue": 6320},
  {"date": "2023-02-02", "revenue": 6260},
  {"date": "2023-02-03", "revenue": 6400},  
  {"date": "2023-02-04", "revenue": 6340},
  {"date": "2023-02-05", "revenue": 6480},
  {"date": "2023-02-06", "revenue": 6420},
  {"date": "2023-02-07", "revenue": 6560},
  {"date": "2023-02-08", "revenue": 6500},
  {"date": "2023-02-09", "revenue": 6640},
  {"date": "2023-02-10", "revenue": 6580},
  {"date": "2023-02-11", "revenue": 6720},
  {"date": "2023-02-12", "revenue": 6660}
]

// export const revenueData: RevenueDataInterface[] = [
//   {"date": "2023-01-01", "revenue": 10000},
//   {"date": "2023-01-02", "revenue": 9800},
//   {"date": "2023-01-03", "revenue": 9900},
//   {"date": "2023-01-04", "revenue": 9700},
//   {"date": "2023-01-05", "revenue": 9800},
//   {"date": "2023-01-06", "revenue": 9600},
//   {"date": "2023-01-07", "revenue": 9700},
//   {"date": "2023-01-08", "revenue": 9500},
//   {"date": "2023-01-09", "revenue": 9600},
//   {"date": "2023-01-10", "revenue": 9400},
//   {"date": "2023-01-11", "revenue": 9300},
//   {"date": "2023-01-12", "revenue": 9200},
//   {"date": "2023-01-13", "revenue": 9100},
//   {"date": "2023-01-14", "revenue": 9000},
//   {"date": "2023-01-15", "revenue": 8900},
//   {"date": "2023-01-16", "revenue": 8800},
//   {"date": "2023-01-17", "revenue": 8700},
//   {"date": "2023-01-18", "revenue": 8600},
//   {"date": "2023-01-19", "revenue": 8500},
//   {"date": "2023-01-20", "revenue": 8400},
//   {"date": "2023-01-21", "revenue": 8300},
//   {"date": "2023-01-22", "revenue": 8200},
//   {"date": "2023-01-23", "revenue": 8100},
//   {"date": "2023-01-24", "revenue": 8000},
//   {"date": "2023-01-25", "revenue": 7900},
//   {"date": "2023-01-26", "revenue": 7800},
//   {"date": "2023-01-27", "revenue": 7700},
//   {"date": "2023-01-28", "revenue": 7600},
//   {"date": "2023-01-29", "revenue": 7500},
//   {"date": "2023-01-30", "revenue": 7400},
//   {"date": "2023-01-31", "revenue": 7300},
//   {"date": "2023-02-01", "revenue": 7200},
//   {"date": "2023-02-02", "revenue": 7100},
//   {"date": "2023-02-03", "revenue": 7000},
//   {"date": "2023-02-04", "revenue": 6900},
//   {"date": "2023-02-05", "revenue": 6800},
//   {"date": "2023-02-06", "revenue": 6700},
//   {"date": "2023-02-07", "revenue": 6600},
//   {"date": "2023-02-08", "revenue": 6500},
//   {"date": "2023-02-09", "revenue": 6400},
//   {"date": "2023-02-10", "revenue": 6300},
//   {"date": "2023-02-11", "revenue": 6200}, 
//   {"date": "2023-02-12", "revenue": 6100}
// ]

// export const mockData: ColabModualDataInterface = [
//     {
//       entity: {
//         name: "TrackLab",  
//         sector: "Technology",
//         startDate: new Date("2020-01-01"),
//         description: "A AI and machine learning startup focused on analytics",
//         ongoingProjects: 3,
//         marketCap: 5000000,
//         annualRevenue: 2000000, 
//         connectionsMade: 53
//       },
//       matchConfidence: 0.95
//     },
//     {
//       entity: {
//        name: "MedCore",
//        sector: "Healthcare",
//        startDate: new Date("2018-05-15"),
//        description: "A digital healthcare provider improving patient experiences",  
//        ongoingProjects: 5,
//        marketCap: 10000000,
//        annualRevenue: 4500000,
//        connectionsMade: 261
//       },
//       matchConfidence: 0.8
//     },
//     {
//       entity: {
//         name: "Fintel",
//         sector: "Finance",
//         startDate: new Date("2022-03-01"),
//         description: "A fintech startup disrupting traditional financial services",
//         ongoingProjects: 2,
//         marketCap: 3000000,
//         annualRevenue: 500000,
//         connectionsMade: 127
//       }, 
//       matchConfidence: 0.9
//     }
//   ];