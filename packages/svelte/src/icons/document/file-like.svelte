<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 20v-3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1m0 0a1 1 0 0 0 1 1h3.756a1 1 0 0 0 .958-.713l1.2-3c.09-.303.133-.63-.056-.884C12.67 16.149 12.316 16 12 16h-2v-2.467a1.1 1.1 0 0 0-2.015-.61L6 16zm8-17v4a1 1 0 0 0 1 1h4m-5-5H7a2 2 0 0 0-2 2v7.1M14 3l5 5m0 0v11a2 2 0 0 1-2 2h-2.3\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
