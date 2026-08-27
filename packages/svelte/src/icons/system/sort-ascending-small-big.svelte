<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m4 15 3 3m0 0 3-3m-3 3V6m7-.333c0-.369.298-.667.667-.667h2.666c.369 0 .667.298.667.667v2.666a.667.667 0 0 1-.667.667h-2.666A.667.667 0 0 1 14 8.333zm0 7.5c0-.645.522-1.167 1.167-1.167h4.666c.645 0 1.167.522 1.167 1.167v4.666c0 .645-.522 1.167-1.167 1.167h-4.666A1.17 1.17 0 0 1 14 17.833z\"/>";
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
