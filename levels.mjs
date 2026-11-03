const all=[
  {
    "id": 1,
    "title": "첫 번째 빛",
    "lesson": "한 번 굴리면 옆면이 윗면이 돼요.",
    "map": [
      "...",
      "..."
    ],
    "start": [
      0,
      0
    ],
    "targets": [
      {
        "x": 0,
        "y": 1,
        "face": "E"
      }
    ],
    "budget": 10,
    "optimal": 5,
    "orderGap": null
  },
  {
    "id": 2,
    "title": "돌아오는 면",
    "lesson": "마주 보는 두 면은 동시에 위로 오지 않아요.",
    "map": [
      "...",
      "...",
      "..."
    ],
    "start": [
      0,
      0
    ],
    "targets": [
      {
        "x": 2,
        "y": 2,
        "face": "F"
      }
    ],
    "budget": 9,
    "optimal": 4,
    "orderGap": null
  },
  {
    "id": 3,
    "title": "모서리를 돌아서",
    "lesson": "길을 꺾으면 면의 방향도 달라져요.",
    "map": [
      "....",
      ".##.",
      "...."
    ],
    "start": [
      0,
      0
    ],
    "targets": [
      {
        "x": 3,
        "y": 0,
        "face": "C"
      }
    ],
    "budget": 8,
    "optimal": 3,
    "orderGap": null
  },
  {
    "id": 4,
    "title": "가까워도 다른 면",
    "lesson": "가장 짧은 길이 항상 맞는 길은 아니에요.",
    "map": [
      "...",
      "...",
      "..."
    ],
    "start": [
      0,
      0
    ],
    "targets": [
      {
        "x": 1,
        "y": 0,
        "face": "D"
      }
    ],
    "budget": 11,
    "optimal": 7,
    "orderGap": null
  },
  {
    "id": 5,
    "title": "네모 한 바퀴",
    "lesson": "같은 칸으로 돌아와도 윗면이 달라질 수 있어요.",
    "map": [
      "....",
      ".#..",
      "...."
    ],
    "start": [
      0,
      0
    ],
    "targets": [
      {
        "x": 3,
        "y": 2,
        "face": "B"
      }
    ],
    "budget": 11,
    "optimal": 7,
    "orderGap": null
  },
  {
    "id": 6,
    "title": "긴 길의 비밀",
    "lesson": "막힌 곳을 돌아올 때 어느 면이 위로 올까요?",
    "map": [
      ".....",
      ".#...",
      "....."
    ],
    "start": [
      0,
      0
    ],
    "targets": [
      {
        "x": 4,
        "y": 0,
        "face": "C"
      }
    ],
    "budget": 10,
    "optimal": 6,
    "orderGap": null
  },
  {
    "id": 7,
    "title": "두 불빛 사이",
    "lesson": "어느 불빛부터 켜면 이동을 아낄까요?",
    "map": [
      "....",
      "....",
      "...."
    ],
    "start": [
      0,
      0
    ],
    "targets": [
      {
        "x": 3,
        "y": 0,
        "face": "A"
      },
      {
        "x": 3,
        "y": 2,
        "face": "A"
      }
    ],
    "budget": 13,
    "optimal": 9,
    "orderGap": 0
  },
  {
    "id": 8,
    "title": "먼 곳부터 갈까",
    "lesson": "가까운 불빛부터 가는 것이 유리할까요?",
    "map": [
      ".....",
      ".#...",
      "....."
    ],
    "start": [
      0,
      0
    ],
    "targets": [
      {
        "x": 4,
        "y": 1,
        "face": "E"
      },
      {
        "x": 3,
        "y": 2,
        "face": "C"
      }
    ],
    "budget": 13,
    "optimal": 11,
    "orderGap": 4
  },
  {
    "id": 9,
    "title": "같은 칸, 다른 모습",
    "lesson": "위치와 면의 방향을 함께 생각해요.",
    "map": [
      ".....",
      "..#..",
      ".....",
      "....."
    ],
    "start": [
      0,
      0
    ],
    "targets": [
      {
        "x": 3,
        "y": 2,
        "face": "C"
      },
      {
        "x": 0,
        "y": 3,
        "face": "B"
      }
    ],
    "budget": 11,
    "optimal": 9,
    "orderGap": 2
  },
  {
    "id": 10,
    "title": "세 별의 순서",
    "lesson": "세 불빛을 켤 순서를 정해 보세요.",
    "map": [
      ".....",
      ".#...",
      "...#.",
      "....."
    ],
    "start": [
      0,
      0
    ],
    "targets": [
      {
        "x": 4,
        "y": 3,
        "face": "F"
      },
      {
        "x": 3,
        "y": 3,
        "face": "C"
      },
      {
        "x": 2,
        "y": 2,
        "face": "C"
      }
    ],
    "budget": 19,
    "optimal": 17,
    "orderGap": 6
  },
  {
    "id": 11,
    "title": "남겨 둔 한 걸음",
    "lesson": "남은 이동으로 다음 불빛까지 갈 수 있을까요?",
    "map": [
      "......",
      ".#..#.",
      "......",
      "..##..",
      "......"
    ],
    "start": [
      0,
      0
    ],
    "targets": [
      {
        "x": 5,
        "y": 2,
        "face": "D"
      },
      {
        "x": 3,
        "y": 4,
        "face": "C"
      },
      {
        "x": 4,
        "y": 3,
        "face": "A"
      }
    ],
    "budget": 15,
    "optimal": 13,
    "orderGap": 8
  },
  {
    "id": 12,
    "title": "별이 깨어나는 밤",
    "lesson": "전개도, 우회 경로, 방문 순서를 함께 써 보세요.",
    "map": [
      "......",
      "..##..",
      "......",
      ".#..#.",
      "......"
    ],
    "start": [
      0,
      0
    ],
    "targets": [
      {
        "x": 0,
        "y": 4,
        "face": "B"
      },
      {
        "x": 1,
        "y": 4,
        "face": "E"
      },
      {
        "x": 2,
        "y": 0,
        "face": "B"
      }
    ],
    "budget": 20,
    "optimal": 18,
    "orderGap": 3
  }
];
export const practice={id:0,title:"빛을 켜는 첫걸음",lesson:"오른쪽으로 한 번 굴려 E면을 위로 올려요.",map:[".."],start:[0,0],targets:[{x:1,y:0,face:"E"}],budget:5};

all[0]={id:1,title:"첫 번째 빛",lesson:"같은 방향으로 두 번 굴리면 어떤 면이 위로 올까요?",map:["...","..."],start:[0,0],targets:[{x:2,y:0,face:"F"}],budget:7,optimal:2,orderGap:null};export const levels=all;
