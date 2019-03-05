
function waterInfo() {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.setAttribute('width',160);
    canvas.setAttribute('height', 80);
    var ctx = canvas.getContext("2d");
    canvas.style.display = 'none';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '12px sans-serif';
    ctx.fillStyle =  'rgba(205, 205, 205, 0.5)';
    ctx.translate(80, 40);
    ctx.rotate(-30 * (Math.PI / 180));
    ctx.fillText('开发环境',0, 0);
    return new Promise((resolve) => {
      if (process.env.NODE_ENV === 'development') {
        canvas.toBlob((blob) => {
          resolve(URL.createObjectURL(blob));
        });
      } else {
        resolve(canvas.toDataURL());
      }
    });
}

export default function bootstrap() {
  return waterInfo().then((result) => {
    window['@waterInfo'] = result;
  });
}