import { h } from "hastscript";
import { visit } from "unist-util-visit";

export function remarkCheck() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (
        node.type === "containerDirective" ||
        node.type === "leafDirective" ||
        node.type === "textDirective"
      ) {
        if (node.name !== "check") return;

        const data = node.data || (node.data = {});

        const outerDivProperties = {
          className: [
            "bg-[#E3F6DF]",
            "rounded-[16px]",
            "px-[16px]",
            "py-[20px]",
            "flex",
          ],
        };

        const spanProperties = {
          className: [
            "rounded-[50%]",
            "bg-[#55C500]",
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
                '"><p class="text-[#fff] font-bold left-[8px] top-[-1px]">✓</p></span>',
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
