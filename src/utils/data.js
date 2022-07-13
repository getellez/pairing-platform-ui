import monkeyAdidasAvatar from '../pages/Dashboard/img/monkey_adidas_avatar.jpeg'
import monkeyAvatar from '../pages/Dashboard/img/monkey_avatar.jpeg'
import monkeyOldAvatar from '../pages/Dashboard/img/monkey_old_avatar.jpeg'
import bunnyAvatar from '../pages/Dashboard/img/bunny_avatar.jpeg'

export const initialData = {
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
      "id": "dashboard-1#task-1",
      "dashboardId": "1",
      "title": "Update documentation",
      "assignedMembers": [
        {
          "id": 'member-4',
          "name": "Jane Doe",
          "image": "http://localhost:3000/src/pages/Dashboard/img/bunny_avatar.jpeg"
        },
        {
          "id": 'member-5',
          "name": "Alice",
          "image": "http://localhost:3000/src/pages/Dashboard/img/bunny_avatar.jpeg"
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
      "id": "dashboard-1#task-2",
      "dashboardId": "1",
      "title": "Setup husky",
      "assignedMembers": [
        {
          "id": 'member-6',
          "name": "Karen Doe ",
          "image": "http://localhost:3000/src/pages/Dashboard/img/bunny_avatar.jpeg"
        },
        {
          "id": 'member-7',
          "name": "Mark",
          "image": "http://localhost:3000/src/pages/Dashboard/img/monkey_adidas_avatar.jpeg"
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
