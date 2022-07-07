import monkeyAdidasAvatar from '../pages/Dashboard/img/monkey_adidas_avatar.jpeg'
import monkeyAvatar from '../pages/Dashboard/img/monkey_avatar.jpeg'
import monkeyOldAvatar from '../pages/Dashboard/img/monkey_old_avatar.jpeg'

export const initialData = {
  "id": "1",
  "title": "any title",
  "members": [
    {
      "id": '1',
      "name": "Germán Tellez",
      "image": monkeyAdidasAvatar
    },
    {
      "id": '2',
      "name": "Alejo",
      "image": monkeyAvatar
    },
    {
      "id": '3',
      "name": "Jane Doe",
      "image": monkeyOldAvatar
    }
  ],
  "tasks": [
    {
      "id": "1",
      "dashboardId": "1",
      "title": "some random task name",
      "membersAssigned": [
        // {
        //   "id": '1',
        //   "name": "Germán Tellez",
        //   "image": monkeyAdidasAvatar
        // }
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
