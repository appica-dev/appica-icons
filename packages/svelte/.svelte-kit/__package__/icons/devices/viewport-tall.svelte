<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 10V3m0 0 3 3m-3-3L9 6m3 8v7m0 0 3-3m-3 3-3-3m9-15h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-1M6 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h1\"/>";
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
