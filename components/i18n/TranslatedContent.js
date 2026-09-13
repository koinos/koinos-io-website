import { Children, cloneElement, isValidElement } from "react";
import { useRouter } from "next/router";
import { SPANISH_CONTENT } from "@/i18n/content.es";

function translateString(value) {
  const match = value.match(/^(\s*)([\s\S]*?)(\s*)$/);
  const [, before, content, after] = match;
  const normalizedContent = content.replace(/\s+/g, " ");
  return `${before}${SPANISH_CONTENT[content] || SPANISH_CONTENT[normalizedContent] || content}${after}`;
}

function translateNode(node) {
  if (typeof node === "string") return translateString(node);
  if (Array.isArray(node)) return node.map(translateNode);
  if (!isValidElement(node)) return node;

  const translatedProps = ["aria-label", "alt", "title", "placeholder"].reduce(
    (props, name) => {
      if (typeof node.props[name] === "string") {
        props[name] = translateString(node.props[name]);
      }
      return props;
    },
    {}
  );

  if (!node.props.children) return cloneElement(node, translatedProps);

  const translatedChildren = Array.isArray(node.props.children)
    ? Children.map(node.props.children, translateNode)
    : translateNode(node.props.children);

  return cloneElement(node, translatedProps, translatedChildren);
}

export default function TranslatedContent({ children }) {
  const router = useRouter();
  return router.locale === "es" ? translateNode(children) : children;
}
