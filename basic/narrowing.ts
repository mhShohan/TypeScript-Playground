// interface Shape {
//   kind: 'circle' | 'square' | 'rect';
//   radius?: number;
//   sideLength?: number;
//   width?: number;
//   length?: number;
// }

interface Circle {
  kind: 'circle';
  radius: number;
}
interface Square {
  kind: 'square';
  sideLength: number;
}

interface Rect {
  kind: 'rect';
  width: number;
  length: number;
}

type Shape = Circle | Square | Rect;

interface AreaOfShape {
  type: 'circle' | 'square' | 'rect';
  area: number;
}

function createShape(shape: Shape): AreaOfShape {
  if (shape.kind === 'circle') {
    return {
      type: 'circle',
      area: Math.PI * shape.radius ** 2,
    };
  }

  if (shape.kind === 'square') {
    return {
      type: 'square',
      area: shape.sideLength * shape.sideLength,
    };
  }

  if (shape.kind === 'rect') {
    return {
      type: 'rect',
      area: shape.width * shape.length,
    };
  }

  const _default: never = shape;
  return _default;
}

// another pattern to write the upper code
function createAnotherShape(shape: Shape): AreaOfShape {
  switch (shape.kind) {
    case 'circle':
      return {
        type: 'circle',
        area: Math.PI * shape.radius ** 2,
      };

    case 'square':
      return {
        type: 'square',
        area: shape.sideLength ** 2,
      };

    case 'rect':
      return {
        type: 'rect',
        area: shape.width * shape.length,
      };

    default:
      const _default: never = shape;
      return _default;
  }
}

console.log(createShape({ kind: 'circle', radius: 5 }));
console.log(createShape({ kind: 'square', sideLength: 5 }));
console.log(createShape({ kind: 'rect', width: 5, length: 2 }));
