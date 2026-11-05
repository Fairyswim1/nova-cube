import {colors} from './diagrams.mjs';
// CSS world: x=right, y=down, z=toward player. These rotations match engine.roll.
export const rollTransforms={up:'rotateX(90deg)',down:'rotateX(-90deg)',right:'rotateZ(90deg)',left:'rotateZ(-90deg)'};
export const faceSlots={top:0,bottom:1,back:2,front:3,right:4,left:5};
export function solidCube(o){return `<div class="cube-holder" role="img" aria-label="윗면 ${o[0]}, 앞면 ${o[3]}, 오른쪽 면 ${o[4]}"><div class="cube-camera"><div class="cube-solid">${Object.entries(faceSlots).map(([side,i])=>`<div class="cube-face face-${side}" style="--face-color:${colors[o[i]]}"><span>${o[i]}</span></div>`).join('')}</div></div></div>`;}
export function goalCopy(l,s){const remaining=l.targets.filter((_,i)=>!(s.lit&(1<<i)));if(!remaining.length)return '모든 목표 칸에 불을 켰어요!';if(remaining.length===1)return `${remaining[0].face}칸에 도착할 때, 윗면도 ${remaining[0].face}로!`;return `${remaining.map(t=>t.face).join(' · ')} 목표 칸에서 같은 글자를 윗면으로!`;}
export function moveFeedback(l,before,after){if(after===before)return '그쪽으로는 갈 수 없어요. 테두리가 밝은 이웃 칸을 눌러 보세요.';const t=l.targets.find((t,i)=>t.x===after.x&&t.y===after.y&&!(after.lit&(1<<i)));if(t)return `${t.face}칸에 도착했지만 윗면은 ${after.o[0]}예요. 다른 길로 돌아와 윗면을 ${t.face}로 맞춰 보세요.`;return `윗면 ${before.o[0]} → ${after.o[0]} · 한 칸 굴렸어요.`;}
