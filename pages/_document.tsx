import type { DocumentContext } from "next/document";

import Document from "next/document";
import { ServerStyles, createStylesServer } from "@mantine/next";
import { rtlCache } from "@/lib/rtl-cache";

const stylesServer = createStylesServer(rtlCache);

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <ServerStyles html={initialProps.html} server={stylesServer} />
        </>
      ),
    };
  }
}
