import { h } from "hastscript";
import { visit } from "unist-util-visit";

export function remarkTextColor() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (node.type === "textDirective" && node.name === "color") {
        const data = node.data || (node.data = {});
        const colorValue = node.attributes.color;

        data.hName = "span";
        data.hProperties = h("span", {
          style: `color: ${colorValue}`,
        }).properties;
      }
    });
  };
}
