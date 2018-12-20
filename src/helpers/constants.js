export const initialState = {
  users: [
    {
      id: 1,
      first_name: "George",
      last_name: "Bluth",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
    },
    {
      id: 2,
      first_name: "Janet",
      last_name: "Weaver",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
    },
    {
      id: 3,
      first_name: "Emma",
      last_name: "Wong",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg",
    },
    {
      id: 4,
      first_name: "Eve",
      last_name: "Holt",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg",
    },
    {
      id: 5,
      first_name: "Charles",
      last_name: "Morris",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
    },
    {
      id: 6,
      first_name: "Tracey",
      last_name: "Ramos",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
    }
  ],
  columns: [
    {
      id: 1,
      name: "To Do"
    },
    {
      id: 2,
      name: "In Progress"
    },
    {
      id: 3,
      name: "In Review"
    },
    {
      id: 4,
      name: "Done"
    }
  ],
  cards: [
    {
      id: 1,
      title: "Task 1",
      state: 1,
      userId: 1,
      description: "Edit readme file"
    },
    {
      id: 2,
      title: "Task 2",
      state: 2,
      userId: 1,
      description: "Install and configure Prettier"
    },
    {
      id: 3,
      title: "Task 3",
      state: 3,
      userId: 1,
      description: "Install and configure Typescript"
    },
    {
      id: 4,
      title: "Task 4",
      state: 4,
      userId: 2,
      description: "Add redux"
    },
    {
      id: 5,
      title: "Task 5",
      state: 3,
      userId: 3,
      description: "Refactor the login page"
    },
    {
      id: 6,
      title: "Task 6",
      state: 3,
      userId: 2,
      description: "Update db schema"
    },
    {
      id: 7,
      title: "Task 7",
      state: 4,
      userId: 2,
      description: "Add readme file"
    },
    {
      id: 8,
      title: "Task 8",
      state: 4,
      userId: 3,
      description: "Add readme file"
    },
    {
      id: 9,
      title: "Task 9",
      state: 2,
      userId: 3
    },
    {
      id: 10,
      title: "Task 10",
      state: 2,
      userId: 2
    },
    {
      id: 11,
      title: "Task 11",
      state: 1,
      userId: 2
    },
    {
      id: 12,
      title: "Task 12",
      state: 1,
      userId: 1
    },
    {
      id: 13,
      title: "Task 13",
      state: 1,
      userId: 5
    },
    {
      id: 14,
      title: "Task 14",
      state: 1,
      userId: 5
    },
    {
      id: 15,
      title: "Task 15",
      state: 1,
      userId: 4
    },
    {
      id: 16,
      title: "Task 16",
      state: 2,
      userId: 4
    },
    {
      id: 17,
      title: "Task 17",
      state: 1,
      userId: 5
    },
    {
      id: 18,
      title: "Task 18",
      state: 1,
      userId: 5
    },
    {
      id: 19,
      title: "Task 19",
      state: 2,
      userId: 4
    },
    {
      id: 20,
      title: "Task 20",
      state: 2,
      userId: 5
    }
  ],
  filter: null
};
