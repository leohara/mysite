import h from "hastscript";
import { visit } from "unist-util-visit";

// This plugin is modified to create a specific HTML structure when `::info` is used.
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

        // Define custom properties for the outer div
        const outerDivProperties = {
          className: [
            "bg-[#cef]",
            "rounded-[16px]",
            "px-[16px]",
            "py-[20px]",
            "flex",
          ],
        };

        // Define custom properties for the inner span
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

        // Apply properties based on the directive type
        if (
          node.type === "containerDirective" ||
          node.type === "leafDirective"
        ) {
          data.hName = "div";
          data.hProperties = h("div", outerDivProperties).properties;

          // Insert custom span and an inner div for content
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
                  children: node.children, // Insert original content here
                },
              ],
            },
          ];
        } else if (node.type === "textDirective") {
          // For text directives, only the span is used
          data.hName = "span";
          data.hProperties = h("span", spanProperties).properties;
        }
      }
    });
  };
}
