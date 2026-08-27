<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6M8 6v12M8 6a2 2 0 1 0-4 0v12m2 2a2 2 0 0 1-2-2m2 2a2 2 0 0 0 2-2m-4 0a2 2 0 0 1 4 0\"/>";
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
