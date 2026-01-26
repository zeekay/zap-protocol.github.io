// @ts-nocheck
import * as __fd_glob_10 from "../content/docs/why-zap.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/transports.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/quick-start.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/protocol.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/gateway.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/consensus.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/benchmarks.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/architecture.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/api.mdx?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from '@hanzo/docs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("@hanzo/docs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, }, {"api.mdx": __fd_glob_1, "architecture.mdx": __fd_glob_2, "benchmarks.mdx": __fd_glob_3, "consensus.mdx": __fd_glob_4, "gateway.mdx": __fd_glob_5, "index.mdx": __fd_glob_6, "protocol.mdx": __fd_glob_7, "quick-start.mdx": __fd_glob_8, "transports.mdx": __fd_glob_9, "why-zap.mdx": __fd_glob_10, });