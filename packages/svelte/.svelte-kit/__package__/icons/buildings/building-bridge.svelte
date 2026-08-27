<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 5v14M18 5v14M2 15h20M3 8a7.5 7.5 0 0 0 3-2 6.5 6.5 0 0 0 6 4m0 0a6.5 6.5 0 0 0 6-4 7.5 7.5 0 0 0 3 2m-9 2v5\"/>";
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
