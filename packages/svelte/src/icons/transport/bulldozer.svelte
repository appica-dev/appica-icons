<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 19a2 2 0 1 1 0-4m0 4a2 2 0 1 0 0-4m0 4h10M4 15h10m0 4a2 2 0 0 1 0-4m0 4a2 2 0 0 0 2-2m0 0a2 2 0 0 0-2-2m2 2h3m-5-2V9a3 3 0 0 0-3-3H9v5m10 2v4m0 0a2 2 0 0 0 2 2h1M5 15v-3a1 1 0 0 1 1-1h8\"/>";
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
