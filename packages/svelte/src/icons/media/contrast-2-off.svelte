<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 18h2a6 6 0 0 0 6-6m-8 6a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586M4 18V6c0-.547.22-1.043.576-1.405m8.302 4.279A6 6 0 0 1 18 6h2m0 0a2 2 0 0 0-2-2H8m12 2v10M3 3l18 18\"/>";
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
