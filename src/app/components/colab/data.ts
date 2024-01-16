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

interface UserInterface {
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