import monkeyAdidasAvatar from '../../src/pages/Dashboard/img/monkey_adidas_avatar.jpeg'
import monkeyAvatar from '../../src/pages/Dashboard/img/monkey_avatar.jpeg'
import monkeyOldAvatar from '../../src/pages/Dashboard/img/monkey_old_avatar.jpeg'
import bunnyAvatar from '../../src/pages/Dashboard/img/bunny_avatar.jpeg'

export const dashboardMockData = {
  "id": "1",
  "title": "any title",
  "members": [
    {
      "id": 'member-1',
      "name": "Germán Tellez",
      "image": monkeyAdidasAvatar
    },
    {
      "id": 'member-2',
      "name": "Alejo",
      "image": monkeyAvatar
    },
    {
      "id": 'member-3',
      "name": "Jhon Doe",
      "image": monkeyOldAvatar
    }
  ],
  "tasks": [
    {
      "id": "task-1",
      "dashboardId": "1",
      "title": "some random task name",
      "assignedMembers": [
        {
          "id": 'member-4',
          "name": "Jane Doe",
          "image": bunnyAvatar
        },
        {
          "id": 'member-5',
          "name": "Alice",
          "image": bunnyAvatar
        },
      ],
      "tags": [
        {
          "title": "Room1",
          "url": "https://www.google.com.co"
        }
      ]
    },
    {
      "id": "task-2",
      "dashboardId": "1",
      "title": "some random task name #2",
      "assignedMembers": [
        {
          "id": 'member-6',
          "name": "Karen Doe ",
          "image": bunnyAvatar
        },
        {
          "id": 'member-7',
          "name": "Mark",
          "image": monkeyAdidasAvatar
        },
      ],
      "tags": [
        {
          "title": "Room1",
          "url": "https://www.google.com.co"
        }
      ]
    },
  ]
}
