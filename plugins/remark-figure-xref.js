import {visit} from 'unist-util-visit';
import {toString} from 'mdast-util-to-string';

export default function remarkFigureXref() {
  return (tree) => {
    const figureMap = new Map();
    let figureCounter = 0;

    visit(tree, 'html', (node) => {
      const match = node.value?.match(/<figure[^>]*id="(fig:[^"]+)"/);
      if (!match) return;

      const rawId = match[1];
      if (figureMap.has(rawId)) return;

      figureCounter += 1;
      figureMap.set(rawId, figureCounter);

      node.value = node.value
        .replace(`id="${rawId}"`, `id="figure-${figureCounter}"`)
        .replace(
          /<figcaption[^>]*>.*?<\/figcaption>/s,
          `<figcaption>Рисунок ${figureCounter}. ${toString(node)}</figcaption>`
        );
    });

    visit(tree, 'text', (node) => {
      node.value = node.value.replace(/\[fig:([a-zA-Z0-9-_:]+)\]/g, (match, figId) => {
        const num = figureMap.get(`fig:${figId}`) ?? figureMap.get(figId);
        if (num != null) return `[Рис. ${num}](#figure-${num})`;
        return match;
      });
    });
  };
}