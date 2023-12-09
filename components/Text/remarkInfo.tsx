import { h } from "hastscript";
import { visit } from "unist-util-visit";

export function remarkInfo() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (
        node.type === "containerDirective" ||
        node.type === "leafDirective" ||
        node.type === "textDirective"
      ) {
        if (node.name !== "info") return;

        const data = node.data || (node.data = {});

        const outerDivProperties = {
          className: [
            "bg-[#cef]",
            "rounded-[16px]",
            "px-[16px]",
            "py-[20px]",
            "flex",
          ],
        };

        const spanProperties = {
          className: [
            "rounded-[50%]",
            "bg-[#3Ea8ff]",
            "h-[22px]",
            "w-[22px]",
            "text-center",
            "inline-block",
            "mr-[12px]",
            "relative",
          ],
        };

        if (
          node.type === "containerDirective" ||
          node.type === "leafDirective"
        ) {
          data.hName = "div";
          data.hProperties = h("div", outerDivProperties).properties;

          node.children = [
            {
              type: "html",
              value:
                '<span class="' +
                spanProperties.className.join(" ") +
                '"><p class="text-[#fff] font-bold absolute left-[8.5px] top-[-1px]" >i</p></span>',
            },
            {
              type: "div",
              data: {
                hName: "div",
                hProperties: { className: ["flex-1"] },
              },
              children: [
                {
                  type: "div",
                  data: {
                    hName: "div",
                    hProperties: { className: ["flex-col"] },
                  },
                  children: node.children,
                },
              ],
            },
          ];
        } else if (node.type === "textDirective") {
          data.hName = "span";
          data.hProperties = h("span", spanProperties).properties;
        }
      }
    });
  };
}
