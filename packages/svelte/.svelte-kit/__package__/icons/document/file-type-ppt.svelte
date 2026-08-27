<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14 3v4a1 1 0 0 0 1 1h4m-5-5H7a2 2 0 0 0-2 2v7m9-9 5 5m0 0v4M5 18h1.5a1.5 1.5 0 1 0 0-3H5v6m6-3h1.5a1.5 1.5 0 1 0 0-3H11v6m5.5-6h3M18 15v6\"/>";
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
