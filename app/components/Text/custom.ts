import type { Node } from "unist";
import { visit } from "unist-util-visit";

export const Check = () => {
  return (tree: Node) => {
    visit(tree, "element", (node: any) => {
      if (node.tagName === "p" && node.children[0].type === "text") {
        if (node.children[0].value.startsWith("[check]")) {
          node.tagName = "div";
          node.properties = {
            className: [
              "bg-[#E3F6DF]",
              "rounded-[16px]",
              "px-[16px]",
              "py-[20px]",
              "flex",
            ],
          };
          node.children[0].value = node.children[0].value.replace(
            /\[\/?check\]/g,
            "",
          );
          const value = node.children[0].value;
          node.children[0].value = "";

          const innerDiv = {
            type: "element",
            tagName: "span",
            properties: {
              className: [
                "rounded-[50%]",
                "bg-[#55C500]",
                "h-[22px]",
                "w-[22px]",
                "text-center",
                "inline-block",
                "mr-[12px]",
              ],
            },
            children: [
              {
                type: "element",
                tagName: "p",
                properties: {
                  className: ["text-[#fff]", "font-bold"],
                },
                children: [{ type: "text", value: "✓" }],
              },
            ],
          };

          const innerText = {
            type: "element",
            tagName: "p",
            properties: {
              className: ["flex-1"],
            },
            children: [{ type: "text", value: value }],
          };
          node.children.push(innerDiv);
          node.children.push(innerText);
        }
      }
    });
  };
};

export const Comment = () => {
  return (tree: Node) => {
    visit(tree, "element", (node: any) => {
      if (node.tagName === "p" && node.children[0].type === "text") {
        if (node.children[0].value.startsWith("[comment]")) {
          node.tagName = "div";
          node.properties = {
            className: [
              "bg-[#cef]",
              "rounded-[16px]",
              "px-[16px]",
              "py-[20px]",
              "flex",
            ],
          };
          node.children[0].value = node.children[0].value.replace(
            /\[\/?comment\]/g,
            "",
          );
          const value = node.children[0].value;
          node.children[0].value = "";

          const innerDiv = {
            type: "element",
            tagName: "span",
            properties: {
              className: [
                "rounded-[50%]",
                "bg-[#3Ea8ff]",
                "h-[22px]",
                "w-[22px]",
                "text-center",
                "inline-block",
                "mr-[12px]",
              ],
            },
            children: [
              {
                type: "element",
                tagName: "p",
                properties: {
                  className: ["text-[#fff]", "font-bold"],
                },
                children: [{ type: "text", value: "i" }],
              },
            ],
          };

          const innerText = {
            type: "element",
            tagName: "p",
            properties: {
              className: ["flex-1"],
            },
            children: [{ type: "text", value: value }],
          };
          node.children.push(innerDiv);
          node.children.push(innerText);
        }
      }
    });
  };
};

export const Alert = () => {
  return (tree: Node) => {
    visit(tree, "element", (node: any) => {
      if (node.tagName === "p" && node.children[0].type === "text") {
        if (node.children[0].value.startsWith("[Alert]")) {
          node.tagName = "div";
          node.properties = {
            className: [
              "bg-[#fdb]",
              "rounded-[16px]",
              "px-[16px]",
              "py-[20px]",
              "flex",
            ],
          };
          node.children[0].value = node.children[0].value.replace(
            /\[\/?Alert\]/g,
            "",
          );
          const value = node.children[0].value;
          node.children[0].value = "";

          const innerDiv = {
            type: "element",
            tagName: "span",
            properties: {
              className: [
                "rounded-[50%]",
                "bg-[#ff7670]",
                "h-[22px]",
                "w-[22px]",
                "text-center",
                "inline-block",
                "mr-[12px]",
              ],
            },
            children: [
              {
                type: "element",
                tagName: "p",
                properties: {
                  className: ["text-[#fff]", "font-bold"],
                },
                children: [{ type: "text", value: "!" }],
              },
            ],
          };

          const innerText = {
            type: "element",
            tagName: "p",
            properties: {
              className: ["flex-1"],
            },
            children: [{ type: "text", value: value }],
          };
          node.children.push(innerDiv);
          node.children.push(innerText);
        }
      }
    });
  };
};
