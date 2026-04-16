// import defaultMdxComponents from 'fumadocs-ui/mdx';
// import type { MDXComponents } from 'mdx/types';

// export function getMDXComponents(components?: MDXComponents) {
//   return {
//     ...defaultMdxComponents,
//     ...components,
//   } satisfies MDXComponents;
// }

// export const useMDXComponents = getMDXComponents;

// declare global {
//   type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
// }


import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,

    // custom components here
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,

    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;